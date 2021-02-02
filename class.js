// class student {
//     constructor(sId, sName){
//         this.school =' khan academy ';
//         this.id = sId;

//         this.name = sName;
//     }
// }

// const student1 = new student(22, "jamir ali");
// const student2 = new student(23, "amir ali");
// const student3 = new student(25, "bashirullah");
// console.log(student1.name, student2.id, student3);

class student {
    constructor(sId, sName , sAge) {
        this.Id = sId;
        this.name = sName;
        this.age = sAge;
    }
}
const student1 = new student(1, "kamaluddin", 30);
const student2 = new student(2, 'fakrul islam', 23);
const student3 = new student( 3, 'nazmul hasan', 25);
console.log(student1)