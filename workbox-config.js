module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{png,xml,js,json,md,txt}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js'
};