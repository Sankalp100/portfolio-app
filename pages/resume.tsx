import Bar from '../components/Bar'
import { languages, tools } from '../data'
import { motion } from "framer-motion";
import { fadeInUp, routeFade } from "../animation";

const Resume = () => {
    return (
        <motion.div
      className="px-6 py-2"
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
            {/* //! Education & Experience */}
            <div className='grid gap-6 md:grid-cols-2'>
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className='my-3 text-2xl font-bold'>Education</h5>
                    <div className=''>
                        <h5 className='my-2 text-xl font-bold'>
                        Information Technology (B.Tech)
                  </h5>
                        <p className='font-semibold'>
                        Indian Institute of Information Technology, Vadodara (2016-2020)
                  </p>
                    </div>
                    <div>
                        <h5 className='my-3 text-2xl font-bold'>Skills</h5>
                        <div className='my-2'>
                            {languages.map((language, i) => (
                                <Bar value={language} key={i} />
                            ))}
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className='my-3 text-2xl font-bold'>Experience</h5>
                    <div className=''>
                        <h5 className='my-1 text-xl font-bold'>
                            Software Developer
                        </h5>
                        <div className="flex ">
                            <p className='font-semibold'>Go Laundry</p><a href="https://www.golaundry.app/" className="mx-6">www.golaundry.app</a>
                        </div>
                        <p className='my-2'>Created a web admin panel for an Online Laundry Pickup & Delivery
                        Service with 100+ business customers to create, manage, and monitor
deliveries using NextJs.</p>
                    </div>
                    <div className=''>
                        <h5 className='my-1 text-xl font-bold'>
                            Frontend Developer
                        </h5>
                        <div className="flex ">
                            <p className='font-semibold'>DIGITebl</p>
                            <a href="http://digitebl.com" className="mx-6">digitebl.com</a>
                        </div>
                        <p className='my-2'>Worked within an agile team and helped prioritize and scope feature
requests to ensure that the biggest impact features were worked on first.</p>
                    </div>
                    <div className=''>
                        <h5 className='my-1 text-xl font-bold'>
                        Software Engineer Intern
                        </h5>
                        <div className="flex ">
                            <p className='font-semibold'>ProT Systems PVT. LTD.</p>
                            <a href="http://www.protsystems.com" className="mx-4">www.protsystems.com</a>
                        </div>
                        <p className='my-2'>Worked on a live project(FitMix). Where I developed the
front-end in Angular6/7 and back-end with node and MongoDB. And I also
work on their Main Project(Perfeqta) where I work on API’s.</p>
                    </div>
                </motion.div>
            </div>

            {/* Languages & Tools
            <div className='grid gap-9 md:grid-cols-2'>
                

                <div>
                    <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
                    <div className='my-2'>
                        {tools.map((tool, i) => (
                            <Bar value={tool} key={i} />
                        ))}
                    </div>
                </div>
            </div> */}
        </motion.div>
    )
}

export default Resume