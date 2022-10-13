import { Text } from "../Text";
import { TextInput } from "../TextInput";
import { Envelope, Lock } from "phosphor-react";
import { Checkbox } from "../Checkbox";
import { Button } from "../Button";

export const Form = () => {
  return (
    <form className="flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4">
      <label htmlFor="email" className="flex flex-col gap-3">
        <Text size="m" className="font-semibold">
          E-mail
        </Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>
          <TextInput.Input type="email" placeholder="Digite seu e-mail" />
        </TextInput.Root>
      </label>

      <label htmlFor="senha" className="flex flex-col gap-3">
        <Text size="m" className="font-semibold">
          Senha
        </Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>
          <TextInput.Input type="password" placeholder="Digite sua senha" />
        </TextInput.Root>
      </label>

      <label htmlFor="remember" className="flex items-center gap-2">
        <Checkbox />
        <Text size="s">Lembrar de mim</Text>
      </label>

      <Button type="submit" className="mt-4">
        Entrar na plataforma
      </Button>
    </form>
  );
};
