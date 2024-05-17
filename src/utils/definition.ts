export type PortfolioItem = {
  id: number;
  name: string;
  uri: string;
}

export type ProjectDataType = {
  id: number;
  name: string;
  desc: string;
  action: string;
  uri: string;
}

export type NavLinks = {
  id: number;
  name: string;
  href: string;
}

export type ArticlesDataType = {
  id: number;
  date: string;
  readTime: string;
  title: string;
  readMore: string;
  uri: string;
}

export type FooterItemType = {
  id: number;
  title: string;
  [key: string]: string | number | undefined; // Allow any string key with string or number value
}