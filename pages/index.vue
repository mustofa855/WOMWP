<template>
  <div class="flex flex-col">
    <section class="hero flex flex-col items-center justify-center h-[600px] bg-cover bg-center text-white p-4">
      <h1 class="typing">Selamat Datang di MWP Wedding Organizer</h1>
      <p class="text-lg text-center mt-4 max-w-2xl">Menciptakan Pernikahan Impian Anda dengan Kombinasi Kreativitas,
        Profesionalisme, dan Perhatian pada Setiap Detail untuk Momen yang Sempurna</p>
    </section>

    <section class="vendor-list flex flex-col items-center mt-8 mb-8">
      <h2 class="text-2xl font-bold">Our Vendors</h2>
      <VendorList />
    </section>



    <img src="../assets/images/garis-batas.jpg" alt="Garis Batas" class="mx-auto">

    <section class="gallery flex flex-col items-center mb-8">
      <h2 class="text-2xl font-bold">Galeri Pernikahan Kami</h2>
      <Gallery />
    </section>

    <img src="../assets/images/garis-batas.jpg" alt="Garis Batas" class="mx-auto">

    <section class="call-to-action flex flex-col items-center border-t-2 text-black py-8">
        <h2 class="text-2xl font-bold mb-4">Siap untuk Mengatur Pernikahan Impian Anda?</h2>
        <p class="text-lg text-center mb-4 max-w-xl">
          Dengan pengalaman kami dan perhatian terhadap detail, kami siap membantu Anda mewujudkan pernikahan yang tak
          terlupakan.
          Klik tombol di bawah untuk memulai perjalanan Anda bersama kami.
        </p>
        <nuxt-link to="/login"
          class="btn-primary hover:bg-gray-700 border-2 hover:text-white transition-colors duration-300 px-6 py-3 text-lg rounded-full">
          Pesan Sekarang
        </nuxt-link>
      </section>

    <section class="Copyright flex flex-row items-start justify-between mb-8 border-t-2 pt-4 px-8">
      <!-- Bagian Logo MWP dan Ikon Sosial Media -->
      <div class="left-side flex flex-col items-center">
        <!-- Logo MWP -->
        <div class="logo mb-4">
          <img src="../static/MWP.png" alt="Logo MWP" class="h-48 w-full" />
        </div>


      </div>

      <!-- Bagian Alamat MWP -->
      <div class="address ">
        <p>MWP is Absolutely We Believe</p>
        <nuxt-link to="/contact" class="hover:text-blue-500 hover:underline">Contact Us</nuxt-link>
        <br>
        <nuxt-link to="/login" class="hover:text-blue-500 hover:underline">Book Now!</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import VendorList from '~/components/VendorList.vue'
import Gallery from '~/components/Gallery.vue'
import CardMUA from '~/components/MUA.vue'

export default {
  layout: 'umum',
  components: {
    VendorList,
    Gallery,
    CardMUA
  }
}
</script>

<style scoped>
.hero {
  background: url('~/assets/images/wedding4.jpg') no-repeat center center;
  background-size: cover;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
  max-width: 600px;
}

.vendor-list,
.gallery {
  margin: 2rem 0;
}

.vendor-list h2,
.gallery h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.typing {
  font-size: 2.5rem;
  border-right: 2px solid white;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 4s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes blink-caret {

  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: white;
  }
}

.Copyright {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.logo img {
  max-height: 4rem;
  /* Adjust size as needed */
}

.social-media svg {
  fill: gray;
  /* Adjust color as needed */
}

.address {
  font-size: 0.875rem;
  color: gray;
}
</style>
