<template>
  <v-app>
    <Navbar/>

    <v-main>
      <v-container>
      <home-demo/>
    </v-container>
    </v-main>
    

  </v-app>
</template>

<script>
import HomeDemo from './components/home-demo.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',

  components: {
    HomeDemo,
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
