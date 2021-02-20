<template>
  <div id="contact" class="pa-12 mx-auto mt-n8 middle" max-width="1250">
    <span align="center">
      <h1 class="mb-5">Get in Touch</h1>
      <p>
        Get in touch. Send a general message or details of a project you'd like
        me to be a part of and I'll get back to you as soon as possible.
      </p>
      <p>Follow me on Social networks</p>
    </span>
    <h2>Get In Touch</h2>
    <a
      href="https://www.linkedin.com/in/fotie-m-constant/"
      target="_blank"
      class="btn twitter"
    >
      <v-icon>mdi-linkedin</v-icon>
    </a>
    <a
      href="https://github.com/FotieMConstant"
      class="btn github"
      target="_blank"
    >
      <v-icon>mdi-github</v-icon>
    </a>
    <a
      href="https://www.facebook.com/fotie.constant"
      class="btn facebook"
      target="_blank"
    >
      <v-icon>mdi-facebook</v-icon>
    </a>
    <a
      href="https://twitter.com/fotie_codes"
      target="_blank"
      class="btn twitter"
    >
      <v-icon>mdi-twitter</v-icon>
    </a>
    <a
      href="https://www.instagram.com/fotie_codes/"
      target="_blank"
      class="btn instagram"
    >
      <v-icon>mdi-instagram</v-icon>
    </a>
    <a
      href="https://www.youtube.com/channel/UCsNwDXvSKNKOd0JofxR3POw"
      target="_blank"
      class="btn youtube"
    >
      <v-icon>mdi-youtube</v-icon>
    </a>
  </div>
</template>
<style scoped>
.middle {
  width: 100%;
  text-align: center;
}

.btn {
  display: inline-block;
  width: 60px;
  height: 60px;
  background-color: #f1f1f1;
  margin: 10px;
  border-radius: 50%;
  box-shadow: 0 5px 15px -5px #00000070;
  color: #3498db;
  overflow: hidden;
  position: relative;
}

.btn i {
  line-height: 57px;
  font-size: 30px;
  transition: 0.2 linear;
}
.btn:hover i {
  transform: scale(1.3);
  color: #f1f1f1;
}
.btn::before {
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  background-color: #3498db;
  transform: rotate(45deg);
  left: -110%;
  top: 90%;
}
.btn:hover::before {
  animation: aaa 0.7s 1;
  top: -10%;
  left: -10%;
}
.youtube:hover::before {
  background: red;
}
.facebook:hover::before {
  background: #3b5999;
}
.instagram:hover::before {
  background: #e4405f;
}
.google:hover::before {
  background: #dd4b39;
}
.github:hover::before {
  background: #505050;
}
@keyframes aaa {
  0% {
    left: -110%;
    top: 90%;
  }
  50% {
    left: 10%;
    top: -30%;
  }
  100% {
    top: -10%;
    left: -10%;
  }
}
</style>