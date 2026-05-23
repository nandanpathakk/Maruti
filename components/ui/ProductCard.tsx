"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
}

export function ProductCard({ title, description, imageSrc, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col glass-card hover:border-maruti-emerald/30 transition-all duration-300"
    >
      <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
        {/* Placeholder gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-heading text-xl font-bold text-maruti-dark mb-3 group-hover:text-maruti-emerald transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
          {description}
        </p>
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-maruti-green hover:text-maruti-emerald transition-colors uppercase tracking-wider"
        >
          View Details
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
