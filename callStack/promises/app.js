const btn = document.querySelector('button');

const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			} else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

moveX(btn, 300, 1000)
	.then(() => moveX(btn, 300, 1000))
	.then(() => moveX(btn, 300, 1000))
	.then(() => moveX(btn, 300, 1000))
	.then(() => moveX(btn, 300, 1000))
	.then(() => moveX(btn, 300, 1000))
	.catch(({ bodyBoundary, elRight }) => {
		console.log(`Body is only ${bodyBoundary}px wide.`);
		console.log(`But you tried to move to ${bodyBoundary + elRight}px`);
	});

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
