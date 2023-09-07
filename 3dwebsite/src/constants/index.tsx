import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

interface NavLink {
  id: string;
  title: string;
}

interface Service {
  title: string;
  icon: string;
}

interface Technology {
  name: string;
  icon: any;
}

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

interface ProjectTag {
  name: string;
  color: string;
}

interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  source_code_link: string;
}

const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: Service[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies: Technology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: Experience[] = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mart 2020 - Nisan 2021",
    points: [
      "React.js ve diğer ilgili teknolojileri kullanarak web uygulamaları geliştirmek ve sürdürmek.",
      "Yüksek kaliteli ürünler oluşturmak için tasarımcılar, ürün yöneticileri ve diğer geliştiriciler dahil olmak üzere işlevler arası ekiplerle işbirliği yapmak.",
      "Duyarlı tasarım uygulamak ve tarayıcılar arası uyumluluğu sağlamak.",
      "Kod incelemelerine katılmak ve diğer geliştiricilere yapıcı geri bildirim sağlamak.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Ocak 2021 - Şubat 2022",
    points: [
      "React.js ve diğer ilgili teknolojileri kullanarak web uygulamaları geliştirmek ve sürdürmek.",
      "Yüksek kaliteli ürünler oluşturmak için tasarımcılar, ürün yöneticileri ve diğer geliştiriciler dahil olmak üzere işlevler arası ekiplerle işbirliği yapmak.",
      "Duyarlı tasarım uygulamak ve tarayıcılar arası uyumluluğu sağlamak.",
      "Kod incelemelerine katılmak ve diğer geliştiricilere yapıcı geri bildirim sağlamak.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Ocak 2022 - Ocak 2023",
    points: [
      "React.js ve diğer ilgili teknolojileri kullanarak web uygulamaları geliştirmek ve sürdürmek.",
      "Yüksek kaliteli ürünler oluşturmak için tasarımcılar, ürün yöneticileri ve diğer geliştiriciler dahil olmak üzere işlevler arası ekiplerle işbirliği yapmak.",
      "Duyarlı tasarım uygulamak ve tarayıcılar arası uyumluluğu sağlamak.",
      "Kod incelemelerine katılmak ve diğer geliştiricilere yapıcı geri bildirim sağlamak.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Ocak 2023 - Günümüz",
    points: [
      "React.js ve diğer ilgili teknolojileri kullanarak web uygulamaları geliştirmek ve sürdürmek.",
      "Yüksek kaliteli ürünler oluşturmak için tasarımcılar, ürün yöneticileri ve diğer geliştiriciler dahil olmak üzere işlevler arası ekiplerle işbirliği yapmak.",
      "Duyarlı tasarım uygulamak ve tarayıcılar arası uyumluluğu sağlamak.",
      "Kod incelemelerine katılmak ve diğer geliştiricilere yapıcı geri bildirim sağlamak.",
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    testimonial: "İmkanız olduğunu düşünüyordum...",
    name: "Zeynep Akbaş",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Harika bir deneyimdi...",
    name: "Hatice çiler",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Vay canına...",
    name: "Pınar güler",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects: Project[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
