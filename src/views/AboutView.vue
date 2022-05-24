<template>
  <div class="container w-full md:max-w-3xl mx-auto pt-5">
    <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
      <div class="font-sans">
        <h1 class="font-bold text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
          Tentang DuniaPoke
        </h1>
      </div>

      <img src="https://i.imgur.com/Ub06tk3.png" class="mx-auto h-15 sm:h-18 mt-10" alt="DuniaPoke" />

      <p class="py-6">
        👋 Selamat Datang di Project DuniaPoke dari <a
          class="text-blue-500 shadow-blue-500/50 no-underline hover:underline"
          href="https://www.duniadev.com/">DuniaDev</a>. DuniaPoke berasal
        dari dua kata yaitu Dunia dan Poke atau Pokemon, yang berarti pada
        website ini berisi semua jenis Pokemon yang ada pada entah itu Game
        maupun Film-nya. Tidak hanya tampilan pokemon saja yang diberikan tetapi
        juga detail dari pokemon itu sendiri, seperti tipe, kemampuan, dan
        status. Pokemon memiliki ribuan jenis yang bisa ditemukan sehingga
        dibuat fitur pencarian agar memudahkan mencari pokemon yang diinginkan.
      </p>

      <p class="py-6">
        Project DuniaPoke dibuat berdasarkan hasil dari pembelajaran
        <a class="text-blue-500 shadow-blue-500/50 no-underline hover:underline" href="https://vuejs.org/">Vue.js</a>
        dan
        <a class="text-blue-500 shadow-blue-500/50 no-underline hover:underline"
          href="https://tailwindcss.com/">Tailwinds CSS</a>. Tidak terlalu banyak fitur yang dibuat karena bertujuan
        untuk menampilkan data dari API ke Website pada sisi Front End dan data langsung bisa ditampilkan ketika dicari pada kolom pencarian
        tanpa harus mereloadnya terlebih dahulu. Saya
        berterima kasih kepada
        <a class="text-blue-500 shadow-blue-500/50 no-underline hover:underline" href="https://pokeapi.co/">PokeAPI</a>
        yang telah membuat API Pokemon secara gratis sehingga bisa dijadikan bahan belajar dalam
        menggunakan data dari API.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AboutView",
  };
</script>