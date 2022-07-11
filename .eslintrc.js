module.exports = {
	env: {
		'browser': true,
		'es2021': true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
  settings: {
    react: {
      version: 'detect'
    }
  },
	ignorePatterns: [
        "/.expo/*",
		"/.eslintrc.js",
		"/babel.config.js"
    ],
	plugins: [
		'react'
	],
	rules: {
		indent: [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'always'
		],
    "react/react-in-jsx-scope": "off"
	}
};
