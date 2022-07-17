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

INSERT INTO HomeBroker.Users (user_name, email, password, balance) VALUES
    ("José Henrique", "jose42h@gmail.com", "jh272792", 100),
    ("Maria da Silva", "mari20s@gmail.com", "4421ms2ms", 500);

INSERT INTO HomeBroker.Assets (asset_name, available_quantity, price) VALUES
    ("PETR4", 200, 55),
    ("AZUL4", 200, 21),
    ("VALE4", 200, 34),
    ("MGLU3", 200, 26);

-- INSERT INTO HomeBroker.UsersAssets (sale_id, product_id, quantity) VALUES
--     (1, 1, 5),
--     (1, 2, 10),
--     (2, 3, 15);
