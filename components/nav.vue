<script setup lang="ts">
interface Link {
  href: string
  label: string
}

interface Header {
  links: Link[]
  contact: Link
}
const { t, tm, rt } = useI18n()
const header = computed(() => tm('header') as unknown as Header)
const menuOpen = ref(false)
const route = useRoute()
const language = computed(() => (route.fullPath.includes('/es') ? 'ES' : 'EN') as string)
const switchLocale = useSwitchLocalePath()
</script>

<template>
  <header class="backdrop-blur-sm sticky top-0 w-full flex justify-between z-40 py-5 px-4 items-center">
    <h2 class="text-4xl underline decoration-500">
      SEP
    </h2>
    <nav class="sm:block hidden">
      <ul class="flex gap-x-3 lg:gap-x-8">
        <li v-for="link in header.links" :key="rt(link.href)">
          <NuxtLink :to="rt(link.href)" class="transition tracking-[0.006em] ease-in-out delay-50 font-medium">
            {{ rt(link.label) }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="flex sm:justify-end gap-[12px] items-center">
      <NuxtLink class="sm:order-1 order-2 font-medium text-2xl" :to="language === 'ES' ? switchLocale('en') : switchLocale('es')" @click="refreshNuxtData">
        {{ language }}
      </NuxtLink>

      <button class="text-4xl sm:hidden order-3 flex items-center" @click="menuOpen = !menuOpen">
        <UnoIcon :class="[{ 'i-ph-list-thin': !menuOpen, 'i-ph-x-thin': menuOpen }]" />
      </button>
    </div>
  </header>
</template>
