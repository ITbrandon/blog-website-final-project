<script setup>
const response = await useFetch('/api/links');
const linkData = toRaw(response.data.value);
const user = useSupabaseUser();

const email = () => {
  if(!user.value)
  {
    return "Email";
  }
  else
  {
    return user.value.email;
  }
}

</script>

<template>
<nav>
<ul>
  <li v-for="({title, href},i) in linkData" :key="i"><NuxtLink :to="href">{{ title }}</NuxtLink></li>
  <li>{{ email() }}</li>
</ul>
</nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: black;
  color: white;
  font-family: sans-serif;
  padding: 1rem;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

a:hover {
  text-decoration: underline;
}

a {
  color: white;
  text-decoration: none;
}
</style>