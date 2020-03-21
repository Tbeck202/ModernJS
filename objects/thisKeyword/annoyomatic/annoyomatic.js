console.log('we connected homie');

const annoyer = {
	phrases: [ 'literaly!', 'MAGA!', "I can't even!", 'YOLO!' ],
	pickPhrase() {
		const { phrases } = this;
		const idx = Math.floor(Math.random() * phrases.length);
		return phrases[idx];
	},
	start() {
		console.log('Okay, you asked for it!');
		//since we use an arrow function, 'this' still references the 'annoyer' object
		//had we used a 'traditional' function, 'this' would have refenced the 'window'
		this.timerId = setInterval(() => {
			//timerId gets saved to the 'annoyer' object
			console.log(this.pickPhrase());
		}, 2000);
	},
	stop() {
		console.log("Okay, I'll stop!");
		//timerId is used to stop the interval
		clearInterval(this.timerId);
	}
};
