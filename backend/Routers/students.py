# Routers/students.py
from fastapi import APIRouter, HTTPException, Depends
from Models.student import Student
from database import students_collection # type: ignore
from auth.auth import get_current_user # type: ignore

router = APIRouter(prefix="/students", tags=["Students"])


# 🔐 тільки з JWT
@router.post("/")
def add_student(
    student: Student,
    user=Depends(get_current_user)
):
    students_collection.insert_one(student.dict())
    return {"status": "student added"}


@router.get("/")
def get_students(user=Depends(get_current_user)):
    return list(students_collection.find({}, {"_id": 0}))


@router.get("/{email}")
def get_student_by_email(
    email: str,
    user=Depends(get_current_user)
):
    student = students_collection.find_one(
        {"email": email},
        {"_id": 0}
    )

    if not student:
        raise HTTPException(status_code=404, detail="Student not found")

    return student


@router.put("/{email}")
def update_student(
    email: str,
    student: Student,
    user=Depends(get_current_user)
):
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
    user=Depends(get_current_user)
):
    result = students_collection.delete_one({"email": email})

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Student not found")

    return {"status": "student deleted"}
