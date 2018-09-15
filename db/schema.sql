### Schema
DROP DATABASE burgersdb;
CREATE DATABASE burgersdb;

USE burgersdb;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burgerName varchar(255) NOT NULL,
    purchased BOOLEAN DEFAULT false,
	addTomatos BOOLEAN DEFAULT false,
    addCheese BOOLEAN DEFAULT false,
    addBacon BOOLEAN DEFAULT false,    
	PRIMARY KEY (id)
    );


