<template>
  <div class="about-container">
    <!-- Hero Section -->
    <section class="about-hero bg-gray-100 py-12 text-center">
      <h1 class="text-4xl font-bold mb-4">Tentang MWP</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">MWP was established in 2018. The number one of wedding
        organizer in Bandung and Cimahi, MWP also has a branch office in tasikmalaya. With a profesional team named
        MWPGreatTeam, we are committed to realizing our clients dream of an extra ordinary wedding that will never be
        forgotten.</p>
      <br>
      <p class="text-lg text-gray-600">~ MWP is Absolutely We Believe ~</p>
    </section>

    <!-- Visi & Misi -->
    <section class="vision-mission py-12 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">Visi & Misi Kami</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-6 border rounded-lg shadow">
            <h3 class="text-2xl font-semibold mb-4">Visi</h3>
            <p class="text-gray-600">Menjadi penyedia layanan wedding organizer yang terpercaya dan diakui di seluruh
              Indonesia dengan menghadirkan pernikahan yang indah dan berkesan.</p>
          </div>
          <div class="p-6 border rounded-lg shadow">
            <h3 class="text-2xl font-semibold mb-4">Misi</h3>
            <ul class="text-gray-600 list-disc list-inside">
              <li>Menyediakan pilihan vendor berkualitas untuk setiap kebutuhan pernikahan.</li>
              <li>Memberikan layanan terbaik untuk memastikan kelancaran setiap acara pernikahan.</li>
              <li>Mengutamakan kepuasan dan kebahagiaan pasangan pengantin dalam setiap layanan yang kami berikan.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Tim Kami -->
    <section class="team-section py-12 bg-gray-100">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">Tim Kami</h2>
        <p class="text-gray-600 mb-8">Kami memiliki tim profesional yang berpengalaman dalam industri pernikahan.
          Berikut adalah beberapa anggota tim inti kami.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <!-- Example Team Member -->
          <div class="team-member p-6 border rounded-lg shadow bg-white">
            <img src="../assets/images/wo-team.png" alt="Team Member" class="w-32 h-32 rounded-full mx-auto mb-4">
            <h3 class="text-xl font-semibold">Rina Putri</h3>
            <p class="text-gray-600">Wedding Planner</p>
          </div>

          <div class="team-member p-6 border rounded-lg shadow bg-white">
            <img src="../assets/images/wo-team.png" alt="Team Member" class="w-32 h-32 rounded-full mx-auto mb-4">
            <h3 class="text-xl font-semibold">Dedi Supratman</h3>
            <p class="text-gray-600">Event Coordinator</p>
          </div>

          <div class="team-member p-6 border rounded-lg shadow bg-white">
            <img src="../assets/images/wo-team.png" alt="Team Member" class="w-32 h-32 rounded-full mx-auto mb-4">
            <h3 class="text-xl font-semibold">Sari Wijaya</h3>
            <p class="text-gray-600">Vendor Liaison</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'umum',
  name: 'About'
}
</script>

<style scoped>
.about-hero h1 {
  color: #4a5568;
}
</style>
