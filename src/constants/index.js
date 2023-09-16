import {
  aboutMe,
  blog,
  contact,
  home,
  portfolio,
  services,
} from "../assests/icons";
import { heroImg2 } from "../assests/images";

export const navLinks = [
  {
    label: "Home",
    icon: home,
  },
  {
    label: "About me",
    icon: aboutMe,
  },
  {
    label: "Services",
    icon: services,
  },
  {
    label: "Portfolio",
    icon: portfolio,
  },
  {
    label: "Blog",
    icon: blog,
  },
  {
    label: "Contact",
    icon: contact,
  },
];

export const heroPage = {
  left: {
    hello: "Hello there",
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
