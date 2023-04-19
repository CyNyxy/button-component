import Button from "./Button";

export default {
  title: "components/Button",
  component: Button,
  tags: ['autodocs'],
  args: {
    label: "Default",
    size: "md",
    color: "default",
    iconStart: "",
    iconEnd: "",
    variant: "",
    },
};

const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "sm",
}
export const Large = Template.bind({});
Large.args = {
  size: "lg",
}

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  iconStart: "add",
}

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: "danger",
}