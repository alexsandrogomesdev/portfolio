import { Sparkles } from "lucide-react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.div_header}>
        <p className={styles.header_title}>
          DEV<span>.LAB</span>
        </p>
        <div className={styles.available_for_hire}>
          <div></div>
          <span>Available for hire</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
