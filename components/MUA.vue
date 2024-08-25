<template>
    <div class="card max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img :src="imageUrl" alt="MUA Image" class="w-full h-48 object-cover"/>
      <div class="p-4">
        <h2 class="text-xl font-bold text-center">{{ name }}</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageUrl: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  </style>
  