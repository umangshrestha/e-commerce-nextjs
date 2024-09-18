import { z } from "zod";

export interface ProductType {
  name: string;
  description: string | null;
  price: number;
  imageUrl: string;
  quantity: number;
  category: string;
  maxQuantity: number;
  badgeText: string | null;
  tags: string[];
}
export const ProductSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  price: z.number(),
  imageUrl: z.string(),
  quantity: z.number(),
  maxQuantity: z.number().nullable().transform((val) => val ?? 0),
  category: z.string(),
  badgeText: z.string().nullable(),
  tags: z.array(z.string()),
});
