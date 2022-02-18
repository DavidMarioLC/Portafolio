import Head from "next/head";
import { Header, Hero, About, Projects, Contact, Footer } from "../components";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>David Mario Licla</title>
        <meta
          name="description"
          content="Portafolio y web personal de DavidMarioLC"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* open graph */}
        <meta
          property="og:title"
          content="Portafolio y web personal de DavidMarioLC"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portafolio-davidmariolc.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/DavidMarioLC/Portafolio/main/opengraph.webp"
        />
        <meta
          property="og:description"
          content="Portafolio y web personal de DavidMarioLC"
        />
      </Head>
      <Header />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: [
        {
          id: "9",
          name: "Health Store",
          thumbnail: "/projects/healthstore.webp",
          linkRepo:
            "https://github.com/DavidMarioLC/webApplication-healthy-store",
          linkDemo: "https://web-application-healthy-store.vercel.app",
          description: "Compra todo lo que quieras en esta tiendita saludable.",
          technologies: ["React", "TypeScript", "Next"],
        },
        {
          id: "8",
          name: "Dashboard Cursos",
          thumbnail: "/projects/dashboard.webp",
          linkRepo: "https://github.com/DavidMarioLC/WebApplication-Dashboard",
          linkDemo: "https://web-application-dashboard.vercel.app/cursos",
          description:
            "Dashboard donde podras eliminar,editar y actualizar tus propios cursos.",
          technologies: ["React", "TypeScript"],
        },
        {
          id: "7",
          name: "Github Clone",
          thumbnail: "/projects/github.webp",
          linkRepo: "https://github.com/DavidMarioLC/WebApplication-Github",
          linkDemo: "https://web-application-github.vercel.app",
          description:
            "Maneja los repositorios de tus proyectos como todo un profesional.",
          technologies: ["React", "TypeScript"],
        },
        {
          id: "6",
          name: "Block Master",
          thumbnail: "/projects/blockmaster.webp",
          linkRepo:
            "https://github.com/DavidMarioLC/WebApplication-BlockMaster",
          linkDemo: "https://web-application-block-master.vercel.app/",
          description:
            "Plataforma de peliculas que nos permite buscar peliculas y filtrarlas segun sus valoraciones.",
          technologies: ["React", "Redux"],
        },
        {
          id: "5",
          name: "Landing Page Calel",
          thumbnail: "/projects/calel.webp",
          linkRepo: "https://github.com/DavidMarioLC/LandingPage-Calel",
          linkDemo: "https://davidmariolc.github.io/LandingPage-Calel/",
          description:
            "Landing page sobre una aplicación que nos permite  programar reuniones efectivas.",
          technologies: ["React", "Sass"],
        },
        {
          id: "4",
          name: "Instagram Clone",
          thumbnail: "/projects/instagram.webp",
          linkRepo:
            "https://github.com/DavidMarioLC/WebApplication-Instantanea",
          linkDemo:
            "https://davidmariolc.github.io/WebApplication-Instantanea/",
          description: "Maquetación de la aplicación web de instagram.",
          technologies: ["HTML", "CSS", "JavaScript"],
        },
        {
          id: "3",
          name: "Formulario de Pago",
          thumbnail: "/projects/pago.webp",
          linkRepo: "https://github.com/DavidMarioLC/Component-pago",
          linkDemo: "https://davidmariolc.github.io/Component-pago/",
          description:
            "Componente que simula una compra usando una tarjeta de credito.",
          technologies: ["React", "TypeScript", "Jest", "Testing"],
        },
        {
          id: "2",
          name: "Landing Page Edwyn",
          thumbnail: "/projects/landingpageEdwyn.webp",
          linkRepo: "https://github.com/DavidMarioLC/LandingPage-Edwyn",
          linkDemo: "https://davidmariolc.github.io/LandingPage-Edwyn/",
          description: "Portofolio creada para un desarrollador Front End.",
          technologies: ["HTML", "CSS", "JavaScript"],
        },
        {
          id: "1",
          name: "Pomodoro Tracker",
          thumbnail: "/projects/pomodoro.webp",
          linkRepo: "https://github.com/DavidMarioLC/WebApplication-Pomodoro",
          linkDemo: "https://davidmariolc.github.io/WebApplication-Pomodoro/",
          description:
            "Aplicación web que nos permite administrar mejor nuestro tiempo.",
          technologies: ["React", "Sass"],
        },
      ],
    },
  };
}
