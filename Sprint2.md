# Sprint 2 
18 February 2022 - 04 March 2022

# Sprint Target
<ul>
  <li>The backend and frontend are integrated.</li>
  <li>Have some tests for the frontend using Cypress.</li>
  <li>You have unit tests for the backend.</li>
  <li>Have documentation for the backend API developed.</li>
</ul>

# Project Scrum Board
https://github.com/Niche-538/UniGenie/projects/2

# Back-End
<ul>
  <li>Added Backend testcases.</li>
  <li>Restructured code into modules.</li>
  <li>Updated and added new APIs and database tables according to requirements.</li>
</ul>

# Documentation Link
https://github.com/Niche-538/UniGenie/wiki/API-Documentation

# API Unit Testing Sceenshots
## POST API
### Add Universities
![image](https://user-images.githubusercontent.com/41022671/156867761-607d3cf4-b5e0-4349-849a-8896bd41dc88.png)

### Add Users
![image](https://user-images.githubusercontent.com/41022671/156867695-cc8220a0-266e-4b64-96c8-af3b73a5af80.png)

### Student Details
![image](https://user-images.githubusercontent.com/41022671/156867643-ef127c44-12ad-4ec3-924f-b1bc8ca2aeb2.png)


# API Postman Collection
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
# Front-End
<ul>
  <li>Added Cypress testing.</li>
  <li>Added front-end and back-end integration.</li>
  <li>Modified forms to include required fields and field length.</li>
</ul>

# Cypress Testing
<ul>
  <li>Test 1: https://drive.google.com/file/d/1rAp4URfcshPaCDEv-_pCAnVHvtJHwGef/view?usp=sharing</li>
  <li>Test 2: https://drive.google.com/file/d/1gLlPfB0S0enG7-97QoXKra5606HHGcas/view?usp=sharing</li>
</ul>

# Integration of front-end and back-end and run-through with updated UI
<ul>
   <li>https://drive.google.com/drive/folders/14uBgMH6pyGGRcq_QN9Wd4eH4LQskS6--?usp=sharing</li>
</ul>
