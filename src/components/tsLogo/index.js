const el = require('react').createElement;
require('./tsLogo.css');

module.exports = function TSLogo() {
	/* ts-logo.svg
	 * <svg width="161" height="109" viewBox="0 0 161 109" xmlns="http://www.w3.org/2000/svg">
	 *   <path d="M72.5 1h-70C1 1 0 1.6 0 3v18c0 .8.5 1.6 1.4 2 .3 0 .7 0 1
	 *   .2H45v83c0 1.3 1 2.2 2.4 2.2h25c1.4 0 2.4-1 2.4-2.2V3c0-1.3-1-2-2.3-2m86
	 *   0h-70C87 1 86 1.8 86 3v103.4c0 1.3 1 2 2.4 2h25c1.4 0 2.4-.8
	 *   2.4-2v-83h42.6c.4 0 .7 0 1-.2 1-.3 1.4-1 1.4-2v-18c0-1.3-1-2.2-2.3-2.2"
	 *   fill-rule="evenodd"/>
	 * </svg>
	 *
	 * or in React:
	 */
	const path =
		'M72.5 1h-70C1 1 0 1.6 0 3v18c0 ' +
		'.8.5 1.6 1.4 2 .3 0 .7 0 1 .2H45v83c0 1.3 1 2.2 2.4 2.2h25c1.4 0 ' +
		'2.4-1 2.4-2.2V3c0-1.3-1-2-2.3-2m86 0h-70C87 1 86 1.8 86 3v103.4c0 1.3 1 2 2.4 2h25c1.4 ' +
		'0 2.4-.8 2.4-2v-83h42.6c.4 0 .7 0 1-.2 1-.3 1.4-1 1.4-2v-18c0-1.3-1-2.2-2.3-2.2';
	return el(
		'svg',
		{ className: 'ts-logo', viewBox: '0 0 161 109' },
		el('path', { d: path, fillRule: 'evenodd' })
	);
};
