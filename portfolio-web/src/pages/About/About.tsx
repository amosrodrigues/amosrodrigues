import { StyledAbout } from './styles';
import imgSetup from '../../assets/images/Amós_Linux_Frieds.jpg';

export function About() {
  return (
    <StyledAbout>
      <section className="section" id="about">
        <div className="container grid">
          <div className="image">
            <img src={imgSetup} alt="Foto Amós Setup" />
          </div>
          <div className="text">
            <h2 className="title">Sobre mim...</h2>
            <p>
              Com formação acadêmica oriunda da Administração atuando a mais de{' '}
              <i>15 anos </i> com Recursos Humanos e Folha de Pagamento, sempre
              fui entusiasta da Tecnologia da Informação, o que logo fomentaria
              uma <em>&quot;transição de carreira&quot;</em> desafiadora mas com
              a incrível oportunidade de imersão na era digital.
            </p>
            <p>
              Aprender a aprender, a trabalhar e colaborar com{' '}
              <em>&quot;pessoas fantásticas&quot;</em> que fazem parte de uma
              escola como a Trybe, é ir além, desbravando com as melhores
              ferramentes, um conhecimento capaz de transformar o mundo e a vida
              das pessoas de forma <em>&quot;positiva e gratificante.&quot;</em>
            </p>
          </div>
        </div>
      </section>
    </StyledAbout>
  );
}
