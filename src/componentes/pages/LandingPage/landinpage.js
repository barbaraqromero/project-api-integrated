import react, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Header from "../../Header/header";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Quer receber novidades?" />
        <hr />
        <Form className="form">
          <FormGroup>
            <Label className="label" for="nome">Nome Completo</Label>
            <Input type="text" id="nome" placeholder="Digite o seu nome" />
          </FormGroup>
          <FormGroup>
            <Label className="label" for="email">Email</Label>
            <Input type="email" id="email" placeholder="seunome@dominio.com"></Input>
          </FormGroup>
          <FormGroup>
              <Label className="label" for="observacoes">Observações</Label>
              <textarea class="form-control" id="textarea" rows="3" placeholder="Digite suas principais características" />
          </FormGroup>
          <FormGroup>
            <Button className ="button" color="success" block>Enviar</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
