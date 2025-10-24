type ColorScheme = {
  bg: string;
  text: string;
};

const CATEGORY_COLORS: Record<string, ColorScheme> = {
  electronics: { bg: 'E3F2FD', text: '1565C0' }, // Light Blue
  smartphones: { bg: 'E8F5E9', text: '2E7D32' }, // Light Green
  laptops: { bg: 'F3E5F5', text: '7B1FA2' }, // Light Purple
  gaming: { bg: 'FFEBEE', text: 'C62828' }, // Light Red
  fashion: { bg: 'FFF3E0', text: 'EF6C00' }, // Light Orange
  home: { bg: 'E0F7FA', text: '00838F' }, // Light Cyan
  sports: { bg: 'F1F8E9', text: '558B2F' }, // Light Lime
  beauty: { bg: 'FCE4EC', text: 'C2185B' }, // Light Pink
  toys: { bg: 'FFF8E1', text: 'FFA000' }, // Light Amber
  default: { bg: 'F5F5F5', text: '424242' }, // Light Grey
};

export const getPlaceholderImage = (
  width: number = 800,
  height: number = 600,
  text: string = 'Product Image',
  category?: string
) => {
  const colors = CATEGORY_COLORS[category?.toLowerCase() || ''] || CATEGORY_COLORS.default;
  return `https://placehold.co/${width}x${height}/${colors.bg}/${colors.text}?text=${encodeURIComponent(text)}`;
};

export const getCategoryPlaceholder = (categoryName: string) => {
  const colors = CATEGORY_COLORS[categoryName.toLowerCase()] || CATEGORY_COLORS.default;
  return `https://placehold.co/400x300/${colors.bg}/${colors.text}?text=${encodeURIComponent(categoryName)}`;
};

export const getBrandPlaceholder = (brandName: string) => {
  // Use a gradient background for brands
  return `https://placehold.co/200x200/gradient/${CATEGORY_COLORS.default.text}?text=${encodeURIComponent(brandName)}`;
}; 