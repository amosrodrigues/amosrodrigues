import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { FcHome, FcBusinessman, FcContacts, FcIdea, FcBriefcase } from 'react-icons/fc';
import { Link } from 'react-router-dom';

import { PortfolioContext } from '../../contexts/PortfolioContext';
import { StyledMenu } from './styles';

export function Menu() {
  const { menuActive, toggleMenu } = useContext(PortfolioContext)
  const { pathname } = useLocation();

  const renderClass = (actual: string) => {
    if (actual === pathname) {
      return 'selected';
    }
  };

  return (
    <StyledMenu>
      <div className={`container grid ${menuActive ? 'active' : 'off'}`}>
        <div className="background" onClick={() => menuActive && toggleMenu()}></div>
        <div className="menu">
          <Link className="icons" to="/" onClick={() => toggleMenu()}>
            <FcHome
              className={ `icon ${renderClass('/')}` } 
              size={ 40 }
            />
            <span>Home</span>
          </Link>
          <Link className="icons" to="/about" onClick={() => toggleMenu()}>
            <FcBusinessman
              className={ `icon ${renderClass('/about')}` } 
              size={ 40 }
            />
            <span>Sobre mim</span>
          </Link>
          <Link className="icons" to="/skills" onClick={() => toggleMenu()}>
            <FcIdea
              className={ `icon ${renderClass('/skills')}` } 
              size={ 40 }
            />
            <span>Habilidades</span>
          </Link>
          <Link className="icons" to="/projects" onClick={() => toggleMenu()}>
            <FcBriefcase
              className={ `icon ${renderClass('/projects')}` } 
              size={ 40 }
            />
            <span>Projetos</span>
          </Link>
          <Link className="icons" to="/contact" onClick={() => toggleMenu()}>
            <FcContacts
              className={ `icon ${renderClass('/contact')}` } 
              size={ 40 }
            />
            <span>Contatos</span>
          </Link>
        </div>
      </div>
    </StyledMenu>
  );
}