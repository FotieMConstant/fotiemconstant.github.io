<template>
  <div
    v-show="showModal"
    id="modal-id"
    class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
  >
    <div class="absolute bg-black opacity-80 inset-0 z-0" />
    <div
      class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white "
    >
      <!--content-->
      <div class="">
        <!--body-->
        <div class="text-center p-5 flex-auto justify-center">
          <img
            width="150"
            src="https://i.pinimg.com/originals/74/35/64/743564395ea017c5481abb0e668be49d.gif"
            alt="Star"
            class="mx-auto"
          >
          <h2 class="text-xl font-bold py-4 ">
            New design is on it's way!
          </h2>
          <p class="text-sm text-gray-500 px-8">
            I am currently rebuilding/redesigning my portfolio and would like to
            hear from you!
          </p>
          <hr class="mx-auto my-5" width="50">
          <p v-if="randomeQuote === null" class="text-xs mt-5 text-gray-500">
            <a href="#" target="_blank">
              <!-- skeleton loader -->
              <span class="skeleton-box h-5 w-3/5 inline-block" />
            </a>
          </p>
          <p v-else class="text-xs mt-2 text-gray-400">
            <a
              href="https://github.com/FotieMConstant/geek-quote-api"
              target="_blank"
            >
              <div>{{ randomeQuote.quote }}</div>
            </a>
          </p>
        </div>
        <!--footer-->
        <div class="p-3  mt-2 text-center space-x-4 md:block">
          <a href="https://twitter.com/fotie_codes" target="_blank">
            <button
              class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
            >
              <img
                class="inline-block"
                width="20"
                src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"
                alt="twitter fotiecodes"
              >
              <div class="inline-block">@fotie_codes</div>
            </button>
          </a>
          <button
            class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
            @click="closeModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require('axios')
export default {
  data () {
    return {
      showModal: true,
      randomeQuote: null
    }
  },
  mounted () {
    this.fetchQuote()
  },
  methods: {
    closeModal () {
      this.showModal = false
    },
    async fetchQuote () {
      try {
        // eslint-disable-next-line no-console
        console.log('try')
        let response = await axios.get(
          'https://geek-quote-api.herokuapp.com/v1/quote'
        )
        response = response.data
        this.randomeQuote = response
        // eslint-disable-next-line no-console
        console.log(response)
      } catch (error) {}
    }
  }
}
</script>
<style scoped>
.skeleton-box {
  position: relative;
  overflow: hidden;
  background-color: #e2e8f0;
}
.skeleton-box::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, rgba(255, 255, 255, 0)),
    color-stop(20%, rgba(255, 255, 255, 0.2)),
    color-stop(60%, rgba(255, 255, 255, 0.5)),
    to(rgba(255, 255, 255, 0))
  );
  background-image: -o-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  -webkit-animation: shimmer 3s infinite;
  animation: shimmer 3s infinite;
  content: '';
}
@-webkit-keyframes shimmer {
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
@keyframes shimmer {
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
</style>
