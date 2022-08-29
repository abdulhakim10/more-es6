// common class
class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedBack() {
        console.log(`${this.name} Thank you for your feedback`);
    }

}

class Instructor extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'Web Team'

    constructor(name, location) {
        super(name, location);
    }

    startSupportSession(time) {
        console.log(`start support session at ${time}`);
    }

    creatQuiz(module) {
        console.log(`please creat quiz ${module}`);
    }

}

class Developer extends TeamMember {

    designation = 'Web Developer'
    team = 'Developer Team'
    tech;

    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }

    developFeature(feature) {
        console.log(`develop the ${feature}`);
    }

    release(version) {
        console.log(` release the virsion ${version}`);
    }

}

class JobPlacement extends TeamMember {
    designation = 'Job placement commandos'
    team = 'Job placement Team'
    region;

    constructor(name, location) {
        super(name, location);
        this.region = this.region;
    }

    provideResume(feature) {
        console.log(`start support session at ${feature}`);
    }

    prepareStudents(module) {
        console.log(`please creat quiz ${module}`);
    }

}

const tusar = new Developer('Tusar', 'Dhaka', 'React');
console.log(tusar);
