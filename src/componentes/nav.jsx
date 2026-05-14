import { motion } from "framer-motion"


export default function Nav({ sections, active, setActive }) {
    return (
        <div className="sticky top-0 z-20 bg-white border-b border-stone-100 shadow-sm">
          <div className="px-3 py-3 overflow-x-auto">
            <div className="flex gap-2 w-max mx-auto">
              {sections.map((s) => (
                <motion.button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  whileTap={{ scale: 0.93 }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`text-xs sm:text-sm px-4 py-2 rounded-full border transition-colors duration-200 font-sans font-medium whitespace-nowrap ${
                    active === s.id
                      ? "bg-amber-900 text-white border-amber-900"
                      : "bg-white text-stone-600 border-stone-200"
                  }`}
                >
                 <div className="flex items-center gap-2">
                  <s.emoji className={`${
                    active === s.id
                      ? "text-white border-amber-900"
                      : "text-stone-600 border-stone-200"
                  }`} size={16} />
                  <span>{s.label}</span>
                </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
    )
}