<template>
  <div class="pa-12 mx-auto mt-n8" max-width="1250">
    <span align="center">
      <h1 class="mb-5">WHAT PEOPLE SAY ABOUT ME</h1>
      <p>Don't take my word for it when you can take theirs...</p>
    </span>
    <div>
      <v-row no-gutters>
        <v-col v-for="testimonial in testimonials" :key="testimonial.id" cols="12" md="4" sm="6">
          <div class="pa-2">
            <v-card elevation="0" class="mx-auto">
              <center class="testimonial">
                <img :src="testimonial.displayPhotoLink" alt="Testimonial - Fotie" />
                <br />
                <a :href="testimonial.linkedIn" target="_blank">
                  <v-btn text small fab depressed>
                    <v-icon color="primary">mdi-linkedin</v-icon>
                  </v-btn>
                </a>
                <div class="name mt-n1">{{ testimonial.name }}</div>
                <v-card-subtitle class="ml-n4 mt-n9">
                  {{
                  testimonial.title
                  }}
                </v-card-subtitle>
                <p>{{ testimonial.testimonial }}</p>
              </center>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: "Lesley Skousen",
          displayPhotoLink:
            "https://raw.githubusercontent.com/FotieMConstant/fotiemconstant.github.io/vue-portfolio/img/testimonials/lesley.jpeg",
          title: "Student Success Manager at OpenClassrooms",
          linkedIn: "https://www.linkedin.com/in/lesleyskousen/",
          testimonial:
            "I have had the pleasure of working with Fotie for over a year. He began as a student and quickly emerged as one of the leaders of his cohort. He then became a founding member of our Student Ambassador Community -- developers helping developers with projects, peer programming, career goals, and coding...",
        },
        {
          id: 2,
          name: "Marcos Cabrini Riani ",
          displayPhotoLink:
            "https://raw.githubusercontent.com/FotieMConstant/fotiemconstant.github.io/vue-portfolio/img/testimonials/marcos.jpeg",
          title: "Web Support Analyst at Q4 Inc",
          linkedIn: "https://www.linkedin.com/in/marcosriani/",
          testimonial:
            "Fotie is an incredible entrepreneurial Front-End Developer, he is the guy with ideas and aspirations that will impress anyone interested in coding or startups. I really like the way he conducts his projects, focusing on making things simple and understandable for every collaborator, and following best practice...",
        },
        {
          id: 3,
          name: "Clemence Fabien",
          displayPhotoLink:
            "https://raw.githubusercontent.com/FotieMConstant/fotiemconstant.github.io/vue-portfolio/img/testimonials/clem.jpeg",
          title: "Career Coach | Coach Clem - Thrive professionally ",
          linkedIn: "https://www.linkedin.com/in/clemencefabien/",
          testimonial:
            "Fotie helped a lot with my partner's business website regarding his SEO and social media strategy. Amazing help provided with such reactivity and professionalism. You can really count on Fotie and that's priceless...",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.testimonial {
  padding: 20px;
}

.testimonial img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.name {
  font-size: 20px;
  text-transform: initial;
  margin: 20px 0;
}
</style>