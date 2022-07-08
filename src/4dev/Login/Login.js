import React from "react";
import Logo from "../../assets/images/dev.png";
import Button from "../../Utils/Button";
import Input from "../../Utils/Input";
import {NavLink} from 'react-router-dom';

const Login = () => {
  const [cpf, setCpf] = React.useState();
  const [senha, setSenha] = React.useState();

  return (
    <div className="login">
      <img src={Logo} alt="siga" />

      <div className="inputsLoggin">
        <Input
            type="text"
            label="Usuário:"
            place="Digite seu CPF"
            id="cpf"
            name="cpf"
            change={(i) => setCpf(i.target.value)}
        />

        <Input
            type="password"
            label="Senha:"
            place="Senha"
            id="cpf"
            name="cpf"
            change={(i) => setSenha(i.target.value)}
        />
        <NavLink to="" className="esquecerSenha"> Esqueceu  sua Senha?</NavLink> 
        <Button value="Cadastrar"/>

        <NavLink to="" className="problemAcess"> Problemas com o acesso?</NavLink> 
      </div>
    </div>
  );
};

export default Login;
