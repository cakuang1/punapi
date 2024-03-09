package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"puns/dbconnect"
)

func Index(w http.ResponseWriter, r *http.Request) {
	// Parse query parameters
	id := r.URL.Query().Get("id")
	// Initialize row to hold the retrieved pun
	var row dbconnect.Row
	// Construct the SQL query based on the presence of the ID parameter
	var query string
	var args []interface{}
	if id != "" {
		query = "SELECT id, Pun FROM \"Puns\" WHERE id = $1"
		args = append(args, id)
	} else {
		query = "SELECT id, Pun FROM \"Puns\" ORDER BY random() LIMIT 1"
	}

	// Execute the SQL query
	err := dbconnect.DB.QueryRow(context.Background(), query, args...).Scan(&row.ID, &row.Pun)
	if err != nil {
		fmt.Println("Failed to retrieve row:", err)
		http.Error(w, "Failed to retrieve row", http.StatusInternalServerError)
		return
	}
	// Marshal the retrieved row to JSON
	jsonResult, err := json.Marshal(row)
	if err != nil {
		fmt.Println("Failed to marshal row to JSON:", err)
		http.Error(w, "Failed to marshal row to JSON", http.StatusInternalServerError)
		return
	}

	// Write the JSON response
	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonResult)
}
