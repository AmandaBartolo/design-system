import { Text } from "../Text";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 items-center mt-8">
      <Text asChild>
        <a
          href=""
          className="text-s text-gray-800 underline hover:text-gray-700"
        >
          Esqueceu sua senha?
        </a>
      </Text>
      
      <Text asChild>
        <a
          href=""
          className="text-s text-gray-800 underline hover:text-gray-700"
        >
          Não possui conta? Crie uma agora!
        </a>
      </Text>
    </footer>
  );
};
