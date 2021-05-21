import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { useTheme } from 'next-themes'
import Image from "next/image";

const Sidebar = () => {
   const { theme, setTheme } = useTheme()

   const changeMode = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
   }
   return (
      <>
         <Image
            src="/myprofile.jpeg"
            alt='avatar'
            width="128px"
            height="128px"
            layout="intrinsic"
            className='mx-auto border rounded-full '
         />
         <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
            <span className='text-blue-500 '>Sankalp</span> Gour
          </h3>
         <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-500'>
            Software Developer
          </p>
         {/* Resume */}
         <a
            href='/Sankalp_Resume.pdf'
            download='Sankalp_Resume.pdf'
            className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-500'>
            <GiTie className='w-6 h-6' />
            <span>Download Resume</span>
         </a>

         {/* Socials */}
         <div className='flex justify-around w-9/12 mx-auto my-5 text-blue-500 md:w-full '>
            <a href='https://www.linkedin.com/in/sankalp-gour-698822184/' aria-label="Linkedin">
               <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
            </a>
            <a href='https://github.com/Sankalp100' aria-label="Github">
               <AiFillGithub className='w-8 h-8 cursor-pointer' />{' '}
            </a>
         </div>

         {/* Contacts */}
         <div
            className='py-2 my-2 bg-gray-200 dark:bg-dark-500'
            style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
            <div className='flex items-center justify-center'>
               <GoLocation className='mr-2' /> <span>Bhopal,India </span>
            </div>
            <p className='my-2 '> sankalpgour06@gmail.com </p>
            <p className='my-2'> 7000171077 </p>
         </div>

         {/* Email Button */}

         <button
            className='w-9/12 px-5 py-2 my-1 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-gray to-blue-500 hover:scale-105 focus:outline-none'
            onClick={() => window.open('mailto:sankalpgour06@gmail.com')}>
            Email me
          </button>
         <button
            className='w-9/12 px-5 py-2 my-1 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-gray to-blue-500 hover:scale-105 focus:outline-none'
            onClick={changeMode}>
            Toggle Theme
          </button>

      </>
   )
}

export default Sidebar