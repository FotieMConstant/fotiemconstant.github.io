<template>
  <v-app>
    <div id="app">
      <!-- for the app bar -->
      <Appbar />
      <router-view />
      <FooterSection />
    </div>
  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar";
import FooterSection from "@/components/FooterSection";

export default {
  name: "App",

  components: {
    Appbar,
    FooterSection,
  },

  data: () => ({
    //
  }),
};
</script>