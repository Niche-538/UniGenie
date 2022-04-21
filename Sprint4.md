# Sprint 4
4 April 2022 - 20 April 2022

# Description of our application
"Unigenie" is a web platform for international students to find universities, track applications and get latest information about admissions. Users can interact with each other through blog posts, thus getting latest news in real time.

<img width="500" alt="Screen Shot 2022-04-20 at 7 53 38 PM" src="https://user-images.githubusercontent.com/63544356/164346202-660897e3-a1d7-49ea-9634-662b5b773a3d.png">

## This platform offers following features:

### Explore Page: 
Allows users to search for top universities based on course preferences

<img width="500" alt="Screen Shot 2022-04-20 at 7 53 38 PM" src="https://user-images.githubusercontent.com/63544356/164342876-e414d85a-1efa-4ba1-ac42-b019919833f8.png">

### Dashboard: 
Allows user to track and update university applications and add reminder tasks

<img width="500" alt="Screen Shot 2022-04-20 at 8 19 51 PM" src="https://user-images.githubusercontent.com/63544356/164344958-ead8c3dc-1e8a-4bad-bd36-c790a9cc2e6d.png">

### Resources: 
Informational pages about top universities around the world

<img width="500" alt="Screen Shot 2022-04-20 at 7 55 17 PM" src="https://user-images.githubusercontent.com/63544356/164343015-ca15c2ee-495a-46c9-aa07-72c386fc8972.png">

### Blogs: 
Allows users to add and read blog posts to get latest news about universities

<img width="500" alt="Screen Shot 2022-04-20 at 8 09 58 PM" src="https://user-images.githubusercontent.com/63544356/164344191-641c57f5-f8ce-4c13-ba77-d7a907649aeb.png">

### Tech Stack:

**Front-End:**
<ul>
  <li>ReactJS</li>
  <li>React-Bootstrap</li>
  <li>Formik</li>
  <li>Redux</li>
  <li>Cypress</li>
</ul>

**Back-End:**
<ul>
  <li>Go</li>
  <li>Gin Framework</li>
  <li>Gorm</li>
  <li>SQLite</li>
</ul>

### Running the code
<ol>
  <li>Clone this repository</li>
  <li>Install the above mentioned dependencies</li>
  <li>Go to /server directory. Open the terminal. Run the following command: go run main.go</li>
  <li>This will start the server on port localhost:8080</li>
  <li>Go to /webapp directory. Open the terminal. Run the following command: npm start</li>
  <li>This will start the webapp on port localhost:3000</li>
</ol>

# Demo video functionality 
 <a href="https://player.vimeo.com/video/701506799?h=2d4664d1cb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"> ![image](https://user-images.githubusercontent.com/41022671/164363902-59481254-6010-48b4-8da1-449f87fccbcb.png) </a>


# Cypress test video
<a href="https://player.vimeo.com/video/701515847?h=4daf81e83c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"> ![image](https://user-images.githubusercontent.com/41022671/164368563-be8d8c2e-b49e-445e-b48c-71b2e9617251.png) </a>


# Backend unit test video
<a href="https://player.vimeo.com/video/701708164?h=5166cea28a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"> ![image](https://user-images.githubusercontent.com/41022671/164365254-833f4b58-4b16-40ca-84d8-c7b13b5b0c6a.png) </a>

# Link to API Documentation
https://github.com/Niche-538/UniGenie/wiki/API-Documentation

# Link to Project board
https://github.com/Niche-538/UniGenie/projects

# Link to Sprint4 deliverables
https://github.com/Niche-538/UniGenie/projects/5

### Sprint Target
<ul>
  <li>Add blog feature</li>
  <li>Add tasks and application tracker feature</li>
  <li>Add explore page</li>
  <li>Implement JWT tokenisation</li>
  <li>Have documentation for the backend API developed</li>
  <li>Add unit tests for the newly added code</li>
  <li>Add Cypress test for frontend features</li>
</ul>

### Back-End Features Delivered
<ul>
  <li>Added parameterized API to get university based upon the country</li>
  <li>Combined tasks and user university application features updating databases and APIs</li>
  <li>Added explore page get APIs</li>
  <li>Added necessary APIs for blog feature</li>
  <li>Added API documentation for the newly addded APIs</li>
  <li>Added test cases for newly added APIs</li>
</ul>

### Front-End Features Delivered
<ul>
  <li>Added a blog post/home page for every user</li>
  <li>Implemented JWT for user session management. This is still a work in progress</li>
  <li>Added university application tracker for users</li>
  <li>Users can now write a blogpost</li>
  <li>Created university explore page to search top universities</li>
  <li>Created countrywise and coursewise resource pages</li>
  <li>Performed validation for all the input fields/forms</li>
  <li>Added Cypress test cases for testing frontend</li>
</ul>

# Frontend Team Members
<ul>
  <li>Aakash Naik</li>
  <li>Kunal Dudhe</li>
</ul>

# Backend Team Members
<ul>
  <li>Anurag Patil</li>
  <li>Pratik Kamble</li>
</ul>
