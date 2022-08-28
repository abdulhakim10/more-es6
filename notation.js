const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 10,
    marks: {
        math: 78,
        physics: 68,
        chemistry: 89
    },
}
// 1
const math = student.marks.math;
const physics = student.marks.physics;

// 2
const chemistry = student['marks']['chemistry'];

// 3
const subject = 'chemistry';
const subjectMarks = student.marks[subject];

console.log(math, physics, subjectMarks);