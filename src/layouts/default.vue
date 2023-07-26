<script setup lang="ts">
// import BaseHead from '../components/BaseHead.astro';
// import Footer from '../components/Footer.astro';
// const { title } = Astro.props
</script>

<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Title</title>
<!--    <BaseHead title={title} />-->
  </head>
  <body>
  <slot /> <!-- 你的内容会被插入到这里 -->
<!--  <Footer />-->

  </body>
  </html>
</template>

<style scoped>

</style>