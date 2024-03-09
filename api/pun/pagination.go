package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"puns/dbconnect"
	"strconv"
)

func Pagi(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query().Get("page")
	var page int
	if query != "" {
		parsedPage, err := strconv.Atoi(query)
		if err != nil {
			http.Error(w, "Invalid page number", http.StatusBadRequest)
			return
		}
		page = parsedPage
	} else {
		page = 1
	}
	pageSize := 10
	skip := (page - 1) * pageSize
	connString := os.Getenv("PUNS_URL")
	if connString == "" {
		fmt.Println("Environment variable POSTGRES_URL is not set")
		http.Error(w, "Database connection string not found", http.StatusInternalServerError)
		return
	}

	rows, err := dbconnect.DB.Query(context.Background(), "SELECT id, Pun FROM \"Puns\" ORDER BY id OFFSET $1 LIMIT $2", skip, pageSize)
	if err != nil {
		fmt.Println("Failed to fetch puns:", err)
		http.Error(w, "Failed to fetch puns", http.StatusInternalServerError)
		return
	}
	defer rows.Close()
	var puns []dbconnect.Row
	for rows.Next() {
		var pun dbconnect.Row
		err := rows.Scan(&pun.ID, &pun.Pun)
		if err != nil {
			fmt.Println("Failed to scan row:", err)
			continue
		}
		puns = append(puns, pun)
	}
	if err := rows.Err(); err != nil {
		fmt.Println("Error while iterating over rows:", err)
		http.Error(w, "Error while iterating over rows", http.StatusInternalServerError)
		return
	}
	jsonResult, err := json.Marshal(puns)
	if err != nil {
		fmt.Println("Failed to marshal puns to JSON:", err)
		http.Error(w, "Failed to marshal puns to JSON", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonResult)
}
