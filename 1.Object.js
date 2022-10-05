let person = {
	first_name: 'John',
	last_name: 'Doe',

	//method
	getPersonDetails: function() {
		return `The name of the person is
				${person.first_name} ${person.last_name}`
	},
}

console.log(person.first_name);
console.log(person.getPersonDetails());


// John
// The name of the person is
// 				John Doe
