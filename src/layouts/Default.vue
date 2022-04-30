<template>
  <Head>
    <title>{{ props.title }} - Jheyson Saavedra</title>
    <meta name="description" :content="props.desription" />
    <meta name="keywords" :content="props.keywords" />

    <meta property="og:title" :content="`${props.title} - Jheyson Saavedra`" />
    <meta property="og:description" :content="props.desription" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Jheyson Saavedra" />

    <meta property="og:locale" content="en_US" />
    <meta property="og:locale:alternate" content="es_CO" />
    <meta property="og:locale:alternate" content="fr_FR" />

    <meta name="twitter:site" content="@jheysaav" />
    <meta name="twitter:creator" content="@jheysaav" />
  </Head>
  <main>
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string
    desription?: string
    keywords?: string
  }>()
</script>
