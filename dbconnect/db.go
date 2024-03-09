// db/db.go

package dbconnect

import (
    "context"
    "github.com/jackc/pgx/v5"
    "os"
)

var DB *pgx.Conn

func init() {
    var err error
    connString := os.Getenv("PUNS_URL")
    if connString == "" {
        panic("Environment variable PUNS_URL is not set")
    }
    DB, err = pgx.Connect(context.Background(), connString)
    if err != nil {
        panic("Unable to connect to the database: " + err.Error())
    }
}
