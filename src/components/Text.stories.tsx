import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem ipsum"
  },
} as Meta

export const Small: StoryObj = {
  args: {
    size: "s"
  }
};

export const Default: StoryObj = {}; 

export const Large: StoryObj = {
  args: {
    size: "l"
  }
};
