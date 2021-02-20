<template>
  <div>
    <v-img
      class="mt-8 bg"
      height="350"
      src="https://www.itl.cat/pngfile/big/327-3274460_web-development.jpg"
    >
      <!-- https://wallpaperaccess.com/full/1947484.jpg -->
      <v-row class="mt-10" align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-avatar size="120" class="mb-5">
            <img
              class="__avatar"
              src="../assets/profile.png"
              alt="Fotie profile"
          /></v-avatar>
          <span class="white--text">
            <h1 class="display-1 font-weight-normal mb-4">Howdy, I am Fotie</h1>
            <h4 class="subheading font-weight-thin">
              <span class="textAnimated"></span>
            </h4>
          </span>
        </v-col> </v-row
    ></v-img>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted: function () {
    //   Show typing style txt
    let textAnimated = document.querySelector(".textAnimated");

    let text = "";

    let textArr = [
      "Front-End Developer.",
      "Software Developer.",
      "UI/UX Designer.",
      "JavaScript Developer.",
      "Vue.js Developer.",
      "Music Lover",
    ];

    let currentTextIndex = -1;

    let letterIndex = -1;

    function addLetter() {
      // increment letterIndex to get to the next letter
      letterIndex++;
      //
      if (letterIndex < text.length) {
        //ADD A DELAY
        setTimeout(function () {
          // add letter
          textAnimated.textContent += text[letterIndex];
          // call itself
          addLetter();
        }, 100);
      } else {
        // call removeLetter after a delay
        setTimeout(function () {
          removeLetter();
        }, 2000);
      }
    }

    function removeLetter() {
      // decrement letterIndex to get to the next letter
      letterIndex--;
      //
      if (letterIndex >= 0) {
        //ADD A DELAY
        setTimeout(function () {
          // remove letter
          textAnimated.textContent = text.slice(0, letterIndex);
          // call itself
          removeLetter();
        }, 100);
      } else {
        // no more letters to remove
        // doesn't call addLetter anymore
        // call updateText instead
        updateText();
      }
    }

    function updateText() {
      //increment currentTextIndex to switch to the next sentence
      currentTextIndex++;

      //go to the first string index when currentTextIndex has reached the last one
      if (currentTextIndex === textArr.length) {
        currentTextIndex = 0;
      }
      //update text
      text = textArr[currentTextIndex];
      //call addLetter and get the animation going
      addLetter();
    }

    //the initial call to start everything
    updateText();
  },
};
</script>

<style scoped>
.textAnimated::after {
  content: "|";
  margin-left: 0.2em;
  animation: blinkCursor 1.2s linear infinite;
}

@keyframes blinkCursor {
  0% {
    opacity: 1;
  }
  49% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>