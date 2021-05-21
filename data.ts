import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { Service, Skill, IProject } from './types'

import { BsCircleFill } from 'react-icons/bs'

export const services: Service[] = [
   {
      Icon: RiComputerLine,
      title: 'Frontend Development',
      about:
         'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
   },
   {
      Icon: FaServer,
      title: 'Backend  Development',
      about:
         'handle database, server, api using <b>Express </b> & other popular frameworks',
   },
   {
      Icon: AiOutlineApi,
      title: 'API Development',
      about:
         'I can develop robust  REST API using <b>Node API</b> ',
   },
   {
      Icon: MdDeveloperMode,
      title: 'Competitive Coder',
      about:
         'a daily problem solver in <b>HackerRank</b>',
   },
   // {
   //    Icon: AiOutlineAntDesign,
   //    title: 'UI/UX designer',
   //    about:
   //       'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
   // },
   // {
   //    Icon: RiComputerLine,
   //    title: 'Whatever',
   //    about:
   //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
   // },
]

export const languages: Skill[] = [
   {
      Icon: BsCircleFill,
      name: 'React',
      level: '90',
   },
   {
      Icon: BsCircleFill,
      name: 'NextJs',
      level: '90',
   },
   {
      Icon: BsCircleFill,
      name: 'Java Script',
      level: '90',
   },
   {
      Icon: BsCircleFill,
      name: 'Python',
      level: '45',
   },
   
   {
      Icon: BsCircleFill,
      name: 'NodeJs',
      level: '65',
   },
   
   {
      Icon: BsCircleFill,
      name: 'Angular',
      level: '60',
   },
   {
      Icon: BsCircleFill,
      name: 'Git',
      level: '80',
   },
   {
      Icon: BsCircleFill,
      name: 'Linux / Unix',
      level: '75',
   },
]

export const tools: Skill[] = [
   {
      Icon: BsCircleFill,
      name: 'Figma',
      level: '85',
   },
   {
      Icon: BsCircleFill,
      name: 'Photoshop',
      level: '45',
   },
   {
      Icon: BsCircleFill,
      name: 'Illustrator',
      level: '60',
   },
   {
      Icon: BsCircleFill,
      name: 'Framer',
      level: '45',
   },
]

export const projects: IProject[] = [
   {
     id: 0,
     name: "SG Clothing",
     description:
       "This is a e-commerce colthing web-application",
     image_path: "/images/sgclothing.png",
     deployed_url: "https://sgclothing-live.herokuapp.com/",
     github_url: "https://github.com/Sankalp100/crwn-clothing",
     category: ["react"],
     key_techs: ["React", "Firebase", "Sass"],
   },
   {
     id: 7,
     name: "React-CodePen-Clone",
     //TODO add data
     image_path: "/images/ReactCodePen.png",
     deployed_url: "https://react-codepen-clone-one.vercel.app/",
     github_url: "https://github.com/Sankalp100/React-CodePen-clone",
     category: ["react"],
     description:
       "Online code editor where developers can test there code(for HTML, CSS, JS)",
     key_techs: ["React"],
   },
 
   {
     id: 1,
     name: "Crypto-tracker-v1",
     image_path: "/images/crypto-tracker.png",
     deployed_url: "https://crypto-traker-v1.vercel.app/",
     github_url: "https://github.com/Sankalp100/crypto-traker-v1",
     category: ["node", "mongo", "react"],
     description:
       "Cryptocurrency price tracker app made with React",
     key_techs: [
       "React",
       "Hooks",
       "Css"
     ],
   },
 
   // {
   //   id: 2,
   //   name: "Realtime Chat App",
   //   image_path: "/images/chatapp.jpg",
   //   deployed_url: "https://sumit-chat.netlify.app/",
   //   github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
   //   //TODO type on category
   //   category: ["node", "react"],
   //   description:
   //     "Basic Realtime Chat App where one can create a room can talk to each other",
   //   key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
   // },
 
   // {
   //   id: 3,
   //   name: "Tweeter Clone",
   //   image_path: "/images/tweetme.jpg",
   //   deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
   //   github_url: "https://github.com/Dey-Sumit/tweetme",
   //   category: ["django", "react"],
   //   description:
   //     "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
   //   key_techs: ["React", "Django", "Django REST API"],
   // },
   // {
   //   id: 4,
   //   name: "Dev Portfolio",
   //   image_path: "/images/portfolio.jpg",
   //   deployed_url: "http://suprateem.herokuapp.com/",
   //   category: ["vanilla"],
   //   github_url: "https://github.com/Dey-Sumit/tweetme",
   //   description: "Hey, You are seeing this project now...Enjoy",
   //   key_techs: ["Next.js", "Framer Motion", "TypeScript", "Tailwind"],
   // },
 
   // {
   //   id: 5,
   //   name: "Color Classification using tf.js",
   //   image_path: "/images/color.jpg",
   //   deployed_url: "!#",
   //   github_url: "https://github.com/Dey-Sumit/color-classification",
   //   category: ["express", "ml"],
   //   description:
   //     "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
   //   key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
   // },
   // {
   //   id: 6,
   //   name: "YouTube using YouTube ",
   //   image_path: "/images/youtubeClone.png",
   //   deployed_url: "https://not-utube.web.app/",
   //   github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
   //   category: ["express", "ml"],
   //   description:
   //     'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
   //   key_techs: [
   //     "React",
   //     "Redux",
   //     "Firebase Auth",
   //     "YouTube API",
   //     "Sass",
   //     "Bootstrap",
   //   ],
   // },
   // {
   //   id: 9,
   //   name: "Football App",
   //   //TODO add image,github,dep url
   //   image_path: "/images/football.png",
   //   deployed_url: "https://o-my-goal.web.app/",
   //   github_url: "https://github.com/Dey-Sumit/football-app",
   //   category: ["react"],
   //   description:
   //     "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
   //   key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
   // },
 ];