// function fullName(first_name, last_name) {
//   return first_name + " " + last_name;
// }
//
// console.log(fullName("zizo", "ribeiro"));

fuction gradeGenerator(grade: number) : string {
  if (grade < 60) {
    return 'F';
  } else if (grade >= 60 && grade < 70) {
    return 'D';
  } else if (grade >= 70 && grade < 80) {
    return 'c';
  } else if (grade >= 80 && grade < 90) {
    return 'b';
  } else {
    return 'A';
  }
}

console.log(gradeGenerator(45));
console.log(gradeGenerator(100));
console.log(gradeGenerator(80));
