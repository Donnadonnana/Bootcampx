SELECT count(assistance_requests.id)as assistances_requests,
students.name as name
FROM assistance_requests
JOIN students ON students.id = student_id
WHERE name = 'Elliot Dickinson'
GROUP BY name;