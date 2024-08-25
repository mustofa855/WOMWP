<template>
    <nav>
        <div class="container mx-auto flex justify-between items-center bg-transparent">
            <div class="text-white text-lg font-bold">
                <img src="../static/MWP.png" alt="" class="h-20 w-auto pl-4">
            </div>
            <div>
                <nuxt-link to="/" class="text-black hover:text-black/50 mx-2">Home</nuxt-link>
                <nuxt-link to="/pelanggan/vendor" class="text-black hover:text-black/50 mx-2">Vendors</nuxt-link>
                <nuxt-link to="/pelanggan/about" class="text-black hover:text-black/50 mx-2">About</nuxt-link>
                <nuxt-link to="/pelanggan/contact" class="text-black hover:text-black/50 mx-2">Contact</nuxt-link>
            </div>

            <div>
                <!-- Tombol Login -->
                <nuxt-link to="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </nuxt-link>
            </div>
        </div>
    </nav>
</template>

<style scoped>
nav {
    background-color: #f3f3f3;
}
</style>