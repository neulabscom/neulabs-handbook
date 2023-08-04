const allUsers = [
  {
    imageSrc: "https://placehold.co/400x400",
    name: "Fabrizio Cafolla",
    team: "platform",
    jobTitle: "Platform Engineer",
    socialLinks: [
      { name: "github", link: "https://github.com/fabriziocafolla" },
      { name: "linkedin", link: "https://linkedin.com/in/fabriziocafolla" },
    ],
    tags: ["engineering", "backend", "platform", "devops"],
  },
  {
    imageSrc: "/img/people/dandpz.jpeg",
    name: "Daniele Dapuzzo",
    team: "data",
    jobTitle: "Data Engineering Manager",
    socialLinks: [
      { name: "github", link: "https://github.com/dandpz" },
      { name: "linkedin", link: "https://linkedin.com/in/daniele.dapuzzo" },
    ],
    tags: ["engineering", "backend", "data"],
  },
  {
    imageSrc: "/img/people/edorolle.jpeg",
    name: "Edoardo Rolle",
    team: "data",
    jobTitle: "Data Engineer",
    socialLinks: [
      { name: "github", link: "https://github.com/edorolle" },
      { name: "linkedin", link: "https://linkedin.com/in/edoardorolle" },
    ],
  },
  {
    imageSrc: "https://placehold.co/400x400",
    name: "Simone Squillace",
    team: "d2c",
    jobTitle: "Software Engineer",
    socialLinks: [
      { name: "github", link: "https://github.com/..." },
      { name: "linkedin", link: "https://linkedin.com/in/..." },
    ],
  },
  {
    imageSrc: "https://placehold.co/400x400",
    name: "Filippo Locoro",
    team: "d2c",
    jobTitle: "Software Engineer",
    socialLinks: [
      { name: "github", link: "https://github.com/..." },
      { name: "linkedin", link: "https://linkedin.com/in/..." },
    ],
  },
  {
    imageSrc: "https://placehold.co/400x400",
    name: "Skender Moglica",
    team: "d2c",
    jobTitle: "Software Engineer",
    socialLinks: [
      { name: "github", link: "https://github.com/..." },
      { name: "linkedin", link: "https://linkedin.com/in/..." },
    ],
  },
  {
    imageSrc: "https://placehold.co/400x400",
    name: "Sergio Vagni",
    team: "d2c",
    jobTitle: "Software Engineer",
    socialLinks: [
      { name: "github", link: "https://github.com/..." },
      { name: "linkedin", link: "https://linkedin.com/in/..." },
    ],
  },
  {
    imageSrc: "https://placehold.co/400x400",
    name: "Alberto Pirovano",
    team: "d2c",
    jobTitle: "VP of Engineering",
    socialLinks: [
      { name: "github", link: "https://github.com/..." },
      { name: "linkedin", link: "https://linkedin.com/in/..." },
    ],
  },
  {
    imageSrc: "https://placehold.co/400x400",
    name: "Andrea Pregnolato",
    team: "internal",
    jobTitle: "VP of Engineering",
    socialLinks: [
      { name: "github", link: "https://github.com/..." },
      { name: "linkedin", link: "https://linkedin.com/in/..." },
    ],
  },
  {
    imageSrc: "https://placehold.co/400x400",
    name: "Nicholas Roscino",
    team: "internal",
    jobTitle: "Software Engineer",
    socialLinks: [
      { name: "github", link: "https://github.com/..." },
      { name: "linkedin", link: "https://linkedin.com/in/..." },
    ],
  },
  {
    imageSrc: "https://placehold.co/400x400",
    name: "Giuseppe Schipani",
    team: "cto",
    jobTitle: "CTO",
    socialLinks: [
      { name: "github", link: "https://github.com/..." },
      { name: "linkedin", link: "https://linkedin.com/in/..." },
    ],
  },
];

// sort by last name
allUsers.sort((a, b) => {
  const nameA = a.name.split(" ")[1];
  const nameB = b.name.split(" ")[1];
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});


export default allUsers;
