<template>
  <div class="__footer pa-2">
    <div class="__footer-links" no-gutters>
      Made with <v-icon small>mdi-heart</v-icon> by fotiecodes. &copy;
      {{ new Date().getFullYear() }}
    </div>
  </div>
</template>
<style scoped>
.__footer {
  color: #5f6368;
  font-size: 14.5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
}
a:visited {
  color: #5f6368;
}
a {
  color: #5f6368;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>