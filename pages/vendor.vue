<template>
  <div>
    <section class="vendors-hero">
      <h1>Daftar Mitra Vendor MWP</h1>
      <p>Pilih mitra vendor terbaik yang sesuai dengan kebutuhan pernikahan Anda.</p>
    </section>

    <section class="vendor-categories max-w-screen-lg mx-auto text-center">
      <h2>Make Up Artist</h2>
      <div class="vendor-cards">
        <VendorCard v-for="vendor in muaVendors" :key="vendor.id" :vendor="vendor" />
      </div>

      <h2>Musik</h2>
      <div class="vendor-cards">
        <VendorCard v-for="vendor in musicVendors" :key="vendor.id" :vendor="vendor" />
      </div>

      <h2>Catering</h2>
      <div class="vendor-cards">
        <VendorCard v-for="vendor in cateringVendors" :key="vendor.id" :vendor="vendor" />
      </div>

      <h2>Fotografi</h2>
      <div class="vendor-cards">
        <VendorCard v-for="vendor in photographyVendors" :key="vendor.id" :vendor="vendor" />
      </div>
    </section>
  </div>
</template>

<script>
import VendorCard from '~/components/VendorCard.vue'

export default {
  layout: 'umum',
  components: {
    VendorCard
  },
  data() {
    return {
      // Data Vendor Berdasarkan Kategori
      muaVendors: [
        { id: 1, name: 'Kusuka MUA', description: 'Make Up Artist terbaik untuk pernikahan.', image: '../js-mua.jpg' },
        { id: 2, name: 'MUA Syantik', description: 'Tampil cantik dengan MUA Syantik.', image: '../julia-mua.jpg' },
        { id: 3, name: 'MUA Helo Kitty', description: 'MUA dengan sentuhan unik yang menarik perhatian.', image: '../laura-mua.jpg' },
        { id: 4, name: 'MUA Palu', description: 'Keahlian MUA Palu yang profesional.', image: '../mari-d-mua.jpg' },
        { id: 5, name: 'MUA Sunda', description: 'Sentuhan tradisional khas Sunda.', image: '../sarah-mua.jpg' }
      ],
      musicVendors: [
        { id: 1, name: 'BDG Musik', description: 'Hiburan musik dari Bandung.', image: '../akustik-musik.jpg' },
        { id: 2, name: 'LBG Musik', description: 'Grup musik dengan kualitas suara terbaik.', image: '../grup-musik.jpg' },
        { id: 3, name: 'PLW Musik', description: 'Musik berkelas untuk hari spesial.', image: '../mood-musik.png' },
        { id: 4, name: 'MTK Musik', description: 'Hiburan musik dari MTK.', image: '../musik-musik.jpg' }
      ],
      cateringVendors: [
        { id: 1, name: 'Juara Catering', description: 'Catering juara untuk memanjakan tamu.', image: '../catering1.jpg' },
        { id: 2, name: 'Catering Panda', description: 'Pilihan catering yang menyenangkan.', image: '../catering2.jpg' },
        { id: 3, name: 'Catering Hade', description: 'Rasa lezat dengan pelayanan profesional.', image: '../catering3.jpg' },
        { id: 4, name: 'Catering Jago', description: 'Penyediaan makanan dengan kualitas tinggi.', image: '../catering4.jpg' }
      ],
      photographyVendors: [
        { id: 1, name: 'Fans Poto', description: 'Dokumentasi pernikahan yang indah.', image: '../fotografi1.jpg' },
        { id: 2, name: 'Kombo Foto', description: 'Tim fotografer profesional.', image: '../fotografi2.jpg' },
        { id: 3, name: 'Jonas Foto', description: 'Pengalaman fotografi yang luar biasa.', image: '../fotografi3.jpg' },
        { id: 4, name: 'Mugen Foto', description: 'Fotografer handal untuk mengabadikan momen.', image: '../fotografi4.png' }
      ]
    }
  }
}
</script>

<style scoped>
.vendors-hero {
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
}
.vendors-hero h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.vendors-hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.vendor-categories {
  padding: 2rem;
}

.vendor-cards {
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
}
</style>
