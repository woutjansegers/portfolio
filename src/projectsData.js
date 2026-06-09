// projectsData.js  –  één centrale definitie, importeer dit in App.js én ProjectModal
// import { projects } from "./projectsData";

import portfolio    from "./Images/newportfolio.jpg";
import portfolio1   from "./Images/newportfolio1.jpg";
import portfolio2   from "./Images/newportfolio2.jpg";
import portfolio3   from "./Images/newportfolio3.jpg";
import portfolio4   from "./Images/newportfolio4.jpg";
import portfolio5   from "./Images/newportfolio5.jpg";
import AR           from "./Images/AR.png";
import AR1          from "./Images/AR1.jpg";
import AR2          from "./Images/AR2.jpg";
import AR3          from "./Images/AR3.jpg";
import Pikassa      from "./Images/pikassa.png";
import Pikassa1     from "./Images/pikassa1.png";
import Pikassa2     from "./Images/pikassa2.png";
import Pikassa3     from "./Images/pikassa3.png";
import Pikassa4     from "./Images/pikassa4.png";
import beersebende  from "./Images/beersebende.png";
import beersebende1 from "./Images/beersebende1.jpg";
import beersebende2 from "./Images/beersebende2.jpg";
import beersebende3 from "./Images/beersebende3.jpg";
import beersebende4 from "./Images/beersebende4.jpg";
import drone        from "./Images/drone.jpg";
import drone1       from "./Images/drone1.mp4";
import duffalos     from "./Images/duffalo.png";
import duffalo1     from "./Images/duffalo1.jpg";
import duffalo2     from "./Images/duffalo2.jpg";
import duffalo3     from "./Images/duffalo3.jpg";
import tech1        from "./Images/tech1.jpg";
import tech2        from "./Images/tech2.jpg";
import tech3        from "./Images/tech3.jpg";
import tech4        from "./Images/tech4.jpg";
import tech5        from "./Images/tech5.jpg";
import mpioosterlo  from "./Images/mpioosterlo.jpg";
import mpioosterlo1 from "./Images/mpioosterlo1.jpg";
import mpioosterlo2 from "./Images/mpioosterlo2.jpg";
import ALB1         from "./Images/ALB1.jpg";
import ALB2         from "./Images/ALB2.jpg";
import ALB3         from "./Images/ALB3.jpg";
import ALB4         from "./Images/ALB4.jpg";
import ALB5         from "./Images/ALB5.jpg";
import WAP1         from "./Images/WAP1.jpg";
import WAP2         from "./Images/WAP2.jpg";
import WAP3         from "./Images/WAP3.jpg";
import WAP4         from "./Images/WAP4.jpg";
import WAP5         from "./Images/WAP5.jpg";
import BZR1         from "./Images/BZR1.jpg";
import BZR2         from "./Images/BZR2.jpg";
import BZR3         from "./Images/BZR3.jpg";
import E2D1         from "./Images/E2D1.jpg";
import E2D2         from "./Images/E2D2.jpg";
import E2D3         from "./Images/E2D3.jpg";
import E2D4         from "./Images/E2D4.jpg";
import E2D5         from "./Images/E2D5.jpg";
import E2D6         from "./Images/E2D6.jpg";
import E2D7         from "./Images/E2D7.jpg";
import E2D8         from "./Images/E2D8.jpg";
import E2D9         from "./Images/E2D9.jpg";
import E2D10        from "./Images/E2D10.jpg";
import E2D11        from "./Images/E2D11.jpg";
import Easy2Drop    from "./Images/Easy2Drop_logo.png";
import Pikassa_card from "./Images/pikassa3.png";
import tech         from "./Images/tech.jpg";

export const projects = [
  {
    id: "easy2drop",
    title: "Easy2Drop",
    shortDescription: "Multiple applications for package delivery and locker management.",
    description: "For Skill3, we worked on a project commissioned by Easy2Drop, a company developing secure parcel boxes for reliable, contactless delivery. The goal was to optimize and expand their existing system to make it more user-friendly and efficient.\n\nWorking with an existing codebase, we implemented improvements and added new functionalities. We developed two new applications: a desktop application and a mobile application, creating a more flexible solution within the Easy2Drop ecosystem.\n\nMy primary responsibility was developing the mobile application using React Native. This app allows users to manage the system efficiently on the go. During this project, I gained extensive experience in building cross-platform mobile apps and integrating them into complex existing systems. I also learned the importance of performance and UX in mobile environments.",
    tags: ["React Native"],
    image: Easy2Drop,
    images: [E2D1, E2D2, E2D3, E2D4, E2D5, E2D6, E2D7, E2D8, E2D9, E2D10, E2D11],
    github: "https://www.youtube.com/watch?v=slftZAMOPCk",
  },
  {
    id: "pikassa",
    title: "Pikassa",
    shortDescription: "A point-of-sale system for people with disabilities.",
    description: "Commissioned by 'De Wagenwinkel', we developed a point-of-sale system for students with disabilities. It needed to be error-proof, intuitive, and visually clear to help them sell products confidently.\n\nWe built a full web-based POS system using Laravel, PHP, and SQLite. My main technical contribution was implementing an automatic receipt printing function. This provided tangible feedback for both buyers and sellers, adding a professional touch to the process.\n\nThis project taught me how to design for specific user needs rather than a general audience. I deepened my knowledge of Laravel and learned how to manage automated printing processes from web applications.",
    tags: ["Laravel", "PHP", "sqlite"],
    image: Pikassa_card,
    images: [Pikassa3, Pikassa2, Pikassa4, Pikassa1, Pikassa],
    github: "https://github.com/Thomas-More-Digital-Innovation/2425-TM-012-Eenvoudig-kassasysteem-voor-de-Wagenwinkel",
  },
  {
    id: "exploremore",
    title: "ExploreMore",
    shortDescription: "Guiding international students on campus using AR.",
    description: "In collaboration with Thomas More, we developed an innovative AR-based tour for international students. We explored Augmented Reality as an interactive way to introduce the campus to students who may be visiting from abroad.\n\nUsing Flutter, Unity, and Vuforia, we built a proof-of-concept where users scan markers on campus to see digital guides and info. This project serves as a technical showcase to secure further funding for campus exploration tools.\n\nI learned how to integrate Unity functions within a Flutter app, creating a unified experience. I also gained experience in using prototypes as communication tools for stakeholders.",
    tags: ["Flutter", "Unity", "Vuforia"],
    image: AR3,
    images: [AR3, AR, AR1, AR2],
    github: "https://github.com/Thomas-More-Digital-Innovation/2324-ITF-001-AR-rondleiding",
  },
  {
    id: "brandweer-zone-rand",
    title: "Brandweer Zone Rand",
    shortDescription: "A dashboard providing an overview of fire prevention packages.",
    description: "For this project, we developed an application for the fire department to support the distribution of fire prevention packages. The challenge was building a solution that provides a clear, real-time overview of distributed packages and pending locations, optimizing their planning and organization.\n\nWe built a desktop application using Vue and Electron, focusing on simplicity and usability. The system includes a dashboard showing delivery status at a glance. This structured visual approach enables quick decision-making and efficient resource allocation.\n\nI learned how to build reactive interfaces with Vue and how to package web technologies into standalone desktop apps with Electron. I also gained insights into designing for professional users where reliability and clarity are paramount.",
    tags: ["Vue", "Electron"],
    image: BZR1,
    images: [BZR1, BZR2, BZR3],
    github: "https://github.com/Thomas-More-Digital-Innovation/2526-ZR-001-Awareness-customer-tracking-system",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    shortDescription: "A responsive portfolio built with React and styled-components.",
    description: "The portfolio project aimed to build a personal website clearly displaying all my school projects. It serves as an overarching project where I showcase not only my work but also what I've learned throughout the year. The portfolio is designed to be visually attractive, technically sound, and fully responsive across all devices.\n\nBuilt entirely with React and styled-components, the site features modular and consistent design. It includes a comprehensive overview of my projects with detailed descriptions, technical stacks, and visual references. I prioritized smooth navigation and accessibility to ensure a user-friendly experience.\n\nThis project taught me how to independently manage a complete lifecycle from A to Z. I deepened my knowledge of React and learned to efficiently manage styles in larger projects using styled-components. Furthermore, it provided insight into professional self-presentation, a vital step toward my career.",
    tags: ["React", "styled-components"],
    image: portfolio,
    images: [portfolio, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5],
    github: "https://portfolio-woutjansegers.netlify.app/",
  },
  {
    id: "work-area-projection",
    title: "Work Area Projection",
    shortDescription: "An application that supports clients in working independently.",
    description: "In this project, we developed a supportive application that helps clients work independently using a projector and a camera. The projector displays shapes (like circles or rectangles) on a surface, and clients must place items within these areas.\n\nThe camera analyzes the client's actions to check if items are placed correctly. Based on this, the app provides real-time feedback, encouraging independent work. The system is designed to be intuitive and accessible, offering support without requiring constant supervision.",
    tags: ["React", "TypeScript", "Electron"],
    image: WAP1,
    images: [WAP1, WAP2, WAP3, WAP4, WAP5],
    github: "https://github.com/Thomas-More-Digital-Innovation/2526-MPI-003-Workarea-projections",
  },
  {
    id: "aerolytics",
    title: "Aerolytics",
    shortDescription: "Supporting a drone company with autonomous greenhouse flights.",
    description: "We collaborated with Aerolytics to develop a solution for autonomous greenhouse drones. The drones take plant health photos that need to be uploaded to the cloud for analysis, often in areas with poor Wi-Fi.\n\nMy task was to build a robust Python-based image uploader for a Raspberry Pi using AWS. I implemented retry logic and offline queuing to handle unstable connections.\n\nThis project expanded my knowledge of IoT and cloud integration, teaching me how to manage data synchronization in physically challenging environments.",
    tags: ["AWS", "Python", "Raspberry-pi"],
    image: drone,
    images: [drone, drone1],
    github: "https://www.aerolytics.be/",
  },
  {
    id: "appies-legobib",
    title: "Appies Legobib",
    shortDescription: "Applications for reserving and managing hospital Lego sets.",
    description: "Working for the Hospital of Geel, we developed two applications to streamline Lego set management. One app allows young patients to easily reserve sets, while the second app provides hospital staff with tools to manage inventory, hospital locations, and staff assignments.\n\nWe used Angular to build a structured and scalable interface. The patient app was designed to be simple so children could use it independently. In contrast, the admin app provides robust functionality for managing availability and logistics.\n\nI gained significant experience with Angular's component-based architecture and state management. I also learned the value of balancing simple, child-friendly design with powerful administrative tools.",
    tags: ["Angular"],
    image: ALB1,
    images: [ALB1, ALB2, ALB3, ALB4, ALB5],
    github: "https://github.com/itfactory-tm/2025-SWE-Monorepo-09",
  },
  {
    id: "de-beerse-bende",
    title: "De Beerse Bende",
    shortDescription: "Helping a theater group with a website and ticketing system.",
    description: "Commissioned by a faculty coach for her theater group, we built a digital solution to manage performances, ticket sales, and volunteers. The system needed to support diverse roles from directors to spectators.\n\nWe built a comprehensive web app where my main contribution was the custom ticket booking system—allowing users to select specific seats—and the volunteer management module for performance shifts.\n\nUsing Laravel, PHP, and Figma, I learned how to manage multiple user permissions within one ecosystem while maintaining a smooth UX for complex tasks like seat selection.",
    tags: ["Laravel", "PHP", "sqlite", "Figma"],
    image: beersebende,
    images: [beersebende, beersebende1, beersebende2, beersebende3, beersebende4],
    github: "https://debeersebende.bramserre.be/",
  },
  {
    id: "de-duffalo's-prototype",
    title: "De duffalo's prototype",
    shortDescription: "Helping a football team with a technical prototype.",
    description: "This project focused on the analysis and prototyping phase for a sports management app for a local football team. We mapped out functionalities like player selection and match planning to provide a solid foundation for future development.\n\nI worked primarily on the team selection and scheduling modules. We used Figma for high-fidelity design and StarUML to model the software architecture.\n\nAlthough there was no coding in this phase, I learned a lot about structured analysis and the importance of thorough preparation in the development lifecycle.",
    tags: ["Figma", "StarUML"],
    image: duffalos,
    images: [duffalos, duffalo1, duffalo2, duffalo3],
    github: "https://www.figma.com/design/oRphuh5sZdtGpIro8JO4PY/SVW3---Prototyping---De-Duffalo-s?node-id=296-553&t=6xCZsPqWRnBR1ywU-1",
  },
  {
    id: "mpi-oosterlo",
    title: "MPI Oosterlo",
    shortDescription: "Supporting job coaches with a client tracking system.",
    description: "We developed a tracking system for job coaches at MPI-Oosterlo, a facility for people with disabilities. Coaches needed a more efficient, digital way to manage client data and activity logs, replacing a cumbersome paper-based process.\n\nWe created both a web and mobile application. I focused on the web application, ensuring core functionalities like client data storage and action planning were stable and user-friendly.\n\nThis project allowed me to apply my Laravel knowledge in a real-world context, reinforcing my understanding of system architecture and data consistency.",
    tags: ["Laravel", "PHP", "sqlite"],
    image: mpioosterlo,
    images: [mpioosterlo, mpioosterlo1, mpioosterlo2],
    github: "https://github.com/Thomas-More-Digital-Innovation/2425-MPI-002-jobcoachOndersteuning",
  },
  {
    id: "techtalks",
    title: "Techtalks",
    shortDescription: "Broadening my knowledge through new technologies.",
    description: "Techtalks was a personal learning journey where I explored emerging technologies beyond the standard curriculum. I researched and presented topics like Flutter, React, and Security to faculty mentors.\n\nFor each topic, I built small demos and technical documentation to prove practical understanding. This approach broadened my technical horizon and improved my ability to learn new tools independently.\n\nIt was excellent practice for defending technical decisions, a skill that is vital for professional collaboration and client meetings.",
    tags: ["Laravel", "Flutter", "Security", "React"],
    image: tech,
    images: [tech1, tech2, tech3, tech4, tech5],
    github: "https://1drv.ms/f/c/8a4afb5db3b89bc8/Eq6XXS1tlpJLmmGgbeVmzWwBud4mQnJDVSaWN9o9nHju9A?e=QHNanU",
  },
];