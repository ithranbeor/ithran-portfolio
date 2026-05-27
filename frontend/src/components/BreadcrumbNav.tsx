import { LuChevronRight } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CRUMB_LABELS: Record<string, string> = {
  '/': 'Home',
  '/projects': 'Projects',
  '/work': 'Work Experience',
  '/education': 'Education',
  '/contact': 'Get in Touch',
};

interface BreadcrumbNavProps {
  currentPath: string;
}

function BreadcrumbNav({ currentPath }: BreadcrumbNavProps) {
  const navigate = useNavigate();

  const crumbs = currentPath === '/' ? ['/'] : ['/', currentPath];

  return (
    <motion.ol
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse bg-white/20 rounded-2xl border px-3 py-2 text-sm font-medium backdrop-blur-md shadow-sm border-white/20"
    >
      <AnimatePresence mode="popLayout">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <motion.li
              key={crumb}
              className="inline-flex items-center space-x-1.5"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {index > 0 && <LuChevronRight className="text-gray-500" />}
              {isLast ? (
                <span className="text-sm font-medium text-gray-800">
                  {CRUMB_LABELS[crumb]}
                </span>
              ) : (
                <button
                  onClick={() => navigate(crumb)}
                  className="text-sm font-medium text-body hover:text-fg-brand cursor-pointer bg-transparent border-none p-0"
                >
                  {CRUMB_LABELS[crumb]}
                </button>
              )}
            </motion.li>
          );
        })}
      </AnimatePresence>
    </motion.ol>
  );
}

export default BreadcrumbNav;