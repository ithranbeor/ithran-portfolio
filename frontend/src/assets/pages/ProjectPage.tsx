import '../../App.css'
import { LuHouse, LuFolderCode, LuBriefcase, LuGraduationCap, LuPhone } from "react-icons/lu";
import IthranLogo from '../IthranLogo.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '../../components/BreadcrumbNav';
import { Carousel, Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';

function ProjectPage() {

  return (
    <>
      <div className="bg-gray-200 min-h-screen overflow-hidden relative">
        <header className="p-10 font-poppins relative z-20">
          <nav className="flex items-center justify-between">
            <h1 className="font-poppins text-1xl text-gray-800 font-medium grid-cols-2 gap-0 items-center inline-flex space-x-2 rtl:space-x-reverse">
              <img src={IthranLogo} alt="Ithran Beor" className="h-10 w-10 object-cover" />
              Ithran Beor
            </h1>
            <Breadcrumbs currentPath="/projects" />
          </nav>
        </header>
        
        <main className="font-poppins grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-116px)] w-full relative z-10">
          <motion.div
            className="flex flex-col justify-center px-10 md:px-20 lg:px-32 xl:px-40 pb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Carousel className="rounded-lg shadow-lg border border-gray-300 overflow-hidden w-full bg-gray-50">
              <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
            </Carousel>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center px-10 md:px-20 lg:px-32 xl:px-40 pb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Accordion>
              <AccordionPanel>
                <AccordionTitle>What is Flowbite?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                    dropdowns, modals, navbars, and more.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to&nbsp;
                    <a
                      href="https://flowbite.com/docs/getting-started/introduction/"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      get started&nbsp;
                    </a>
                    and start developing websites even faster with components on top of Tailwind CSS.
                  </p>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>Is there a Figma file available?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                    has a design equivalent in our Figma file.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out the
                    <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Figma design system
                    </a>
                    based on the utility classes from Tailwind CSS and components from Flowbite.
                  </p>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>What are the differences between Flowbite and Tailwind UI?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                    components, whereas Tailwind UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                    technical reason stopping you from using the best of two worlds.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                  <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                    <li>
                      <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/"
                        rel="nofollow"
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </motion.div>

        </main>

        <div className="p-10 fixed bottom-0 left-1 text-gray-800 z-30">
          <div className="inline-flex items-center space-x-1.5 md:space-x-5 rtl:space-x-reverse bg-white/20 rounded-2xl border px-3 py-2 text-sm font-medium backdrop-blur-md shadow-sm border-white/20">
              
            <Link to="/" className="inline-flex items-center text-2xl font-medium text-body hover:text-fg-brand hover:scale-110 transition-transform duration-400">
              <LuHouse />
            </Link>
            
            <Link to="/projects" className="inline-flex items-center text-2xl font-medium text-body hover:text-fg-brand hover:scale-110 transition-transform duration-400">
              <LuFolderCode />
            </Link>
            
            <Link to="/work" className="inline-flex items-center text-2xl font-medium text-body hover:text-fg-brand hover:scale-110 transition-transform duration-400">
              <LuBriefcase />
            </Link>
            
            <Link to="/education" className="inline-flex items-center text-2xl font-medium text-body hover:text-fg-brand hover:scale-110 transition-transform duration-400">
              <LuGraduationCap />
            </Link>
            
            <Link to="/contact" className="inline-flex items-center text-2xl font-medium text-body hover:text-fg-brand hover:scale-110 transition-transform duration-400">
              <LuPhone />
            </Link>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default ProjectPage