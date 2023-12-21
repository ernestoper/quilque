import React from 'react'
import logt from '../../assets/PRINCIPAL/icones/gato.png';
import idv from '../../assets/img/portfolio/ICONS/IDV.png';
import imp from '../../assets/img/portfolio/ICONS/IMP.png';
import wb from '../../assets/img/portfolio/ICONS/WB.png';
import vec from '../../assets/img/portfolio/ICONS/VEC.png';
import smb from '../../assets/img/portfolio/ICONS/SM.png';
import { motion } from "framer-motion";
const posts_design  = [
  {
    _id:3001,
    title: 'Desenvolvimento de Conjuntos de Dados',
    img:logt,
    href: '#',
    category: { name: 'Article', href: '#' },
    minidescription: 'As anotações de frames desempenham ',
    description:'As anotações de frames desempenham um papel crucial no treinamento de modelos em tarefas de visão computacional, especialmente em problemas de detecção de objetos, segmentação e outras aplicações relacionadas.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    _id:3002,
    title: 'Desenvolvimento de Algoritmos',
    href: '#',
    img: idv,
    category: { name: 'Video', href: '#' },
    minidescription: 'A  idealização da identidade visual de uma empresa,',
    description:'Criação de algoritmos personalizados para tarefas específicas, como detecção de objetos, reconhecimento facial, rastreamento de movimento, segmentação de imagem, entre outras.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    _id:3003,
    title: 'Desenvolvimento de Aplicações de Visão Computacional',
    href: '#',
    img: imp,
    category: { name: 'Case Study', href: '#' },
    minidescription:'Ainda hoje, os impressos são o material gráfico de propaganda mais utilizado ',
    description:'Criação de aplicações práticas, como sistemas de vigilância inteligente, reconhecimento automático de placas de veículos, controle de qualidade em linhas de produção, entre outros.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    _id:3004,
    title: 'Consultoria em Visão Computacional:',
    href: '#',
    img: smb,
    category: { name: 'Case Study', href: '#' },
    minidescription:'O bom design de embalagem pode garantir uma ótima comunicação com o consumidor',
    description:'Fornecimento de consultoria especializada para entender os requisitos do cliente, propor soluções adequadas e orientar estratégias de implementação.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    _id:3005,
    title: 'Soluções para Indústrias Específicas',
    href: '#',
    img: wb,
    category: { name: 'Case Study', href: '#' },
    minidescription:'A internet tem papel determinante no planejamento de comunicação para expandir',
    description:'Desenvolvimento de soluções específicas para setores como saúde, agricultura, manufatura, varejo, segurança, entre outros, para atender a desafios particulares de cada setor.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    _id:3006,
    title: 'Processamento de Imagens',
    href: '#',
    img: vec,
    category: { name: 'Case Study', href: '#' },
    minidescription:'Criação de artes e trabalhos com a qualidade exigida ',
    description:'Aplicação de técnicas avançadas de processamento de imagens para melhorar a qualidade, corrigir distorções e otimizar as imagens para tarefas específicas.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]
function Incentives() {
  return (
    <div className="  bg-white">
    <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div className="max-w-3xl">
          <span className="text-4xl font-bold text-azulforte ">
            Serviços para atender a demanda da sua empresa
          </span>

        </div>
        <div className="mt-16  grid grid-cols-1 gap-y-16 gap-x-16 lg:grid-cols-3   "
>
          {posts_design.map((posts_design) => (
            <motion.div key={posts_design._id} className="sm:flex lg:block   shadow-2xl rounded-lg  shadow-anaconda"                    
            initial={{ opacity: 0 }}
            //animate={{ y: 0, opacity: 1 }}
            whileInView={{x: [-200, 0], opacity: 1}}
            transition={{ duration: 0.7, delay: 0.25 }}>
              <motion.div className="flex-shrink-0 "initial={{ opacity: 0 }}
                    //animate={{ y: 0, opacity: 1 }}
                    whileInView={{x: [100, 0], opacity: 1}}
                    transition={{ duration: 0.7, delay: 0.25 }}>
                <img className=" lg:h-60 lg:w-60 sm:w-64 sm:h-64  lg:ml-14 lg:mt-8 mt-8 ml-4 sm:ml-12 " src={posts_design.img} alt="" />
              </motion.div>
              <div className="lg:pt-2 lg:pl-20 ">
                <h3 className="lg:-ml-0  lg:pt-4 sm:pt-80 sm:-ml-72 text-lg font-medium sm:pr-4 sm:pl-2  text-transparent bg-clip-text bg-gradient-to-r from-rojoneon via-anaconda to-anaconda">{posts_design.title}</h3>
                <motion.p className="text-sm text-justify text-black lg:-ml-20  lg:-mr-24 lg:pr-32 lg:pt-4 sm:pt-6 sm:-ml-80 sm:pl-10 sm:pr-4 sm:pb-4 "
                  initial={{ opacity: 0 }}
                  //animate={{ y: 0, opacity: 1 }}
                  whileInView={{y: [200, 0], opacity: 1}}
                  transition={{ duration: 0.7, delay: 0.25 }}>
                    {posts_design.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Incentives