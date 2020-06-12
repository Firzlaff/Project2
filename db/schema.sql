DROP DATABASE IF EXISTS project2_db;
CREATE DATABASE project2_db;
USE project2_db;

CREATE TABLE notes (
    id INT NOT NULL AUTO_INCREMENT,
    note TEXT NOT NULL,
    complete BOOLEAN,
    PRIMARY KEY (id)
);