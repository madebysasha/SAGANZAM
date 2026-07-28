"use client";

import { useRef, useState } from "react";
import type { CSSProperties, MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";
import type { Product } from "@/types/product";
import { useProductModal } from "../ProductModalProvider";

type ProductCardProps = {
  product: Product;
  className?: string;
  style?: CSSProperties;
};

export function ProductCard({ product, className, style }: ProductCardProps) {
  const { open } = useProductModal();
  const [index, setIndex] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);
  const images = product.images;

  function handleMouseMove(e: ReactMouseEvent<HTMLDivElement>) {
    if (images.length <= 1) return;
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    setIndex(Math.min(images.length - 1, Math.floor(ratio * images.length)));
  }

  function handleMouseLeave() {
    setIndex(0);
  }

  return (
    <div className={`flex min-w-0 flex-col items-start gap-3 ${className ?? ""}`} style={style}>
      <div
        ref={frameRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => open(product)}
        className="relative aspect-[483/644] w-full shrink-0 cursor-pointer bg-white select-none"
      >
        {images.map((src, i) => (
          <Image
            key={src + i}
            src={src}
            alt={product.name}
            fill
            draggable={false}
            className={`object-cover transition-opacity duration-150 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          />
        ))}
        {images.length > 1 && (
          <div className="absolute right-0 bottom-2 left-0 flex justify-center gap-1">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-[3px] w-4 transition-colors ${i === index ? "bg-espresso" : "bg-espresso/20"}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="text-espresso flex w-full items-center justify-between gap-2 font-sans text-base font-normal laptop:text-lg">
        <p className="min-w-0 truncate">{product.name}</p>
        <p className="shrink-0 whitespace-nowrap">от {product.price.toLocaleString("ru-RU")} ₽</p>
      </div>
    </div>
  );
}
