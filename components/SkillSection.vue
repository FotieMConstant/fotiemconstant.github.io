<template>
  <div class="container">
    <div class="text-2xl text-center text-gray-600 font-bold">
      Skill / What I nerd out about
    </div>
    <div class="flex flex-wrap justify-center my-9">
      <div class="m-4 floating">
        <img class="w-12" src="~/assets/images/html.png" alt="html5">
      </div>
      <div class="m-4 floating">
        <img class="w-12" src="~/assets/images/css.png" alt="html5">
      </div>
      <div class="m-4 floating">
        <img class="w-9" src="~/assets/images/javasript.png" alt="html5">
      </div>
      <div class="m-4 floating">
        <img class="w-16" src="~/assets/images/jquery.png" alt="html5">
      </div>
      <div class="m-4 floating">
        <img class="w-9" src="~/assets/images/vuejs.png" alt="html5">
      </div>
      <div class="m-4 floating">
        <img class="w-9" src="~/assets/images/python.png" alt="html5">
      </div>
      <div class="m-4 floating">
        <img class="w-9" src="~/assets/images/php.png" alt="html5">
      </div>
      <div class="m-4 floating">
        <img class="w-9" src="~/assets/images/reactjs.png" alt="html5">
      </div>
      <div class="m-4 floating">
        <img class="w-9" src="~/assets/images/nuxt.png" alt="html5">
      </div>
      <div class="m-4 floating">
        <img class="w-9" src="~/assets/images/tailwindcss.png" alt="html5">
      </div>
      <div class="m-4 floating">
        <img class="w-9" src="~/assets/images/vuetify.png" alt="html5">
      </div>
      <div class="m-4 floating">
        <img class="w-12" src="~/assets/images/git.png" alt="html5">
      </div>
    </div>
  </div>
</template>
<style scoped>
.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}
</style>
