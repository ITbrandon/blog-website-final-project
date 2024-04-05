<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();
const { title } = useRoute().params;
const { data: blog_post } = await useAsyncData('post', async () => {
  let { data: post, error } = await client.from('blog_post').select('title, content');
  console.log(post)
  let singlePost = post.filter(function(post) {
    return post.title === title;
  });
return singlePost;
});
</script>

<template>
<section>
  <h1>{{ blog_post[0].title }}</h1>
  <h3>{{ blog_post[0].content }}</h3>
</section>
</template>

<style lang="scss" scoped>
section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>