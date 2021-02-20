<template>
  <div class="home">
    <HeaderSection />
    <AboutSection />
    <SkillsSection />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from "@/components/HeaderSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";

export default {
  name: "Home",
  components: {
    HeaderSection,
    AboutSection,
    SkillsSection,
  },
};
</script>
