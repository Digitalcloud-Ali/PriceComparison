export interface CategoryBreadcrumb {
  name: string;
  slug: string;
}

export interface SubCategory {
  name: string;
  slug: string;
  description?: string;
  image?: string;
  subcategories?: SubCategory[];
}

export interface Category {
  name: string;
  slug: string;
  description?: string;
  image?: string;
  subcategories: SubCategory[];
  breadcrumb?: CategoryBreadcrumb[];
} 