SELECT name,email,phone 
FROM students
WHERE github IS Null
AND end_date IS NOT NULL;