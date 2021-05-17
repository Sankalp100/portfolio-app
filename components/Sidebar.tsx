import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'

const Sidebar = () => {
    return (
       <>
          <img
             src="https://media-exp1.licdn.com/dms/image/C5603AQGYpKR4AFyU1w/profile-displayphoto-shrink_200_200/0/1616697723745?e=1626912000&v=beta&t=Qm-IYc2khBJ7Y9M_zBefsNWrq7_Bnc_-RezTi-1MFPQ"
             alt='avatar'
             className='w-32 h-32 mx-auto border rounded-full '
          />
          <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
             <span className='text-green '>Sankalp</span> Gour
          </h3>
          <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500'>
             Software Developer
          </p>
          {/* Resume */}
          <a
             href='/assets/Sumit Dey Resume.pdf'
             download='Sumit Dey Resume.pdf'
             className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-500'>
             <GiTie className='w-6 h-6' />
             <span>Download Resume</span>
          </a>
 
          {/* Socials */}
          <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full '>
             <a href='https://www.linkedin.com/in/sankalp-gour-698822184/'>
                <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
             </a>
             <a href='https://github.com/Sankalp100'>
                <AiFillGithub className='w-8 h-8 cursor-pointer' />{' '}
             </a>
          </div>
 
          {/* Contacts */}
          <div
             className='py-4 my-5 bg-gray-200 dark:bg-black-500'
             style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
             <div className='flex items-center justify-center'>
                <GoLocation className='mr-2' /> <span>Bhopal,India </span>
             </div>
             <p className='my-2 '> sankalpgour06@gmail.com </p>
             <p className='my-2'> 7000171077 </p>
          </div>
 
          {/* Email Button */}
 
          <button
             className='w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none'
             onClick={() => window.open('mailto:sankalpgour06@gmail.com')}>
             Email me
          </button>
          <button
             className='w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none'
             onClick={() => window.open('mailto:sankalpgour06@gmail.com')}>
             Email me
          </button>
          
       </>
    )
 }
 
 export default Sidebar