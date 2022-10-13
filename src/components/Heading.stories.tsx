import { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
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
