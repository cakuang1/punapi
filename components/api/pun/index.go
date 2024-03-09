package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/jackc/pgx/v5"
	"net/http"
	"os"
)

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

func Index(w http.ResponseWriter, r *http.Request) {
	// Parse query parameters
	id := r.URL.Query().Get("id")

	// Define the SQL query and parameters
	var query string
	var args []interface{}
	if id != "" {
		query = "SELECT id, Pun FROM \"Puns\" WHERE id = $1"
		args = append(args, id)
	} else {
		query = "SELECT id, Pun FROM \"Puns\" ORDER BY random() LIMIT 1"
	}

	// Execute the SQL query
	var row Row
	err := db.QueryRow(context.Background(), query, args...).Scan(&row.ID, &row.Pun)
	if err != nil {
		fmt.Println("Failed to retrieve row:", err)
		http.Error(w, "Failed to retrieve row", http.StatusInternalServerError)
		return
	}

	// Marshal the row to JSON
	jsonResult, err := json.Marshal(row)
	if err != nil {
		fmt.Println("Failed to marshal row to JSON:", err)
		http.Error(w, "Failed to marshal row to JSON", http.StatusInternalServerError)
		return
	}

	// Write JSON response
	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonResult)
}
