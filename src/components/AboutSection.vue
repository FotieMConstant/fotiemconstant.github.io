<template>
  <v-card
    id="about"
    class="pa-12 mx-auto mt-16"
    elevation="12"
    max-width="1150"
  >
    <h1 align="center" class="mb-5">About me</h1>
    <v-row no-gutters>
      <v-col cols="6" md="4">
        <v-card class="pa-2" elevation="0">
          <img
            class="__profile"
            src="../assets/fotie.png"
            alt="Fotie profile"
          />
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="8">
        <v-card class="pa-2" elevation="0">
          <p>
            Hi there, I'm Fotie. Web Developer with a demonstrated history of
            working in the computer software industry. Skilled in UI Designing,
            Responsive Web Design, Full-Stack Development, and Web Development.
            Strong engineering student undergoing Bachelor degree focused in
            Computer Software Engineering at African Institute of Computer
            Sciences.
          </p>
          <h3 class="mb-1">Why am I doing this?</h3>
          <p>
            Because I love beautiful things. The self reward of finishing a
            project. The ability to see the website from anywhere in the world
            on any device. The internet is so powerful and I love the reward
            from creating something that has the potential to be viewed by so
            many people. I just love building beautiful and interactive
            interfaces.
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
<style scoped>
.__profile {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>