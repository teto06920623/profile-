import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { SOCIAL_LINKS } from '../../utils/constants';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              TAHA
              <span className="footer__logo-slash"> /</span>
              <span className="footer__logo-bracket">&gt;</span>
            </span>
            <p className="footer__tagline">
              Building digital experiences with passion & precision.
            </p>
          </div>

          <div className="footer__socials">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} TAHA Mohammed. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <FiHeart className="footer__heart" /> & React
          </p>
        </div>
      </div>
    </footer>
  );
}
