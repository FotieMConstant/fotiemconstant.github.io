<template>
  <div>
    <Appbar />
    <Modal />
    <div class="pt-12 md:pt-0">
      <HeroSection />
    </div>
    <div class="container">
      <AboutSection />
      <div>
        <SkillSection />
      </div>
      <div>
        <WhatProplesayAboutMe />
      </div>
      <div>
        <TimelineComponent />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
    <div>
      <FooterSection />
    </div>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.js"></script>

<script>
export default {}
</script>
<style>
.seccion {
  text-transform: uppercase;
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  transform-origin: 0 0;
  top: 60%;
}
</style>
