<template>
  <div class="planet-animation">
    <div class="star sun"></div>
    <div class="planet mercury"></div>
    <div class="planet venus"></div>
    <div class="planet earth"></div>
    <div class="planet mars"></div>
    <div class="planet jupiter"></div>
    <div class="planet saturn"></div>
    <div class="planet uranus"></div>
    <div class="planet neptune"></div>

  </div>
</template>

<script>
export default {
  name: 'planet-animation',
  props: ['planets']
}
</script>

<style>
.planet,
.star {
  margin-top: 180px;
  position: absolute;
  width: var(--size);
  height: var(--size);
  top: calc(50% - var(--size)/2);
  left: calc(50% - var(--size)/2);
  border-radius: 50%;
}

.sun {
  --size: 100px;
  background: linear-gradient(45deg, goldenrod, yellow);
  animation: sun 1s infinite linear;
}

.mercury {
  --size: 20px;
  background: gray;
  animation: mercury 1.5s infinite linear;
}
.venus {
  --size: 24px;
  background: orangered;
  animation: venus 2s infinite linear;
}
.earth {
  --size: 40px;
  background: cornflowerblue;
  animation: earth 2.5s infinite linear;
}
.mars {
  --size: 30px;
  background:  red;
  animation: mars 3s infinite linear;
}
.jupiter {
  --size: 70px;
  background: darksalmon;
  animation: jupiter 3.5s infinite linear;
}
.saturn {
  --size: 40px;
  background: linear-gradient(45deg, goldenrod, yellow);
  animation: saturn 4s infinite linear;
}
.saturn::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 140%;
  height: 10px;
  border: 2px solid beige;
  border-top: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(30deg);
}
.uranus {
  --size: 50px;
  background: skyblue;
  animation: uranus 4.5s infinite linear;
}
.neptune {
  --size: 30px;
  background: royalblue;
  animation: neptune 5s infinite linear;
}


@keyframes sun {
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
}

@keyframes mercury {
  0%  { -webkit-transform: rotate(0deg) translateX(5px) translateY(80px) rotate(0deg) scale(1.2); }
  25%  { -webkit-transform: rotate(90deg) translateX(5px) translateY(80px) rotate(-90deg) scale(.85); }
  50%  { -webkit-transform: rotate(180deg) translateX(5px) translateY(80px) rotate(-180deg) scale(.60); }
  75%  { -webkit-transform: rotate(270deg) translateX(5px) translateY(80px) rotate(-270deg) scale(.85); }
  100%  { -webkit-transform: rotate(360deg) translateX(5px) translateY(80px) rotate(-360deg) scale(1.2); }
}
@keyframes venus {
  0%  { -webkit-transform: rotate(0deg) translateX(5px) translateY(120px) rotate(0deg) scale(1.2); }
  25%  { -webkit-transform: rotate(90deg) translateX(5px) translateY(120px) rotate(-90deg) scale(.85); }
  50%  { -webkit-transform: rotate(180deg) translateX(5px) translateY(120px) rotate(-180deg) scale(.60); }
  75%  { -webkit-transform: rotate(270deg) translateX(5px) translateY(120px) rotate(-270deg) scale(.85); }
  100%  { -webkit-transform: rotate(360deg) translateX(5px) translateY(120px) rotate(-360deg) scale(1.2); }
}
@keyframes earth {
  0%  { -webkit-transform: rotate(0deg) translateX(5px) translateY(160px) rotate(0deg) scale(1.2); }
  25%  { -webkit-transform: rotate(90deg) translateX(5px) translateY(160px) rotate(-90deg) scale(.85); }
  50%  { -webkit-transform: rotate(180deg) translateX(5px) translateY(160px) rotate(-180deg) scale(.60); }
  75%  { -webkit-transform: rotate(270deg) translateX(5px) translateY(160px) rotate(-270deg) scale(.85); }
  100%  { -webkit-transform: rotate(360deg) translateX(5px) translateY(160px) rotate(-360deg) scale(1.2); }
}
@keyframes mars {
  0%  { -webkit-transform: rotate(0deg) translateX(5px) translateY(200px) rotate(0deg) scale(1.2); }
  25%  { -webkit-transform: rotate(90deg) translateX(5px) translateY(200px) rotate(-90deg) scale(.85); }
  50%  { -webkit-transform: rotate(180deg) translateX(5px) translateY(200px) rotate(-180deg) scale(.60); }
  75%  { -webkit-transform: rotate(270deg) translateX(5px) translateY(200px) rotate(-270deg) scale(.85); }
  100%  { -webkit-transform: rotate(360deg) translateX(5px) translateY(200px) rotate(-360deg) scale(1.2); }
}
@keyframes jupiter {
  0%  { -webkit-transform: rotate(0deg) translateX(5px) translateY(260px) rotate(0deg) scale(1.2); }
  25%  { -webkit-transform: rotate(90deg) translateX(5px) translateY(260px) rotate(-90deg) scale(.85); }
  50%  { -webkit-transform: rotate(180deg) translateX(5px) translateY(260px) rotate(-180deg) scale(.60); }
  75%  { -webkit-transform: rotate(270deg) translateX(5px) translateY(260px) rotate(-270deg) scale(.85); }
  100%  { -webkit-transform: rotate(360deg) translateX(5px) translateY(260px) rotate(-360deg) scale(1.2); }
}
@keyframes saturn {
  0%  { -webkit-transform: rotate(0deg) translateX(5px) translateY(320px) rotate(0deg) scale(1.2); }
  25%  { -webkit-transform: rotate(90deg) translateX(5px) translateY(320px) rotate(-90deg) scale(.85); }
  50%  { -webkit-transform: rotate(180deg) translateX(5px) translateY(320px) rotate(-180deg) scale(.60); }
  75%  { -webkit-transform: rotate(270deg) translateX(5px) translateY(320px) rotate(-270deg) scale(.85); }
  100%  { -webkit-transform: rotate(360deg) translateX(5px) translateY(320px) rotate(-360deg) scale(1.2); }
}
@keyframes uranus {
  0%  { -webkit-transform: rotate(0deg) translateX(5px) translateY(360px) rotate(0deg) scale(1.2); }
  25%  { -webkit-transform: rotate(90deg) translateX(5px) translateY(360px) rotate(-90deg) scale(.85); }
  50%  { -webkit-transform: rotate(180deg) translateX(5px) translateY(360px) rotate(-180deg) scale(.60); }
  75%  { -webkit-transform: rotate(270deg) translateX(5px) translateY(360px) rotate(-270deg) scale(.85); }
  100%  { -webkit-transform: rotate(360deg) translateX(5px) translateY(360px) rotate(-360deg) scale(1.2); }
}
@keyframes neptune {
  0%  { -webkit-transform: rotate(0deg) translateX(5px) translateY(400px) rotate(0deg) scale(1.2); }
  25%  { -webkit-transform: rotate(90deg) translateX(5px) translateY(400px) rotate(-90deg) scale(.85); }
  50%  { -webkit-transform: rotate(180deg) translateX(5px) translateY(400px) rotate(-180deg) scale(.60); }
  75%  { -webkit-transform: rotate(270deg) translateX(5px) translateY(400px) rotate(-270deg) scale(.85); }
  100%  { -webkit-transform: rotate(360deg) translateX(5px) translateY(400px) rotate(-360deg) scale(1.2); }
}


</style>