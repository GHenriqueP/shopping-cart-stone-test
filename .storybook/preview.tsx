import type { Preview } from "@storybook/react";
import React from "react";
import "../src/app/globals.css";
import { inter, roboto } from "../src/app/layout";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "default",
      values: [
        { name: "stone", value: "#027435" },
        { name: "default", value: "#eaeaea" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <main
        className={`${roboto.variable} ${inter.variable} font-sans relative`}
      >
        <Story />
      </main>
    ),
  ],
};

export default preview;
