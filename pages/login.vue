<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
  
        <form @submit.prevent="handleLogin">
          <!-- Username Input -->
          <div class="mb-4">
            <label for="username" class="block text-gray-700">Username</label>
            <input
              v-model="username"
              type="text"
              id="username"
              class="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your username"
              required
            />
          </div>
  
          <!-- Password Input -->
          <div class="mb-6">
            <label for="password" class="block text-gray-700">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
              required
            />
          </div>
  
          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg duration-200"
          >
            Login
          </button>
        </form>
  
        <!-- Optional Register Link -->
        <p class="text-center text-gray-600 mt-4">
          Don't have an account?
          <nuxt-link to="/register" class="text-blue-500 hover:underline">Register</nuxt-link>
        </p>
  
        <!-- Divider -->
        <div class="flex items-center justify-center mt-6">
          <span class="text-gray-500">or</span>
        </div>
  
        <!-- Login with Google Button -->
        <button
          @click="loginWithGoogle"
          class="mt-4 w-full bg-gray-100 border-2 text-gray-800 hover:bg-gray-200 duration-200 font-bold py-2 px-4 rounded-lg flex items-center justify-center"
        >
          <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.22 0 5.73 1.12 7.38 2.88l5.42-5.42C33.3 4.05 28.98 2 24 2 14.94 2 7.48 7.48 4.39 15.07l6.89 5.35C12.79 13.42 17.95 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.47c0-1.65-.15-3.26-.42-4.8H24v9.09h12.65c-.52 2.77-2.04 5.13-4.29 6.71l6.78 5.27c3.97-3.66 6.36-9.05 6.36-15.27z"/><path fill="#FBBC05" d="M11.28 28.28c-1.09-2.73-1.09-5.85 0-8.58l-6.89-5.35C1.65 17.77 0 21.75 0 26s1.65 8.23 4.39 11.65l6.89-5.37z"/><path fill="#34A853" d="M24 46c4.98 0 9.3-1.64 12.43-4.44l-6.78-5.27c-1.86 1.25-4.2 2-6.65 2-6.05 0-11.21-3.92-13.11-9.35l-6.89 5.37C7.48 40.52 14.94 46 24 46z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
          Login with Google
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    layout: 'umum',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
        // Simple login logic (replace this with actual authentication logic)
        if (this.username === 'admin' && this.password === 'admin') {
          this.$router.push('/pelanggan/index.vue'); // Redirect to admin dashboard after successful login
        } else {
          alert('Invalid username or password');
        }
      },
      loginWithGoogle() {
        // Logic to handle login with Google (replace with actual OAuth flow)
        alert('Login with Google clicked');
        // Redirect to Google OAuth endpoint or start the OAuth flow
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional custom styles */
  </style>
  