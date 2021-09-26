<template>
  <!-- hero -->
  <div class="hero bg-gray-100 py-16">
    <!-- container -->
    <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
      <!-- hero wrapper -->
      <div
        class="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
      >
        <!-- hero text -->
        <div class="text-center md:text-left hero-text col-span-6">
          <h1
            id="text-1"
            class="font-bold text-2xl md:text-4xl max-w-xl text-gray-900 leading-tight"
          >
            Howdy,
          </h1>
          <h1
            id="text-2"
            class="font-bold text-2xl md:text-4xl max-w-xl text-gray-900 leading-tight"
          >
            <span id="text-2-span">I'm Fotie</span>
          </h1>
          <hr class="w-12 h-1 bg-orange-500 rounded-full mt-0">
          <span class="text-black">
            <h4 class="subheading font-weight-thin">
              <span class="textAnimated text-black" />
            </h4>
          </span>
        </div>

        <!-- hero image -->
        <div class="hero-image col-span-6">
          <img
            class=" md:mt-0 rounded-full w-40 shadow-sm ml-auto mr-auto"
            src="https://avatars.githubusercontent.com/u/42372656?s=460&v=4"
            alt="fotiecodes profile"
          >
        </div>
      </div>
    </div>
  </div>
  <!-- end hero -->
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    // function for the header title
    const text1 = ['I design', 'I love', 'I love']
    const text2 = ['& Build', 'Coding', 'Opensource!']
    let count = 2
    setInterval(() => {
      count--
      document.getElementById('text-1').innerHTML = text1[count]
      document.getElementById('text-2-span').innerHTML = text2[count]
      if (count === 0) {
        count = 3
      }
    }, 7000)
    //   Show typing style txt
    const textAnimated = document.querySelector('.textAnimated')
    let text = ''
    const textArr = [
      'Front-End Developer.',
      'Software Developer.',
      'UI/UX Designer.',
      'JavaScript Developer.',
      'Vue.js Developer.',
      'Music Lover'
    ]
    let currentTextIndex = -1
    let letterIndex = -1
    function addLetter () {
      // increment letterIndex to get to the next letter
      letterIndex++
      //
      if (letterIndex < text.length) {
        // ADD A DELAY
        setTimeout(function () {
          // add letter
          textAnimated.textContent += text[letterIndex]
          // call itself
          addLetter()
        }, 100)
      } else {
        // call removeLetter after a delay
        setTimeout(function () {
          removeLetter()
        }, 2000)
      }
    }
    function removeLetter () {
      // decrement letterIndex to get to the next letter
      letterIndex--
      //
      if (letterIndex >= 0) {
        // ADD A DELAY
        setTimeout(function () {
          // remove letter
          textAnimated.textContent = text.slice(0, letterIndex)
          // call itself
          removeLetter()
        }, 100)
      } else {
        // no more letters to remove
        // doesn't call addLetter anymore
        // call updateText instead
        updateText()
      }
    }
    function updateText () {
      // increment currentTextIndex to switch to the next sentence
      currentTextIndex++
      // go to the first string index when currentTextIndex has reached the last one
      if (currentTextIndex === textArr.length) {
        currentTextIndex = 0
      }
      // update text
      text = textArr[currentTextIndex]
      // call addLetter and get the animation going
      addLetter()
    }
    // the initial call to start everything
    updateText()
  }
}
</script>

<style scoped>
/* custom non-Tailwind CSS */
/* .__imghero {
  background: url('https://wallpaperaccess.com/full/1947484.jpg') !important;
} */
.textAnimated::after {
  content: '|';
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
  line-height: 2;
  text-transform: initial;
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
