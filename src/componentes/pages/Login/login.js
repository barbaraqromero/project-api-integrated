import react, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Header from "../../Header/header";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header title="Login" />
        <hr />
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="text" id="email" placeholder="seunome@dominio.com" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Senha</Label>
            <Input
              type="password"
              id="password"
              placeholder="******"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Button color="primary" block>
              Entrar
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
