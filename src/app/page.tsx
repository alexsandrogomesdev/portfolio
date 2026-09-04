"use client";

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
  SwatchBook,
} from "lucide-react";
import { useRef } from "react";

import { useMultiScrollReveal } from "../hooks/useScrollReveal";

export default function Home() {
  useMultiScrollReveal(".reveal-item");

  const projectsRef = useRef<HTMLTableSectionElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

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
          <div>
            <a onClick={scrollToProjects}>
              Ver Projetos <ArrowUpRight width={16} height={16} />{" "}
            </a>
            <a href="https://wa.me/5511995452626" target="_blank" rel="noopener noreferrer">
              <Mail />
              Entrar em contato
            </a>
          </div>
        </div>
        <div className={styles.people}>
          <figure>
            <Image className={styles.photo} src="/images/photo.jpeg" alt="Alexsandro Gomes" width={128} height={128} />
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
          <li className={`${styles.stack} reveal-item`}>
            <PanelsTopLeft />
            <span>Next.js</span>
            <div></div>
          </li>
          <li className={`${styles.stack} reveal-item`}>
            <Layers />
            <span>React</span>
            <div></div>
          </li>
          <li className={`${styles.stack} reveal-item`}>
            <CodeXml />
            <span>HTML</span>
            <div></div>
          </li>
          <li className={`${styles.stack} reveal-item`}>
            <PanelsTopLeft />
            <span>CSS</span>
            <div></div>
          </li>
          <li className={`${styles.stack} reveal-item`}>
            <FileCode />
            <span>TypeScript</span>
            <div></div>
          </li>
          <li className={`${styles.stack} reveal-item`}>
            <CodeXml />
            <span>JavaScript</span>
            <div></div>
          </li>
          <li className={`${styles.stack} reveal-item`}>
            <Server />
            <span>Node.js</span>
            <div></div>
          </li>
          <li className={`${styles.stack} reveal-item`}>
            <Globe />
            <span>PHP</span>
            <div></div>
          </li>
          <li className={`${styles.stack} reveal-item`}>
            <Database />
            <span>MySQL</span>
            <div></div>
          </li>
          <li className={`${styles.stack} reveal-item`}>
            <Database />
            <span>PostgreSQL</span>
            <div></div>
          </li>
          <li className={`${styles.stack} reveal-item`}>
            <Container />
            <span>Docker</span>
            <div></div>
          </li>
          <li className={`${styles.stack} reveal-item`}>
            <Cpu />
            <span>NGINX</span>
            <div></div>
          </li>
          <li className={`${styles.stack} reveal-item`}>
            <SwatchBook />
            <span>Redis</span>
            <div></div>
          </li>
          <li className={`${styles.stack} reveal-item`}>
            <GitBranch />
            <span>Git</span>
            <div></div>
          </li>
        </ul>
      </section>

      <section ref={projectsRef} className={styles.third_section}>
        <h2>Projetos</h2>
        <ul className={styles.projects}>
          <li className={`${styles.project} reveal-item`}>
            <a href="https://bingou.alexsandrogomes.dev" target="_blank" rel="noopener noreferrer">
              <figure>
                <Image src="/images/bingou.png" alt="Bingou" width={325} height={245} />
              </figure>
            </a>
            <h4>Bingou</h4>
            <p>Ferramenta para gerar cartelas, marcação digital e sorteador de bolas de bingo.</p>
            <div>
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
              <span>Nginx</span>
              <span>Redis</span>
              <span>Capacitor</span>
            </div>
          </li>
          <li className={`${styles.project} reveal-item`}>
            <a href="https://faria-contabilidade.alexsandrogomes.dev" target="_blank" rel="noopener noreferrer">
              <figure>
                <Image src="/images/faria-contabilidade.png" alt="Faria contabilidade" width={325} height={245} />
              </figure>
            </a>
            <h4>Faria contabilidade</h4>
            <p>Site institucional para uma empresa de gestão contábil e tributária.</p>
            <div>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Cloudflare Pages</span>
              <span>Supabase</span>
            </div>
          </li>
          <li className={`${styles.project} reveal-item`}>
            <a href="https://botanin.alexsandrogomes.dev" target="_blank" rel="noopener noreferrer">
              <figure>
                <Image src="/images/botanin.png" alt="botânin" width={325} height={245} />
              </figure>
            </a>
            <h4>botânin</h4>
            <p>Landing page para uma marca de camisetas botânicas.</p>
            <div>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Cloudflare Pages</span>
              <span>Supabase</span>
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.fourth_section}>
        <h2>Experiência</h2>
        <ul className={styles.experiences}>
          <li className={styles.experience}>
            <div>
              <h3>Desenvolvedor Full-Stack</h3>
              <span>
                <MapPin /> Freelancer
              </span>
              <span>
                <Calendar /> Jan/2026 - Atualmente
              </span>
            </div>
            <p>Desenvolvedor web utilizando Next.js, React, TypeScript, Node.js, PostgreSQL, Nginx e Docker.</p>
          </li>
          <li className={styles.experience}>
            <div>
              <h3>Desenvolvedor Full-Stack</h3>
              <span>
                <MapPin /> Freelancer
              </span>
              <span>
                <Calendar /> Mai/2020 - Atualmente
              </span>
            </div>
            <p>Desenvolvedor web utilizando HTML, CSS, JavaScript, PHP, MySQL e Nginx.</p>
          </li>
        </ul>
      </section>

      <section className={styles.fifth_section}>
        <div>
          <h2>
            Let&apos;s build<br></br>the <span>future</span>.
          </h2>
          <p>
            Atualmente aceitando oportunidades freelance e posições em tempo integral. Vamos conversar sobre seu próximo
            projeto.
          </p>
        </div>
        <a href="https://wa.me/5511995452626" target="_blank" rel="noopener noreferrer">
          <Mail />
          Iniciar um Projeto
        </a>
      </section>
    </section>
  );
}
