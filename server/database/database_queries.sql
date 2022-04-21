-- SQLite

/* Add University Table - Added by Pratik on March 2 2022*/ 

drop table universities;

create table universities (
    university_id int PRIMARY_KEY AUTO_INCREMENT,
    name varchar(255),
    type varchar(255),
    website varchar(255),
    state varchar(255),
    country varchar(255),
    updated_at datetime DEFAULT CURRENT_TIMESTAMP,
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL 
);


INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (1, 'Stanford','private', 'www.stanford.edu', 'California','US');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (2, 'MIT','private', 'www.mit.edu', 'Massachusetts','US');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (3, 'Carnegie Mellon University','private', 'www.cmu.edu', 'Pennsylvania','US');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (4, 'University of California, Berkley','public', 'www.berkeley.edu', 'California','US');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (5, 'Harvard University','private', 'www.harvard.edu', 'Massachusetts','US');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (6, 'University of Illinois Urbana-Champaign','public', 'www.illinois.edu', 'Illinois','US');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (7, 'California Institue of Technology','private', 'www.caltech.edu', 'California','US');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (8, 'Princeton University','private', 'www.princeton.edu', 'New Jersey','US');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (9, 'Cornell University','private', 'www.cornell.edu', 'New York','US');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (10, 'Columbia University','public', 'www.columbia.edu', 'New York','US');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (11, 'University of Chicago','private', 'www.chicago.edu', 'Illinois','US');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (12, 'University of Pennsylvania','private', 'www.upenn.edu', 'Pennsylvania','US');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (13, 'Northwestern University','private', 'www.northwestern.edu', 'Illinois','US');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (14, 'Yale University','public', 'www.yale.edu', 'Connecticut','US');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (15, 'Dartomuth College','private', 'www.dartmouth.edu', 'New Hampshire','US');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (16, 'University of Oxford', 'private', 'www.ox.ac.uk', 'Oxford', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (17, 'University College London', 'private', 'www.ucl.ac.uk', 'London', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (18, 'Imperial College London','private', 'www.imperial.ac.uk', 'London', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (19, 'University of Cambridge','private', 'www.cam.ac.uk', 'Cambridge', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (20, 'University of Edinburgh','private', 'www.ed.ac.uk', 'Edinburgh', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (21, 'University of Surrey','private', 'www.surrey.ac.uk', 'Guildford', 'UK');


INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (22, 'Imperial College London','private', 'www.imperial.ac.uk', 'London', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (23, 'University of Nottingham','private', 'www.nottingham.ac.uk', 'Nottingham', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (24, 'University of Cambridge','private', 'www.cam.ac.uk', 'Cambridge', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (25, 'University of Southampton','public', 'www.southampton.ac.uk', 'Southampton', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (26, 'University of Liverpool','private', 'www.liverpool.ac.uk', 'Liverpool', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (27, 'Cranfield University','public', 'www.cranfield.ac.uk', 'Bedford', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (28, 'London Business School','private', 'www.london.edu', 'London', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (29, 'University of Cambridge','private', 'www.cam.ac.uk', 'Cambridge', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (30, 'University of Oxford', 'private', 'www.ox.ac.uk', 'Oxford', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (31, 'University of Warwick','public', 'www.warwick.ac.uk', 'Coventry', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (32, 'Imperial College London','private', 'www.imperial.ac.uk', 'London', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (33, 'University of Manchester','private', 'www.manchester.ac.uk', 'Manchester', 'UK');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (34, 'University of Toronto', 'public', 'www.utoronto.ca', 'Toronto', 'Canada');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (35, 'University of Waterloo', 'public', 'www.uwaterloo.ca', 'Waterloo', 'Canada');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (36, 'University of British Columbia','public', 'www.ubc.ca', 'Vancouver', 'Canada');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (37, 'University of Montreal','public', 'www.umontreal.ca', 'Montreal', 'Canada');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (38, 'University of Alberta','public', 'www.ualberta.ca', 'Edmonton', 'Canada');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (39, 'McGill University','public', 'www.mcgill.ca', 'Montreal', 'Canada');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (40, 'University of Waterloo', 'public', 'www.uwaterloo.ca', 'Waterloo', 'Canada');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (41, 'McGill University','public', 'www.mcgill.ca', 'Montreal', 'Canada');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (42, 'University of Alberta','public', 'www.ualberta.ca', 'Edmonton', 'Canada');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (43, 'University of Toronto', 'public', 'www.utoronto.ca', 'Toronto', 'Canada');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (44, 'University of Toronto', 'public', 'www.utoronto.ca', 'Toronto', 'Canada');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (45, "Queen's University",'public', 'www.queensu.ca', 'Kingston', 'Canada');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (46, 'Univeristy of Western Ontario', 'public', 'www.uwo.ca', 'London', 'Canada');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (47, 'McGill University','public', 'www.mcgill.ca', 'Montreal', 'Canada');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (48, 'York Univeristy','public', 'www.yorku.ca', 'Toronto', 'Canada');

INSERT INTO universities (university_id, name, type, website, state, country)
VALUES (49, 'University of British Columbia','public', 'www.ubc.ca', 'Vancouver', 'Canada');


-- ---------------------------------------------------------------------------------------------------------

/* Add User Table - Added by Pratik on March 3 2022*/ 

create table users (
    user_id int PRIMARY_KEY AUTO_INCREMENT,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(255),
    password varchar(255),
    updated_at datetime DEFAULT CURRENT_TIMESTAMP,
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL 
);

INSERT INTO users (user_id, first_name, last_name, email, password)
VALUES (1, 'Patrick', 'Campbell', 'pcambell@ufl.edu', 'password123');

-- ---------------------------------------------------------------------------------------------------------

/* Add Program Table - Added by Pratik on March 3 2022*/ 

create table program (
    program_id int PRIMARY_KEY AUTO_INCREMENT,
    institute_name varchar(255),
    program_name varchar(255),
    offered_by varchar(255),
    fall_intake int,
    spring_intake int,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP,
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL 
);

INSERT INTO program (program_id, institute_name, program_name, offered_by, fall_intake,spring_intake)
VALUES (1, 'University of Florida', 'CISE', 'HWCOE', 100, 50);

-- ---------------------------------------------------------------------------------------------------------

/* Add Offered Courses Table - Added by Pratik on March 3 2022*/ 

create table offered_courses (
    course_id int PRIMARY_KEY AUTO_INCREMENT,
    course_name varchar(255),
    updated_at datetime DEFAULT CURRENT_TIMESTAMP,
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL 
);

INSERT INTO offered_courses (course_id, course_name)
VALUES (1, 'Bioinformatics');

-- ---------------------------------------------------------------------------------------------------------

/* Add Offered Courses Table - Added by Anurag on March 4 2022*/ 

DROP TABLE personal_details;
DROP TABLE education_details;

-- ---------------------------------------------------------------------------------------------------------

/* Add Courses Preference Table - Added by Pratik on March 30 2022*/ 

create table course_preferences (
    course_preference_id int PRIMARY_KEY AUTO_INCREMENT,
    user_id int,
    course_preference varchar(255),
    country_preference varchar(255),
    updated_at datetime DEFAULT CURRENT_TIMESTAMP,
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL 
);

INSERT INTO course_preferences (course_preference_id, user_id, course_preference, country_preference)
VALUES (1, 1, "Computer Science", "Germany");

-- ---------------------------------------------------------------------------------------------------------

/* Add User UserUniversityApplication Table - Added by Pratik on March 31 2022*/ 

create table user_university_application (
    user_university_application_id int PRIMARY_KEY AUTO_INCREMENT,
    user_id int,
    university_application_link varchar(255),
    transcript_uploaded boolean,
    lor1 boolean,
    lor2 boolean,
    lor3 boolean,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP,
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL 
);

INSERT INTO user_university_application (user_university_application_id, user_id, university_application_link, transcript_uploaded, lor1, lor2, lor3)
VALUES (1, 1, "www.ufl.edu", true, false, false, true);

SELECT DATABASE unigenie.db;
DELETE FROM users;

-------------------------------------------------------------------------------------------------------------------------------------------

-- SQLite does NOT fully support DROP column feature
ALTER TABLE programs DROP COLUMN fall_intake;--, spring_intake;

-------------------------------------------------------------------------------------------------------------------------------------------
/* Add CS,Mech Table - Added by Pratik on March 2 2022*/ 

drop table cs_universities;

create table cs_universities (
    cs_university_id int PRIMARY_KEY AUTO_INCREMENT,
    name varchar(255),
    type varchar(255),
    website varchar(255),
    state varchar(255),
    country varchar(255),
    updated_at datetime DEFAULT CURRENT_TIMESTAMP,
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL 
);

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (1, 'University of Florida','public', 'www.ufl.edu', 'Florida','US');

-------------------------------------------------------------------------------------------------------------------------------------------

drop table mech_universities;

 create table mech_universities (
    mech_university_id int PRIMARY_KEY AUTO_INCREMENT,
    name varchar(255),
    type varchar(255),
    website varchar(255),
    state varchar(255),
    country varchar(255),
    updated_at datetime DEFAULT CURRENT_TIMESTAMP,
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL 
);

INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (1, 'University of Florida','public', 'www.ufl.edu', 'Florida','US');

-------------------------------------------------------------------------------------------------------------------------------------------

drop table mba_universities;

create table mba_universities (
    mba_university_id int PRIMARY_KEY AUTO_INCREMENT,
    name varchar(255),
    type varchar(255),
    website varchar(255),
    state varchar(255),
    country varchar(255),
    updated_at datetime DEFAULT CURRENT_TIMESTAMP,
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL 
);

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (1, 'University of Florida','public', 'www.ufl.edu', 'Florida','US');

-------------------------------------------------------------------------------------------------------------------------------------------
/* Populating the table - Added by Pratik on March 2 2022*/ 

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (2, 'Stanford','private', 'www.stanford.edu', 'California','US');

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (3, 'MIT','private', 'www.mit.edu', 'Massachusetts','US');

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (4, 'Carnegie Mellon University','private', 'www.cmu.edu', 'Pennsylvania','US');

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (5, 'University of California, Berkley','public', 'www.berkeley.edu', 'California','US');

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (6, 'Harvard University','private', 'www.harvard.edu', 'Massachusetts','US');

-------------------------------------------------------------------------------------------

INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (2, 'University of Illinois Urbana-Champaign','public', 'www.illinois.edu', 'Illinois','US');

INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (3, 'California Institue of Technology','private', 'www.caltech.edu', 'California','US');

INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (4, 'Princeton University','private', 'www.princeton.edu', 'New Jersey','US');

INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (5, 'Cornell University','private', 'www.cornell.edu', 'New York','US');

INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (6, 'Columbia University','public', 'www.columbia.edu', 'New York','US');

-------------------------------------------------------------------------------------------

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (2, 'University of Chicago','private', 'www.chicago.edu', 'Illinois','US');

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (3, 'University of Pennsylvania','private', 'www.upenn.edu', 'Pennsylvania','US');

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (4, 'Northwestern University','private', 'www.northwestern.edu', 'Illinois','US');

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (5, 'Yale University','public', 'www.yale.edu', 'Connecticut','US');

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (6, 'Dartomuth College','private', 'www.dartmouth.edu', 'New Hampshire','US');

-------------------------------------------------------------------------------------------

/* Populating the table - Added by Anurag on April 18 2022*/ 
-- Adding UK universities


INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (7, 'University of Oxford', 'private', 'www.ox.ac.uk', 'Oxford', 'UK');

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (8, 'University College London', 'private', 'www.ucl.ac.uk', 'London', 'UK');

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (9, 'Imperial College London','private', 'www.imperial.ac.uk', 'London', 'UK');

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (10, 'University of Cambridge','private', 'www.cam.ac.uk', 'Cambridge', 'UK');

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (11, 'University of Edinburgh','private', 'www.ed.ac.uk', 'Edinburgh', 'UK');

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (12, 'University of Surrey','private', 'www.surrey.ac.uk', 'Guildford', 'UK');

-- DELETE FROM cs_universities WHERE name IN ("University of Cambridge", "University of Edinburgh", "University of Surrey");

-------------------------------------------------------------------------------------------


INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (7, 'Imperial College London','private', 'www.imperial.ac.uk', 'London', 'UK');

INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (8, 'University of Nottingham','private', 'www.nottingham.ac.uk', 'Nottingham', 'UK');

INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (9, 'University of Cambridge','private', 'www.cam.ac.uk', 'Cambridge', 'UK');

INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (10, 'University of Southampton','public', 'www.southampton.ac.uk', 'Southampton', 'UK');

INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (11, 'University of Liverpool','private', 'www.liverpool.ac.uk', 'Liverpool', 'UK');

INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (12, 'Cranfield University','public', 'www.cranfield.ac.uk', 'Bedford', 'UK');

-- DELETE FROM mech_universities WHERE name IN ("University of Cambridge");--, "University of Edinburgh", "University of Surrey");
-------------------------------------------------------------------------------------------


INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (7, 'London Business School','private', 'www.london.edu', 'London', 'UK');

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (8, 'University of Cambridge','private', 'www.cam.ac.uk', 'Cambridge', 'UK');

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (9, 'University of Oxford', 'private', 'www.ox.ac.uk', 'Oxford', 'UK');

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (10, 'University of Warwick','public', 'www.warwick.ac.uk', 'Coventry', 'UK');

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (11, 'Imperial College London','private', 'www.imperial.ac.uk', 'London', 'UK');

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (12, 'University of Manchester','private', 'www.manchester.ac.uk', 'Manchester', 'UK');

-------------------------------------------------------------------------------------------

/* Populating the table - Added by Anurag on April 18 2022*/ 
-- Adding Canadian universities


INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (13, 'University of Toronto', 'public', 'www.utoronto.ca', 'Toronto', 'Canada');

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (14, 'University of Waterloo', 'public', 'www.uwaterloo.ca', 'Waterloo', 'Canada');

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (15, 'University of British Columbia','public', 'www.ubc.ca', 'Vancouver', 'Canada');

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (16, 'University of Montreal','public', 'www.umontreal.ca', 'Montreal', 'Canada');

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (17, 'University of Alberta','public', 'www.ualberta.ca', 'Edmonton', 'Canada');

INSERT INTO cs_universities (cs_university_id, name, type, website, state, country)
VALUES (18, 'McGill University','public', 'www.mcgill.ca', 'Montreal', 'Canada');

-- DELETE FROM cs_universities WHERE name IN ("University of Cambridge", "University of Edinburgh", "University of Surrey");

-------------------------------------------------------------------------------------------


INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (13, 'University of Waterloo', 'public', 'www.uwaterloo.ca', 'Waterloo', 'Canada');

INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (14, 'McGill University','public', 'www.mcgill.ca', 'Montreal', 'Canada');

INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (15, 'University of Alberta','public', 'www.ualberta.ca', 'Edmonton', 'Canada');

INSERT INTO mech_universities (mech_university_id, name, type, website, state, country)
VALUES (16, 'University of Toronto', 'public', 'www.utoronto.ca', 'Toronto', 'Canada');

-- DELETE FROM mech_universities WHERE name IN ("University of Cambridge");--, "University of Edinburgh", "University of Surrey");
-------------------------------------------------------------------------------------------


INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (13, 'University of Toronto', 'public', 'www.utoronto.ca', 'Toronto', 'Canada');

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (14, "Queen's University",'public', 'www.queensu.ca', 'Kingston', 'Canada');

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (15, 'Univeristy of Western Ontario', 'public', 'www.uwo.ca', 'London', 'Canada');

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (16, 'McGill University','public', 'www.mcgill.ca', 'Montreal', 'Canada');

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (17, 'York Univeristy','public', 'www.yorku.ca', 'Toronto', 'Canada');

INSERT INTO mba_universities (mba_university_id, name, type, website, state, country)
VALUES (18, 'University of British Columbia','public', 'www.ubc.ca', 'Vancouver', 'Canada');


-------------------------------------------------------------------------------------------

/* Populating the table - Added by Anurag on April 18 2022*/ 
-- Creating a table to store blogposts

-- create table blogs (
--     blog_id int PRIMARY_KEY AUTO_INCREMENT,
--     blog_head varchar(300),
--     blog_content varchar(1000000),
--     upvotes INTEGER DEFAULT 0,
--     downvotes INTEGER DEFAULT 0,
--     user_id INTEGER,
--     updated_at datetime DEFAULT CURRENT_TIMESTAMP,
--     created_at datetime DEFAULT CURRENT_TIMESTAMP,
--     deleted_at datetime DEFAULT NULL,
--     FOREIGN KEY(user_id) REFERENCES users(id)
-- );

drop table blogs;

create table blogs (
    id int PRIMARY_KEY AUTO_INCREMENT,
    blog_head varchar(300),
    blog_content varchar(1000000),
    user_id INTEGER,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP,
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO blogs (id, blog_head, blog_content, user_id)
VALUES (1, 'How to do Siiiiiuuuuu?','Run on the field, take one legged hop, arms up while hopping, turn around, throw your arms down, and... "SSSIIIIIIIIIUUUUUUUUU" ', 3);

ALTER TABLE DROP CONSTRAINT

ALTER TABLE blogs DROP COLUMN "upvotes";

-------------------------------------------------------------------------------------------
/* Creating Task Table - Added by Pratik on April 18 2022*/ 

create table tasks (
    task_id int PRIMARY_KEY AUTO_INCREMENT,
    task varchar(1000000),
    user_id int,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP,
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL
);

INSERT INTO tasks (task_id, task, user_id)
 VALUES (1, 'Mail Kristina at UF for i20', 1);

-------------------------------------------------------------------------------------------
