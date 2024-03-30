<script setup lang="ts">
const menu = ref(false)
interface HeaderLink {
  label: string
  href: string
}
const navigation: HeaderLink[] = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Productos',
    href: '/productos',
  },
  {
    label: 'Contacto',
    href: '/contacto',
  },
]
</script>

<template>
  <header class="backdrop-blur-sm flex top-0 justify-between py-5 bg-white px-8 items-center" />
</template>
