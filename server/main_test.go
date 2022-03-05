package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"
	models "unigenie/api/models"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func TestGetUniversities(t *testing.T) {
	gin.SetMode(gin.TestMode)

	r := gin.Default()
	r.GET("/getUniversities", models.GetUniversities)

	req, err := http.NewRequest(http.MethodGet, "/getUniversities", nil)

	if err != nil {
		t.Fatalf("Couldn't create a request: %v\n", err)
	}

	w := httptest.NewRecorder()

	r.ServeHTTP(w, req)
	fmt.Println(w.Body)

	if w.Code == http.StatusOK {
		t.Logf("Expected to get status %d is same ast %d\n", http.StatusOK, w.Code)
	} else {
		t.Fatalf("Expected to get status %d but instead got %d\n", http.StatusOK, w.Code)
	}
}

func TestGetUsers(t *testing.T) {
	gin.SetMode(gin.TestMode)

	r := gin.Default()
	r.GET("/getUsers", models.GetUniversities)

	req, err := http.NewRequest(http.MethodGet, "/getUsers", nil)

	if err != nil {
		t.Fatalf("Couldn't create a request: %v\n", err)
	}

	w := httptest.NewRecorder()

	r.ServeHTTP(w, req)
	fmt.Println(w.Body)

	if w.Code == http.StatusOK {
		t.Logf("Expected to get status %d is same ast %d\n", http.StatusOK, w.Code)
	} else {
		t.Fatalf("Expected to get status %d but instead got %d\n", http.StatusOK, w.Code)
	}
}

func TestAddUniversity(t *testing.T) {
	gin.SetMode(gin.TestMode)

	_, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	r := gin.Default()

	r.POST("/addUniversity", models.PostUniversities)

	university := &models.University{
		Name:    "University of Florida",
		Website: "www.ufl.edu",
		Address: "4000 SW 37th Blvd",
		City:    "Gainesville",
		State:   "FL",
		Zip:     32608,
		Country: "USA",
	}

	body, _ := json.Marshal(university)

	req, err := http.NewRequest(http.MethodPost, "/addUniversity", bytes.NewBuffer(body))

	if err != nil {
		t.Fatalf("Couldn't create a request: %v\n", err)
	}

	w := httptest.NewRecorder()

	r.ServeHTTP(w, req)

	if w.Code == http.StatusOK {
		t.Logf("Expected to get status %d is same ast %d\n", http.StatusOK, w.Code)
	} else {
		t.Fatalf("Expected to get status %d but instead got %d\n", http.StatusOK, w.Code)
	}
}

func TestAddUsers(t *testing.T) {
	gin.SetMode(gin.TestMode)

	_, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	r := gin.Default()

	r.POST("/signup", models.PostUsers)

	user := &models.User{
		FirstName: "Attempt",
		LastName:  "Two",
		Email:     "at@2.com",
		Password:  "2at@2022",
	}

	body, _ := json.Marshal(user)

	req, err := http.NewRequest(http.MethodPost, "/signup", bytes.NewBuffer(body))

	if err != nil {
		t.Fatalf("Couldn't create a request: %v\n", err)
	}

	w := httptest.NewRecorder()

	r.ServeHTTP(w, req)

	if w.Code == http.StatusOK {
		t.Logf("Expected to get status %d is same ast %d\n", http.StatusOK, w.Code)
	} else {
		t.Fatalf("Expected to get status %d but instead got %d\n", http.StatusOK, w.Code)
	}
}
