DROP DATABASE IF EXISTS HomeBroker;

CREATE DATABASE HomeBroker;

USE HomeBroker;

CREATE TABLE Users (
    id INT NOT NULL auto_increment,
    user_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,    
    balance DECIMAL NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE Assets (
    id INT NOT NULL auto_increment,
    asset_name VARCHAR(50) NOT NULL,
    available_quantity INT NOT NULL,
    price DECIMAL NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE UsersAssets (
    user_id INT NOT NULL,
    asset_id INT NOT NULL,
    asset_quantity INT NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES Users (id)
        ON DELETE CASCADE,
    FOREIGN KEY (asset_id)
        REFERENCES Assets (id)
        ON DELETE CASCADE
)  ENGINE=INNODB;