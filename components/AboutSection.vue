<template>
  <div class="mt-12 md:mt-20">
    <div
      class="grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md mx-auto px-4"
    >
      <div
        class="col-span-12 md:col-span-auto md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-1 bg-red-500"
      >
        <a class="" href="#" title="Image Link">
          <picture
            class="relative block w-full h-0 pb bg-gray-300 overflow-hidden shadow-lg"
            style="padding-top: 75%;"
          >
            <img
              class="absolute inset-0 w-full h-full object-cover"
              src="https://picsum.photos/800/600"
              alt="A random image from Unsplash"
            >
          </picture>
        </a>
      </div>
      <div
        class="col-span-12 md:col-span-auto md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative px-4 md:px-0"
      >
        <div class="p-4 md:p-8 bg-white shadow-lg">
          <p class="mb-2 text-lg leading-none font-medium">
            <a class="" href="#" title="Heading Link">
              About me
            </a>
          </p>
          <p class="text-xs text-gray-500">
            Open-source enthusiast and Front-End Developer
          </p>
          <p class="mb-3 text-sm text-gray-700 mt-1">
            African-based software Developer who specializes in building (and
            occasionally Designing) exceptional digital experience.
          </p>
          <p class="mb-3 text-md leading-none font-medium">
            <a class="" href="#" title="Heading Link">
              Why am I doing this?
            </a>
          </p>
          <p class="text-sm text-gray-700 mt-1">
            Because I love beautiful things. The self reward of finishing a
            project. The ability to see the webapp from anywhere in the world on
            any device. The internet is so powerful and I love the reward from
            creating something that has the potential to be viewed by so many
            people. I just love building beautiful and interactive interfaces.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
