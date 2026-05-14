import { motion } from "framer-motion";
import { MapPin, Phone,  } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="px-5 sm:px-10 pb-10"
      >
        <div className="border border-stone-200 rounded-3xl p-6 text-center bg-stone-50">
          <p
            className="text-lg font-semibold text-amber-900 mb-4 font['Georgia']"
           
          >
            Nombre Local
          </p>

          <div className="flex flex-col items-center gap-4 text-sm text-stone-500">
            

            <div className="flex items-center gap-3">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-110"
              style={{
              background:
              "linear-gradient(160deg,#3B1F0A 0%,#6B3A1F 60%,#8B4F2A 100%)",
          }}
              >
                <FaInstagram size={18} />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:bg-green-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                background:
                  "linear-gradient(160deg,#3B1F0A 0%,#6B3A1F 60%,#8B4F2A 100%)",
          }}
              >
                <Phone size={18} />
              </a>
            </div>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              Ubicacion
            </span>
            <em className="text-stone-400">
              Frase breve
            </em>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
