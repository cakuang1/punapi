package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/jackc/pgx/v5"
	"net/http"
	"os"
)

var db *pgx.Conn

type Row struct {
	ID  int    `json:"id"`
	Pun string `json:"pun"`
}

func init() {
	var err error
	connString := os.Getenv("PUNS_URL")
	if connString == "" {
		fmt.Println("Environment variable POSTGRES_CONNECTION_STRING is not set")
		panic("Connection string not found")
	}

	db, err = pgx.Connect(context.Background(), connString)
	if err != nil {
		fmt.Println("Unable to connect to the database:", err)
		panic(err)
	}
}

func Search(w http.ResponseWriter, r *http.Request) {
	// Extract query parameter
	queryParam := r.URL.Query().Get("query")

	// Execute SQL query based on the query parameter
	var query string
	if queryParam == "" {
		// If no query parameter is provided, select a random row
		query = "SELECT id, Pun FROM \"Puns\" ORDER BY random() LIMIT 10"
	} else {
		// If a query parameter is provided, use it to filter the results
		query = "SELECT id, Pun FROM \"Puns\" WHERE Pun ILIKE '%' || $1 || '%' LIMIT 10"
	}

	// Execute SQL query
	rows, err := db.Query(context.Background(), query, queryParam)
	if err != nil {
		fmt.Println("Failed to retrieve rows:", err)
		http.Error(w, "Failed to retrieve rows", http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	// Create a slice to hold the rows
	var rowsData []Row

	// Iterate over the result set and scan each row
	for rows.Next() {
		var row Row
		if err := rows.Scan(&row.ID, &row.Pun); err != nil {
			fmt.Println("Error scanning row:", err)
			continue // Skip to the next row if scanning fails
		}
		rowsData = append(rowsData, row)
	}

	// Check for any errors during iteration
	if err := rows.Err(); err != nil {
		fmt.Println("Error iterating over rows:", err)
		http.Error(w, "Error iterating over rows", http.StatusInternalServerError)
		return
	}

	// Marshal the slice of rows to JSON
	jsonResult, err := json.Marshal(rowsData)
	if err != nil {
		fmt.Println("Failed to marshal rows to JSON:", err)
		http.Error(w, "Failed to marshal rows to JSON", http.StatusInternalServerError)
		return
	}

	// Write JSON response
	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonResult)
}
