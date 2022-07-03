import Switch from 'react-switch';
import { useContext } from 'react';
import { StyledHeader } from './styles';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { PortfolioContext } from '../../contexts/PortfolioContext'
import { Link } from 'react-router-dom';

export function Header() {
  const { colors, title } = useContext(ThemeContext);
  const { toggledTheme, menuActive, toggleMenu } = useContext(PortfolioContext);

  return (
      <StyledHeader>
        <nav className="container">
          <div className="left">
            <div 
              className={`hamburger ${menuActive ? 'active' : ''}`} 
              onClick={() => toggleMenu()}
            >
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>          
          <Link onClick={() => menuActive && toggleMenu()} className="logo" to="/">Amós-Rodrigues-<span>Dev</span>.</Link>
        </nav>

        <div className="container">
          <div className="right">
            <svg className="icon" onClick={() => toggledTheme()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>
            <Switch
              className="Switch"
              onChange={() => toggledTheme()}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              onColor={colors.secundary}
              offColor={shade(0.15, colors.secundary)}
            />
          </div>
        </div>
      </StyledHeader>
  );
}