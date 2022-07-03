import { StyledHome } from './styles';

import imgProfile from '../../assets/images/foto_perfil.jpeg';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <StyledHome>
      <section className="section" id="home">
        <div className="container grid">
          <div className="image">
            <img src={imgProfile} alt="Foto Amós" />
          </div>
          <div className="text">
            <h3>Boas Vindas ao meu portfólio!</h3>
            <h2 className="title">Meu nome é Amós Rodrigues.</h2>
            <p>
              Sou Desenvolvedor de Software Web.
              <br />
              Moro em Governador Valadares/MG.
            </p>

            <div className="buttons">
              <Link className="button" to="/contact">
                <span>Entre em contato</span>
              </Link>
              <Link className="button" to="/projects">
                <span>Veja meus projetos</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </StyledHome>
  );
}
