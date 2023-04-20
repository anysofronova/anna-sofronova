import portfolio1 from "../assets/portfolio/portfolio1.webp";
import portfolio2 from "../assets/portfolio/portfolio2.webp";
import portfolio3 from "../assets/portfolio/portfolio3.webp";
import portfolio4 from "../assets/portfolio/portfolio4.webp";
import portfolio5 from "../assets/portfolio/portfolio5.webp";
import portfolio6 from "../assets/portfolio/portfolio6.webp";
import portfolio7 from "../assets/portfolio/portfolio7.webp";
import portfolio8 from "../assets/portfolio/portfolio8.webp";
import portfolio9 from "../assets/portfolio/portfolio9.webp";
import portfolio10 from "../assets/portfolio/portfolio10.webp";
import portfolio11 from "../assets/portfolio/portfolio11.webp";
import portfolio12 from "../assets/portfolio/portfolio12.webp";
import portfolio13 from "../assets/portfolio/portfolio13.webp";
import portfolio14 from "../assets/portfolio/portfolio14.webp";

type Tag =
  | "HTML"
  | "SCSS"
  | "React"
  | "Next"
  | "JS"
  | "TS"
  | "Redux"
  | "Redux Toolkit"
  | "Tailwind"
  | "Firebase"
  | "Effector"
  | "AOS";

export interface IPortfolio {
  id: number;
  name: string;
  tags: Tag[];
  type: "React" | "Next" | "Other";
  link: string;
  github: string;
  img?: string;
}

export const portfolioData: IPortfolio[] = [
  {
    id: 1,
    name: "Landing Page",
    tags: ["HTML", "SCSS"],
    type: "Other",
    img: portfolio1,
    link: "https://anysofronova.github.io/Denis_Novik/",
    github: "https://github.com/anysofronova/Denis_Novik",
  },
  {
    id: 2,
    name: "Karelia Travel",
    tags: ["HTML", "SCSS"],
    type: "Other",
    img: portfolio2,
    link: "https://anysofronova.github.io/Karelia/",
    github: "https://github.com/anysofronova/Karelia",
  },
  {
    id: 3,
    name: "Travel",
    tags: ["React", "JS", "SCSS"],
    type: "React",
    img: portfolio3,
    link: "https://anysofronova.github.io/react-travel-website/",
    github: "https://github.com/anysofronova/react-travel-website",
  },
  {
    id: 4,
    name: "Calculator",
    tags: ["React", "JS", "SCSS"],
    type: "React",
    img: portfolio4,
    link: "https://anysofronova.github.io/react-calculator-app/",
    github: "https://github.com/anysofronova/react-calculator-app",
  },
  {
    id: 5,
    name: "ToDo",
    tags: ["React", "TS", "Redux Toolkit", "SCSS"],
    type: "React",
    img: portfolio5,
    link: "https://anysofronova.github.io/react-todo-advanced-app/",
    github: "https://github.com/anysofronova/react-todo-advanced-app",
  },
  {
    id: 6,
    name: "Tic-Tac-Toe",
    tags: ["Next", "TS", "Tailwind"],
    type: "Next",
    img: portfolio6,
    link: "https://nextjs-tic-tac-toe.vercel.app/",
    github: "https://github.com/anysofronova/nextjs-tic-tac-toe",
  },
  {
    id: 7,
    name: "Image Uploader",
    tags: ["React", "TS", "Tailwind"],
    type: "React",
    img: portfolio7,
    link: "https://anysofronova.github.io/react-ts-image-uploader/",
    github: "https://github.com/anysofronova/react-ts-image-uploader",
  },
  {
    id: 8,
    name: "Event Reminder",
    tags: ["React", "TS", "Redux Toolkit", "SCSS"],
    type: "React",
    img: portfolio8,
    link: "https://anysofronova.github.io/react-ts-birthday-reminder/",
    github: "https://github.com/anysofronova/react-ts-birthday-reminder",
  },
  {
    id: 9,
    name: "Contact List",
    tags: ["React", "TS", "Redux Toolkit", "Firebase", "SCSS"],
    type: "React",
    img: portfolio9,
    link: "https://anysofronova.github.io/contact-list/",
    github: "https://github.com/anysofronova/contact-list",
  },
  {
    id: 10,
    name: "Perfume Store",
    tags: ["React", "TS", "Redux Toolkit", "SCSS"],
    type: "React",
    img: portfolio10,
    link: "https://anysofronova.github.io/react-marketplace-app/",
    github: "https://github.com/anysofronova/react-marketplace-app",
  },
  {
    id: 11,
    name: "Portfolio",
    tags: ["React", "TS", "AOS", "SCSS"],
    type: "React",
    img: portfolio11,
    link: "https://anna-sofronova.vercel.app/",
    github: "https://github.com/anysofronova/anna-sofronova",
  },
  {
    id: 12,
    name: "Unsplash Clone",
    tags: ["React", "TS", "Redux Toolkit", "Firebase", "SCSS"],
    type: "React",
    img: portfolio12,
    link: "https://anysofronova.github.io/unsplash-clone/",
    github: "https://github.com/anysofronova/unsplash-clone",
  },
  {
    id: 13,
    name: "Ice-Cream Store",
    tags: ["React", "TS", "Redux Toolkit", "Tailwind"],
    type: "React",
    img: portfolio13,
    link: "https://anysofronova.github.io/react-ts-ice-cream-app/",
    github: "https://github.com/anysofronova/react-ts-ice-cream-app",
  },
  {
    id: 14,
    name: "Real World Blog",
    tags: ["React", "TS", "Effector", "Tailwind"],
    type: "React",
    img: portfolio14,
    link: "http://demorealworld-effector.vercel.app/",
    github: "https://github.com/anysofronova/demorealworld-effector",
  },
];
