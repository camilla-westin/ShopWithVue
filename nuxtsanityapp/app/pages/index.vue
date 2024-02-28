<script setup lang="ts">
import { type Post } from "~/types/Post";
import { type Product } from "~/types/Product";

const postQuery = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`;
const { data: posts } = await useSanityQuery<Post[]>(postQuery);

const productQuery = groq`*[ _type == "product" && defined(slug.current) ] | order(_createdAt desc)`;
const { data: products } = await useSanityQuery<Product[]>(productQuery);
</script>

<template>
  <section>
    <Card v-if="posts" v-for="post in posts" :key="post._id" :post="post" />
    <Welcome v-if="posts?.length === 0" />
  </section>
  <section>
    <ProductCard
      v-if="products"
      v-for="product in products"
      :key="product._id"
      :product="product"
    />
  </section>
</template>
