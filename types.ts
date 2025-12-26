
export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  summary: string;
  date: string;
  imageUrl: string;
}

export interface Newsletter {
  id: string;
  number: string;
  date: string;
  pages: string;
  pdfUrl: string;
}

export interface Officer {
  role: string;
  name: string;
  graduation: string;
}
