// console.log('Connected!');

// for (let i = 1; i <= 10; i++) {
// 	console.log('Hello: ', i);
// }
// for (let i = 1; i <= 10; i += 3) {
// 	console.log('Hello: ', i);
// }
// for (let i = 1; i <= 20; i++) {
// 	console.log(`${i} x ${i} = ${i * i}`);
// }
// for (let i = 200; i >= 0; i -= 25) {
// 	console.log(i);
// }

const examScores = [ 98, 77, 84, 91, 57, 66 ];

for (let i = 0; i < examScores.length; i++) {
	console.log(i, examScores[i]);
}

const students = [
	{
		firstName: 'Zeus',
		grade: 86
	},
	{
		firstName: 'Artemis',
		grade: 97
	},
	{
		firstName: 'Hera',
		grade: 72
	},
	{
		firstName: 'Apollo',
		grade: 90
	}
];
let scoreTotal = 0;

for (let i = 0; i < students.length; i++) {
	scoreTotal += students[i].grade;
}
let averageScore = scoreTotal / students.length;
console.log(`The aveage score was ${averageScore}!`);

for (let i = 0; i < students.length; i++) {
	let student = students[i];
	console.log(`${student.firstName} scored ${student.grade}`);
}

const word = 'stressed';
let reversed = '';

for (let i = word.length - 1; i >= 0; i--) {
	reversed += word[i];
}
console.log(reversed);
