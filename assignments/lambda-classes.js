// CODE here for your Lambda Classes
function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
        speak() {
            return `Hello, my name is ${this.name}, and I am from ${this.location}`;
        }
    }  
    

class Student extends Person{
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listsSubjects() {
        return(`${this.favSubjects}`);
    }
    PRAssignment(subject) {
        `${Student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        `${Student.name} has begun sprint challeng on ${subject}`
    }
}
class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(Student, subject) {
        
        return `${Student.name} receives a perfect score on ${subject}`;
    }
        graduate(student){
        let randomN = Math.floor(Math.random() * 201) - 100 + student.grade;
        let newGrade = randomN;
        if (newGrade <= 69) {
            return `${student.name} has not passed.`
        } else {
            return `${student.name} has passed.`
        }

    }
 
}


class ProjectManager extends Instructor{
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standup(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standup times!`)
    }
    debugsCode(Student, subject) {
        console.log(`${this.name} debugs ${Student.name}'s code on ${subject}`)
    }
}
const pers1 = new Student({
    name: 'Fred',
    location: 'Bedrock',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    previousBackground: `Rock Quarry`,
    className: `WebBC`,
    favSubjects: ["Bowling", "Eating", "Spending Clams"],
    grade: getRandomIntInclusive()
        
}); 


console.log(pers1);

const pers2 = new Instructor({
    name: 'Barney',
    location: 'Bedrock',
    age: 32,
    gender: 'male',
    favLanguage: 'Ruby',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the butter`
});

console.log(pers2.graduate(pers1))

const pers3 = new Student({
    name: 'Pebbles',
    location: 'Bedrock',
    age: 4,
    gender: 'female',
    favLanguage: 'Java',
    className: `WebBC`,
    favSubjects: ["Recess", "Playtime", "Naptime"],
    grade: getRandomIntInclusive()
});

console.log(pers3)

const pers4 = new Instructor({
    name: 'Dino',
    location: 'Bedrock',
    age: 5,
    gender: 'male',
    favLanguage: 'Dinosaur',
    specialty: 'Tackling Fred',
    catchPhrase: `**gibberish**`
});
  
const pers5 = new ProjectManager({
    name: 'Betty',
    location: 'Bedrock',
    age: 28,
    gender: 'female',
    favLanguage: 'Diamond',
    specialty: 'Couponing',
    catchPhrase: `Oh, Barney!`
});

const pers6 = new ProjectManager({
    name: 'Sharon',
    location: 'Bedrock',
    age: 32,
    gender: 'female',
    favLanguage: 'BlueSky',
    specialty: 'UX',
    catchPhrase: `Oh waffles!`
});