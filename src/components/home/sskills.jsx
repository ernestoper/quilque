import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "../services/Wrapper";
import SkillIcon from "../../utils/SkillIcon";
import Service from "../../utils/Service";
import Portfolio from "../../utils/Portfolio";
import Achievements from "../../utils/Achievements";
import Div from "../../utils/Div";

// IMAGES
import sk1 from "../../assets/PRINCIPAL/skills/pytorch.svg";
import sk2 from "../../assets/PRINCIPAL/skills/tf.png";
import sk3 from "../../assets/PRINCIPAL/skills/sl.png";
import sk4 from "../../assets/PRINCIPAL/skills/pandas.svg";
import sk5 from "../../assets/PRINCIPAL/skills/yolo.svg";
import sk6 from "../../assets/PRINCIPAL/skills/cvat.svg";
import sk7 from "../../assets/PRINCIPAL/skills/opencv.svg";
import sk8 from "../../assets/PRINCIPAL/skills/sk-8.png";
import sk9 from "../../assets/PRINCIPAL/skills/sk-9.png";
import sk10 from "../../assets/PRINCIPAL/skills/sk-10.png";
import sk11 from "../../assets/PRINCIPAL/skills/sk-11.png";
import sk12 from "../../assets/PRINCIPAL/skills/django.svg";
import sk13 from "../../assets/PRINCIPAL/skills/vite.svg";
import sk14 from "../../assets/PRINCIPAL/skills/fastapi.svg";
import sk15 from "../../assets/PRINCIPAL/skills/tailwind.svg";
import sk16 from "../../assets/PRINCIPAL/skills/str.png";
import sk17 from "../../assets/PRINCIPAL/skills/google.png";
import sk18 from "../../assets/PRINCIPAL/skills/docker.png";
import sk19 from "../../assets/PRINCIPAL/skills/pwi.png";
import sk20 from "../../assets/PRINCIPAL/skills/col.png";
import pattern from "../../assets/PRINCIPAL/skills/heading-pattern.png";

import pe1 from "../../assets/PRINCIPAL/skills/sec-3-p-e-1.png";
import pe2 from "../../assets/PRINCIPAL/skills/sec-3-p-e-2.png";
import pe3 from "../../assets/PRINCIPAL/skills/sec-3-p-e-3.png";

const Sskills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (

        <div className="bg-black grid  relatative   gap-4 lg:px-4 px-1 relative fluid-container  lg:grid-cols-2 grid-cols-1 md:gap-8  pt-10 ">

           <div className="bg-black lg:grid-rows-2 grid-flow-col px-12 mb-4">
                <div className="grid  lg:gap-[8px] lg:grid-cols-4 gap-2 grid-cols-2 ">
                    <motion.div href="#" draggable="false" aria-labelledby="title" className=" relative py-6 bg-gradient-to-r 
                                        from-rosachocante via-rojoneon to-anaconda lg:rounded-tl-lg rounded-lg group lg:px-4 px-2"
                                        initial={{ opacity: 0 }}
                                        //animate={{ y: 0, opacity: 1 }}
                                        whileInView={{x: [100, 0], opacity: 1}}
                                        transition={{ duration: 0.7, delay: 0.25 }}
                                        >
                        <span className=" uppercase font-sans tracking-wider lg:text-3lg text-1xl text-white ">
                        Detecção de Objetos
                        </span>
                        <div className="lg:px-4  lg:rounded-tl-lg rounded-lg absolute inset-0 py-6 px-12 bg-anaconda text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_130%_10%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">

                            <span className="lg:text-3lg text-1xl  uppercase font-light tracking-wider text-white">Detecção de Objetos</span>

                        </div>
                    </motion.div>
                    <motion.div href="#" draggable="false" aria-labelledby="title" className="text-white relative py-6 bg-gradient-to-r from-rosachocante
                     via-rojoneon to-anaconda lg:rounded-tl-lg rounded-lg group  lg:px-2 px-0"
                     initial={{ opacity: 0 }}
                     //animate={{ y: 0, opacity: 1 }}
                     whileInView={{x: [-200, 0], opacity: 1}}
                     transition={{ duration: 0.7, delay: 0.25 }}
                     >
                        <div className="uppercase font-sans tracking-wider lg:text-md text-lg">
                        Dataset
                        </div>
                        {/* <span className="uppercase font-sans tracking-wider lg:text-2xl text-1xl">
                        de Imagem
                        </span> */}
                        <div className="lg:px-4 px-0 lg:rounded-tl-lg rounded-lg absolute inset-0 py-6  bg-anaconda text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_-20%_10%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">

                            <span className=" lg:text-3lg  text-1xl uppercase font-light tracking-wider text-white ">Dataset </span>
                            <span className=" lg:text-2lg  text-1xl uppercase font-light tracking-wider text-white ">Preparação</span>

                        </div>
                    </motion.div>
                    <motion.div href="#" draggable="false" aria-labelledby="title" className="text-white relative py-6 bg-gradient-to-r
                     from-rosachocante via-rojoneon to-anaconda  lg:rounded-tl-lg rounded-lg group  lg:px-4 px-2"
                     initial={{ opacity: 0 }}
                     //animate={{ y: 0, opacity: 1 }}
                     whileInView={{y: [-200, 0], opacity: 1}}
                     transition={{ duration: 0.7, delay: 0.25 }}
                     >
                        <span className="uppercase font-sans tracking-wider lg:text-2lg text-1xl">
                        Detecção de Anomalias
                        </span>
                        <div className="lg:px-4 px-2 lg:rounded-tl-lg rounded-lg absolute inset-0 py-6  bg-anaconda text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_10%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">

                            <span className="lg:text-2lg text-1xl  uppercase font-light tracking-wider text-white">Detecção de Anomalias</span>

                        </div>
                    </motion.div>
                    <motion.div href="#" draggable="false" aria-labelledby="title" className="text-white relative py-6 bg-gradient-to-r 
                    from-rosachocante via-rojoneon to-anaconda  lg:rounded-tl-lg rounded-lg group rounded-tr-lg lg:px-4 px-2"
                    initial={{ opacity: 0 }}
                    //animate={{ y: 0, opacity: 1 }}
                    whileInView={{y: [-200, 0], opacity: 1}}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    >
                        <span className="uppercase font-sans tracking-wider lg:text-2lg text-1xl">
                        Controle de Qualidade Industrial
                        </span>
                        <div className=" lg:px-4 px-2 lg:rounded-tl-lg rounded-lg absolute inset-0 py-6 bg-anaconda text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_-20%_10%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">

                            <span className="lg:text-2lg text-1xl  uppercase font-light tracking-wider text-white ">Controle de Qualidade Industrial</span>

                        </div>
                    </motion.div>
                
                    
                    
                </div>
                <motion.div href="#" draggable="false" aria-labelledby="title" className="text-justify  relative py-6 my-2 lg:px-4 
                 shadow-lg rounded-lg -mx-0  shadow-rosachocante  group text-white hidden md:inline-block "
                 initial={{ opacity: 0 }}
                 //animate={{ y: 0, opacity: 1 }}
                 whileInView={{y: [200, 0], opacity: 1}}
                 transition={{ duration: 0.7, delay: 0.25 }}
                 >

                <div id="title" className="text-white lg:text-2xl text-3xl uppercase font-light tracking-wider  ">A visão computacional na indústria oferece benefícios substanciais. Desde a otimização de processos de produção até a análise preditiva de falhas de equipamentos, a visão computacional com redes neurais convolucionais está redefinindo a forma como as organizações interpretam dados visuais para embasar decisões estratégicas.</div>

                <div className="rounded-lg absolute inset-0 py-6 px-4 bg-anaconda text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_-20%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">

                    <span className="lg:text-2xl text-3xl  uppercase font-light tracking-wider rounded-br-lg ">A visão computacional na indústria oferece benefícios substanciais. Desde a otimização de processos de produção até a análise preditiva de falhas de equipamentos, a visão computacional com redes neurais convolucionais está redefinindo a forma como as organizações interpretam dados visuais para embasar decisões estratégicas.</span>

                </div>

                </motion.div>
            </div>
            <motion.div className="flex  justify-center lg:mb-4 mb-4 "
                                initial={{ opacity: 0 }}
                                //animate={{ y: 0, opacity: 1 }}
                                whileInView={{x: [200, 0], opacity: 1}}
                                transition={{ duration: 0.7, delay: 0.25 }}
            >
                <div href="#" draggable="false" aria-labelledby="title" className="relative py-6  group text-white  md:mx-12 xs:mx-2 itens-center text-left ">

                <div className="lg:mt-10 lg:text-6xl text-4xl sm:ml-8 sm:mr-6 xs:ml-8 xs:mr-8 uppercase  tracking-wider   font-sans  bg-gradient-to-r from-verdeneon via-white to-verdeneon inline-block text-transparent bg-clip-text">Soluções de Visão Computacional Personalizadas para  sua Empresa</div>

                {/* <div className="absolute inset-0 py-6 px-12 bg-indigo-600 text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)] text-justify " aria-hidden="true">

                <span className="lg:text-6xl text-3xl  uppercase font-light tracking-wider text-justify font-sans ">Soluções de Visão Computacional Personalizadas para atender demandas da sua Empresa</span>

                </div> */}

                </div>
            </motion.div>

            {/* <Service
                //num="1"
                title="Computer Vision Solutions"
                desc="A visão computacional na indústria oferece benefícios substanciais. Desde a otimização de processos de produção até a análise preditiva de falhas de equipamentos, a visão computacional com redes neurais convolucionais está redefinindo a forma como as organizações interpretam dados visuais para embasar decisões estratégicas."
                data={[
                        "Detecção de Objetos",
                        "Segmentação de Imagem",
                        "Detecção de Anomalias",
                        "Controle de Qualidade Industrial",
                        "Redes Neurais Convolucionais (CNNs)",
                    ]}
            /> */}
          


        </div>
        //     id="skills"
        //     className="bg-anaconda py-[50px] md:py-[100px] relative overflow-hidden lg:-mt-0 xs:columns-1 "
        
        //     {/* BACKGROUND ELEMENTS START */}
        //     {/* <div className="sec-3-bg-gradient-1" />
        //     <div className="sec-3-bg-gradient-2" /> */}
        //     {/*BACKGROUND ELEMENTS END*/}
        //     <div className="max-w-[1680px] px-5 md:px-10 mx-auto pt-[1px] xs:mt[-20px]"> 


        //     {/* SERVICES SECTION START */}
            


        //     <div className="flex  justify-between  py-[50px] md:py-[100px] relative  ">


        //     {/* SECTION HEADING START */}
        //     <div className=" flex lg:-mt-66  gap-2 text-[40px] md:text-[90px] xs:text-[36px] 2xl:text-[120px]  font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
        //                 <span className="mx-auto">Solving Problems Through Good Services e mais coisa que voce image</span>

        //     </div>
        //     {/* SERVICES START */}
        //     <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10  ">
        //                 <Service
        //                     //num="1"
        //                     title="Computer Vision Solutions"
        //                     desc="A visão computacional na indústria oferece benefícios substanciais. Desde a otimização de processos de produção até a análise preditiva de falhas de equipamentos, a visão computacional com redes neurais convolucionais está redefinindo a forma como as organizações interpretam dados visuais para embasar decisões estratégicas."
        //                     data={[
        //                         "Detecção de Objetos",
        //                         "Segmentação de Imagem",
        //                         "Detecção de Anomalias",
        //                         "Controle de Qualidade Industrial",
        //                         "Redes Neurais Convolucionais (CNNs)",
        //                     ]}
        //                 />
        //                 <Service
        //                     //num="2"
        //                     title="Anotações"
        //                     desc="As anotações desempenham um papel crucial no desenvolvimento de soluções de visão computacional, especialmente em contextos de aprendizado supervisionado, onde os algoritmos precisam ser treinados com conjuntos de dados rotulados para realizar tarefas específicas. As anotações consistem em marcar ou identificar visualmente elementos específicos nas imagens ou vídeos, fornecendo informações de referência para o treinamento de modelos."
        //                     data={[
        //                         "Anotação de Objetos",
        //                         "Anotação de Segmentação",
        //                         "Anotação de Keypoints",
        //                         "Anotação de Texto",
        //                         "Anotação de Dados 3D",
        //                     ]}
        //                 />
        //                 <Service
        //                     //num="3"
        //                     title="Treinamento de modelos de Visão Computacional"
        //                     desc="O treinamento de modelos de visão computacional é uma etapa fundamental no desenvolvimento de sistemas capazes de interpretar e extrair informações de imagens ou vídeos. Esse processo envolve ensinar algoritmos a reconhecer padrões, objetos ou características específicas presentes nos dados visuais."
        //                     data={[
        //                         "Dados de Treinamento",
        //                         "Arquitetura do Modelo",
        //                         "Transfer Learning",
        //                         "Validação e Ajuste",
        //                         "Atualização Periódica",
        //                     ]}
        //                 />
        //                 <Service
        //                     //num="4"
        //                     title="Frontend Development"
        //                     desc="Se você está pronto para elevar a experiência do usuário do seu projeto ou deseja revitalizar a interface do seu site, estamos prontos para colaborar. Entre em contato conosco para discutir sua visão e iniciar o processo de desenvolvimento de Frontend que transformará sua ideia em realidade."
        //                     data={[
        //                         "Implementação de Designs Responsivos",
        //                         "Desenvolvimento de Single Page Applications ",
        //                         "Integração com APIs e Backend",
        //                         "Otimização de Desempenho Frontend",
        //                         "Desenvolvimento de Interfaces de Usuário",
        //                     ]}
        //                 />
        //             </div>
        //             {/* SERVICES END */}
        //     {/* SECTION HEADING END */}
        //                 {/* SECTION HEADING START */}
        //                 {/* <div className=" flex  justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
        //                 <span>Solving</span>
        //                 <span>Problems</span>
        //                 <span className="flex items-center gap-2">
        //                     Through
        //                     <img
        //                         src={pattern}
        //                         className="block md:hidden w-[80px] mt-1"
        //                     />
        //                 </span>
        //                 <span className="flex items-center gap-4">
        //                     Good{" "}
        //                     <img
        //                         src={pattern}
        //                         className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
        //                     />
        //                 </span>
        //                 <span>Services</span>
        //     </div> */}
        //     {/* SECTION HEADING END */}
        //     </div>
        //     {/* SKILL ICONS START */}
        //     <div className="grid grid-cols-5 gap-3 md:grid-cols-10 relative">
        //             <SkillIcon path={sk1} width="120" height="160"/>
        //             <SkillIcon path={sk2} />
        //             <SkillIcon path={sk3} />
        //             <SkillIcon path={sk4} />
        //             <SkillIcon path={sk5} />
        //             <SkillIcon path={sk6} />
        //             <SkillIcon path={sk7} />
        //             <SkillIcon path={sk8} />
        //             <SkillIcon path={sk9} />
        //             <SkillIcon path={sk10} />


        //     </div>

        //     <div className="grid grid-cols-5 gap-4 md:grid-cols-10 relative mt-6">
        //             <SkillIcon path={sk15} />
        //             <SkillIcon path={sk11} />
        //             <SkillIcon path={sk13} />
        //             <SkillIcon path={sk12} />
        //             <SkillIcon path={sk14} />
        //             <SkillIcon path={sk16} />
        //             <SkillIcon path={sk18} />
        //             <SkillIcon path={sk17} />

                    
        //             <SkillIcon path={sk19} />
        //             <SkillIcon path={sk20} />


        //     </div>
        //     {/* SKILL ICONS END */}
        //     {/* SERVICES SECTION END */}
        //     <Achievements />
        //     <Portfolio />

        //     </div> 
        // </div>
    );
};

export default Sskills