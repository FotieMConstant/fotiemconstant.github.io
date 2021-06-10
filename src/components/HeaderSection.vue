<template>
  <div id="home">
    <v-img
      class="mt-8 bg"
      height="350"
      src="https://wallpaperaccess.com/full/1947484.jpg"
      gradient="to top left, rgba(0,0,0,0), rgba(0,0,0,20)"
    >
      <!-- https://wallpaperaccess.com/full/1947484.jpg -->
      <v-row class="mt-10" align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-avatar size="120" class="mb-n4">
            <img
              class="__avatar"
              src="https://avatars.githubusercontent.com/u/42372656?s=460&v=4"
              alt="Fotie profile"
            />
          </v-avatar>
          <span class="white--text">
            <h2 class="display-1 font-weight-normal mb-0">
              <span id="text-1">Howdy,</span>
              <span id="text-2">
                <span id="text-2-span">I'm Fotie</span>
              </span>
            </h2>
            <h4 class="subheading font-weight-thin">
              <span class="textAnimated"></span>
            </h4>
          </span>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted: function () {
    // function for the header title
    var text1 = ["Code", "Debugging", "JavaScript"];
    var text2 = ["Is Poetry", "is slick", "Is fun"];
    var count = 2;
    setInterval(() => {
      count--;
      document.getElementById("text-1").innerHTML = text1[count];
      document.getElementById("text-2-span").innerHTML = text2[count];
      if (count == 0) {
        count = 3;
      }
    }, 7000);

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

/* css for the header title section */

#text-1,
#text-2 {
  margin-top: 30px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-size: 30px;
  font-weight: 500;
  line-height: 2;
  text-transform: initial;
  color: #f1f1f1;
  padding: 0 5px;
}

#text-1 {
  animation: showup 7s infinite;
}

#text-2 {
  width: 0px;
  animation: reveal 7s infinite;
}

#text-2-span {
  margin-left: -200px;
  animation: slidein 7s infinite;
}

@keyframes showup {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes slidein {
  0% {
    margin-left: -800px;
  }
  20% {
    margin-left: -800px;
  }
  35% {
    margin-left: 0px;
  }
  100% {
    margin-left: 0px;
  }
}

@keyframes reveal {
  0% {
    opacity: 0;
    width: 0px;
  }
  20% {
    opacity: 1;
    width: 0px;
  }
  30% {
    width: auto;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    width: auto;
  }
}

p {
  margin-top: 100px;
  font-size: 10px;
  color: #777;
}

p a {
  color: #c1c1c1;
  text-decoration: none;
}
</style>