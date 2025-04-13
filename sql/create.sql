-- creating tables
CREATE TABLE PERSON (
    p_ID VARCHAR(20) PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(50) UNIQUE,
    phone INT(10) UNIQUE
);

CREATE TABLE APPLICANT (
    a_ID VARCHAR(20) PRIMARY KEY,
    Resume_link VARCHAR(255),
    FOREIGN KEY (a_ID) REFERENCES PERSON(p_ID)
);

CREATE TABLE COMPANY (
    c_ID VARCHAR(20) PRIMARY KEY
);

CREATE TABLE RECRUITER (
    r_ID VARCHAR(20) PRIMARY KEY,
    c_ID VARCHAR(20) NOT NULL,
    FOREIGN KEY (r_ID) REFERENCES PERSON(p_ID),
    FOREIGN KEY (c_ID) REFERENCES COMPANY(c_ID)
);

CREATE TABLE JOB_POSTING (
    j_ID VARCHAR(20) PRIMARY KEY,
    Date_posted DATE NOT NULL,
    Title VARCHAR(100) NOT NULL,
    Description TEXT,
    Salary DECIMAL(10,2),
    Location VARCHAR(100),
    r_ID VARCHAR(20) NOT NULL,
    FOREIGN KEY (r_ID) REFERENCES RECRUITER(r_ID)
);

CREATE TABLE APPLICATION (
    app_ID VARCHAR(20) PRIMARY KEY,
    Date_applied DATE NOT NULL,
    Status VARCHAR(50) NOT NULL,
    CHECK (Status IN ('Submitted', 'Under Review', 'Accepted', 'Rejected'))
);

CREATE TABLE APPLIES_THROUGH (
    app_ID VARCHAR(20),
    a_ID VARCHAR(20),
    PRIMARY KEY (app_ID, a_ID),
    FOREIGN KEY (app_ID) REFERENCES APPLICATION(app_ID),
    FOREIGN KEY (a_ID) REFERENCES APPLICANT(a_ID)
);
-- assertions for functional dependencies
CREATE ASSERTION FD_p_ID_name
CHECK (NOT EXISTS 
        (SELECT * FROM PERSON AS p1, PERSON as p2
        WHERE p1.p_ID = p2.p_ID
        AND p1.name <> p2.name));

CREATE ASSERTION FD_p_ID_email
CHECK (NOT EXISTS 
        (SELECT * FROM PERSON AS p1, PERSON as p2
        WHERE p1.p_ID = p2.p_ID
        AND p1.email <> p2.email));

CREATE ASSERTION FD_p_ID_phone
CHECK (NOT EXISTS 
        (SELECT * FROM PERSON AS p1, PERSON as p2
        WHERE p1.p_ID = p2.p_ID
        AND p1.phone <> p2.phone));

CREATE ASSERTION FD_a_ID_Resume_link
CHECK (NOT EXISTS 
        (SELECT * FROM APPLICANT AS a1, APPLICANT as a2
        WHERE a1.a_ID = a2.a_ID
        AND a1.Resume_link <> a2.Resume_link));

CREATE ASSERTION FD_r_ID_c_ID
CHECK (NOT EXISTS 
        (SELECT * FROM RECRUITER AS r1, RECRUITER as r2
        WHERE r1.r_ID = r2.r_ID
        AND r1.c_ID <> r2.c_ID));

CREATE ASSERTION FD_app_ID_Date_applied
CHECK (NOT EXISTS 
        (SELECT * FROM APPLICATION AS a1, APPLICATION as a2
        WHERE a1.a_ID = a2.a_ID
        AND a1.Date_applied <> a2.Date_applied));

CREATE ASSERTION FD_app_ID_Status
CHECK (NOT EXISTS 
        (SELECT * FROM APPLICATION AS a1, APPLICATION as a2
        WHERE a1.a_ID = a2.a_ID
        AND a1.Status <> a2.Status));

CREATE ASSERTION FD_j_ID_Date_posted
CHECK (NOT EXISTS 
        (SELECT * FROM JOB_POSTING AS j1, JOB_POSTING as j2
        WHERE j1.j_ID = j2.j_ID
        AND j1.Date_posted <> j2.Date_posted));

CREATE ASSERTION FD_j_ID_Title
CHECK (NOT EXISTS 
        (SELECT * FROM JOB_POSTING AS j1, JOB_POSTING as j2
        WHERE j1.j_ID = j2.j_ID
        AND j1.Title <> j2.Title));

CREATE ASSERTION FD_j_ID_Description
CHECK (NOT EXISTS 
        (SELECT * FROM JOB_POSTING AS j1, JOB_POSTING as j2
        WHERE j1.j_ID = j2.j_ID
        AND j1.Description <> j2.Description));

CREATE ASSERTION FD_j_ID_Salary
CHECK (NOT EXISTS 
        (SELECT * FROM JOB_POSTING AS j1, JOB_POSTING as j2
        WHERE j1.j_ID = j2.j_ID
        AND j1.Salary <> j2.Salary));

CREATE ASSERTION FD_j_ID_Location
CHECK (NOT EXISTS 
        (SELECT * FROM JOB_POSTING AS j1, JOB_POSTING as j2
        WHERE j1.j_ID = j2.j_ID
        AND j1.Location <> j2.Location));

CREATE ASSERTION FD_j_ID_r_ID
CHECK (NOT EXISTS 
        (SELECT * FROM JOB_POSTING AS j1, JOB_POSTING as j2
        WHERE j1.j_ID = j2.j_ID
        AND j1.r_ID <> j2.r_ID));
