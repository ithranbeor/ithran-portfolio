import '../../App.css'
import IthranLogo from '../IthranLogo.png'
import { motion } from 'framer-motion';
import Breadcrumbs from '../../components/BreadcrumbNav';
import { Carousel, Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';

function ProjectPage() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen overflow-hidden relative">

        <header className="px-6 py-8 md:px-10 md:py-10 font-poppins relative z-20">
          <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-xl font-medium text-gray-800 inline-flex items-center gap-2">
              <img src={IthranLogo} alt="Ithran Beor" className="h-10 w-10 object-cover" />
              Ithran Beor
            </h1>
            <Breadcrumbs currentPath="/projects" />
          </nav>
        </header>

        <main className="font-poppins grid grid-cols-1 lg:grid-cols-2 w-full gap-8 px-6 pb-32 md:px-10 md:pb-28 lg:px-14 lg:min-h-[calc(100vh-116px)]">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Carousel className="rounded-lg shadow-lg border border-gray-300 overflow-hidden w-full bg-gray-50 h-56 sm:h-72 md:h-96 lg:h-full ">
              <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
            </Carousel>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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
                    <a href="https://flowbite.com/docs/getting-started/introduction/" className="text-cyan-600 hover:underline dark:text-cyan-500">
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
                    Check out the{' '}
                    <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Figma design system
                    </a>{' '}
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
                  <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                    <li><a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">Flowbite Pro</a></li>
                    <li><a href="https://tailwindui.com/" rel="nofollow" className="text-cyan-600 hover:underline dark:text-cyan-500">Tailwind UI</a></li>
                  </ul>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </motion.div>
        </main>

      </div>
    </>
  )
}

export default ProjectPage