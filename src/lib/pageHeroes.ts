export interface PageHeroConfig {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const pageHeroes = {
  about: {
    eyebrow: "About the Conference",
    title: "IACS 2027",
    description: "International Academy of Cardiovascular Sciences — India Section International Conference 2027.",
    image: "/images/Bg images/About/About Sec1.png",
    imageAlt: "Cardiovascular science research and collaboration",
  },
  committee: {
    eyebrow: "Leadership & Organization",
    title: "Committees",
    description: "Meet the dedicated teams and esteemed leadership organizing IACS 2027.",
    image: "/images/Bg images/About/About Sec2.png",
    imageAlt: "Medical and scientific leadership collaborating",
  },
  speakers: {
    eyebrow: "Distinguished International Scientists",
    title: "International Scientists",
    description: "Learn from globally recognised experts sharing groundbreaking research in cardiovascular sciences.",
    image: "/images/Bg images/About/GLA Drone Shot2.png",
    imageAlt: "International medical speakers at a conference stage",
  },
  programme: {
    eyebrow: "Scientific Schedule",
    title: "Programme",
    description: "Explore the comprehensive schedule of keynotes, symposia, and scientific sessions.",
    image: "/images/Bg images/About/About Sec1.png",
    imageAlt: "Conference schedule and scientific auditorium",
  },
  abstracts: {
    eyebrow: "Scientific Contributions",
    title: "Abstracts",
    description: "Information and guidelines for submitting your research for presentation at IACS 2027.",
    image: "/images/Bg images/About/About Sec2.png",
    imageAlt: "Scientific research papers and data",
  },
  registration: {
    eyebrow: "Join the Conference",
    title: "Registration",
    description: "Secure your place at IACS 2027. Review fee categories, important dates, and registration guidelines.",
    image: "/images/Bg images/About/GLA Drone Shot2.png",
    imageAlt: "Professional medical conference registration desk",
  },
  sponsorship: {
    eyebrow: "Partnership Opportunities",
    title: "Sponsorship",
    description: "Support cardiovascular innovation. Discover how your organization can partner with IACS 2027.",
    image: "/images/Bg images/About/About Sec1.png",
    imageAlt: "Scientific collaboration and healthcare innovation partnership",
  },
  venue: {
    eyebrow: "Host Location",
    title: "Conference Venue",
    description: "Discover GLA University, Mathura — a premier institution for pharmaceutical research and education.",
    image: "/images/Bg images/About/GLA Drone Shot2.png",
    imageAlt: "GLA University campus and professional institutional exterior",
  },
  contact: {
    eyebrow: "Get in Touch",
    title: "Contact Us",
    description: "Reach out to the organizing committee for any inquiries regarding the conference.",
    image: "/images/Bg images/About/GLA Drone Shot2.png",
    imageAlt: "IPR building and professional institutional exterior",
  },
  awards: {
    eyebrow: "Awards & Orations",
    title: "Awards, Orations & Symposia",
    description: "Discover the named scientific sessions and young investigator awards featured at IACS 2027.",
    image: "/images/Bg images/About/About Sec2.png",
    imageAlt: "Medical awards and recognition ceremony",
  },
  researchAreas: {
    eyebrow: "Scientific Focus",
    title: "Research Areas",
    description: "A comprehensive list of the core themes, topics and areas of cardiovascular research covered at IACS 2027.",
    image: "/images/Bg images/About/About Sec2.png",
    imageAlt: "Scientific laboratory and research data analysis",
  }
} satisfies Record<string, PageHeroConfig>;
