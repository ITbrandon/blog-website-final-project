<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

if(user.value === null)
{
  router.push('/error')
}

const { data: blog_post } = await useAsyncData('post', async () => {
  let { data: post, error } = await client.from('blog_post').select('title, content');
  console.log(post)
  return post;
});

</script>

<template>
<section>
  <article v-for="(post,i) in blog_post" :key="i">
    <NuxtLink :to="post.title"><h2>{{ post.title }}</h2></NuxtLink>
    <!-- <p>{{ post.content }}</p> -->
    <!-- <Icon name="mdi:heart" class="icon"/> -->
  </article>
</section>
</template>

<style lang="scss" scoped>
section {
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  row-gap: 1.5rem;
  place-items: center;
  height: 90vh;
}

article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  font-family: sans-serif;
}

p {
  max-width: 35ch;
  text-align: center;
}

.icon {
  cursor: pointer;
  transition: 0.3s;
}

.icon:hover {
  opacity: 0.6;
}

.liked {
  color: red;
}

a {
  color: black;
  text-decoration: none;
  transition: 0.4s;
}

a:hover {
  color: rgba(0, 0, 0, 0.505)
}
</style>