import '../../App.css'
import { LuHouse, LuFolderCode, LuBriefcase, LuGraduationCap, LuPhone } from "react-icons/lu";
import Ithran from '../ithran.png'
import IthranLogo from '../IthranLogo.png'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';
import Breadcrumbs from '../../components/BreadcrumbNav';

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-2 py-1 mx-0.5 rounded-lg bg-black/10 backdrop-blur-md border border-white/50 shadow-md text-gray-900 font-medium">
    {children}
  </span>
);

function HomePage() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen overflow-hidden relative">
        
        <header className="p-10 font-poppins relative z-20">
          <nav className="flex items-center justify-between">
            <h1 className="font-poppins text-1xl text-gray-800 font-medium grid-cols-2 gap-0 items-center inline-flex space-x-2 rtl:space-x-reverse">
              <img src={IthranLogo} alt="Ithran Beor" className="h-10 w-10 object-cover" />
              Ithran Beor
            </h1>
            <Breadcrumbs currentPath="/" />
          </nav>
        </header>
        
        <main className="font-poppins grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-116px)] w-full relative z-10">
          <motion.div
            className="flex flex-col justify-center px-10 md:px-12 lg:px-16 xl:px-20 pb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl text-gray-900 tracking-tight leading-none mb-6">
              Hi!
            </h1>
            <p className="text-base md:text-base lg:text-sm text-gray-700 leading-relaxed max-w-full text-justify">
              I'm <Highlight>Ithran Beor Turno</Highlight>, a <Highlight>Bachelor of Science in Information Technology</Highlight> graduate
              from the <Highlight>University of Science and Technology of Southern Philippines</Highlight>, Cagayan de Oro City.
              I build full-stack web applications using <Highlight>React</Highlight>, <Highlight>TypeScript</Highlight>,{' '}
              <Highlight>Django</Highlight>, <Highlight>PostgreSQL</Highlight>, and <Highlight>Supabase</Highlight>,
              deploying production-ready systems via <Highlight>Render</Highlight>. My work spans{' '}
              <Highlight>interface design</Highlight>, <Highlight>REST API development</Highlight>, and{' '}
              <Highlight>academic management systems</Highlight> — always with a focus on clean architecture and intuitive user experience.
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

export default HomePage