const withNextra = require("nextra")({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.js",
	unstable_flexsearch: true,
	unstable_staticImage: false,
});

module.exports = withNextra({
	experiments: {
		esmExternals: true,
	},
	async redirects() {
		return [
			{
				source: "/",
				destination: "/data-analyst",
				permanent: true,
			},
		];
	},
});
