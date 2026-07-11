import type { Product } from "@/types/product";

// Placeholder gallery images — real photography will come from the CMS.
// Each mock product intentionally uses 4–7 frames, matching the range the
// real catalog is expected to ship with.
const P = (n: number) => `/images/mock/photo-${n}.svg`;

export const mockProducts: Product[] = [
  {
    sku: "SZ-COAT-JAPAN",
    name: "Пальто JAPAN",
    price: 90000,
    currency: "RUB",
    description:
      "Премиальное пальто double-face с отделкой из меха соболя. Кашемир в составе дарит благородное сияние и лёгкость силуэту.",
    images: [P(1), P(2), P(3), P(4), P(5)],
    colors: [
      { id: "greige", name: "Грейдж", hex: "#B5A79A", images: [P(1), P(2), P(3), P(4), P(5)] },
      { id: "espresso", name: "Эспрессо", hex: "#491A0A", images: [P(2), P(3), P(4), P(5)] },
      { id: "cream", name: "Молочный", hex: "#FFFBEF", images: [P(3), P(4), P(5), P(6)] },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    characteristics: [
      { label: "Состав", value: "10% кашемир, 90% шерсть мериноса" },
      { label: "Мех", value: "Соболь" },
      { label: "Подклад", value: "Без подклада (double-face)" },
      { label: "Швы", value: "Закрытые" },
    ],
    inStock: true,
  },
  {
    sku: "SZ-COAT-DOUBLEFACE",
    name: "Пальто double-face",
    price: 120000,
    currency: "RUB",
    description:
      "Роскошное пальто с кашемиром, безупречное с обеих сторон, щедро облагороженное натуральным мехом соболя, норки или каракуля.",
    images: [P(2), P(3), P(4), P(5), P(6), P(7)],
    colors: [
      { id: "grey", name: "Серый", hex: "#8A8A8A", images: [P(2), P(3), P(4)] },
      { id: "black", name: "Чёрный", hex: "#1C1B1A", images: [P(4), P(5), P(6), P(7)] },
    ],
    sizes: ["S", "M", "L"],
    characteristics: [
      { label: "Состав", value: "Кашемир, шерсть" },
      { label: "Мех", value: "Норка / каракуль / соболь на выбор" },
      { label: "Подклад", value: "Без подклада (double-face)" },
    ],
    inStock: true,
  },
  {
    sku: "SZ-SABLE-01",
    name: "Пальто с мехом соболя",
    price: 350000,
    currency: "RUB",
    description:
      "Соболь ценился во все времена — настоящий люкс. От закупа сырья на аукционе и выделки до искусного пошива изделия.",
    images: [P(1), P(3), P(5), P(7)],
    colors: [{ id: "sable", name: "Соболь натуральный", hex: "#3E2A1E", images: [P(1), P(3), P(5), P(7)] }],
    sizes: ["XS", "S", "M", "L"],
    characteristics: [
      { label: "Мех", value: "Соболь баргузинский" },
      { label: "Выделка", value: "Ручная" },
    ],
    inStock: false,
  },
  {
    sku: "SZ-RESTYLE-01",
    name: "Перешив шубы — новый силуэт",
    price: 45000,
    currency: "RUB",
    description:
      "Новая жизнь для дорогого сердцу изделия. Трансформируем устаревшие фасоны в актуальные, лёгкие и современные, сохраняя ценность меха.",
    images: [P(2), P(4), P(6), P(7)],
    colors: [
      { id: "as-is", name: "Ваш исходный мех", hex: "#6B4A36", images: [P(2), P(4), P(6), P(7)] },
    ],
    sizes: ["По индивидуальным меркам"],
    characteristics: [
      { label: "Услуга", value: "Дизайнерский перешив" },
      { label: "Срок", value: "От 3 недель" },
    ],
    inStock: true,
  },
];
