// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', 'nuxt-icon'],
  devtools: { enabled: true },
  supabase: {
    redirect: false
  }
})
