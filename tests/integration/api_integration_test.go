package main_test

import (
	"net/http"
	"testing"
)

func TestRandomPun(t *testing.T) {
	// Make a GET request to your API endpoint
	resp, err := http.Get("https://punapi.rest/api/pun")
	if err != nil {
		t.Fatalf("failed to make GET request: %v", err)
	}
	defer resp.Body.Close()

	// Check if the status code is 200 (OK)
	if resp.StatusCode != http.StatusOK {
		t.Errorf("expected status code 200, got %d", resp.StatusCode)
	}
}

func TestPunId(t *testing.T) {
	// Make a GET request to your API endpoint
	resp, err := http.Get("https://punapi.rest/api/pun?id=1")
	if err != nil {
		t.Fatalf("failed to make GET request: %v", err)
	}
	defer resp.Body.Close()

	// Check if the status code is 200 (OK)
	if resp.StatusCode != http.StatusOK {
		t.Errorf("expected status code 200, got %d", resp.StatusCode)
	}
}

func TestSearch(t *testing.T) {
	// Make a GET request to your API endpoint
	resp, err := http.Get("https://punapi.rest/api/pun/search?query=What")
	if err != nil {
		t.Fatalf("failed to make GET request: %v", err)
	}
	defer resp.Body.Close()

	// Check if the status code is 200 (OK)
	if resp.StatusCode != http.StatusOK {
		t.Errorf("expected status code 200, got %d", resp.StatusCode)
	}
}

func Page(t *testing.T) {
	// Make a GET request to your API endpoint
	resp, err := http.Get("https://punapi.rest/api/pun/pagination?page=2")
	if err != nil {
		t.Fatalf("failed to make GET request: %v", err)
	}
	defer resp.Body.Close()

	// Check if the status code is 200 (OK)
	if resp.StatusCode != http.StatusOK {
		t.Errorf("expected status code 200, got %d", resp.StatusCode)
	}
}
