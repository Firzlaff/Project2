-- -- Drops database if it is already there
-- DROP DATABASE IF EXISTS project2_db;
-- -- Creates the database after its dropped. 
-- CREATE DATABASE project2_db;
-- Start the database
USE dfbs7vcu2m1nh29q;
-- Creating the table for notes/todo section
CREATE TABLE notes (
    id INT NOT NULL AUTO_INCREMENT,
    note TEXT NOT NULL,
    PRIMARY KEY (id)
);



USE dfbs7vcu2m1nh29q;
-- Creating the table for the workout section
CREATE TABLE workouts (
    day VARCHAR(50),
    workout TEXT NOT NULL,
    PRIMARY KEY (day)
);

USE dfbs7vcu2m1nh29q;
-- Creating the table for the workout section
CREATE TABLE tips (
    name VARCHAR(100),
    tip TEXT NOT NULL,
    PRIMARY KEY (name)
);
