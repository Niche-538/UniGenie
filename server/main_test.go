package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"
	api "unigenie/api"
	models "unigenie/models"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func TestGetUniversities(t *testing.T) {
	gin.SetMode(gin.TestMode)

	r := gin.Default()
	r.GET("/getUniversities", api.GetUniversities)

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
	r.GET("/getUsers", api.GetUniversities)

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

	r.POST("/addUniversity", api.PostUniversities)

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

	r.POST("/signup", api.PostUsers)

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

func TestAddStudentDetails(t *testing.T) {
	gin.SetMode(gin.TestMode)

	_, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	r := gin.Default()

	r.POST("/addStudentDetails", api.PostStudentDetails)

	studetails := &models.StudentDetails{
		FirstName:      "kowl",
		LastName:       "qeds",
		Email:          "tgv",
		AddressLine1:   "asdca",
		AddressLine2:   "fdlvkm",
		City:           "ghbs",
		State:          "vcbsd",
		ZipCode:        535452,
		Country:        "sdfbg",
		InstituteName:  "ada2we",
		InstituteCity:  "dfngb",
		InstituteState: "aweq3af",
		Degree:         "bndg",
		Major:          "asdvx",
		CGPA:           9.9,
		CGPAScale:      10.0,
		GRE:            335,
		GREVerbal:      165,
		GREQuant:       170,
		GREAWM:         5.5,
		TOEFL:          120,
		TOEFLRead:      30,
		TOEFLListen:    30,
		TOEFLSpeak:     30,
		TOEFLWrite:     30,
		IELTS:          9,
		IELTSRead:      9,
		IELTSListen:    9,
		IELTSSpeak:     9,
		IELTSWrite:     9,
	}

	body, _ := json.Marshal(studetails)

	req, err := http.NewRequest(http.MethodPost, "/addStudentDetails", bytes.NewBuffer(body))

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

func TestAddUserPreference(t *testing.T) {
	gin.SetMode(gin.TestMode)

	_, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	r := gin.Default()

	r.POST("/addUserPreference", api.PostUsers)


	userPreferences := &models.UserPreferences{
		UserID: 1,
		CoursePreference:  "Mechanical",
		CountryPreference:     "Germany",
	}

	body, _ := json.Marshal(userPreferences)

	req, err := http.NewRequest(http.MethodPost, "/addUserPreference", bytes.NewBuffer(body))

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
