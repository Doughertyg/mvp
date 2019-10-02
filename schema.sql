DROP DATABASE IF EXISTS beernerdz;

CREATE DATABASE beernerdz;

USE beernerdz;

CREATE TABLE beers (
	id INT AUTO_INCREMENT UNIQUE,
	name VARCHAR(255) NOT NULL,
	style VARCHAR(255),
	brewery VARCHAR(255) NOT NULL,
	brewerylink VARCHAR(255),
	abv INT,
	ibu INT,
	og INT,
	fg INT,
	hops VARCHAR(255),
	yeast VARCHAR(255),
	grain VARCHAR(255),
	availability VARCHAR(255),
	description VARCHAR(255),
	img VARCHAR(255),
	brewery_id INT NOT NULL
);

CREATE TABLE photos (
	id INT AUTO_INCREMENT UNIQUE,
	url VARCHAR(255) NOT NULL,
	thumb VARCHAR(255) NOT NULL,
	beer_id INT NOT NULL,
	review_id INT NOT NULL,
	user_id INT NOT NULL
);

CREATE TABLE reviews (
	id INT AUTO_INCREMENT UNIQUE,
	user_id INT NOT NULL,
	overallscore INT NOT NULL,
	overall VARCHAR(255),
	appearancescore INT,
	appearance VARCHAR(255),
	aromascore INT,
	aroma VARCHAR(255),
	tastescore INT,
	taste VARCHAR(255),
	mouthscore INT,
	mouth VARCHAR(255),
	postdate VARCHAR(255) NOT NULL,
	format VARCHAR(255),
	brew_date INT,
	batch INT,
	check_in VARCHAR(255)
);

CREATE TABLE users (
	id INT AUTO_INCREMENT UNIQUE,
	name VARCHAR(255) NOT NULL,
	join_date INT NOT NULL,
	location VARCHAR(255),
	username VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	avatar VARCHAR(255)
);

CREATE TABLE brewery (
	id INT AUTO_INCREMENT UNIQUE,
	name VARCHAR(255),
	location VARCHAR(255),
	description VARCHAR(255),
);
