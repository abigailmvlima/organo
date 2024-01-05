import Botao from "../botao";
import CampoTexto from "../campoTexto";
import ListaSuspensa from "../listaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "Ux e Design",
    "Mobile",
    "Inivação e Gestão",
  ];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endere seu nome" />
        <ListaSuspensa label="Time" itens={times} />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
