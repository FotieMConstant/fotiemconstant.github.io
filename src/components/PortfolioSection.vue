<template>
  <div id="portfolio">
    <span align="center">
      <h1 class="mb-5">Portfolio and Open source</h1>
      <p>
        Check out my latest projects and Open source projects to which i
        contribute
      </p>
    </span>
    <div>
      <v-container>
        <v-row no-gutters>
          <v-col
            v-for="project in projects"
            :key="project.id"
            cols="12"
            md="4"
            sm="6"
          >
            <div class="pa-2">
              <v-card class="mx-auto" max-width="344">
                <v-img :src="project.thumbnail" height="200px"></v-img>

                <v-card-title>
                  {{ project.name }}
                  <a
                    v-if="project.liveView"
                    :href="project.liveView"
                    target="_blank"
                  >
                    <v-badge
                      :link="project.liveView"
                      content="Live view"
                      inline
                      overlap
                      color="#2e8b57"
                    ></v-badge>
                  </a>
                </v-card-title>
                <v-card-subtitle>
                  <v-icon small class="mt-n1">mdi-calendar</v-icon>
                  {{ project.date }}
                </v-card-subtitle>

                <v-card-subtitle class="mt-n6">
                  {{ project.description }}
                </v-card-subtitle>
                <span class="pl-4">
                  <v-chip
                    class="mr-1"
                    v-for="chip in project.lang"
                    :key="chip"
                    small
                  >
                    {{ chip.name }}
                  </v-chip>
                </span>

                <v-card-actions>
                  <a
                    :href="project.githubRepo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="pl-2"
                  >
                    <v-btn x-small fab depressed>
                      <v-icon>mdi-github</v-icon>
                    </v-btn></a
                  >
                </v-card-actions>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Metal Fighters",
          lang: [{ name: "JavaScript" }, { name: "HTML5" }],
          description:
            "Project 6 - Openclassrooms. is a turn based game written in Javascript in which 2 players play each turn to compete.",
          date: "2020",
          thumbnail:
            "https://fotiemconstant.github.io/img/portfolio/metal-fighters.PNG",
          liveView:
            "https://fotiemconstant.github.io/Metal-Fighters/",
          githubRepo: "https://github.com/FotieMConstant/Metal-Fighters",
        },
        {
          id: 2,
          name: "Restaurant-review",
          lang: [
            { name: "JavaScript" },
            { name: "React" },
            { name: "Material UI" },
          ],
          description:
            "A restaurant review website. Get reviews of restaurants around your location. See ratings from users for a particular restaurant.",
          date: "2020",
          thumbnail:
            "https://fotiemconstant.github.io/img/portfolio/restaurant.PNG",
          liveView: null,
          githubRepo: "https://github.com/FotieMConstant/Restaurant-review",
        },
        {
          id: 3,
          name: "Quote Generator",
          lang: [{ name: "JavaScript" }, { name: "HTML5" }, { name: "jQuery" }],
          description:
            "Generate a randome Quote with just a click with Quote Generator, you can generate random Inspirational and Hard work quotes.",
          date: "2020",
          thumbnail:
            "https://fotiemconstant.github.io/img/portfolio/quote-generator.PNG",
          liveView: "https://fotiemconstant.github.io/Project-5/",
          githubRepo: "https://github.com/FotieMConstant/Project-5",
        },
        {
          id: 4,
          name: "Jobber",
          lang: [{ name: "Vue" }, { name: "Vuetify" }],
          description:
            "Jobber is an online Job portal, designed and built for Cameroonians, our simple goal is to ease the hiring and finding of jobs in Cameroon.",
          date: "2020",
          thumbnail:
            "https://fotiemconstant.github.io/img/portfolio/jobber.PNG",
          liveView: "https://jobber-homepage.herokuapp.com/",
          githubRepo: "https://github.com/FotieMConstant/Jobber",
        },
        {
          id: 5,
          name: "LANTube",
          lang: [{ name: "PHP " }, { name: "Bootstrap " }],
          description:
            "An open source Youtube-like web app for your home network. Where you can do live streaming on your LAN, share files and much more.",
          date: "18 Sep. 2018 - Present",
          thumbnail:
            "https://fotiemconstant.github.io/img/portfolio/LANTube.jpg",
          liveView: null,
          githubRepo: "https://github.com/FotieMConstant/LAN-Tube",
        },
        {
          id: 6,
          name: "Google Clone",
          lang: [
            { name: "JavaScript" },
            { name: "React" },
            { name: "Material UI" },
          ],
          description:
            "A google-clone web app built with react. The search uses Google's Custom Search JSON API to fetch for data on the web.",
          date: "19 Oct. 2020 - 27 Oct. 2020",
          thumbnail:
            "https://fotiemconstant.github.io/img/portfolio/google-clone.PNG",
          liveView: "https://clone-aa97b.web.app/",
          githubRepo: "https://github.com/FotieMConstant/google-clone",
        },
      ],
    };
  },
};
</script>