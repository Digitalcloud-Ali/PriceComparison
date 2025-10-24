export interface Review {
  id: string;
  productId: string;
  rating: number;
  title: string;
  comment: string;
  userName: string;
  date: string;
  verified: boolean;
}

export interface ProductRating {
  average: number;
  total: number;
  distribution: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
} 