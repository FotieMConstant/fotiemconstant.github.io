<template>
  <div>
    <v-app-bar app :color="defaultAppBarColour" dense dark>
      <v-app-bar-nav-icon
        v-show="showHamburgerMenu"
        @click="drawer = true"
      ></v-app-bar-nav-icon>

      <router-link to="/">
        <v-toolbar-title id="logo">Fotie </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
      <!-- Navigation links -->
      <span v-show="webMenu">
        <a href="#home" @click.prevent="scrollTo('#home')">
          <v-btn depressed plain text color="white"> Home </v-btn>
        </a>
        <a href="#about" @click.prevent="scrollTo('#about')">
          <v-btn depressed plain text color="white"> About </v-btn>
        </a>
        <a href="#skill" @click.prevent="scrollTo('#skill')"
          ><v-btn depressed plain text color="white"> skill </v-btn></a
        >
        <a href="#portfolio" @click.prevent="scrollTo('#portfolio')"
          ><v-btn depressed plain text color="white"> Portfolio </v-btn></a
        >

        <a href="#contact" @click.prevent="scrollTo('#contact')">
          <v-btn depressed plain text color="white"> Contact </v-btn>
        </a>
      </span>
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
        Still working on this menu for mobile. Please check back later!
        <!-- <v-list-item-group v-model="group">
          <a href="#home" @click.prevent="scrollTo('#home')">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </a>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group> -->
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
// import store from "@/store/store";

export default {
  data() {
    return {
      showHamburgerMenu: false,
      webMenu: true,
      group: null,
      drawer: false,
      fab: null,
      defaultAppBarColour: "primary",
    };
  },
  computed: {},
  mounted: function () {
    // check if on mobile
    if (
      /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // some code..
      this.webMenu = false;
      this.showHamburgerMenu = true;
      console.log("You are on mobile");
    } else {
      console.log("You are on Desktop");
    }
    // Keep dark mode on if the user's system is on dark mode!
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
    scrollTo(selector) {
      console.log(selector);
      document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
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
</style>