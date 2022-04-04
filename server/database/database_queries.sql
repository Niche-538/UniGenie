-- SQLite

/* Add University Table - Added by Pratik on March 2 2022*/ 

-- create table universities (
--     university_id int PRIMARY_KEY AUTO_INCREMENT,
--     name varchar(255),
--     website varchar(255),
--     address varchar(255),
--     city varchar(255),
--     state varchar(255),
--     zip int,
--     country varchar(255),
--     updated_at datetime DEFAULT CURRENT_TIMESTAMP,
--     created_at datetime DEFAULT CURRENT_TIMESTAMP,
--     deleted_at datetime DEFAULT NULL 
-- );

-- INSERT INTO universities (university_id, name, website, address, city, state, zip, country)
-- VALUES (1, 'University of Florida', 'www.ufl.edu', 'University Avenue SW', 'Gainesville', 'FL', '32611','US');

-- ---------------------------------------------------------------------------------------------------------

/* Add User Table - Added by Pratik on March 3 2022*/ 

-- create table users (
--     user_id int PRIMARY_KEY AUTO_INCREMENT,
--     first_name varchar(255),
--     last_name varchar(255),
--     email varchar(255),
--     password varchar(255),
--     updated_at datetime DEFAULT CURRENT_TIMESTAMP,
--     created_at datetime DEFAULT CURRENT_TIMESTAMP,
--     deleted_at datetime DEFAULT NULL 
-- );

-- INSERT INTO users (user_id, first_name, last_name, email, password)
-- VALUES (1, 'Patrick', 'Campbell', 'pcambell@ufl.edu', 'password123');

-- ---------------------------------------------------------------------------------------------------------

/* Add Program Table - Added by Pratik on March 3 2022*/ 

-- create table program (
--     program_id int PRIMARY_KEY AUTO_INCREMENT,
--     institute_name varchar(255),
--     program_name varchar(255),
--     offered_by varchar(255),
--     fall_intake int,
--     spring_intake int,
--     updated_at datetime DEFAULT CURRENT_TIMESTAMP,
--     created_at datetime DEFAULT CURRENT_TIMESTAMP,
--     deleted_at datetime DEFAULT NULL 
-- );

-- INSERT INTO program (program_id, institute_name, program_name, offered_by, fall_intake,spring_intake)
-- VALUES (1, 'University of Florida', 'CISE', 'HWCOE', 100, 50);

-- ---------------------------------------------------------------------------------------------------------

/* Add Offered Courses Table - Added by Pratik on March 3 2022*/ 

-- create table offered_courses (
--     course_id int PRIMARY_KEY AUTO_INCREMENT,
--     course_name varchar(255),
--     updated_at datetime DEFAULT CURRENT_TIMESTAMP,
--     created_at datetime DEFAULT CURRENT_TIMESTAMP,
--     deleted_at datetime DEFAULT NULL 
-- );

-- INSERT INTO offered_courses (course_id, course_name)
-- VALUES (1, 'Bioinformatics');

-- ---------------------------------------------------------------------------------------------------------

/* Add Offered Courses Table - Added by Anurag on March 4 2022*/ 

-- DROP TABLE personal_details;
-- DROP TABLE education_details;

-- ---------------------------------------------------------------------------------------------------------

/* Add Courses Preference Table - Added by Pratik on March 30 2022*/ 

-- create table course_preferences (
--     course_preference_id int PRIMARY_KEY AUTO_INCREMENT,
--     user_id int,
--     course_preference varchar(255),
--     country_preference varchar(255),
--     updated_at datetime DEFAULT CURRENT_TIMESTAMP,
--     created_at datetime DEFAULT CURRENT_TIMESTAMP,
--     deleted_at datetime DEFAULT NULL 
-- );

-- INSERT INTO course_preferences (course_preference_id, user_id, course_preference, country_preference)
-- VALUES (1, 1, "Computer Science", "Germany");

-- ---------------------------------------------------------------------------------------------------------

/* Add User UserUniversityApplication Table - Added by Pratik on March 31 2022*/ 

-- create table user_university_application (
--     user_university_application_id int PRIMARY_KEY AUTO_INCREMENT,
--     user_id int,
--     university_application_link varchar(255),
--     transcript_uploaded boolean,
--     lor1 boolean,
--     lor2 boolean,
--     lor3 boolean,
--     updated_at datetime DEFAULT CURRENT_TIMESTAMP,
--     created_at datetime DEFAULT CURRENT_TIMESTAMP,
--     deleted_at datetime DEFAULT NULL 
-- );

-- INSERT INTO user_university_application (user_university_application_id, user_id, university_application_link, transcript_uploaded, lor1, lor2, lor3)
-- VALUES (1, 1, "www.ufl.edu", true, false, false, true);

-- SELECT DATABASE unigenie.db;
-- DELETE FROM users;

-- SQLite does NOT fully support DROP column feature
-- ALTER TABLE programs DROP COLUMN fall_intake;--, spring_intake;
