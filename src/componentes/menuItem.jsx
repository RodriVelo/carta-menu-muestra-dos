import { motion } from "framer-motion";


export default function  MenuItem({ name, price, desc, badge, badgeColor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06, ease: "easeOut" }}
      className="border-b border-dashed border-stone-200 py-4 last:border-b-0"
    >
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm sm:text-base font-medium italic text-stone-800 leading-snug">
              {name}
            </span>
            {badge && (
              <span
                className={`inline-block text-[10px] uppercase tracking-wide px-2 py-1 rounded font-normal not-italic ${badgeColor}`}
              >
                {badge}
              </span>
            )}
          </div>
          {desc && (
            <p className="text-xs sm:text-sm text-stone-500 mt-1 leading-relaxed">
              {desc}
            </p>
          )}
        </div>
        <span className="text-amber-900 font-bold text-sm sm:text-base whitespace-nowrap flex-shrink-0">
          {price}
        </span>
      </div>
    </motion.div>
  );
}
