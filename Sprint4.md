# Sprint 4
4 April 2022 - 20 April 2022

# Description of our application
"Unigenie" is a web platform for international students to find universities, track applications and get latest information about admissions. Users can interact with each other through blog posts, thus getting latest news in real time. 

This platform offers following features :
### Explore Page: 
Allows user to search for top universities based on course preferences.

<img width="500" alt="Screen Shot 2022-04-20 at 7 53 38 PM" src="https://user-images.githubusercontent.com/63544356/164342876-e414d85a-1efa-4ba1-ac42-b019919833f8.png">

### Dashboard: 
Allow user to track and update university applications and add reminder tasks.
  
### Resources Section: 
Informational pages about top universities around the world. </li>

<img width="500" alt="Screen Shot 2022-04-20 at 7 55 17 PM" src="https://user-images.githubusercontent.com/63544356/164343015-ca15c2ee-495a-46c9-aa07-72c386fc8972.png">

  
### Blogs: 
Allows users to add and read blog posts to get latest news about universities

<img width="500" alt="Screen Shot 2022-04-20 at 8 09 58 PM" src="https://user-images.githubusercontent.com/63544356/164344191-641c57f5-f8ce-4c13-ba77-d7a907649aeb.png">



This platform is developed using following technologies:

Front-End:
<ul>
  <li>ReactJS</li>
  <li>React-Bootstrap</li>
  <li>Formik</li>
  <li>Redux</li>
  <li>Cypress</li>
</ul>

Back-End:
<ul>
  <li>Go</li>
  <li>Gin Framework</li>
  <li>Gorm</li>
  <li>SQLite</li>
</ul>

### Running the code
<ol>
  <li>Clone this repository</li>
  <li>Install the above mentioned dependencies:</li>
  <li>Go to /server directory. Open terminal. Run the following command **go run main.go** </li>
  <li>This will start the server on port localhost:8080 </li>
  <li>Go to /webapp directory. Open terminal. Run the following command **npm start** </li>
  <li>This will start the webapp on port localhost:3000 </li>
</ol>

# Demo video functionality 
 3min max

# Cypress test video
 90sec max

# Backend unit test video
90sec max

# Link to API Documentation
https://github.com/Niche-538/UniGenie/wiki/API-Documentation

# Link to Project board
https://github.com/Niche-538/UniGenie/projects

# Link to Sprint4 deliverables

https://github.com/Niche-538/UniGenie/projects/5

### Sprint Target
<ul>
  <li>Add Blog Feature</li>
  <li>Add Tasks and Application Tracker Feature</li>
  <li>Add Explore Page</li>
  <li>Implement Jwt Tokenisation</li>
  <li>Have documentation for the backend API developed.</li>
  <li>Add Unit Test for the newly added code.</li>
  <li>Add Cypress Test for frontend features</li>
</ul>

### Back-End Features Delivered
<ul>
  <li>Added parameterized api to get university based upon the country</li>
  <li>Combined Tasks and User University Application Features updating databases and api's</li>
  <li>Added Explore Page Get api's</li>
  <li>Added necessary api's for Blog feature</li>
  <li>Added API Documentation for the newly addded api's</li>
  <li>Added Test Cases for newly added api's</li>
</ul>

### Front-End Features Delivered
<ul>
  <li>Added a blog post/home page for every user.</li>
  <li>Implemented JWT for user session management. This is still a work in progress.</li>
  <li>Added university application tracker for users.</li>
  <li>Users can now write a blogpost.</li>
  <li>Created university explore page to search top universities.</li>
  <li>Created countrywise and coursewise resource pages.</li>
  <li>Performed validation for all the input fields/forms.</li>
  <li>Added cypress test cases for testing frontend.</li>
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
