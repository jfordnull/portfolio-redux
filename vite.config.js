export default {
	root: 'src/',
	publicDir: '../static/',
	server:
	{
		host: true,	
		open: true
	},
	build:
	{
		outDir: '../dist',	
		emptyOutDir: true,
		sourcemap: true
	
	},
	// base: '/portfolio-redux/' Uncomment to host from Github Pages w/out custom domain
};