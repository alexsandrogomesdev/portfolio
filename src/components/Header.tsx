import { Sparkles } from "lucide-react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.div_header}>
        <p className={styles.header_title}>
          AG<span>.DEV</span>
        </p>
        <div className={styles.available_for_hire}>
          <div></div>
          <span>Disponível</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
