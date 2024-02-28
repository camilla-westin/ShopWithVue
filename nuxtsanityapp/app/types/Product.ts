import { PortableTextBlock, Slug, ImageAsset } from "@sanity/types";

export interface Product {
  _id: string;
  _type: "product";
  _createdAt: string;
  productname?: string;
  slug: Slug;
  price?: number;
  brand?: string;
  mainImage?: ImageAsset;
  description: PortableTextBlock[];
  variants?: string[];
  campaign?: boolean;
  campaignprice?: number;
}
