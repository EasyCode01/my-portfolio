import {
  aboutMe,
  blog,
  contact,
  home,
  portfolio,
  services,
} from "../assests/icons";
import { heroImg2 } from "../assests/images";

export const sideLinks = [
  {
    label: "Home",
    icon: home,
    activeLink: "active-sidelink",
  },
  {
    label: "About me",
    icon: aboutMe,
    activeLink: "",
  },
  {
    label: "Services",
    icon: services,
    activeLink: "",
  },
  {
    label: "Portfolio",
    icon: portfolio,
    activeLink: "",
  },
  {
    label: "Blog",
    icon: blog,
    activeLink: "",
  },
  {
    label: "Contact",
    icon: contact,
    activeLink: "",
  },
];

export const heroPage = {
  left: {
    hello: "Hello there...",
    name: "Ezekiel Oyedijo",
    passion: "I Am Passionate Developer",
    bio: "The namics of how users interact with interactive elements within a user interface flow chart based on container proportion.",
    myWorkBtn: "My Work",
    hireMeBtn: "Hire Me",
  },
  right: {
    img: heroImg2,
  },
};

export const navLinks = {
  navLogo: {
    front: "Ezekiel",
    back: "EasyCode",
  },
};
