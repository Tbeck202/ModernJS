// const makeDogProm = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const rand = Math.random();
// 			if (rand < 0.5) {
// 				resolve();
// 			} else {
// 				reject();
// 			}
// 		}, 5000);
// 	});
// };

// makeDogProm()
// 	.then(() => {
// 		console.log('Yay we got a dog!');
// 	})
// 	.catch(() => {
// 		console.log(':( No dog');
// 	});

const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users': [ { id: 1, username: 'Bilbo' }, { id: 5, username: 'Esmerelda' } ],
				'/about': 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data });
			} else {
				reject({ status: 404 });
			}
		}, 1000);
	});
};

fakeRequest('/about')
	.then((res) => {
		console.log('Status Code:', res.status);
		console.log('Data:', res.data);
		console.log('Request worked!');
	})
	.catch((res) => {
		console.log(res.status);
		console.log('Request failed:(');
	});
fakeRequest('/dogs')
	.then((res) => {
		console.log('Status Code:', res.status);
		console.log('Data:', res.data);
		console.log('Request worked!');
	})
	.catch((res) => {
		console.log(res.status);
		console.log('Request failed:(');
	});
