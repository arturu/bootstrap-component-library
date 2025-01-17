import withCode from "@openeuropa/storybook-addon-code";
import { withDesign } from "storybook-addon-designs";

import drupalAttribute from "drupal-attribute";
import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-fact-figures/data.js";
import factFigures from "@openeuropa/bcl-fact-figures/fact-figures.html.twig";

const linkMore = { ...demoData.link_more };
const getArgs = (data) => {
  return {
    variant: "default",
    title: data.title,
    responsive_columns: 3,
    more: true,
    display_icons: true,
    title_tag: data.title_tag || "h2",
  };
};

const getArgTypes = () => {
  return {
    variant: {
      type: { name: "select" },
      options: ["default", "block"],
      description: "Variant of the composition",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
        category: "Content",
      },
    },
    title: {
      type: { name: "string" },
      description: "Title of the block",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    title_tag: {
      name: "title tag",
      type: { name: "string" },
      description: "Html tag of the title",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "h2" },
        category: "Content",
      },
    },
    display_icons: {
      name: "icons visibility",
      type: { name: "boolean" },
      description: "Toggle icon visibility",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Content",
      },
    },
    more: {
      name: "link in the footer",
      type: { name: "boolean" },
      description: "Toggle visibility of the more link",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
        category: "Content",
      },
    },
    responsive_columns: {
      name: "columns number",
      type: { name: "range" },
      control: {
        type: "range",
        steps: 1,
        min: 1,
        max: 3,
      },
      description: "One two or three columns layout",
      table: {
        type: { summary: "integer" },
        defaultValue: { summary: 3 },
        category: "Layout",
      },
    },
  };
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  data.attributes.removeClass([
    `bcl-fact-figures--${data.variant}`,
    "text-primary",
  ]);

  if (!args.more) {
    delete data.link_more;
    delete args.more;
  } else {
    if (!data.link_more) {
      data.link_more = linkMore;
    }
  }

  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Fact and Figures",
  decorators: [withCode, withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=6012%3A69751",
      },
    ],
  },
};

export const Default = (args) =>
  factFigures(applyArgs(correctPaths(demoData), args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes();
