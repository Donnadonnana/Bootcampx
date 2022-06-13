const { Pool } = require('pg');

const pool = new Pool({
  user: 'donnahuang',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort, count(assistance_requests) as total_assistances
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
GROUP BY teachers.name,cohorts.name
ORDER BY teacher;
`;
pool.query(queryString)
  .then(
  res => {
      res.rows.forEach(user => {
    console.log(`${user.cohort} : ${user.teacher}`);
  })
})

  .catch(err => console.error('query error', err.stack));