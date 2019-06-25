DROP DATABASE IF EXISTS beernerdz;

CREATE DATABASE beernerdz;

USE beernerdz;

CREATE TABLE beers (
	id INT AUTO_INCREMENT UNIQUE,
	name VARCHAR(255) NOT NULL,
	style VARCHAR(255) NOT NULL,
	brewery VARCHAR(255) NOT NULL,
	brewerylink VARCHAR(255) NOT NULL,
	abv INT NOT NULL,
	ibu INT,
	og INT,
	fg INT,
	hops VARCHAR(255) NOT NULL,
	yeast VARCHAR(255) NOT NULL,
	grain VARCHAR(255) NOT NULL,
	distro VARCHAR(255) NOT NULL,
	score INT NOT NULL,
	reviews VARCHAR(255) NOT NULL,
	ranking INT NOT NULL,
	styleranking INT NOT NULL,
	rankingfans INT,
	appearance INT NOT NULL,
	aroma INT NOT NULL,
	taste INT NOT NULL,
	mouth INT NOT NULL,
	about VARCHAR(255) NOT NULL,
	img VARCHAR(255) NOT NULL
);

CREATE TABLE photos (
	id INT AUTO_INCREMENT UNIQUE,
	url VARCHAR(255) NOT NULL,
	thumb VARCHAR(255) NOT NULL,
	beer INT NOT NULL,
	review INT NOT NULL
);

CREATE TABLE reviews (
	id INT AUTO_INCREMENT UNIQUE,
	user VARCHAR(255) NOT NULL,
	rating INT NOT NULL,
	review_text VARCHAR(255) NOT NULL,
	userlocation VARCHAR(255) NOT NULL,
	overallscore INT NOT NULL,
	overall VARCHAR(255) NOT NULL,
	appearancescore INT NOT NULL,
	appearance VARCHAR(255) NOT NULL,
	aromascore INT NOT NULL,
	aroma VARCHAR(255) NOT NULL,
	tastescore INT NOT NULL,
	taste VARCHAR(255) NOT NULL,
	postdate VARCHAR(255) NOT NULL,
	format VARCHAR(255) NOT NULL,
	brewed_on INT,
	batch INT,
	username VARCHAR(255) NOT NULL,
	avatar VARCHAR(255) NOT NULL
);
