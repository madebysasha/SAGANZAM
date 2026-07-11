"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import type { Product } from "@/types/product";
import { usePopup } from "./PopupProvider";
import { CloseButton } from "./ui/CloseButton";

type ProductModalContextValue = {
  open: (product: Product) => void;
};

const ProductModalContext = createContext<ProductModalContextValue | null>(null);

export function useProductModal() {
  const ctx = useContext(ProductModalContext);
  if (!ctx) throw new Error("useProductModal must be used within ProductModalProvider");
  return ctx;
}

export function ProductModalProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [colorId, setColorId] = useState<string | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const { open: openPopup } = usePopup();

  const open = useCallback((p: Product) => {
    setProduct(p);
    setColorId(p.colors[0]?.id ?? null);
    setGalleryIndex(0);
  }, []);
  const close = useCallback(() => setProduct(null), []);

  useEffect(() => {
    if (!product) return;
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [product, close]);

  const activeColor = useMemo(
    () => product?.colors.find((c) => c.id === colorId) ?? product?.colors[0],
    [product, colorId],
  );
  const images = activeColor?.images ?? product?.images ?? [];
  const activeImage = images[Math.min(galleryIndex, images.length - 1)];

  return (
    <ProductModalContext.Provider value={{ open }}>
      {children}

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
          product ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden={!product}
      >
        <div
          className={`relative flex max-h-[85vh] w-[960px] max-w-[92vw] gap-10 overflow-y-auto bg-white p-10 transition-all duration-300 ${
            product ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton onClick={close} className="absolute top-4 right-4" />

          {product && activeColor && (
            <>
              <div className="flex w-[420px] shrink-0 flex-col gap-3">
                <div className="relative aspect-[483/644] w-full overflow-hidden bg-[#f4f4f4]">
                  {activeImage && (
                    <Image src={activeImage} alt={product.name} fill className="object-cover" />
                  )}
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((src, i) => (
                    <button
                      key={src + i}
                      type="button"
                      onClick={() => setGalleryIndex(i)}
                      className={`relative aspect-[483/644] w-16 shrink-0 overflow-hidden bg-[#f4f4f4] transition-opacity ${
                        i === galleryIndex ? "opacity-100" : "opacity-50 hover:opacity-80"
                      }`}
                    >
                      <Image src={src} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-espresso flex flex-1 flex-col items-start gap-5">
                <div>
                  <p className="font-display text-[32px] leading-[1.1] font-normal italic">
                    {product.name}
                  </p>
                  <p className="font-sans text-xl leading-normal font-normal">
                    от {product.price.toLocaleString("ru-RU")} ₽
                  </p>
                </div>

                <p className="font-sans text-base leading-normal font-normal">
                  {product.description}
                </p>

                <div className="flex flex-col gap-2">
                  <p className="text-taupe font-sans text-sm font-normal">Цвет: {activeColor.name}</p>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color.id}
                        type="button"
                        onClick={() => {
                          setColorId(color.id);
                          setGalleryIndex(0);
                        }}
                        title={color.name}
                        style={{ backgroundColor: color.hex }}
                        className={`size-7 shrink-0 rounded-full border transition-transform hover:scale-110 ${
                          color.id === activeColor.id ? "border-espresso border-2" : "border-taupe/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {product.sizes.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <p className="text-taupe font-sans text-sm font-normal">Размер</p>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="border-taupe/50 font-sans text-sm font-normal px-3 py-1"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex w-full flex-col gap-1">
                  {product.characteristics.map((c) => (
                    <div key={c.label} className="flex justify-between gap-4 border-b border-[#e4d9cc] py-1.5">
                      <span className="text-taupe font-sans text-sm font-normal">{c.label}</span>
                      <span className="font-sans text-sm font-normal text-right">{c.value}</span>
                    </div>
                  ))}
                </div>

                <p className="text-taupe font-sans text-xs font-normal">
                  Артикул: {product.sku} · {product.inStock ? "В наличии" : "Под заказ"}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    close();
                    openPopup();
                  }}
                  className="bg-espresso text-cream font-sans flex w-full cursor-pointer items-center justify-center gap-4 px-6 py-4 text-xl leading-[1.2] font-normal tracking-[-0.4px] transition-opacity hover:opacity-90"
                >
                  Заказать
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </ProductModalContext.Provider>
  );
}
