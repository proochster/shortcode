module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{html,png,xml,js,json,md,txt}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'assets/sw.js'
};