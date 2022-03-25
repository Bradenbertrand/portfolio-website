const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'localhost:3000',
  title: 'BB',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Braden Bertrand',
  role: 'Full-Stack React Developer',
  description:
    'Reinventing the way we interact with technology through unique design solutions & interactive experiences.',
  resume: '/Bertrand-Braden-Resume.pdf',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/BradenBertrand',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Wordle Leaderboard',
    description:
      'A discord bot and React website for tracking and ranking Wordle scores.',
    stack: ['React', 'ExpressJS', 'MongoDB'],
    sourceCode: 'https://github.com/Bradenbertrand/WordleLeaderboards',
    livePreview: 'https://wordleleaderboard.herokuapp.com/',
  },
  {
    name: 'Let\'s All Talk',
    description:
      'A anonymous chat messaging app with only 1 chatroom, for everyone.',
    stack: ['React', 'Auth0', 'Chakra UI', 'Firebase'],
    sourceCode: 'https://github.com/Bradenbertrand/letsalltalk',
    livePreview: 'https://letsalltalk.vercel.app',
  },
  {
    name: 'Dealership Inventory Manager',
    description:
      'A simple software for users to manage their inventory or personal car collections with ease.',
    stack: ['React', 'ExpressJS', 'MongoDB', "material UI"],
    sourceCode: 'https://github.com/Bradenbertrand/DealershipInventoryManagement',
    livePreview: 'https://github.com/Bradenbertrand/DealershipInventoryManagement',
  },

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  "Express JS",
  'Material UI',
  'Git',
  'CI/CD',
  'Python',
  'Java',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bradenbertrand@outlook.com',
}

export { header, about, projects, skills, contact }
