from fastapi import APIRouter, HTTPException, Depends
from Models.student import Student
from database import students_collection
from auth.auth import get_current_user

router = APIRouter(prefix="/students", tags=["Students"])


@router.post("/")
def add_student(
    student: Student,
    user=Depends(get_current_user)
):
    if students_collection.find_one({"email": student.email}):
        raise HTTPException(status_code=400, detail="Student already exists")

    students_collection.insert_one(student.dict())
    return {"status": "student added"}


@router.get("/")
def get_students(user=Depends(get_current_user)):
    students = list(students_collection.find({}, {"_id": 0}))
    return students


@router.put("/{email}")
def update_student(
    email: str,
    student: Student,
    user=Depends(get_current_user)):
    result = students_collection.update_one(
        {"email": email},
        {"$set": student.dict()}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Student not found")

    return {"status": "student updated"}


@router.delete("/{email}")
def delete_student(
    email: str,
    user=Depends(get_current_user)):
    result = students_collection.delete_one({"email": email})

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Student not found")

    return {"status": "student deleted"}