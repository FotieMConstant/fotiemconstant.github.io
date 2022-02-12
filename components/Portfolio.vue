<template>
  <div class="container mt-16">
    <div class="text-2xl text-center text-gray-600 font-bold">
      Portfolio and Open source
    </div>
    <div class="text-center text-gray-600 text-sm mt-3">
      Check out my latest projects and Open source projects to which i
      contribute
    </div>
    <div class="md:flex md:flex-wrap md:justify-center mt-5">
      <div
        v-for="project in projects"
        :key="project.id"
        class="max-w-sm mx-3 my-3"
      >
        <div
          class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg"
        >
          <a
            :href="project.githubRepo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="rounded-t-lg"
              :src="require('~/assets/images/previews/' + project.thumbnail)"
              alt=""
            >
          </a>
          <div class="py-6 px-8 rounded-lg bg-white">
            <a
              :href="project.githubRepo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="text-gray-700 font-bold text-xl mb-3 hover:text-gray-900 hover:cursor-pointer"
              >
                {{ project.name }}
              </span>
            </a>
            <a v-if="project.liveView" :href="project.liveView" target="_BLANK">
              <span
                class="py-1 px-2 bg-green-500 hover:bg-green-600 cursor-pointer text-white rounded-xl text-xs"
              >
                <span class="text-md">Live view</span>
              </span>
            </a>
            <p class="text-gray-600 tracking-wide mt-3 text-sm">
              {{ project.description }}
            </p>
            <div class="mt-3 flex">
              <div
                v-for="lg in project.lang"
                :key="lg"
                class="w-28 flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-purple-700 bg-purple-100 hover:bg-purple-200 cursor-pointer border border-purple-300 "
              >
                <div
                  class="text-xs font-normal leading-none max-w-full flex-initial"
                >
                  {{ lg.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          id: 1,
          name: 'Metal Fighters',
          lang: [{ name: 'JavaScript' }, { name: 'HTML5' }],
          description:
            'Project 6 - Openclassrooms. is a turn based game written in Javascript in which 2 players play each turn to compete.',
          date: '2020',
          thumbnail: 'metal-fighters.png',
          liveView: 'https://fotiemconstant.github.io/Metal-Fighters/',
          githubRepo: 'https://github.com/FotieMConstant/Metal-Fighters'
        },
        {
          id: 2,
          name: 'Restaurant-review',
          lang: [
            { name: 'JavaScript' },
            { name: 'React' },
            { name: 'Material UI' }
          ],
          description:
            'A restaurant review website. Get reviews of restaurants around your location. See ratings from users for a particular restaurant.',
          date: '2020',
          thumbnail: 'restaurant.png',
          liveView: null,
          githubRepo: 'https://github.com/FotieMConstant/Restaurant-review'
        },
        {
          id: 3,
          name: 'Quote Generator',
          lang: [{ name: 'JavaScript' }, { name: 'HTML5' }, { name: 'jQuery' }],
          description:
            'Generate a randome Quote with just a click with Quote Generator, you can generate random Inspirational and Hard work quotes.',
          date: '2020',
          thumbnail: 'quote-generator.png',
          liveView: 'https://fotiemconstant.github.io/Project-5/',
          githubRepo: 'https://github.com/FotieMConstant/Project-5'
        },
        {
          id: 4,
          name: 'Jobber',
          lang: [{ name: 'Vue' }, { name: 'Vuetify' }],
          description:
            'Jobber is an online Job portal, designed and built for Cameroonians, our simple goal is to ease the hiring and finding of jobs in Cameroon.',
          date: '2020',
          thumbnail: 'jobber.png',
          liveView: 'https://jobber-homepage.herokuapp.com/',
          githubRepo: 'https://github.com/FotieMConstant/Jobber'
        },
        {
          id: 5,
          name: 'LANTube',
          lang: [{ name: 'PHP ' }, { name: 'Bootstrap ' }],
          description:
            'An open source Youtube-like web app for your home network. Where you can do live streaming on your LAN, share files and much more.',
          date: '18 Sep. 2018 - Present',
          thumbnail: 'LANTube.jpg',
          liveView: null,
          githubRepo: 'https://github.com/FotieMConstant/LAN-Tube'
        },
        {
          id: 6,
          name: 'Nimble',
          lang: [
            { name: 'JavaScript' },
            { name: 'Vuejs' },
            { name: 'Tailwindcss' }
          ],
          description:
            'Nimble is a visual online code editor. It supports at the moment Tailwind CSS and will support popular libraries like Bootstrap, Bulma, and Material-UI in the future.',
          date: 'Jan 2022 - Present',
          thumbnail: 'nimble.png',
          liveView: 'https://nimble-landing.vercel.app/',
          githubRepo: 'https://github.com/FotieMConstant'
        }
      ]
    }
  }
}
</script>
