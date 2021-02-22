<template>
  <div class="home">
    <HeaderSection />
    <AboutSection />
    <SkillsSection />
    <TimelineSection />
    <PortfolioSection />
    <TestimonialsSection />
    <ContactSection />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from "@/components/HeaderSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import TimelineSection from "@/components/TimelineSection.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import TestimonialsSection from "@/components/TestimonialsSection.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "Home",
  components: {
    HeaderSection,
    AboutSection,
    SkillsSection,
    TimelineSection,
    PortfolioSection,
    TestimonialsSection,
    ContactSection,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Fotie - Portfolio";
      },
    },
  },
};
</script>
