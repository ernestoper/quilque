import React, { useState } from 'react'
import { Link} from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/img/portfolio/LOGOCORES/logo.png';
import { navLinksdata } from '../../constants';
import HashLoader from "react-spinners/HashLoader";




const Navbar = () => {
  const [loading,setLoading]=useState(true)
  window.onscroll = function() {scrollFunction()}

  function scrollFunction() {
      if(document.getElementById('navbar')){
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

              document.getElementById('navbar').classList.add('bg-cinzaed');
          }else{

              document.getElementById('navbar').classList.remove('bg-pretoneon');
          }
      }
  }
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className="lg:w-full lg:h-18 h-14 flex pr-5 top-0 z-50 bg-pretoneon sticky justify-between items-center font-lg ">
      <div className='lg:ml-12 ml-4 '>
        <img src={logo} alt="logo" className='lg:h-12 lg:w-44 h-12 w-18' />
      </div>
      <div className='bg-gradient-to-r from-anaconda via-anaconda via-anaconda to-carmesina hover:opacity-200 rounded-full flex-shrink-0   flex-wrap items-center justify-between'>
        <ul className="hidden mdl:inline-flex ">
          {navLinksdata.map(({ _id, title, link }) => (
            <div
              className=""
              key={_id}
            >
              
              <Link className=' px-10 h-10 hover:text-white    
                               hover:-translate-x-1 hover:scale-110 delay-10 rounded-full 
                               items-center text-lg inline-flex font-semibold leading-6 
                               text-white   hover:bg-gradient-to-r hover:from-rojoneon hover:via-anaconda hover:via-anaconda hover:to-anaconda  transition duration-300 ease-in-out'
                // activeClass="active"
                to={link}

              >
                {title}
              </Link>
            </div>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-pretoneon w-10 h-10 inline-flex items-center justify-center rounded-full text-verdeneon cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-pretoneon p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-20 " src={logo} alt="logo" />

              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <div
                    key={item._id}
                    className="text-base font-normal text-verdeneon tracking-wide cursor-pointer hover:text-anaconda duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      // activeClass="active"
                      to={item.link}
                      // spy={true}
                      // smooth={true}
                      // offset={-70}
                      // duration={500}
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4 text-laranjaneon ">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaFacebookF />
                  </span>
                  <span className="bannerIcon">
                    <FaTwitter />
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-0 text-verdeneon hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
      {/* <div className='hidden mr-8    mdl:inline-flex  gap-6 lg:gap-10  text-white bg-gradient-to-r from-rojoneon via-rojoneon via-carmesina to-carmesina hover:opacity-200 rounded-full flex-shrink-0   flex-wrap items-center justify-between' >
          <div >
          <Link
              to='/contato'
                  type= 'button'
                  //className=" hidden  hover:border-2 hover:border-white relative md:inline-flex items-center rounded-full  bg-orange-500 px-2  text-xl font-medium text-white shadow-sm hover:bg-laranjaneon focus:outline-none focus:ring-2 focus:ring-transparent "
                className='px-8 hover:-translate-x-1 hover:scale-120 delay-10 hover:text-white hover:border-2 hover:border-verdeneon   gap-8 rounded-full font-primary text-white font-bold h-[50px]  text-lg hover:bg-gradient-to-r hover:from-carmesina hover:via-rojoneon hover:via-carmesina hover:to-rojoneon '
                >
                  Contato
                  <HashLoader className=" ml-4  h-4 w-4  mt-3 " loading={loading} size={20} color="#f2f2f2" />
                  
              </Link>

          </div>
          
        </div> */}
    </div>
  );
}

export default Navbar