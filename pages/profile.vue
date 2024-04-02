<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();

async function logout() {
  try
  {
    const { error } = await client.auth.signOut();

    if(error)
    {
      throw error;
    } 
    
    else
    {
      router.push('/signUp');
    }
  }

  catch(error)
  {
    console.error(error);
  }
}
</script>

<template>
<section>
<h1>This is Your Profile Page</h1>
<h3>Email:{{user.email}}</h3>
<button @click="logout" type="button">Log Out</button>
</section>
</template>

<style lang="scss" scoped>
section {
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: sans-serif;
}

button {
  padding: 1rem;
  background-color: green;
  color: white;
  border-radius: 20px;
  border: none;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: rgba(0, 128, 0, 0.486);
}
</style>