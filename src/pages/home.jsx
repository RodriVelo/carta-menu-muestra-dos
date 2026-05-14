import { useState } from "react";
import Footer from "../componentes/footer";
import { motion, AnimatePresence } from "framer-motion";
import fotoLogo from "../assets/logo.png"
import MenuItem from "../componentes/menuItem";
import {Utensils, Hamburger, CakeSlice, GlassWater, Beer, Martini} from 'lucide-react';
import Nav from "../componentes/nav";
import foto1 from "../assets/PLATOS/foto1.jpg";
import foto2 from "../assets/PLATOS/foto2.jpg";
import foto3 from "../assets/PLATOS/foto3.jpg";
import foto4 from "../assets/PLATOS/foto4.jpg";
import foto5 from "../assets/PLATOS/foto5.jpg";
import foto6 from "../assets/PLATOS/foto6.jpg";
import foto7 from "../assets/PLATOS/foto7.jpg";
import foto8 from "../assets/PLATOS/foto8.jpg";
import foto9 from "../assets/PLATOS/foto9.jpg";
import foto10 from "../assets/PLATOS/foto10.jpg";
import foto11 from "../assets/PLATOS/foto11.jpg";
import foto12 from "../assets/PLATOS/foto12.jpg";
import foto13 from "../assets/PLATOS/foto13.jpg";
import foto14 from "../assets/PLATOS/foto14.jpg";
import foto15 from "../assets/PLATOS/foto15.jpg";
import foto16 from "../assets/PLATOS/foto16.jpg";
import foto17 from "../assets/PLATOS/foto17.jpg";
import foto18 from "../assets/PLATOS/foto18.jpg";
import foto19 from "../assets/PLATOS/foto19.jpg";
import foto20 from "../assets/PLATOS/foto20.jpg";





const sections = [
  {
    id: "categoria1",
    label: "Categoria 1",
    title: "Categoria 1",
    emoji: Utensils,
    items: [
      {
        name: "Producto 1",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto1,
        badge: "Popular",
        badgeColor: "bg-orange-100 text-orange-800",
      },
      {
        name: "Producto 2",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto2,
      },
      {
        name: "Producto 3",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto3,
      },
      {
        name: "Producto 4",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto4, 
        badge: "Nuevo",
        badgeColor: "bg-teal-100 text-teal-800",
      },
    ],
  },

  {
    id: "categoria2",
    label: "Categoria 2",
    title: "Categoria 2",
    emoji: Hamburger,
    items: [
      {
        name: "Producto 1",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto5,
      },
      {
        name: "Producto 2",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto6,
      },
      {
        name: "Producto 3",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto7,
      },
      {
        name: "Producto 4",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto8,
      },
    ],
  },

  {
    id: "categoria3",
    label: "Categoria 3",
    title: "Categoria 3",
    emoji: CakeSlice,
    items: [
      {
        name: "Producto 1",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto9,
      },
      {
        name: "Producto 2",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto10,
      },
      {
        name: "Producto 3",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto11,
      },
      {
        name: "Producto 4",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto12,
      },
    ],
  },

  {
    id: "categoria4",
    label: "Categoria 4",
    title: "Categoria 4",
    emoji: GlassWater,
    items: [
      {
        name: "Producto 1",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto13,
      },
      {
        name: "Producto 2",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto14,
      },
      {
        name: "Producto 3",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto15,
      },
      {
        name: "Producto 4",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto16,
      },
    ],
  },

  {
    id: "categoria5",
    label: "Categoria 5",
    title: "Categoria 5",
    emoji: Martini,
    items: [
      {
        name: "Producto 1",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto13,
      },
      {
        name: "Producto 2",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto14,
      },
      {
        name: "Producto 3",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto15,
      },
      {
        name: "Producto 4",
        price: "$00.000",
        desc: "Descripcion del producto",
        image: foto16,
      },
    ],
  },

  {
    id: "categoria6",
    label: "Categoria 6",
    title: "Categoria 6",
    emoji: Beer,
    items: [
      {
        name: "Producto 1",
        image: foto17,
      },
      {
        name: "Producto 2",
        image: foto18,
      },
      {
        name: "Producto 3",
        image: foto19,
      },
      {
        name: "Producto 4",
        image: foto20,
      },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState("categoria1");

  const current = sections.find((s) => s.id === active);

  return (
    <div className="w-full min-h-screen bg-stone-100 font-serif overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto bg-white min-h-screen shadow-xl">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-5 sm:px-10 pt-12 pb-6 text-center flex flex-col items-center rounded-b-4xl"
          style={{
            background:
              "linear-gradient(160deg,#3B1F0A 0%,#6B3A1F 60%,#8B4F2A 100%)",
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-stone-400 mb-3"
          >
            Neuquén · Patagonia Argentina
          </motion.p>

          <motion.img
            src={fotoLogo}
            alt="logo"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="h-[100px] mb-4 object-contain"
          />

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl sm:text-6xl text-white mb-3 leading-none"
            style={{ fontFamily: "'Georgia', serif", fontWeight: 700 }}
          >
            Nombre Local
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="text-sm sm:text-lg italic text-stone-300 tracking-wide"
          >
            Jandes — Frase breve
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-stone-500 mt-5 text-lg tracking-widest"
          >
            ✦ ✦ ✦
          </motion.p>
        </motion.div>

        {/* NAV */}
        <Nav sections={sections} active={active} setActive={setActive}/>

        {/* CONTENIDO */}
        <div className="px-5 sm:px-10 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-2xl flex-shrink-0"
                >
                  {<current.emoji className="text-amber-900"/>}
                </motion.div>

                <h2
                  className="text-3xl sm:text-4xl text-amber-900 leading-tight"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {current.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
                {current.items.map((item, i) => (
                  <MenuItem key={i} {...item} index={i} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}