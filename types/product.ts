// Shape mirrors what the future admin-panel/CMS API is expected to return
// for a single product. Mock data in lib/mock-products.ts conforms to this
// exactly so swapping the mock source for a real `fetch` later is a
// drop-in change, not a rewrite.

export type ProductColor = {
  id: string;
  name: string;
  hex: string;
  /** Gallery for this specific color variant. */
  images: string[];
};

export type ProductCharacteristic = {
  label: string;
  value: string;
};

export type Product = {
  sku: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  /** Default gallery, shown before a color is picked. */
  images: string[];
  colors: ProductColor[];
  sizes: string[];
  characteristics: ProductCharacteristic[];
  inStock: boolean;
};
