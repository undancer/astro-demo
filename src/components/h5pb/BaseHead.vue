<script setup lang="ts">

import {defineProps} from 'vue'

interface Props {
  title: string
  description: string
  image?: string
}

const {title, description} = defineProps<Props>()


</script>

<template>

  <meta charset="utf-8">
  <title>{{title}}</title>
  <meta name="description" :content="description">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">

  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="icon.png">

  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/style.css">

  <link rel="manifest" href="site.webmanifest">
  <meta name="theme-color" content="#fafafa">

</template>

<style scoped>

</style>