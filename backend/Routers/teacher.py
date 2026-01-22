from fastapi import APIRouter, HTTPException, Depends
from Models.teacher import Teacher
from database import teacher_collection
from auth.auth import get_current_user

router = APIRouter(prefix="/teachers", tags=["Techers"])


@router.post("/")
def add_teacher(
    teacher: Teacher,
    user=Depends(get_current_user)
):
    if teacher_collection.find_one({"email": teacher.email}):
        raise HTTPException(status_code=400, detail="Teacher already exists")

    teacher_collection.insert_one(teacher.dict())
    return {"status": "teacher added"}


@router.get("/")
def get_teacher(user=Depends(get_current_user)):
    teacher = list(teacher_collection.find({}, {"_id": 0}))
    return teacher


@router.put("/{email}")
def update_student(
    email: str,
    teacher: Teacher,
    user = Depends(get_current_user)):
    result = teacher_collection.update_one(
        {"email": email},
        {"$set": teacher.dict()}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Teacher not found")

    return {"status": "teacher updated"}


@router.delete("/{email}")
def delete_teacher(
    email: str,
    user=Depends(get_current_user)):
    result = teacher_collection.delete_one({"email": email})

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Teacher not found")

    return {"status": "teacher deleted"}