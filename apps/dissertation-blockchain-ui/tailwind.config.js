const TailwindConfig = require('../../libs/ui-kit/util/src/tailwind/tailwind.config');
const { join } = require("path");
const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");

module.exports = {
	...TailwindConfig,
	content: [
		...TailwindConfig.content,
		...createGlobPatternsForDependencies(__dirname),
		// relative path by consumer app
		join(
			__dirname,
			'{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
		),
	]
};
