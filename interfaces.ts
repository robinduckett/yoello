export interface BeerRecord {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  food_pairing: string[];
}

export interface BeerParams {
  food?: string;
  page?: number;
  perPage?: number;
}