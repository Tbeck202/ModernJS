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
				'/users/1': {
					id: 1,
					username: 'Bilbo',
					upvotes: 360,
					city: 'Lisbon',
					topPostId: 454321
				},
				'/users/5': {
					id: 5,
					username: 'Esmerelda',
					upvotes: 571,
					city: 'Honolulu'
				},
				'/posts/454321': {
					id: 454321,
					title: 'Ladies and Gentlemen, may I introduce my pig, Hamlet'
				},
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

fakeRequest('/users')
	.then((res) => {
		console.log(res);
		const id = res.data[0].id;
		return fakeRequest(`/users/${id}`);
	})
	.then((res) => {
		console.log(res);
		const postId = res.data.topPostId;
		return fakeRequest(`/posts/${postId}`);
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(`Oh no!`, err);
	});

// const btn = document.querySelector('button');

// const moveX = (element, amount, delay, onSuccess, onFail) => {
// 	setTimeout(() => {
// 		const bodyBoundary = document.body.clientWidth;
// 		const elRight = element.getBoundingClientRect().right;
// 		const currLeft = element.getBoundingClientRect().left;
// 		if (elRight + amount > bodyBoundary) {
// 			onFail();
// 		} else {
// 			element.style.transform = `translateX(${currLeft + amount}px)`;
// 			onSuccess();
// 		}
// 	}, delay);
// };

// moveX(
// 	btn,
// 	100,
// 	1000,
// 	() => {
// 		//success
// 		moveX(
// 			btn,
// 			400,
// 			1000,
// 			() => {
// 				moveX(
// 					btn,
// 					700,
// 					1000,
// 					() => {
// 						//success
// 						console.log('How did you make it this far??');
// 					},
// 					() => {
// 						//fail
// 						alert(`cannot move further!`);
// 					}
// 				);
// 			},
// 			() => {
// 				//fail
// 				alert(`cannot move further!`);
// 			}
// 		);
// 	},
// 	() => {
// 		//fail
// 		alert(`cannot move further!`);
// 	}
// );
