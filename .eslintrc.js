module.exports = {
	extends: ["airbnb", "plugin:prettier/recommended"],
	rules: {
		"react/jsx-filename-extension": "off",
		"react/forbid-prop-types": "off",
		"jsx-a11y/anchor-is-valid": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		"jsx-a11y/no-static-element-interactions": "off",
		"jsx-a11y/interactive-supports-focus": "off",
		"jsx-a11y/anchor-is-valid": "off",
		"react/no-array-index-key": "off",
		"no-console": "off",
		"prettier/prettier": "error",
		"react/jsx-one-expression-per-line": "off",
		"no-unused-vars": "off",
		//window的兼容性问题
		"linebreak-style": 0,
		"react/jsx-indent": [
			// 解决react里面的缩进问题
			"error",
			"tab",
		],
		"react/jsx-indent-props": [
			// 解决react里面的缩进问题
			"error",
			"tab",
		],
	},
	env: {
		browser: true,
	},
};
