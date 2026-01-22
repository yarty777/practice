from pymongo import MongoClient

# Підключення до MongoDB
client = MongoClient(
    "" # силка на монгодб 
)

db = client["Practica"]

# Колекції
students_collection = db["students"]
users_collection = db["users"]
teacher_collection = db["teacher"]