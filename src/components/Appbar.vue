<template>
  <div>
    <v-app-bar app :color="defaultAppBarColour" dense dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <router-link to="/">
        <v-toolbar-title id="logo">Fotie </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
      <router-link to="/" class="__auth__Button">
        <v-btn depressed plain text color="white"> Home </v-btn>
      </router-link>
      <router-link to="/about" class="__auth__Button">
        <v-btn depressed plain text color="white"> About </v-btn>
      </router-link>
      <router-link to="/portfolio" class="__auth__Button">
        <v-btn depressed plain text color="white"> portfolio </v-btn>
      </router-link>
      <router-link to="/blog" class="__auth__Button">
        <v-btn depressed plain text color="white"> Blog </v-btn>
      </router-link>
      <router-link to="/contact" class="__auth__Button">
        <v-btn depressed plain text color="white"> Contact </v-btn>
      </router-link>

      <!-- Dark option -->
      <div>
        <v-tooltip v-if="!$vuetify.theme.dark" bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              elevation="0"
              v-on="on"
              color="info"
              x-small
              fab
              @click="darkMode"
            >
              <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode On</span>
        </v-tooltip>

        <v-tooltip v-else bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              elevation="0"
              v-on="on"
              color="info"
              x-small
              fab
              @click="darkMode"
            >
              <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode Off</span>
        </v-tooltip>
      </div>
      <!-- / Dark option -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
// import store from "@/store/store";

export default {
  data() {
    return {
      group: null,
      drawer: false,
      fab: null,
      defaultAppBarColour: "primary",
    };
  },
  computed: {},
  mounted: function () {
    // // Keep dark mode on if the user's system is on dark mode!
    // if (
    //   window.matchMedia &&
    //   window.matchMedia("(prefers-color-scheme: dark)").matches
    // ) {
    //   // dark mode
    //   this.darkMode();
    // }
    // Watch for changes, if the user changes their current OS theme
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        e.matches ? this.$vuetify.theme.dark : !this.$vuetify.theme.dark; // check this code later
      });
  },
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      if (this.$vuetify.theme.dark) {
        this.defaultAppBarColour = "#272727";
      } else {
        this.defaultAppBarColour = "primary";
      }
    },
  },
};
</script>
<style >
a {
  text-decoration: none;
  color: inherit;
}
#logo {
  color: white !important;
}
.__auth__Button {
  text-transform: initial;
}
</style>