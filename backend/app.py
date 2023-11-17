# from flask import Flask, request,jsonify
# from flask_sqlalchemy import SQLAlchemy
# #from flask_cors import CORS
# from werkzeug.security import generate_password_hash, check_password_hash
# from datetime import datetime
# import os
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)
# #app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:pass@localhost:5432/projectdb'
# db = SQLAlchemy(app)


# class User(db.Model):
#     __tablename__='users'
    
#     UserID=db.Column(db.Integer,primary_key=True)
#     Username=db.Column(db.String(80),unique=True,nullable=False)
#     Password=db.Column(db.String(120),unique=False,nullable=False)
#     Age=db.Column(db.Integer,unique=False)
#     Phone=db.Column(db.String(10),unique=False)
        
#     def __repr__(self):
#         return f"User('{self.Username}')"
    
    
# class Admin(db.Model):
#     __tablename__='admins'
    
#     AdminID=db.Column(db.Integer,primary_key=True)
#     Name=db.Column(db.String(120),unique=False,nullable=False)
#     Password=db.Column(db.String(120),unique=False,nullable=False)
    
#     def __repr__(self):
#         return f"Admin('{self.Name}')"
    
    
# class Account(db.Model):
#     __tablename__='accounts'
    
#     AccountNo=db.Column(db.Integer,primary_key=True)
#     Type=db.Column(db.String(20),unique=False,nullable=False)
#     Balance=db.Column(db.Integer,unique=False,nullable=False,default=0)
#     UID=db.Column(db.Integer,db.ForeignKey('users.UserID'),unique=False,nullable=False)
    
#     def __repr__(self):
#         return f"Account('{self.AccountNo}')"
    
    
# class Transaction(db.Model):
#     __tablename__='transactions'
    
#     TransactionID=db.Column(db.Integer,primary_key=True)
#     FromAccount=db.Column(db.Integer,db.ForeignKey('accounts.AccountNo'),unique=False,nullable=False)
#     ToAccount=db.Column(db.Integer,db.ForeignKey('accounts.AccountNo'),unique=False,nullable=False)
#     AdminID=db.Column(db.Integer,db.ForeignKey('admins.AdminID'),unique=False,default=0)
#     Type=db.Column(db.String(20),unique=False,nullable=False)
#     Amount=db.Column(db.Integer,unique=False,nullable=False)
#     Date=db.Column(db.DateTime,default=datetime.utcnow)
    
#     def __repr__(self):
#         return f"Transaction('{self.TransactionID}')"
    
    
# class LoanRequest(db.Model):
#     __tablename__='loanrequest'
    
#     User=db.Column(db.Integer,db.ForeignKey('users.UserID'),primary_key=True)
#     Amount=db.Column(db.Integer,unique=False,nullable=False)
#     Duration=db.Column(db.Integer,unique=False,nullable=False)
#     Admin=db.Column(db.Integer,db.ForeignKey('admins.AdminID'),unique=False,nullable=False)
    
#     def __repr__(self):
#         return f"LoanRequest('{self.User}')"
    
    
# class Loan(db.Model):
#     __tablename__='loans'
    
#     LoanID=db.Column(db.Integer,primary_key=True)
#     AmountRemaining=db.Column(db.Integer,unique=False,nullable=False)
#     FixedAmount=db.Column(db.Integer,unique=False,nullable=False)
#     PaymentsRemaining=db.Column(db.Integer,unique=False,nullable=False)
#     User=db.Column(db.Integer,db.ForeignKey('users.UserID'),nullable=False,unique=False)
#     StartDate=db.Column(db.DateTime,default=datetime.utcnow)
    
#     def __repr__(self):
#         return f"Loan('{self.LoanID}')"
    

# @app.route('/api/userlogin',methods=['POST'])
# def userlogin():
#     data=request.get_json()
#     userid=data['UserID']
#     password=data['Password']
#     user=User.query.filter_by(UserID=userid).first()
#     if(user and user.Password==password):
#         return jsonify({'message':'success'})
#     return jsonify({'message':'failure'}),401

# def initialize_database():
#     with app.app_context():
#         try:
#             db.create_all()
#             def_admin = Admin(AdminID='007', Name='Master', Password='password')
#             db.session.add(def_admin)
#             db.session.commit()
#             print("Database initialized.")
#         except Exception as e:
#             print(f"An error occurred while initializing the database: {e}")
            
   


# if __name__=="__main__":
#     initialize_database()
#     app.run()

from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)
#app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:pass@localhost:5432/projectdb'
db = SQLAlchemy(app)


class User(db.Model):
    __tablename__='users'
    
    UserID=db.Column(db.Integer,primary_key=True)
    Username=db.Column(db.String(80),unique=True,nullable=False)
    Password=db.Column(db.String(120),unique=False,nullable=False)
    Age=db.Column(db.Integer,unique=False)
    Phone=db.Column(db.String(10),unique=False)
        
    def __repr__(self):
        return f"User('{self.Username}')"
    
    
class Admin(db.Model):
    __tablename__='admins'
    
    AdminID=db.Column(db.Integer,primary_key=True)
    Name=db.Column(db.String(120),unique=False,nullable=False)
    Password=db.Column(db.String(120),unique=False,nullable=False)
    
    def __repr__(self):
        return f"Admin('{self.Name}')"
    
    
class Account(db.Model):
    __tablename__='accounts'
    
    AccountNo=db.Column(db.Integer,primary_key=True)
    Type=db.Column(db.String(20),unique=False,nullable=False)
    Balance=db.Column(db.Integer,unique=False,nullable=False,default=0)
    UID=db.Column(db.Integer,db.ForeignKey('users.UserID'),unique=False,nullable=False)
    
    def __repr__(self):
        return f"Account('{self.AccountNo}')"
    
    
class Transaction(db.Model):
    __tablename__='transactions'
    
    TransactionID=db.Column(db.Integer,primary_key=True)
    FromAccount=db.Column(db.Integer,db.ForeignKey('accounts.AccountNo'),unique=False,nullable=False)
    ToAccount=db.Column(db.Integer,db.ForeignKey('accounts.AccountNo'),unique=False,nullable=False)
    AdminID=db.Column(db.Integer,db.ForeignKey('admins.AdminID'),unique=False,default=0)
    Type=db.Column(db.String(20),unique=False,nullable=False)
    Amount=db.Column(db.Integer,unique=False,nullable=False)
    Date=db.Column(db.DateTime,default=datetime.utcnow)
    
    def __repr__(self):
        return f"Transaction('{self.TransactionID}')"
    
    
class LoanRequest(db.Model):
    __tablename__='loanrequest'
    
    User=db.Column(db.Integer,db.ForeignKey('users.UserID'),primary_key=True)
    Amount=db.Column(db.Integer,unique=False,nullable=False)
    Duration=db.Column(db.Integer,unique=False,nullable=False)
    Admin=db.Column(db.Integer,db.ForeignKey('admins.AdminID'),unique=False,nullable=False)
    
    def __repr__(self):
        return f"LoanRequest('{self.User}')"
    
    
class Loan(db.Model):
    __tablename__='loans'
    
    LoanID=db.Column(db.Integer,primary_key=True)
    AmountRemaining=db.Column(db.Integer,unique=False,nullable=False)
    FixedAmount=db.Column(db.Integer,unique=False,nullable=False)
    PaymentsRemaining=db.Column(db.Integer,unique=False,nullable=False)
    User=db.Column(db.Integer,db.ForeignKey('users.UserID'),nullable=False,unique=False)
    StartDate=db.Column(db.DateTime,default=datetime.utcnow)
    
    def __repr__(self):
        return f"Loan('{self.LoanID}')"
    
    
from flask import request, jsonify


# User Login route
@app.route('/api/userlogin', methods=['POST'])
def userlogin():
    data = request.get_json()
    user = User.query.filter_by(UserID=data['UserID']).first()
    if user and user.Password == data['Password']:
        return jsonify({'message': 'Login successful', 'UserID': user.UserID})
    return jsonify({'message': 'Invalid username or password'}), 

#try
# Admin Login route
@app.route('/adminlogin', methods=['POST'])
def adminlogin():
    data = request.json
    admin = User.query.filter_by(AdminID=data['AdminID'])
    if admin and admin.Password == data['Password']:
        return jsonify({'message': 'Login successful', 'AdminID': admin.AdminID})
    return jsonify({'message': 'Invalid username or password'}), 401


#User Details Route
@app.route('/history', methods=['GET'])
def history():
    id = request.args.get('UserID')
    print("User id =", id)

    accs = Accounts.query.filter_by(UID=id).all()
    serialized_accounts = [serialize_account(account) for account in accs]
    
    
    
    
    
    
    
    
    
    

@app.route('/')
def index():
    return "<h1 style='color : red'>hello world</h1>"

def initialize_database():
    with app.app_context():
        try:
            db.create_all()
            def_admin = Admin(AdminID='007', Name='Master', Password='password')
            db.session.add(def_admin)
            db.session.commit()
            print("Database initialized.")
        except Exception as e:
            print(f"An error occurred while initializing the database: {e}")
            
   


if __name__=="__main__":
    initialize_database()
    app.run()