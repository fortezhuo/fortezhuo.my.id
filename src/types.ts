export interface TimelineItem {
  position: string
  company: string
  range: string
  description: string[]
}

export interface SkillItem {
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface ProjectSite {
  title: string;
  image: ImageMetadata;
}
