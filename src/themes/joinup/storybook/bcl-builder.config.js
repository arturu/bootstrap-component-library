const path = require("path");
const stories = require("./stories/bcl-stories");

const nodeModules = path.resolve(__dirname, "../../../../node_modules");
const outputFolder = path.resolve(__dirname);

const excludePaths = [];
stories.forEach((story) => {
  excludePaths.push(`../../../**/${story}.story.js`);
});

module.exports = {
  copy: [
    {
      from: ["../../../**/*.story.js"],
      to: path.resolve(outputFolder, "bcl-stories"),
      options: { up: true, exclude: excludePaths },
    },
    {
      from: [
        path.resolve(
          nodeModules,
          "@openeuropa/bcl-storybook-default/.storybook/*.js"
        ),
      ],
      to: path.resolve(outputFolder, ".storybook"),
      options: { up: true },
    },
  ],
};