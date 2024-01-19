import Colaborador from "../colaborador";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  const border = { borderBottom: `4px solid ${props.corPrimaria}` };
  return (
    <section className="time" style={css}>
      <h3 style={border}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
