# Sprint 2 
21 January 2022 - 04 March

# Sprint Target
<ul>
  <li>The backend and frontend are integrated.</li>
  <li>Have some tests for the frontend using Cypress</li>
   <li>You have unit tests for the backend.</li>
  <li>Have documentation for the backend API developed</li>
</ul>
# Project Scrum Board
https://github.com/Niche-538/UniGenie/projects/2

## BackEnd
<ul>
  <li>Added Backend testcases</li>
  <li>Restructed code into modules</li>
  <li>Updated and added new api's and database tables according to requirements</li>
</ul>


## Documentation Link
https://github.com/Niche-538/UniGenie/wiki/API-Documentation

## Api Postman Collection: 
  ```javascript
{
	"info": {
		"_postman_id": "c30f6519-630b-4de5-93ac-c65924868a7b",
		"name": "Unigenie Api",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "http://localhost:8080/getUsers",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:8080/getUsers",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8080",
					"path": [
						"getUsers"
					]
				}
			},
			"response": []
		},
		{
			"name": "http://localhost:8080/getUniversities",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:8080/getUniversities",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8080",
					"path": [
						"getUniversities"
					]
				}
			},
			"response": []
		},
		{
			"name": "http://localhost:8080/addUniversity",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\": \"University of Texas at Dallas\",\n    \"website\": \"www.td.edu\",\n    \"address\": \"4000 SW 37th Blvd\",\n    \"city\": \"Dallas\",\n    \"state\": \"TX\",\n    \"zip\": \"32608\",\n    \"country\": \"USA\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:8080/addUniversity",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8080",
					"path": [
						"addUniversity"
					]
				}
			},
			"response": []
		},
		{
			"name": "http://localhost:8080/signup",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"first_name\": \"Anuhrag\",\n    \"last_name\": \"Pathrefrefril\",\n    \"email\": \"ap@uhf.edu\",\n    \"password\": \"phassword\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:8080/signup",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8080",
					"path": [
						"signup"
					]
				}
			},
			"response": []
		}
	]
}

  ```
## FrontEnd



