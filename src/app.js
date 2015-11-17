const kata = {
	'name': 'Kata',
	'sex': 'female'
};

((kata) => {
	console.log(kata);
})(kata);

let arrayyy = ['1', '2', 'balls'];

console.log(arrayyy.map(item => item + ' modif'));