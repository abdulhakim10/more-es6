// syntactic sugar
class Instructor {
    name;
    designation = 'Web Course Instructor'
    team = 'Web Team'
    location;

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    startSupportSession(time) {
        console.log(`start support session at ${time}`);
    }

    creatQuiz(module) {
        console.log(`please creat quiz ${module}`);
    }

}

const tusar = new Instructor('Tusar', 'Dhaka')
console.log(tusar);
tusar.startSupportSession('7.00');
tusar.creatQuiz(22);
