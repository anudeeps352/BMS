DROP TABLE IF EXISTS user CASCADE;
DROP TABLE IF EXISTS admintable CASCADE;
DROP TABLE IF EXISTS account CASCADE;
DROP TABLE IF EXISTS transactiontable CASCADE;
DROP TABLE IF EXISTS loan CASCADE;
DROP TABLE IF EXISTS loanrequest CASCADE;
DROP TABLE IF EXISTS manages CASCADE;

CREATE TABLE user(
userID CHAR(8),
user_name VARCHAR(25),
passwd VARCHAR(25),
age INT,
phone CHAR(10),
PRIMARY KEY(userID),
);

CREATE TABLE admintable(
adminID CHAR(8),
admin_name VARCHAR(25),
passwd VARCHAR(25),
PRIMARY KEY(userID),
);

CREATE TABLE account(
account_no CHAR(8),
userID CHAR(8),
account_type CHAR(1),
balance INT,
PRIMARY KEY(account_no),
FOREIGN KEY(userID) REFERENCES user(userID),
);

CREATE TABLE transactiontable(
transaction_id CHAR(10),
from_account CHAR(8),
to_account CHAR(8),
adminID CHAR(8),
transaction_type CHAR(1),
transaction_date DATE,
amount INT,
PRIMARY KEY(transaction_id),
FOREIGN KEY(from_account) REFERENCES account(account_no),
FOREIGN KEY(to_account) REFERENCES account(account_no),
FOREIGN KEY(adminID) REFERENCES admintable(adminID),
);

CREATE TABLE loan(
loanID CHAR(8),
userID CHAR(8),
amountremaining INT,
startdate DATE,
fixed_amount INT,
payments_remaining INT,
PRIMARY KEY(loanID),
FOREIGN KEY(userID) REFERENCES user(userID),
);

CREATE TABLE loanrequest(
userID CHAR(8),
approved_admin CHAR(8),
amount INT,
duration INT,
PRIMARY KEY(userID),
FOREIGN KEY(approved_admin) REFERENCES admintable(adminID),
);

CREATE TABLE manages(
loanID CHAR(8),
adminID CHAR(8),
PRIMARY KEY(userID,adminID)
FOREIGN KEY(loanID) REFERENCES loan(loanID),
FOREIGN KEY(adminID) REFERENCES admintable(adminID)
);
SELECT VERSION();
