import React from "react";
import * as styled from "./styles";
import { Input } from "@app/common/Input";
import { Button } from "@app/common/Button";

const Login = () => {
  return (
    <styled.Wrapper>
      <styled.Card>
        <styled.Title>
          <h1>Login</h1>
        </styled.Title>
        <styled.Body>
          <Input
            label="Email:"
            id="email"
            name="email"
            placeholder={"Digite seu email"}
            width="100%"
            value={undefined}
          />
          <Input
            label="Senha:"
            id="password"
            type="password"
            name="password"
            placeholder={"Digite sua senha"}
            width="100%"
            value={undefined}
          />
          <p onClick={() => alert("Contate o administrador")}>Esqueceu a senha?</p>
          <styled.Button>
            <Button title={"Entrar"} style={"pattern"} />
          </styled.Button>
        </styled.Body>
        <styled.Option>
          <p>Cadastrar uma nova conta</p>
        </styled.Option>
      </styled.Card>
    </styled.Wrapper>
  );
};

export default Login;
