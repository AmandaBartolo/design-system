import LogoReact from "../../assets/images/logo-react.png";
import { Heading } from "../Heading";
import { Text } from "../Text";

export const Header = () => {
  return (
    <header className="flex flex-col items-center">
      <img src={LogoReact} alt="Logo do React" />

      <Heading size="l" className="mt-4">
        Ignite Lab
      </Heading>

      <Text size="l" className="text-gray-800 mt-1">
        Faça login e comece a usar!
      </Text>
    </header>
  );
};
