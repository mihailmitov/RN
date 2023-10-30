import { Ionicons } from "@expo/vector-icons";
import { Button } from ".";

export default {
  title: "PressableButton",
  component: Button.Normal,
  argTypes: {},
};

export const Default = {
  render: () => <Button.Normal label="Click me" variant="regular" />,
};

export const Scream = {
  render: () => <Button.Scream label="scream to me" variant="regular" />,
};

export const IconB = {
  render: () => {
    const log = () => console.log("yes");

    return (
      <Button.Icon
        variant="icon"
        label="Test me"
        icon={
          <Ionicons name="home-sharp" size={24} color="white" onPress={log} />
        }
      />
    );
  },
};

export const LinkB = {
  render: () => (
    <Button.Link
      variant="link"
      url={"https://google.com"}
      label="Open Google"
    />
  ),
};
