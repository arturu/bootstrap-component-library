module.exports = {
  variant: "horizontal",
  items: [
    {
      term: {
        label: '<p class="mb-0 d-inline-block">Only title label with icon</p>',
        icon: {
          name: "geo-alt-fill",
          size: "xs",
          path: "/icons.svg",
        },
      },
      definition: "Description text goes here.",
    },
    {
      term: [
        {
          label: '<p class="mb-0">First title label</p>',
        },
        {
          label: '<p class="mb-0 d-inline-block">Second title label</p>',
          icon: {
            name: "geo-alt-fill",
            size: "xs",
            path: "/icons.svg",
          },
        },
      ],
      definition: '<p class="mb-0">Description text goes here.',
    },
    {
      term: {
        label: "Only title label",
      },
      definition: [
        {
          label: "<p class='mb-2'>Description text goes here.</p>",
        },
        {
          label: "<p class='mb-2'>Description text goes here.</p>",
        },
      ],
    },
  ],
};
