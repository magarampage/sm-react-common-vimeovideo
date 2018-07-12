const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile = NODE_ENV === "production" ? "./dist/index.js" : "./lib/index.js";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'src/index.js',
	output: {
		file: outputFile,
		format: 'cjs'
	},
	// All the used libs needs to be here
	external: [
		'react',
		'react-proptypes'
	],
	plugins: [
		replace({
			"process.env.NODE_ENV": JSON.stringify(NODE_ENV)
		}),
		resolve(),
		babel({
			exclude: "node_modules/**",
			plugins: ['external-helpers']
		}),
		commonjs()
	],
};
