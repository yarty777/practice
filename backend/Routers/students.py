from fastapi import APIRouter
from Models.student import Student
from main import students_collection

router = APIRouter(prefix="/students", tags=["Students"])

@router.post("/")
def add_student(student: Student):
    students_collection.insert_one(student.dict())
    return {"status": "student added to MongoDB"}

@router.get("/")
def get_students():
    return list(students_collection.find({}, {"_id": 0}))