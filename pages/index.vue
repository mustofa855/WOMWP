<template>
  <div class="bg-slate-500 ">
    <nav class="fixed w-full bg-gray-200">
      <img src="../static/MWP.png" alt="" class="h-20 w-auto pl-4">

    </nav>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'; //import navbar


export default {
  name: 'IndexPage',
  components: {
    Navbar, // Mendaftarkan komponen Navbar
  }
}
</script>
