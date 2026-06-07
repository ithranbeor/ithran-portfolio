import '../../App.css'
import Ithran from '../ithran.png'
import IthranLogo from '../IthranLogo.png'
import { motion } from 'framer-motion';
import Breadcrumbs from '../../components/BreadcrumbNav';

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="inline px-1 py-1 mx-0.5 rounded-md bg-white/70 text-gray-900 font-medium shadow-sm">
    {children}
  </span>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-3">
      {subtitle}
    </p>

    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
      {title}
    </h2>
  </div>
);

function HomePage() {

  const technologies = [
    'React',
    'TypeScript',
    'Django',
    'PostgreSQL',
    'Supabase',
    'TailwindCSS',
    'Figma',
    'React Native',
    'REST API',
    'GitHub',
  ];

  const services = [
    {
      title: 'Frontend Development',
      description:
        'Building responsive and modern user interfaces with React, TypeScript, and TailwindCSS while focusing on accessibility and smooth user experience.',
    },
    {
      title: 'Backend Development',
      description:
        'Developing scalable backend systems using Django, PostgreSQL, and Supabase with proper database structure and API integration.',
    },
    {
      title: 'UI/UX Design',
      description:
        'Designing clean and user-friendly interfaces in Figma with focus on usability, clarity, and modern visual aesthetics.',
    },
  ];

  const highlights = [
    {
      number: '5+',
      label: 'Academic & Personal Projects',
    },
    {
      number: '3+',
      label: 'Full-Stack Systems Developed',
    },
    {
      number: '2026',
      label: 'Expected Graduation Year',
    },
  ];

  return (
    <>
      <div className="bg-gray-200 min-h-screen overflow-hidden relative">

        {/* BACKGROUND EFFECTS */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gray-300/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-400/30 rounded-full blur-3xl"></div>

        {/* HEADER */}
        <header className="px-6 py-8 md:px-10 md:py-10 font-poppins relative z-20">
          <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-xl font-medium text-gray-800 inline-flex items-center gap-3">
              <img
                src={IthranLogo}
                alt="Ithran Beor"
                className="h-10 w-10 object-cover rounded-full shadow-md"
              />
              Ithran Beor
            </h1>
            <Breadcrumbs currentPath="/" />
          </nav>
        </header>

        {/* HERO SECTION */}
        <main className="font-poppins grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-120px)] w-full relative z-10">

          {/* LEFT */}
          <motion.div
            className="flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 xl:px-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
          >

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              Full-Stack Developer
            </p>

            <h1 className="text-6xl md:text-7xl lg:text-8xl text-gray-900 tracking-tight leading-none mb-6">

              Hi,

            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl text-justify">

              I am Ithran Beor Turno, a passionate full-stack developer who builds modern and user-focused web applications using{' '}
              <Highlight>React</Highlight>,
              <Highlight>TypeScript</Highlight>,
              <Highlight>Django</Highlight>,
              <Highlight>PostgreSQL</Highlight>, and{' '}
              <Highlight>Supabase</Highlight>.

              <br />
              <br />

              My work focuses on creating clean interfaces, scalable backend systems,
              and smooth user experiences that solve real-world problems. I enjoy
              transforming ideas into functional digital products — from UI/UX design
              in <Highlight>Figma</Highlight> to full-stack system development and deployment.

              <br />
              <br />

              Recently, I’ve been building academic management systems,
              scheduling platforms, and interactive web applications while
              continuously improving my skills in software engineering,
              system architecture, and product design. I also use AI-assisted
              development tools to improve productivity, debugging, and
              iteration speed.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <motion.a
                href="/projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-xl bg-gray-900 text-white shadow-lg hover:bg-black transition-all duration-300"
              >
                View Projects
              </motion.a>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="hidden md:flex items-end justify-center h-full w-full overflow-hidden rounded-3xl bg-linear-to-t from-gray-300/70 to-gray-100/60 p-6 shadow-xl backdrop-blur-sm mx-6 mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >

            <img
              src={Ithran}
              alt="Ithran Beor"
              className="h-full w-full object-contain object-bottom"
            />

          </motion.div>

        </main>

        {/* ABOUT SECTION */}
        <section className="px-6 md:px-12 lg:px-20 py-24 font-poppins relative z-10">

          <SectionTitle
            subtitle="About Me"
            title="Passionate About Building Digital Experiences"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div className="space-y-6 text-gray-700 leading-relaxed text-justify">

              <p>
                I am an aspiring full-stack developer who enjoys creating systems
                that are both functional and visually appealing. My development
                journey started with curiosity about how websites and applications
                work behind the scenes, which eventually led me into frontend,
                backend, and UI/UX design.
              </p>

              <p>
                Over time, I developed projects involving scheduling systems,
                learning platforms, and management applications. Through these
                experiences, I gained practical understanding of frontend
                development, backend architecture, database management,
                authentication systems, and user-centered design principles.
              </p>

              <p>
                Beyond technical skills, I value communication, collaboration,
                and adaptability. I enjoy working with teams, learning from
                experienced developers, and continuously improving my craft
                through real-world projects and experimentation.
              </p>

            </div>

            <div className="grid grid-cols-1 gap-6">

              {highlights.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/70 backdrop-blur-sm border border-gray-300 rounded-3xl p-8 shadow-md"
                >

                  <h3 className="text-5xl font-bold text-gray-900 mb-3">
                    {item.number}
                  </h3>

                  <p className="text-gray-600">
                    {item.label}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* TECH STACK */}
        <section className="px-6 md:px-12 lg:px-20 py-24 font-poppins bg-white/40 relative z-10">

          <SectionTitle
            subtitle="Tech Stack"
            title="Technologies I Work With"
          />

          <div className="flex flex-wrap gap-4">

            {technologies.map((tech, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="px-6 py-4 rounded-2xl bg-white border border-gray-300 shadow-sm text-gray-800"
              >

                {tech}

              </motion.div>

            ))}

          </div>

        </section>

        {/* SERVICES */}
        <section className="px-6 md:px-12 lg:px-20 py-24 font-poppins relative z-10">

          <SectionTitle
            subtitle="What I Do"
            title="Areas I Focus On"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white/70 backdrop-blur-sm border border-gray-300 rounded-3xl p-8 shadow-md"
              >

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-700 leading-relaxed text-justify">
                  {service.description}
                </p>

              </motion.div>

            ))}

          </div>

        </section>

        {/* CURRENTLY WORKING */}
        <section className="px-6 md:px-12 lg:px-20 py-24 font-poppins bg-white/40 relative z-10">

          <SectionTitle
            subtitle="Currently"
            title="What I'm Working On"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div className="bg-white rounded-3xl border border-gray-300 shadow-md p-8">

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                ExamSync V2
              </h3>

              <p className="text-gray-700 leading-relaxed text-justify">
                A web-based exam scheduling and management system designed
                to simplify scheduling workflows for academic institutions.
                The system includes automated scheduling tools, role-based
                management, faculty coordination, and interactive drag-and-drop features.
              </p>

            </div>

            <div className="bg-white rounded-3xl border border-gray-300 shadow-md p-8">

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Improving My Development Skills
              </h3>

              <p className="text-gray-700 leading-relaxed text-justify">
                I continue learning advanced frontend architecture, backend optimization,
                deployment workflows, and UI/UX practices while building real-world projects
                that strengthen both technical and problem-solving skills.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 lg:px-20 py-24 font-poppins relative z-10">

          <div className="bg-gray-900 rounded-4xl p-10 md:p-16 text-center shadow-2xl">

            <p className="uppercase tracking-[0.3em] text-gray-400 text-sm mb-5">
              Let's Build Something
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Interested in Working Together?
            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
              I'm always open to opportunities, collaborations, and projects
              where I can continue learning while contributing meaningful work.
            </p>

            <div className="flex justify-center flex-wrap gap-4">

              <a
                href="/projects"
                className="px-6 py-3 rounded-xl bg-white text-gray-900 font-medium hover:scale-105 transition-all duration-300"
              >
                Explore Projects
              </a>

              <a
                href="/resume/Ithran-Beor-Resume.pdf"
                download
                className="px-6 py-3 rounded-xl border border-gray-500 text-white hover:bg-white/10 transition-all duration-300"
              >
                Download Resume
              </a>

            </div>

          </div>

        </section>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 text-xs py-8 relative z-20 font-poppins backdrop-blur-sm bg-white/10 border-t border-white/20">
          &copy; {new Date().getFullYear()} Ithran Beor. All rights reserved.
        </footer>

      </div>
    </>
  )
}

export default HomePage

