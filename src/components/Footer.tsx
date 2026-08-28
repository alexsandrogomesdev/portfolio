import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.div_footer}>
        <ul className={styles.ul_footer}>
          <li>
            <a href="https://github.com/alexsandrogomesdev" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/alexsandrogomesdev" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="http://instagram.com/alexsandrogomes.dev" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>

        <p>© 2026 Developed by alexsandrogomes.dev</p>
      </div>
    </footer>
  );
};

export default Footer;
