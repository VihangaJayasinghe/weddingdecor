"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "NEON NEXUS",
    category: "UI/UX DESIGN",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop",
    color: "#112240",
    description: "Reimagining the dashboard interface for quantum computing systems."
  },
  {
    id: 2,
    title: "AETHER FORMS",
    category: "3D VISUALIZATION",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    color: "#0a192f",
    description: "Generative architectural structures for the metaverse."
  },
  {
    id: 3,
    title: "HOLO BRAND",
    category: "IDENTITY",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2670&auto=format&fit=crop",
    color: "#020c1b",
    description: "Dynamic branding that evolves based on user interaction."
  }
];

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  color: string;
  description: string;
}

interface CardProps {
  project: Project;
  index: number;
  range: [number, number];
  targetScale: number;
}

function Card({ project, index, range, targetScale }: CardProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  // Check if range matches array size expected by useTransform
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(scrollYProgress, range, [1, targetScale])

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, backgroundColor: project.color, top: `calc(-5vh + ${index * 25}px)` }}
        className="flex flex-col relative w-[90vw] h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-[#ffffff]/10"
      >
        <div className="flex h-full w-full">
          <div className="w-full h-full relative overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
              <Image
                fill
                src={project.image}
                alt={project.title}
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/50 hover:bg-transparent transition-all duration-500"></div>

            <div className="absolute bottom-10 left-10 z-20 pointer-events-none">
              <p className="font-mono text-[#64ffda] text-sm tracking-widest mb-2">{project.category}</p>
              <h2 className="font-oswald text-6xl md:text-8xl text-white uppercase">{project.title}</h2>
              <p className="text-[#a8b2d1] max-w-md mt-4 font-mono text-sm">{project.description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Work() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={container} id="work" className="relative mt-[10vh] bg-[#050505]">
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-[#f0f0f0] font-oswald text-6xl uppercase tracking-tighter mix-blend-difference">Selected <span className="text-[#ccff00] font-outline-2">Work</span></h2>
      </div>

      {
        projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return <Card key={i} index={i} project={project} range={[i * .25, 1]} targetScale={targetScale} />
        })
      }
    </section>
  )
}
