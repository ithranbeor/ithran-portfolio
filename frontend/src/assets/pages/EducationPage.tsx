import '../../App.css'
import Ithran from '../ithran.png'
import IthranLogo from '../IthranLogo.png'
import { motion } from 'framer-motion';
import BreadcrumbNav from '../../components/BreadcrumbNav';

function EducationPage() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen overflow-hidden relative">

        <header className="px-6 py-8 md:px-10 md:py-10 font-poppins relative z-20">
          <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-xl font-medium text-gray-800 inline-flex items-center gap-2">
              <img src={IthranLogo} alt="Ithran Beor" className="h-10 w-10 object-cover" />
              Ithran Beor
            </h1>
            <BreadcrumbNav currentPath="/education" />
          </nav>
        </header>

        <main className="font-poppins grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-116px)] w-full relative z-10">
          <motion.div
            className="flex flex-col justify-center px-6 pb-32 md:px-12 md:pb-20 lg:px-16 xl:px-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gray-900 tracking-tight leading-none mb-6">
              Education.
            </h1>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-full text-justify">
              Here you can explore my background in information technology, training, and academic achievements.
              I prioritize learning practical, scalable engineering practices and applying them to real-world systems.
            </p>
          </motion.div>

          <div className="hidden md:flex items-end justify-center h-full w-full overflow-hidden">
            <img
              src={Ithran}
              alt="Ithran Beor"
              className="h-full w-full object-contain object-bottom hover:scale-110 transition-transform duration-1000"
            />
          </div>
        </main>

      </div>
    </>
  )
}

export default EducationPage