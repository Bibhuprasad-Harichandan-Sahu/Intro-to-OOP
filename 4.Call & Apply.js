var pokemon = {
	firstname: 'Pika',
	lastname: 'Chu ',
	getPokeName: function() {
		var fullname = this.firstname + this.lastname;
		return fullname;
	}
};

var pokemonName = function(snack, hobby) {
	console.log(this.getPokeName()+' loves '+ snack + ' and ' + hobby);
};

pokemonName.call(pokemon, 'sushi', 'algorithms'); // Pika Chu loves sushi and algorithms
pokemonName.apply(pokemon, ['sushi', 'algorithms']); // Pika Chu loves sushi and algorithms