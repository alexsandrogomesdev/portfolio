import Image from "next/image";
import styles from "./page.module.css";
import {
  ArrowUpRight,
  Calendar,
  CodeXml,
  Container,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  Globe,
  Layers,
  Mail,
  MapPin,
  PanelsTopLeft,
  Server,
} from "lucide-react";

export default function Home() {
  return (
    <section className={styles.section_page}>
      <section className={styles.first_section}>
        <div className={styles.presentation}>
          <p>FULLSTACK DEVELOPER</p>
          <h1>
            Building <span>digital</span>
            <br></br>architecture.
          </h1>
          <h2>
            Desenvolvedor web full-stack criando aplicações de alto desempenho com foco em arquitetura sólida e
            experiências memoráveis.
          </h2>
          <a href="#projects">
            Ver Projetos <ArrowUpRight width={16} height={16} />{" "}
          </a>
          <button>
            <Mail />
            Entrar em contato
          </button>
        </div>
        <div className={styles.people}>
          <figure>
            <Image className={styles.photo} src="/images/photo.jpg" alt="Alexsandro Gomes" width={128} height={128} />
          </figure>
          <div>
            <span>Localização</span>
            <p>São Paulo, BR</p>

            <span>Experiência</span>
            <p>6+ Anos</p>
          </div>
        </div>
      </section>

      <section className={styles.second_section}>
        <h2>Tecnologias</h2>
        <ul className={styles.stacks}>
          <li className={styles.stack}>
            <PanelsTopLeft />
            <span>Next.js</span>
            <div></div>
          </li>
          <li className={styles.stack}>
            <Layers />
            <span>React</span>
            <div></div>
          </li>
          <li className={styles.stack}>
            <CodeXml />
            <span>HTML</span>
            <div></div>
          </li>
          <li className={styles.stack}>
            <PanelsTopLeft />
            <span>CSS</span>
            <div></div>
          </li>
          <li className={styles.stack}>
            <FileCode />
            <span>TypeScript</span>
            <div></div>
          </li>
          <li className={styles.stack}>
            <CodeXml />
            <span>JavaScript</span>
            <div></div>
          </li>
          <li className={styles.stack}>
            <Server />
            <span>Node.js</span>
            <div></div>
          </li>
          <li className={styles.stack}>
            <Globe />
            <span>PHP</span>
            <div></div>
          </li>
          <li className={styles.stack}>
            <Database />
            <span>MySQL</span>
            <div></div>
          </li>
          <li className={styles.stack}>
            <Database />
            <span>PostgreSQL</span>
            <div></div>
          </li>
          <li className={styles.stack}>
            <Container />
            <span>Docker</span>
            <div></div>
          </li>
          <li className={styles.stack}>
            <Cpu />
            <span>NGINX</span>
            <div></div>
          </li>
          <li className={styles.stack}>
            <GitBranch />
            <span>Git</span>
            <div></div>
          </li>
        </ul>
      </section>

      <section className={styles.third_section}>
        <h2>Projetos</h2>
        <ul className={styles.projects}>
          <li className={styles.project}>
            <figure>
              <Image src="/images/bingou.png" alt="Bingou" width={325} height={245} />
            </figure>
            <h4>Bingou</h4>
            <p>Ferramenta para gerar cartelas, marcação digital e sorteador de bolas de bingo.</p>
            <div>
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
              <span>Nginx</span>
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.fourth_section}>
        <h2>Experiência</h2>
        <ul className={styles.experiences}>
          <li className={styles.experience}>
            <h3>Desenvolvedor Full-Stack</h3>
            <span>
              <MapPin /> Freelancer
            </span>
            <span>
              <Calendar /> Jan/2026 - Atualmente
            </span>
            <p>Desenvolvedor web utilizando Next.js, React, TypeScript, Node.js, PostgreSQL, Nginx e Docker.</p>
          </li>
          <li className={styles.experience}>
            <h3>Desenvolvedor Full-Stack</h3>
            <span>
              <MapPin /> Freelancer
            </span>
            <span>
              <Calendar /> Mai/2020 - Atualmente
            </span>
            <p>Desenvolvedor web utilizando HTML, CSS, JavaScript, PHP, MySQL e Nginx.</p>
          </li>
        </ul>
      </section>

      <section className={styles.fifth_section}>
        <h2>
          Let&apos;s build<br></br>the <span>future</span>.
        </h2>
        <p>
          Atualmente aceitando oportunidades freelance e posições em tempo integral. Vamos conversar sobre seu próximo
          projeto.
        </p>
        <button>
          <Mail />
          Iniciar um Projeto
        </button>
      </section>
    </section>
  );
}
