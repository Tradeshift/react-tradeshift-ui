function debounce(fn, delay) {
	let timer;
	return function wrapper(...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
}

export default {
	debounce
};
