module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};
eleventyConfig.addWatchTarget("./src/sass/");

