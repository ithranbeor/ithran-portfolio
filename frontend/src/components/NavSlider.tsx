import { motion, useMotionValue, useSpring, animate } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import { LuHouse, LuFolderCode, LuBriefcase, LuGraduationCap, LuPhone } from 'react-icons/lu'

const navLinks = [
  { path: '/', icon: LuHouse, label: 'Home' },
  { path: '/projects', icon: LuFolderCode, label: 'Projects' },
  { path: '/work', icon: LuBriefcase, label: 'Work' },
  { path: '/education', icon: LuGraduationCap, label: 'Education' },
  { path: '/contact', icon: LuPhone, label: 'Contact' },
]

// ─── PILL TUNING ──────────────────────────────────────────────────────────────
const PILL_PADDING_X = 6
const PILL_PADDING_Y = 4
const PILL_GROW_X = 10
const PILL_GROW_Y = 4
// ─────────────────────────────────────────────────────────────────────────────

export default function NavSlider() {
  const location = useLocation()
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const pointerIdRef = useRef<number | null>(null)

  const activeIndex = navLinks.findIndex((item) => item.path === location.pathname)
  const selectedIndex = activeIndex === -1 ? 0 : activeIndex

  const pillX = useMotionValue(0)
  const pillY = useMotionValue(0)
  const pillW = useMotionValue(0)
  const pillH = useMotionValue(0)

  const springX = useSpring(pillX, { stiffness: 320, damping: 28 })
  const springW = useSpring(pillW, { stiffness: 320, damping: 28 })
  const springH = useSpring(pillH, { stiffness: 320, damping: 28 })

  const [hintVisible, setHintVisible] = useState(true)

  function getPillRect(index: number) {
    const container = containerRef.current
    const btn = buttonRefs.current[index]
    if (!container || !btn) return null
    const cRect = container.getBoundingClientRect()
    const bRect = btn.getBoundingClientRect()
    return {
      x: bRect.left - cRect.left - PILL_PADDING_X,
      y: bRect.top - cRect.top - PILL_PADDING_Y,
      w: bRect.width + PILL_PADDING_X * 2,
      h: bRect.height + PILL_PADDING_Y * 2,
    }
  }

  function jumpToIndex(index: number) {
    const r = getPillRect(index)
    if (!r) return
    pillX.set(r.x)
    pillY.set(r.y)
    pillW.set(r.w)
    pillH.set(r.h)
  }

  useEffect(() => {
    requestAnimationFrame(() => jumpToIndex(selectedIndex))
  }, [selectedIndex])

  function getNearestIndex(clientX: number) {
    const container = containerRef.current
    if (!container) return selectedIndex
    const cRect = container.getBoundingClientRect()
    const relX = clientX - cRect.left
    let nearestIndex = 0
    let nearestDist = Infinity
    buttonRefs.current.forEach((btn, i) => {
      if (!btn) return
      const bRect = btn.getBoundingClientRect()
      const center = bRect.left - cRect.left + bRect.width / 2
      const dist = Math.abs(relX - center)
      if (dist < nearestDist) { nearestDist = dist; nearestIndex = i }
    })
    return nearestIndex
  }

  function handlePointerDown(e: React.PointerEvent) {
    if (e.button !== 0) return
    setHintVisible(false)
    isDragging.current = false
    dragStartX.current = e.clientX
    pointerIdRef.current = e.pointerId
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!(e.buttons & 1)) return
    if (Math.abs(e.clientX - dragStartX.current) > 4) {
      // Only capture pointer once we're sure it's a drag
      if (!isDragging.current) {
        isDragging.current = true
        e.currentTarget.setPointerCapture(e.pointerId)
      }
    }
    if (!isDragging.current) return

    const nearestIndex = getNearestIndex(e.clientX)
    const r = getPillRect(nearestIndex)
    if (!r) return

    pillX.set(r.x - PILL_GROW_X / 2)
    animate(pillW, r.w + PILL_GROW_X, { type: 'spring', stiffness: 320, damping: 28 })
    animate(pillH, r.h + PILL_GROW_Y, { type: 'spring', stiffness: 320, damping: 28 })
  }

  function handlePointerUp(e: React.PointerEvent) {
    const nearestIndex = getNearestIndex(e.clientX)
    const r = getPillRect(nearestIndex)
    if (r) {
      animate(pillW, r.w, { type: 'spring', stiffness: 320, damping: 28 })
      animate(pillH, r.h, { type: 'spring', stiffness: 320, damping: 28 })
      pillX.set(r.x)
    }
    if (isDragging.current) {
      navigate(navLinks[nearestIndex].path)
    }
    isDragging.current = false
    pointerIdRef.current = null
  }

  return (
    <div className="fixed bottom-4 left-4 z-30 sm:bottom-6 sm:left-6">

      {/* Drag hint */}
      <motion.p
        className="text-xs text-gray-500/70 text-left mb-2 select-none"
        animate={{ opacity: hintVisible ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        drag/click to navigate
      </motion.p>

      <div
        ref={containerRef}
        className="relative inline-flex items-center space-x-1.5 md:space-x-5 rounded-2xl border border-white/20 bg-white/50 px-3 py-2 text-sm font-medium backdrop-blur-md shadow-sm"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Pill */}
        <motion.div
          className="left-0 top-0 absolute rounded-xl bg-white border border-white/50 shadow-md backdrop-blur-xl pointer-events-none"
          style={{ x: springX, y: pillY, width: springW, height: springH }}
        />

        {navLinks.map((item, index) => {
          const Icon = item.icon
          const isActive = index === selectedIndex
          return (
            <button
              key={item.path}
              ref={(el) => { buttonRefs.current[index] = el }}
              type="button"
              onClick={() => navigate(item.path)}
              className={`relative z-10 inline-flex items-center justify-center text-2xl font-medium transition-colors duration-200 hover:scale-110 ${
                isActive ? 'text-gray-900' : 'text-gray-800'
              }`}
              aria-label={item.label}
            >
              <Icon />
            </button>
          )
        })}
      </div>
    </div>
  )
}