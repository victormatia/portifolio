import repicesThumb from './thumbs/recipes-thumb.png';
import ualletThumb from './thumbs/uallet-thumb.png';
import tunesThumb from './thumbs/tunes-thumb.png';
import blogsThumb from './thumbs/blogs-thumb.png';

export const projects = [
  {
    name: 'Recipes',
    tag: 'FrontEnd',
    thumb: repicesThumb,
    repo: 'https://github.com/victormatia/recipes-app',
    link: 'https://recipes-hdxwcw7ku-victormatia.vercel.app/',
  },
  {
    name: 'Wallet',
    tag: 'FrontEnd',
    thumb: ualletThumb,
    repo: 'https://github.com/victormatia/wallet-redux',
    link: 'https://wallet-redux-bh14u6cvy-victormatia.vercel.app/',
  },
  {
    name: 'BlogsApi',
    tag: 'BackEnd',
    thumb: blogsThumb,
    repo: 'https://github.com/victormatia/blogs-api',
    link: '',
  },
  {
    name: 'Trybe Tunes',
    tag: 'Em breve',
    thumb: tunesThumb,
    repo: '',
    link: '',
  },
];

export const aboutMe = {
  about: 'Um pouco mais sobre mim. Tenho 24 anos e sou Cearense. Há um tempo, descobri minha paixão pelo desenvolvimento de software e, em 20 de abril de 2022, decidi entrar de cabeça nesse mundo e me tornar um dev. Atualmente, sou um profissional full stack certificado pela Trybe, porém, sigo me especializando, e venho estudando python como minha segunda linguagem de programação. Dito isso, separei alguns momentos importantes da minha carreira na linha do tempo a seguir:',
  timeLinePoints: [
    {
      id: 1,
      title: '❤️ | Descobri minha paixão por desenvolvimento de softwares',
      context: 'Precisei de um site para a minha empresa e decidi construir um por conta própria',
      date: '2021/06',
    },
    {
      id: 2,
      title: '🎯 | Decidi me dedicar totalmente aos estudos de programação',
      context: 'Optei por fazer transição de carreira  e iniciei o curso de desenvolvimento web na Trybe para me tornar um profissional Full Stack.',
      date: '2022/04',
    },
    {
      id: 3,
      title: '🌐 | Me tornei bolsista do Google For Startups',
      context: 'Tive a grande oportunidade de participar de um processo setivo para ganhar um incentivo finaceiro do google, e assim continuar me dedicando a os estudos, e passei!',
      date: '2022/09',
    },
    {
      id: 4,
      title: '🎨 | Me tornei um profissional Front End!',
      context: 'Finalizei o segundo módulo da Trybe e, após conquistar 100% de aprovação em todos os projetos avaliativos, ganhei a certificação de profissional Front end.',
      date: '2022/10',
    },
    {
      id: 5,
      title: '🚀 | Consegui meu primeiro emprego em tecnologia!',
      context: 'Passei no processo seletivo da Trybe para trabalhar como Student Summer de instrução.',
      date: '2023/01',
    },
    {
      id: 6,
      title: '👨🏼‍💻 | Me tornei um profissional Full Stack!',
      context: 'Finalizei o tercéiro módulo da Trybe e, após conquistar 100% de aprovação em todos os projetos avaliativos, ganhei a certificação de profissional Back end.',
      date: '2022/10',
    },
  ],
}

