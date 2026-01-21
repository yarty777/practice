from pymongo import MongoClient

# Підключення до MongoDB
client = MongoClient(
    "mongodb+srv://ivandmytruk42_db_user:lwokr123@db.rdcvntl.mongodb.net/?appName=DB"
)

db = client["Practica"]

# Колекції
students_collection = db["students"]