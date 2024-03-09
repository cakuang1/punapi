package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"puns/dbconnect"
)

func Search(w http.ResponseWriter, r *http.Request) {
	// Parse query parameters
	queryName := r.URL.Query().Get("query")

	// Initialize rows to hold the retrieved puns
	var rows []dbconnect.Row
	// Construct the SQL query based on the provided query name
	fmt.Println(queryName)
	query := fmt.Sprintf("SELECT id, Pun FROM \"Puns\" WHERE \"pun\" LIKE '%%%s%%' LIMIT 10", queryName)

	// Execute the SQL query
	rowsResult, err := dbconnect.DB.Query(context.Background(), query)
	if err != nil {
		fmt.Println("Failed to retrieve rows:", err)
		http.Error(w, "Failed to retrieve rows", http.StatusInternalServerError)
		return
	}
	defer rowsResult.Close()

	// Process the rows
	for rowsResult.Next() {
		var row dbconnect.Row
		if err := rowsResult.Scan(&row.ID, &row.Pun); err != nil {
			fmt.Println("Failed to scan row:", err)
			continue
		}
		rows = append(rows, row)
	}
	if err := rowsResult.Err(); err != nil {
		fmt.Println("Error iterating over rows:", err)
		http.Error(w, "Error iterating over rows", http.StatusInternalServerError)
		return
	}

	// Marshal the retrieved rows to JSON
	jsonResult, err := json.Marshal(rows)
	if err != nil {
		fmt.Println("Failed to marshal rows to JSON:", err)
		http.Error(w, "Failed to marshal rows to JSON", http.StatusInternalServerError)
		return
	}

	// Write the JSON response
	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonResult)
}
