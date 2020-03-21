console.log("Ahhhhhh shit dog we're connected!");

//VALUE OF 'this' IS SET TO THE person (parent) OBJECT
const person = {
	first: 'Cherilyn',
	last: 'Sarkisian',
	nickName: 'Cher',
	fullname() {
		const { first, last, nickName } = this;
		return `${first} ${last} AKA: ${nickName}`;
	},
	printBio() {
		const fullName = this.fullname();
		console.log(`${fullName} is a singer!`);
	},
	//AN ARROW FUNCTION DOES NOT WORK THE SAME WAY AS A "TRADITIONAL" FUNCTION
	//'this' WILL STILL REFERENCE THE WINDOW SO 'this' WILL BE UNDEFINED
	laugh: () => {
		console.log(this);
		console.log(`${this.nickName} says HAHAHAHAHAHA`);
	}
};

//INVOCATION CONTEXT===========================
//THE LINE BELOW ACTUALLY REFERNECES THE WINDOW
const printBio = person.printBio;
// calling printBio() would actually call the fuction on the window obeject.
// it would be the same as writing window.printBio()
// when using 'this', the value of 'this' comes from whatever is to the left of the dot notation
// so, person.printBio() meant that 'this' is referenceing the person object
// whereas printBio() references the window
