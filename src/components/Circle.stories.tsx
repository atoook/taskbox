import { Meta, StoryObj } from "@storybook/react";
import { Circle } from "./Circle";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Test/Circle",
  argTypes: {
    //以下のようにすると、デフォルトのラジオボタンから選択ボックスに変更できる
    variant: {
      control: { type: "select" },
      options: ["orange", "green", "yellow"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * オレンジ色の円です。
 */
export const BaseCircle: Story = {
  args: {
    variant: "orange",
  },
};

export const GreenCircle: Story = {
  args: {
    variant: "green",
  },
};

export const YellowCircle: Story = {
  args: {
    variant: "yellow",
  },
};

export const GroupedCircle = {
  render: () => (
    <div>
      <Circle variant="orange" />
      <Circle variant="green" />
      <Circle variant="yellow" />
    </div>
  ),
};
