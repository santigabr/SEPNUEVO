<script setup lang="ts">
const { t, tm, rt } = useI18n()

const typing = ref(null)
const loading = ref(true)
const presentation = t('homepage.presentation')
const presentation2 = t('homepage.presentation2')
const offers = (tm('homepage.typewriter') as string[]).map((item: string) => rt(item))
const bottonheader1 = tm('header.links[1]') as Link
const bottonheader2 = tm('header.contact') as Link
</script>

<template>
  <div class="bg-500/20 backdrop-blur-sm h-[90dvh] rounded-b-[30px] md:rounded-b-[60px] overflow-hidden grid gap-5 place-content-center animate-slidein opacity-0 [--slidein-delay:200ms]">
    <NuxtImg src="/hero.png" height="1177px" width="1440px" class="absolute object-cover w-screen overflow-hidden -z-[10]" alt="hero" />
    <div class="font-bold antialiased tracking-tight animate-slidein opacity-0 [--slidein-delay:300ms] text-5xl md:text-8xl text-center">
      <p>
        {{ presentation }}
      </p>

      <span class="inline-flex flex-col leading-none h-[calc(theme(fontSize.5xl)*theme(lineHeight.none))] md:h-[calc(theme(fontSize.8xl)*theme(lineHeight.none))] overflow-hidden">
        <ul class="text-500 block animate-text-slide-3 [&_li]:block">
          <li v-for="offer in offers" :key="offer" class="leading-none">{{ offer }}</li>
          <li aria-hidden="true" class="leading-none">{{ offers[0] }}</li>
        </ul>
      </span>
    </div>
    <div class="flex justify-center sm:p-10 p-6 animate-slidein opacity-0 [--slidein-delay:500ms]">
      <div class="relative inline-flex group">
        <div
          class="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-white rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
        />
        <NuxtLink
          :to="rt(bottonheader2.href)"
          class="relative inline-flex gap-2 items-center justify-center px-8 py-4 text-lg font-medium text-black transition-all duration-200 bg-white rounded-3xl"
        >
          {{ rt(bottonheader2.label) }}
          <Icon name="i-lucide-arrow-right" size="20" />
        </NuxtLink>
      </div>
    </div>
  </div>

  <div class="">
    <h1 class="sm:text-5xl text-4xl font-medium pt-10 tracking-tight text-center">
      Proyectos recientes
    </h1>
  </div>
</template>
