import type { ReactNode } from "react";

export interface Project {
  name: string;
  description: ReactNode;
  technologies: Array<string>;
  github?: string;
  pageLink?: string;
  images: Array<string>;
}
