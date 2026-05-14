import { motion } from "framer-motion";

export default function MenuItem({
  name,
  price,
  desc,
  badge,
  badgeColor,
  image,
  index
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.06,
        ease: "easeOut"
      }}
      className="border-b border-dashed border-stone-200 py-4 last:border-b-0"
    >
      <div className="flex gap-4 items-start">

        {/* Imagen */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between gap-3">

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm sm:text-base font-medium italic text-stone-800">
                  {name}
                </span>

                {badge && (
                  <span
                    className={`inline-block text-[10px] uppercase tracking-wide px-2 py-1 rounded ${badgeColor}`}
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

            <span className="text-amber-900 font-bold text-sm sm:text-base whitespace-nowrap">
              {price}
            </span>

          </div>
        </div>

      </div>
    </motion.div>
  );
}