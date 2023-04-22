const info = '" 0 1 3 6 8 9 12 ", " 0 2 3 6 7 9 12".';

const promise = new Promise((resolve, reject) => {
	console.log(0);
	const path = true;
	if(path) {
		resolve(path);
	}
	else {
		reject(path);
	}
});

promise
	.then((path) =>{
		console.log(1);
		return Promise.resolve(path);
	},
	(path) => {
		console.log(2);
		return Promise.resolve(path);
	})
	.then((path) =>{
		console.log(3);
		return Promise.reject(path);
	},
	(path) => {
		console.log(4, path);
	})
	.then((path) =>{
		console.log(5);
	},
	(path) => {
		console.log(6);
		if(path) {
			return Promise.reject(path);
		}
	})
	.then((path) =>{
		console.log(7);
		return Promise.resolve(path);
	},
	(path) => {
		console.log(8);
		return Promise.resolve(path);
	})
	.then((path) =>{
		console.log(9);
		return Promise.reject(path);
	},
	(path) => {
		console.log(10);
	})
	.then((path) =>{
		console.log(11);
	},
	(path) => {
		console.log(12);
	});