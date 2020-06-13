-- Drops database if it is already there
DROP DATABASE IF EXISTS project2_db;
-- Creates the database after its dropped. 
CREATE DATABASE project2_db;
-- Start the database
USE project2_db;
-- Creating the tables for notes
CREATE TABLE notes (
    id INT NOT NULL AUTO_INCREMENT,
    note TEXT NOT NULL,
    complete BOOLEAN,
    PRIMARY KEY (id)
);