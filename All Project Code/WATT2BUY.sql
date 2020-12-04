CREATE DATABASE WATT2BUY;

USE WATT2BUY; 
CREATE TABLE "USER" (
  userName VARCHAR(50), -- primary key
  email VARCHAR(50),
  hash INT NOT NULL,
  role VARCHAR(10), -- admin / manager / vendor / customer
  registeredAt timestamp  NOT NULL,
  lastLogin timestamp ,
  PRIMARY KEY (userName)
);
  
CREATE TABLE "SUBSCRIBE"(
  email VARCHAR(50),
  PRIMARY KEY (email)
);

CREATE TABLE RESULTS (
  userName VARCHAR(50),
  results VARCHAR(255) NOT NULL,
  PRIMARY KEY (userName)
);
  
  
  
  CREATE TABLE PRODUCT (
  id INT NOT NULL ,
  userName VARCHAR (50) NOT NULL, -- the user that links with the product
  title VARCHAR(75) NOT NULL,
  description TEXT NULL,
  type INT NOT NULL DEFAULT 0,
  sku VARCHAR(50) NOT NULL, -- stock keeping unit
  price FLOAT NOT NULL DEFAULT 0,
  discount FLOAT NOT NULL DEFAULT 0,
  quantity SMALLINT NOT NULL DEFAULT 0, -- available quantity
  available BOOLEAN NOT NULL,
  createdAt timestamp NOT NULL,
  updatedAt timestamp NULL DEFAULT NULL,
  publishedAt timestamp NULL DEFAULT NULL,
  saleStartsAt timestamp NULL DEFAULT NULL,
  saleEndsAt timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_product_user FOREIGN KEY (userName) 
  REFERENCES "USER" (userName)
);
  
  
CREATE TABLE CATEGORY (
  id INT NOT NULL ,
  title VARCHAR(75) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE PRODUCT_CATEGORY (
  productId INT NOT NULL,
  categoryId INT NOT NULL,
  PRIMARY KEY (productId, categoryId),
  CONSTRAINT fk_pc_product
    FOREIGN KEY (productId)
    REFERENCES PRODUCT (id),
  CONSTRAINT fk_pc_category
    FOREIGN KEY (categoryId)
    REFERENCES category (id)
);


CREATE TABLE CART (
  id INT NOT NULL ,
  userName  VARCHAR(50) DEFAULT NULL,
  sessionId VARCHAR(100) NOT NULL, -- session id that links with the cart
  token VARCHAR(100) NOT NULL, -- unique token that link with the cart over multiple sessions
  status VARCHAR(50) NOT NULL, -- NEW / CART / CHECKOUT / PAID / COMPLETE
  firstName VARCHAR(50) NULL DEFAULT NULL,
  lastName VARCHAR(50) NULL DEFAULT NULL,
  mobile VARCHAR(15) NULL,
  email VARCHAR(50) NULL,
  address1 VARCHAR(50) NULL DEFAULT NULL,
  address2 VARCHAR(50) NULL DEFAULT NULL,
  city VARCHAR(50) NULL DEFAULT NULL,
  state VARCHAR(50) NULL DEFAULT NULL,
  country VARCHAR(50) NULL DEFAULT NULL,
  createdAt timestamp NOT NULL,
  updatedAt timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_cart_user
    FOREIGN KEY (userName)
    REFERENCES "USER" (userName)
);



CREATE TABLE CART_ITEM (
  id INT NOT NULL,
  productId INT NOT NULL,
  cartId INT NOT NULL,
  sku VARCHAR(100) NOT NULL,
  price FLOAT NOT NULL,
  discount FLOAT NOT NULL DEFAULT 0,
  quantity INT NOT NULL DEFAULT 0,
  active BOOLEAN NOT NULL,
  createdAt timestamp NOT NULL,
  updatedAt timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_cart_item_product
    FOREIGN KEY (productId)
    REFERENCES PRODUCT (ID),
  CONSTRAINT fk_cart_item_cart
    FOREIGN KEY (cartId)
    REFERENCES CART (ID)
);



CREATE TABLE "ORDER" (
  id INT NOT NULL ,
  userName VARCHAR(50) NULL DEFAULT NULL,
  sessionId VARCHAR(100) NOT NULL,
  token VARCHAR(100) NOT NULL,
  status INT NOT NULL DEFAULT 0,
  subTotal FLOAT NOT NULL DEFAULT 0,
  itemDiscount FLOAT NOT NULL DEFAULT 0,
  tax FLOAT NOT NULL DEFAULT 0,
  shipping FLOAT NOT NULL DEFAULT 0,
  total FLOAT NOT NULL DEFAULT 0,
  discount FLOAT NOT NULL DEFAULT 0,
  grandTotal FLOAT NOT NULL DEFAULT 0,
  firstName VARCHAR(50) NULL DEFAULT NULL,
  lastName VARCHAR(50) NULL DEFAULT NULL,
  mobile VARCHAR(15) NULL,
  email VARCHAR(50) NULL,
  address1 VARCHAR(50) NULL DEFAULT NULL,
  address2 VARCHAR(50) NULL DEFAULT NULL,
  city VARCHAR(50) NULL DEFAULT NULL,
  state VARCHAR(50) NULL DEFAULT NULL,
  country VARCHAR(50) NULL DEFAULT NULL,
  createdAt timestamp NOT NULL,
  updatedAt timestamp NULL DEFAULT NULL,
  content TEXT NULL DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_order_user
    FOREIGN KEY (userName)
    REFERENCES "USER" (userName)
);


CREATE TABLE ORDER_ITEM (
  id INT NOT NULL ,
  productId INT NOT NULL,
  orderId INT NOT NULL,
  sku VARCHAR(100) NOT NULL,
  price FLOAT NOT NULL DEFAULT 0,
  discount FLOAT NOT NULL DEFAULT 0,
  quantity SMALLINT NOT NULL DEFAULT 0,
  createdAt timestamp NOT NULL,
  updatedAt timestamp NULL DEFAULT NULL,
  content TEXT NULL DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_order_item_product
    FOREIGN KEY (productId)
    REFERENCES PRODUCT (id),
  CONSTRAINT fk_order_item_order
  FOREIGN KEY (orderId)
  REFERENCES "ORDER" (id)
);




CREATE TABLE "TRANSACTION" (
  id INT NOT NULL ,
  userName VARCHAR(50) NOT NULL,
  orderId INT NOT NULL,
  type VARCHAR(50) NOT NULL DEFAULT 0, -- credit / debit / paypal 
  status VARCHAR(50) NOT NULL DEFAULT 0, -- NEW / CANCELLED / FAILED / PENDING / DECLINED / REJECTED / COMPLETE
  createdAt TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_transaction_user
    FOREIGN KEY (userName)
    REFERENCES "USER" (userName)
);


