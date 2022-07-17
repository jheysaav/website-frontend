<template>
  <Head>
    <title>{{ props.title }} - Jheyson Saavedra</title>
    <meta name="description" :content="props.description" />
    <meta name="keywords" :content="props.keywords" />

    <meta property="og:title" :content="`${props.title} - Jheyson Saavedra`" />
    <meta property="og:description" :content="props.description" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Jheyson Saavedra" />

    <meta property="og:locale" content="en_GB" />
    <meta property="og:locale:alternate" content="es_CO" />

    <meta name="twitter:site" content="@jheysaav" />
    <meta name="twitter:creator" content="@jheysaav" />
  </Head>
  <main class="mx-auto max-w-3xl px-6 2xl:max-w-5xl">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description?: string;
  keywords?: string;
}>();
</script>
