<template>
  <div class="p-10 text-center relative bg-no-repeat bg-cover" style="
      background-image: url('https://images.alphacoders.com/998/998181.jpg');
      height: 400px;">
    <div class="absolute top-0 right-0 bottom-0 left-0 w-full overflow-hidden"
      style="background-color: rgba(0, 0, 0, 0.6)">
      <div class="flex justify-center items-center h-full">
        <div class="text-white">
          <img src="https://i.imgur.com/Ub06tk3.png" class=" mx-auto h-12 sm:h-15" alt="DuniaPoke" />
          <h4 class="text-xl mt-6 mb-6">Search your favorite pokemon</h4>
          <div class="form-floating mb-3 xl:w-96">
            <input type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700bg-white bg-clip-padding border border-solid border-blue-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="floatingInput" placeholder="Enter pokemon" v-model="text">
            <label for="floatingInput" class="text-gray-400">Enter pokemon</label>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class=" text-center mt-10 container px-3 mx-auto grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-6">
    <div class="ml-4 text-2 h-15  text-white aspect-[4/3] rounded-lg bg-blue-500 shadow-lg shadow-blue-500/50" data-aos="fade-up"
      v-for="(pokemon, idx) in filteredPokemon" :key="idx">
      <button v-on:click="get_pokemon(pokemon.id)" data-bs-toggle="modal" :data-bs-target="'#pokemon'">
        <img class="w-35 h-35 mx-auto" :src="imageUrl + pokemon.id + `.png`" alt="">
        <span class="capitalize font-bold font-sans text-lg">{{ pokemon.name }}</span>
      </button>
    </div>
  </div>

  <div class="w-full flex justify-center mt-10 mb-10 p2 transition-opacity" id="scrollTrigger"
    ref="infinitescrolltrigger">
  </div>

  <div @click="scrollToTop" ref="scrollTopButton" class="invisible sticky w-full flex justify-end bottom-0 pb-3 pr-5 lg:pr-16 transition">
    <div class="text-gray-400 hover:text-blue-400 transition">
      <button type="button" @click="scrollToTop"
        class="inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-20 h-20">
        <svg class="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </button>
    </div>
  </div>

  <div v-if="gets_pokemon" class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" tabindex="-1" :id="'pokemon'" aria-modal="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none capitalize">
      <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
          <h5 class="mx-auto font-medium capitalize text-lg text-gray-800">
            <span class="font-bold font-sans">{{ gets_pokemon.name }}</span>
          </h5>
        </div>
        <div class="modal-body relative p-4">
          <div class="flex justify-center">
            <img class="w-48" :src="gets_pokemon.sprites.front_shiny" alt="">
            <img class="w-48" :src="gets_pokemon.sprites.back_shiny" alt="">
          </div>
          <div class="flex flex-row justify-around text-center mb-5">
            <div>
              <h3 class="text-white bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Types</h3>
              <div v-for="(type, idx) in gets_pokemon.types" :key="idx">
                <h5 class="text-blue-900">{{type.type.name}}</h5>
              </div>
            </div>
            <div>
              <h3 class="text-white bg-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Ability</h3>
              <div v-for="(abilities, idx) in gets_pokemon.abilities" :key="idx">
                <h5 class="text-blue-900">{{abilities.ability.name}}</h5>
              </div>
            </div>
          </div>
          <h3 class="text-white text-center bg-red-400 font-medium rounded-lg text-sm py-2.5 mr-2 mb-3">Status</h3>
          <div class="text-center grid grid-cols-2 mt2">
            <h5 class="text-blue-900">Height: {{gets_pokemon.height}}</h5>
            <h5 class="text-blue-900">Weight : {{gets_pokemon.weight}}</h5>
          </div>
          <div class="text-center grid grid-cols-3 mt2 mb-5">
            <div v-for="(stats, idx) in gets_pokemon.stats" :key="idx">
              <h5 class="text-blue-900">{{ stats.stat.name }}: {{ stats.base_stat }} </h5>
            </div>
          </div>
          <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
            <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    computed,
    defineComponent,
  } from "vue";
  export default defineComponent({
    name: 'HomeView',
    theme: {
      container: {
        center: true,
      },
    },
    data() {
      return {
        pokemons: [],
        url: 'https://pokeapi.co/api/v2/pokemon/',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/',
        text: "",
        nextUrl: '',
        currentUrl: '',
        filteredPokemon: computed(() => this.updatePokemon()),
        gets_pokemon: null,
      }
    },
    methods: {
      fetchData() {
        let req = new Request(this.currentUrl);
        fetch(req)
          .then((res) => res.json())
          .then((data) => {
            this.nextUrl = data.next;
            data.results.forEach(pokemon => {
              // console.log(pokemon)
              pokemon.id = pokemon.url.split('/')
                .filter(function (part) {
                  return !!part
                }).pop();
              this.pokemons.push(pokemon);
              if (this.pokemons.length === data.count) {
                this.$refs.infinitescrolltrigger.remove();
              } else if (this.text === data.result) {
                this.$refs.infinitescrolltrigger.remove();
              }
            });

          }, );
      },
      get_pokemon(id) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            // console.log("ini = " + data.name);
            this.gets_pokemon = data;
          })

      },
      updatePokemon() {
        if (this.text.length === 0) {
          return this.pokemons;
        }
        return this.pokemons.filter((pokemon) => {
          return pokemon.name.toLowerCase().includes(this.text.toLowerCase());
        });
      },
      scrollTrigger() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0 && this.nextUrl) {
              this.next();
            }
          });
        });
        observer.observe(this.$refs.infinitescrolltrigger);
      },
      next() {
        this.currentUrl = this.nextUrl;
        this.fetchData();
      },
      handleScroll() {
        const scrollBtn = this.$refs.scrollTopButton;

        if (window.scrollY > 0) {
          scrollBtn.classList.remove("invisible");
        } else {
          scrollBtn.classList.add("invisible");
        }
      },
      scrollToTop() {
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
      },
    },
    created() {
      this.currentUrl = this.url;
      this.get_pokemon(1);

      this.fetchData();
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    mounted() {
      this.scrollTrigger();
      window.addEventListener("scroll", this.handleScroll);
    },
  });
</script>