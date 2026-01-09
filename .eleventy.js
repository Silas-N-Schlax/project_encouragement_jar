module.exports = function(eleventyConfig) {
  // Add Passthrough Copy for CSS & JS
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js"); 
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPassthroughCopy("src/assets/files");  
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addCollection("all", function(collection) {
    return collection.getAll();
  });

  return {
    dir: {
      input: "src",  
      output: "_site", 
      includes: "_includes", 
      data: "_data" 
    }
  };
};