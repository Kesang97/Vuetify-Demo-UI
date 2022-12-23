<template>
  <nav>
    <v-app-bar app flat>
      <!-- navbar icon/menu bar icon -->
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span class="font-weight-bold">Ninja</span>
      </v-toolbar-title>
      <!-- v-spacer creates an space between two elements -->
      <v-spacer></v-spacer> 

      <!-- dropdown Menus -->
    <v-menu offset-y>
      <template v-slot:activator="{attrs, on}">
        <v-btn text color="grey" v-on="on" v-bind="attrs">
          <v-icon>mdi-chevron-down</v-icon>
          <span>Menu</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" @click="$router.push(item.route)">
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <v-btn text color="grey">
        <span>sign out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- Side nav drawer design using v-list -->

    <v-navigation-drawer v-model="drawer" app class="purple darken-2">
      <section class="my-2">
        <div class="d-flex justify-center">
          <v-avatar size="100">
            <img src="/avatar.png">
          </v-avatar>
        </div>
        <p class="subtitle-2  white--text text-center">Kesang Sherpa</p>
        <div class="d-flex justify-center mt-4 mb-4">
          <Popup/>
        </div>
      </section>
      
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="white darken-3">
          <!-- for loop and data binding to it in v-list-item -->
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="$router.push(item.route)"
          >
            <v-list-item-icon>
              <v-icon class="white--text">{{ item.icons }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup.vue'
export default {
  components: {
    Popup
  } ,

  data() {
    return {
      drawer: false,
      selectedItem: 0,
      items: [
        { text: "Dashboard", icons: "mdi-view-dashboard", route: "/" },
        { text: "My Projects", icons: "mdi-folder", route: "/projects" },
        { text: "Team", icons: "mdi-account-multiple", route: "/team" },
      ],
    };
  },
 
};
</script>
