import { ArticlesDataType, NavLinks, PortfolioItem, ProjectDataType } from "./definition";

export const NavData: NavLinks[] = [
  {
    id: 1,
    name: "Projects",
    href: "/projects"
  },
  {
    id: 2,
    name: "Articles",
    href: "/articles"
  },
  {
    id: 3,
    name: "Talks",
    href: "/talks"
  }
]

export const PortfolioData: PortfolioItem[] = [
  {
    id: 1,
    name: "Github",
    uri: "https://github.com/iamclement1",
  },
  {
    id: 2,
    name: "Twitter",
    uri: "https://twitter.com/_iamclement_",
  },
  {
    id: 3,
    name: "LinkedIn",
    uri: "https://www.linkedin.com/in/nnamdi-azubuike/"
  }
]

export const ProjectData: ProjectDataType[] = [
  {
    id: 1,
    name: "Triple R Salon",
    desc: "Triple R is a renowned full- service beauty salon that is synonymous with exceptional quality and unparalleled luxury.",
    action: "View Project",
    uri: "https://www.triplerunisexsalon.com/",
  },
  {
    id: 2,
    name: "Hostelpaddy",
    desc: "Your No.1 Solution for hostel accommodation An innovating way to relieve you of the hassle of hostel- hunting.",
    action: "View Project",
    uri: "https://hostelpaddy.netlify.app/"
  }
]

export const ArticlesData: ArticlesDataType[] = [
  {
    id: 1,
    date: 'February, 22, 2023',
    readTime: '10',
    title: 'Version Control System -  Introduction to Git & GitHub for beginners',
    readMore: 'Read Articles',
    uri: 'https://iamclement.hashnode.dev/version-control-system-introduction-to-git-github-for-beginners'
  },
  {
    id: 2,
    date: 'February, 16, 2023',
    readTime: '2',
    title: 'Firebase Cloud Storage',
    readMore: 'Read Articles',
    uri: "https://iamclement.hashnode.dev/firebase-cloud-storage"
  },
  {
    id: 3,
    date: 'February, 14, 2023',
    readTime: '3',
    title: 'Firebase Authentication',
    readMore: 'Read Articles',
    uri: "https://iamclement.hashnode.dev/firebase-google-authentication-in-react"
  }
]