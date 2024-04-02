<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter(); 
const user = useSupabaseUser();
const client = useSupabaseClient();
const email = ref('');
const password = ref('');

if(user.value)
{
  router.push('/profile')
}


async function signUp() {
  try
  {
    const { data, error } = client.auth.signUp({
      email: email.value,
      password: password.value
    });

    if(error)
    {
      throw error;
    } 
    
    else
    {
      router.push('/confirm');
    }
  }

  catch(error)
  {
    console.error(error);
  }
}

async function signIn() {
  try 
  {
    const { data, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });

    if(error)
    {
      throw error;
    } 
    
    else
    {
      router.push('/profile');
    }
  } 
  
  catch(error) 
  {
    console.error(error);
  }
} 


</script>

<template>
<div class="sign-up-container">
    <h2>Sign Up Form</h2>
    <form @submit.prevent="signIn">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" required v-model="email">

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required v-model="password">

      <div class="buttons">
        <button @click="signUp">Sign Up</button>
        <button @click="signIn">Login</button>
      </div>
    </form>
</div>
</template>

<style lang="scss" scoped>
.sign-up-container {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        font-family: sans-serif;
    }

    .sign-up-container h2 {
        margin-bottom: 20px;
        text-align: center;
    }

    .sign-up-container form {
        display: flex;
        flex-direction: column;
    }

    .sign-up-container label {
        margin-bottom: 10px;
    }

    .sign-up-container input[type="text"],
    .sign-up-container input[type="password"] {
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    button {
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #8800ff;
        color: #ffffff;
        cursor: pointer;
    }

    button:hover {
        background-color: #6800b3;
    }
</style>