import { motion as m } from "framer-motion";
import { Card } from "./Card";

export function Projects() {
  return (
    <m.div className="flex flex-col w-full px-5 md:px-28">
      <m.h1
        className="text-5xl md:text-7xl mb-8 md:mb-24 text-gray-900 tracking-widest"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
        viewport={{ once: true }}
        layout
      >
        some studies:
      </m.h1>

      <m.div
        className="flex flex-wrap w-full gap-2 sm:gap-1"
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.8,
              staggerChildren: 0.5,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <Card key={project.id} project={project} index={index} />
        ))}
      </m.div>
    </m.div>
  );
}

const projects = [
  {
    id: "01",
    title: "Clone Netflix",
    description:
      "Aplicação feita no começo dos meus estudos, para aprimorar meus conhecimentos de api",
    github: "https://github.com/HigorAln/Netflix-with-react",
    app: "https://myflix-one.vercel.app/",
    image: "/images/netflix.png",
  },
  {
    id: "02",
    title: "Projeto Pomodoro",
    description:
      "Aplicação feita com ajuda do professor Diego Fernandes da Rocketseat. Nas trilhas atualizadas de React.js",
    app: "https://timer-pomodoro-ashen.vercel.app/",
    image: "/images/pomodoro.png",
  },
  {
    id: "03",
    title: "Go Finances",
    description:
      "Aplicação em React-native feita na trilha de Ignite da Rocketseat",
    image: "/images/gofinances.png",
    github: "https://github.com/HigorAln/gofinances-React-Native",
  },
  {
    id: "04",
    title: "Feedget",
    description: "Aplicação desenvolvida em um evento online da rocketseat.",
    image: "/images/feedget.png",
    github: "https://github.com/HigorAln/Feedget",
    app: "https://feedget-6msn0waqy-higoraln.vercel.app/",
  },
  {
    id: "05",
    title: "Dash go",
    description:
      "Aplicação desenvolvida no módulo de Reactjs na trilha - Ignite da rocketseat.",
    image: "/images/dashgo.png",
    github: "https://github.com/HigorAln/dashgo",
  },
  {
    id: "06",
    title: "Dashboard para processo seletivo",
    description: "Aplicação feita em 2 horas para um processo seletivo.",
    image: "/images/dashboard.png",
    github: "https://github.com/HigorAln/dashgo",
  },
  {
    id: "07",
    title: "Landing page simple",
    description:
      "Aplicação feita em uma tarde, a partir de um figma free da comunidade.",
    image: "/images/landing.png",
    github: "https://github.com/HigorAln/landing-page",
    app: "https://landing-page-swart-one.vercel.app/",
  },
  {
    id: "08",
    title: "Dt Money",
    description:
      "Aplicação feita no comeco dos meus estudos na Rocketseat. Aplicação estatica usando store local.",
    image: "/images/dtmoney.png",
    github: "https://github.com/HigorAln/DtMoney",
    app: "https://dt-money-fawn.vercel.app/",
  },
  {
    id: "09",
    title: "Let me ask",
    description:
      "Aplicação feita em um evento da Rocketseat. Aplicação com firebase.",
    image: "/images/letmeask.png",
    github: "https://github.com/HigorAln/letmeask",
  },
  {
    id: "10",
    title: "DoWhile",
    description: "Aplicação construida no NWL-2021, com a rocketseat.",
    image: "/images/nlw2021.png",
    github: "https://github.com/HigorAln/NLW-Front",
  },
  {
    id: "11",
    title: "Ignews",
    description:
      "Aplicação construida na Trilha Ignite - Rocketseat. utilizando Stripe.",
    image: "/images/ignews.png",
    github: "https://github.com/HigorAln/ignews",
  },
  {
    id: "12",
    title: "Other Portfolio",
    description:
      "Esse portfolio foi criado em pouco tempo apenas para mostrar algo nos sites de Freelancer.",
    image: "/images/portfolio.png",
    github: "https://github.com/HigorAln/portfolio_freelancer",
    app: "https://portfolio-seven-liard-74.vercel.app/",
  },
  {
    id: "13",
    title: "Plataforma de eventos",
    description:
      "Plataforma de streaming de videos, feito como plataforma de aulas, onde existem relacionamento entre aulas, professores, desafios e entre outros.",
    image: "/images/eventPlataform.png",
    github: "https://github.com/HigorAln/Event-plataform",
    app: "https://event-plataform-seven-ochre.vercel.app/",
  },
  {
    id: "14",
    title: "Cadastro de convidados",
    description:
      "Aplicação construída como freela, onde por link o User seria cadastrado na plataforma, e apos o cadastro iria ser direcionado para baixar o aplicativo.",
    image: "/images/freelaInvite.png",
    github: "https://github.com/HigorAln/freela_invite",
    app: "https://freela-invite.vercel.app/",
  },
  {
    id: "15",
    title: "Clone Twitter",
    description:
      "Plataforma construida sozinho para treinamento em tailwindcss.",
    image: "/images/twitter.png",
    github: "https://github.com/HigorAln/Clone-twitter-interface",
  },
  {
    id: "16",
    title: "Dt Money 2022",
    description:
      "Aplicativo de finanças para você poder controlar suas despesas.",
    image: "/images/dtmoney2022.png",
    github: "https://github.com/HigorAln/new-dt-money-2022",
  },
];
