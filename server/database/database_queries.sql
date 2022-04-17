-- SQLite

/* Add University Table - Added by Pratik on March 2 2022*/ 

drop table universities;

create table universities (
    university_id int PRIMARY_KEY AUTO_INCREMENT,
    name varchar(255),
    website varchar(255),
    address varchar(255),
    city varchar(255),
    state varchar(255),
    zip int,
    country varchar(255),
    updated_at datetime DEFAULT CURRENT_TIMESTAMP,
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL 
);

INSERT INTO universities (university_id, name, website, address, city, state, zip, country)
VALUES (1, 'University of Florida', 'www.ufl.edu', 'University Avenue SW', 'Gainesville', 'FL', '32611','US');

INSERT INTO universities (university_id, name, website, address, city, state, zip, country)
VALUES (2, 'UK cha college', 'www.uk.edu', 'UK road', 'London', 'UK', '32611','UK');

INSERT INTO universities (university_id, name, website, address, city, state, zip, country)
VALUES (3, 'Punjab College Canada', 'www.can.edu', 'Can', 'Totonto', 'TO', '32611','Can');

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
