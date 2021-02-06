module.exports = {
	preset: 'ts-jest',
	transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
	},
	moduleFileExtensions: [
		"ts",
		"tsx",
		"js",
		"jsx",
		"json",
		"node"
	],
	modulePaths: [
		"<rootdir>/src",
		"<rootdir>/node_modules"
	],
    testPathIgnorePatterns: [
        "./.next/",
        "./node_modules/"
    ],
}