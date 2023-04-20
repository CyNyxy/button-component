import Button from "./Button";

export default {
  title: "components/Button",
  component: Button,
  tags: ['autodocs'],
  args: {
    label: "Default",
    size: "md",
    color: "default",
    variant: "default",
    disableShadow: false, 
    disabled: false,
    },
};

const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "sm",
}
export const Medium = Template.bind({});
Medium.args = {
  size: "md",
}
export const Large = Template.bind({});
Large.args = {
  size: "lg",
}

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
}
export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
}
export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
}

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
}
export const Text = Template.bind({});
Text.args = {
  variant: "text",
}
export const Noshadow = Template.bind({});
Noshadow.args = {
  disableShadow: true,
}
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
}

export const Icon = Template.bind({});
Icon.args = {
  iconStart: "add_shopping_cart",
}