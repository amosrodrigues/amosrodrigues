import { StyledFooter } from './styles';
import iconGithub from '../../assets/images/github.png';
import iconLinkedin from '../../assets/images/linkedin.png';
import iconInstagram from '../../assets/images/instagram.png';

export function Footer() {
  return (
    <StyledFooter>
      <div className="footer">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/amosrodrigues/">
          <img src={iconLinkedin} alt="Linkedin Logo" />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/amosrodrigues">
          <img src={iconGithub} alt="GitHub Logo" />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.instagram.com/amos.adm.rh/">
          <img src={iconInstagram} alt="Instagram Logo" />
        </a>
      </div>
    </StyledFooter>
  );
}
