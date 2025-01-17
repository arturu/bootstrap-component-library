const drupalAttribute = require("drupal-attribute");

module.exports = {
  sidebar: {
    title: "Page content",
    id: "bcl-inpage-navigation",
    attributes: new drupalAttribute().addClass(["d-none", "d-lg-block"]),
    links: [
      {
        label: "Project details",
        path: "#project-details",
      },
      {
        label: "Description",
        path: "#description",
      },
      {
        label: "Partner organisations",
        path: "#partners",
      },
    ],
  },
};
