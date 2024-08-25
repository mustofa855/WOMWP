<template>
    <div class="gallery flex justify-center px-7">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="photo in photos" :key="photo.id" class="photo-item">
          <img :src="photo.url" :alt="photo.description" class="h-72 w-full object-cover" />
          <p class="text-center mt-2 text-sm">{{ photo.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        photos: [
          { id: 1, url: require('~/assets/images/wedding1.jpg'), description: 'Pernikahan seru' },
          { id: 2, url: require('~/assets/images/wedding2.jpg'), description: 'Pernikahan outdoor' },
          { id: 3, url: require('~/assets/images/wedding3.jpg'), description: 'Pernikahan penuh khidmat' },
          { id: 4, url: require('~/assets/images/wedding4.jpg'), description: 'Pernikahan elegan' },
          { id: 5, url: require('~/assets/images/wedding4.jpg'), description: 'Pernikahan dengan tema rustic' },
          { id: 6, url: require('~/assets/images/wedding4.jpg'), description: 'Pernikahan dengan suasana romantis' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .gallery {
    margin-top: 2rem;
  }
  
  .photo-item img {
    border-radius: 0.5rem;
  }
  
  .photo-item p {
    margin-top: 0.5rem;
    font-size: 0.875rem; /* Ukuran font yang lebih kecil untuk keterangan */
  }
  </style>
  