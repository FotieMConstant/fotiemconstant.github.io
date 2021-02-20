<template>
  <div class="pa-12 mx-auto mt-n8" max-width="1250">
    <span align="center">
      <h1 class="mb-5">My story</h1>
      <p>
        Here is a little of my story.I'm a passionate of technology and fell in
        love with the beauty of
        <code>code</code>. Below is a brief story of mine.
      </p>
    </span>
    <div class="timeline">
      <ul>
        <li v-for="item in story" :key="item.id">
          <div class="content">
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.body }}
            </p>
          </div>
          <div class="time">
            <h4>{{ item.date }}</h4>
          </div>
        </li>

        <div style="clear: both"></div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    story: [
      {
        id: 1,
        title: "OpenClassrooms - Front-End Development Career path",
        body:
          "This was a 1-year long Developer Path for FrontEnd Web Development, affiliated with the Board of Paris, France. It consists of hands-on projects, certificates, and mentor meetings to ensure that the right patterns and techniques are implemented to develop required projects. We were thought how to create website interfaces, styles, and animations like the ones we know and use every day.",
        date: "2019-2020",
      },
      {
        id: 2,
        title: "African Institute Of Computer Science",
        body:
          "This marked my first step into engineering, did my bachelor's degree in Computer Science here.",
        date: "2017 - 2020",
      },
      {
        id: 3,
        title: "Teaching my self how to code",
        body:
          "Given my passion in coding and software developement, I brought things together to teach myself to code! ",
        date: "2015 - 2017",
      },
      {
        id: 4,
        title: "Started code",
        body:
          "This year marked the beginning of everything, did my first steps into coding. started here with Pascal and HTML, back then i was soo much excited about building something on my own. It was soo exciting.",
        date: "2012",
      },
    ],
  }),
};
</script>
<style scoped>
h1 {
  text-align: center;
}
.timeline {
  position: relative;
  margin: 50px auto;
  padding: 40px 0;
  width: 1000px;
  box-sizing: border-box;
}
.timeline:before {
  content: "";
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  background: #c5c5c5;
}
.timeline ul {
  padding: 0;
  margin: 0;
}
.timeline ul li {
  list-style: none;
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
}
.timeline ul li:nth-child(odd) {
  float: left;
  text-align: right;
  clear: both;
}
.timeline ul li:nth-child(even) {
  float: right;
  text-align: left;
  clear: both;
}
.content {
  padding-bottom: 20px;
}
.timeline ul li:nth-child(odd):before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  top: 24px;
  right: -6px;
  background: rgba(233, 33, 99, 1);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(233, 33, 99, 0.2);
}
.timeline ul li:nth-child(even):before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  top: 24px;
  left: -4px;
  background: rgba(233, 33, 99, 1);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(233, 33, 99, 0.2);
}
.timeline ul li h3 {
  padding: 0;
  margin: 0;
  color: rgba(233, 33, 99, 1);
  font-weight: 600;
}
.timeline ul li p {
  margin: 10px 0 0;
  padding: 0;
}
.timeline ul li .time h4 {
  margin: 0;
  padding: 0;
  font-size: 14px;
}
.timeline ul li:nth-child(odd) .time {
  position: absolute;
  top: 12px;
  right: -165px;
  margin: 0;
  padding: 8px 16px;
  background: rgba(233, 33, 99, 1);
  color: #fff;
  border-radius: 18px;
  box-shadow: 0 0 0 3px rgba(233, 33, 99, 0.3);
}
.timeline ul li:nth-child(even) .time {
  position: absolute;
  top: 12px;
  left: -165px;
  margin: 0;
  padding: 8px 16px;
  background: rgba(233, 33, 99, 1);
  color: #fff;
  border-radius: 18px;
  box-shadow: 0 0 0 3px rgba(233, 33, 99, 0.3);
}
@media (max-width: 1000px) {
  .timeline {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .timeline {
    width: 100%;
    padding-bottom: 0;
  }
  .timeline:before {
    left: 20px;
    height: 100%;
  }
  .timeline ul li:nth-child(odd),
  .timeline ul li:nth-child(even) {
    width: 100%;
    text-align: left;
    padding-left: 50px;
    padding-bottom: 50px;
  }
  .timeline ul li:nth-child(odd):before,
  .timeline ul li:nth-child(even):before {
    top: -18px;
    left: 16px;
  }
  .timeline ul li:nth-child(odd) .time,
  .timeline ul li:nth-child(even) .time {
    top: -30px;
    left: 50px;
    right: inherit;
  }
}
</style>