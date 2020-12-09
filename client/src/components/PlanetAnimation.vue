<template>
  <div class="planet-animation">
    <img class="planet neptune" v-bind:src="require(`../assets/images/Neptune.png`)"/>
    <img class="planet uranus" v-bind:src="require(`../assets/images/Uranus.png`)"/>
    <img class="planet saturn" v-bind:src="require(`@/assets/images/Saturn_Square.png`)"/>
    <img class="planet jupiter" v-bind:src="require(`../assets/images/Jupiter.png`)"/>
    <img class="planet mars" v-bind:src="require(`../assets/images/Uranus.png`)"/>
    <img class="planet venus" v-bind:src="require(`../assets/images/Venus.png`)"/>
    <img class="planet earth" v-bind:src="require(`../assets/images/Earth.png`)"/>
    <img class="planet mercury" v-bind:src="require(`../assets/images/Mercury.png`)"/>
    <img class="star sun" v-bind:src="require(`../assets/images/Sun.png`)"/>

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
  margin-top: -50px;
  position: fixed;
  width: var(--size);
  height: var(--size);
  top: calc(50% - var(--size)/2);
  left: calc(50% - var(--size)/2);
  border-radius: 50%;
}


.sun {
  --size: 100px;
  background: linear-gradient(45deg, goldenrod, yellow);
  animation: sun 150s infinite ;
}

.mercury {
  --size: 20px;
  background: gray;
  animation: mercury 3s infinite linear;
  max-width: 100%;
  border-radius: 50%;
}
.venus {
  --size: 24px;
  animation: venus 4s infinite linear;
  max-width: 100%;
  border-radius: 50%;
}
.earth {
  --size: 40px;
  background: cornflowerblue;
  animation: earth 6s infinite linear;
  max-width: 20%;
  border-radius: 50%;
}
.mars {
  --size: 30px;
  background:  red;
  animation: mars 12s infinite linear;
}
.jupiter {
  --size: 70px;
  animation: jupiter 40.5s infinite linear;
}
.saturn {
  --size: 90px;
  image-rendering: high-quality;
  animation: saturn 65s infinite linear;
  max-width: 20%;
}
.uranus {
  --size: 50px;
  background: skyblue;
  animation: uranus 20s infinite linear;
  transform-style: preserve-3d;
}
.neptune {
  --size: 30px;
  background: royalblue;
  animation: neptune 240s infinite linear;
  transform-style: preserve-3d;

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
  0%  { -webkit-transform: rotate(0deg) translateX(12px) translateY(90px) rotate(0deg) scale(1.2); }
  10%  { -webkit-transform: rotate(90deg) translateX(5px) translateY(60px) rotate(-90deg) scale(.70); }
  20%  { -webkit-transform: rotate(130deg) translateX(-5px) translateY(30px) rotate(-90deg) scale(.50); }
  30%  { -webkit-transform: rotate(165deg) translateX(-10px) translateY(22px) rotate(-90deg) scale(.40); }
  40%  { -webkit-transform: rotate(175deg) translateX(-15px) translateY(20px) rotate(-90deg) scale(.30); }
  50%  { -webkit-transform: rotate(180deg) translateX(-20px) translateY(18px) rotate(-180deg) scale(.01); }
  60%  { -webkit-transform: rotate(185deg) translateX(-27px) translateY(18px) rotate(-185deg) scale(.10); }
  70%  { -webkit-transform: rotate(195deg) translateX(-38px) translateY(20px) rotate(-195deg) scale(.30); }
  80%  { -webkit-transform: rotate(210deg) translateX(-50px) translateY(25px) rotate(-210deg) scale(.50); }
  90%  { -webkit-transform: rotate(270deg) translateX(-38px) translateY(60px) rotate(-270deg) scale(.70); }
  100%  { -webkit-transform: rotate(360deg) translateX(12px) translateY(90px) rotate(-360deg) scale(1.2); }
}
@keyframes venus {
  0%  { -webkit-transform: rotate(0deg) translateX(25px) translateY(130px) rotate(0deg) scale(1.2); }
  10%  { -webkit-transform: rotate(90deg) translateX(10px) translateY(120px) rotate(-90deg) scale(.70); }
  20%  { -webkit-transform: rotate(130deg) translateX(-10px) translateY(60px) rotate(-90deg) scale(.50); }
  30%  { -webkit-transform: rotate(165deg) translateX(-20px) translateY(45px) rotate(-90deg) scale(.30); }
  40%  { -webkit-transform: rotate(175deg) translateX(-30px) translateY(40px) rotate(-90deg) scale(.10); }
  50%  { -webkit-transform: rotate(180deg) translateX(-40px) translateY(37px) rotate(-180deg) scale(.01); }
  60%  { -webkit-transform: rotate(185deg) translateX(-55px) translateY(37px) rotate(-185deg) scale(.10); }
  70%  { -webkit-transform: rotate(195deg) translateX(-75px) translateY(40px) rotate(-195deg) scale(0.30); }
  80%  { -webkit-transform: rotate(210deg) translateX(-100px) translateY(50px) rotate(-210deg) scale(.50); }
  90%  { -webkit-transform: rotate(270deg) translateX(-75px) translateY(120px) rotate(-270deg) scale(.70); }
  100%  { -webkit-transform: rotate(360deg) translateX(25px) translateY(130px) rotate(-360deg) scale(1.2); }
}
@keyframes earth { /* 2.25 */
  0%  { -webkit-transform: rotate(0deg) translateX(22px) translateY(160px) rotate(0deg) scale(1.2); }
  10%  { -webkit-transform: rotate(90deg) translateX(9px) translateY(106px) rotate(-90deg) scale(.70); }
  20%  { -webkit-transform: rotate(130deg) translateX(-9px) translateY(53px) rotate(-90deg) scale(.50); }
  30%  { -webkit-transform: rotate(165deg) translateX(-17px) translateY(40px) rotate(-90deg) scale(.30); }
  40%  { -webkit-transform: rotate(175deg) translateX(-26px) translateY(35px) rotate(-90deg) scale(.10); }
  50%  { -webkit-transform: rotate(180deg) translateX(-35px) translateY(33px) rotate(-180deg) scale(.01); }
  60%  { -webkit-transform: rotate(185deg) translateX(-48px) translateY(33px) rotate(-185deg) scale(.10); }
  70%  { -webkit-transform: rotate(195deg) translateX(-66px) translateY(35px) rotate(-195deg) scale(.30); }
  80%  { -webkit-transform: rotate(210deg) translateX(-88px) translateY(44px) rotate(-210deg) scale(.50); }
  90%  { -webkit-transform: rotate(270deg) translateX(-66px) translateY(106px) rotate(-270deg) scale(.70); }
  100%  { -webkit-transform: rotate(360deg) translateX(22px) translateY(160px) rotate(-360deg) scale(1.2); }
}
@keyframes mars { /* 1.75 */
  0%  { -webkit-transform: rotate(0deg) translateX(38px) translateY(205px) rotate(0deg) scale(1.2); }
  10%  { -webkit-transform: rotate(90deg) translateX(14px) translateY(137px) rotate(-90deg) scale(.70); }
  20%  { -webkit-transform: rotate(130deg) translateX(-14px) translateY(68px) rotate(-90deg) scale(.50); }
  30%  { -webkit-transform: rotate(165deg) translateX(-30px) translateY(51px) rotate(-90deg) scale(.30); }
  40%  { -webkit-transform: rotate(175deg) translateX(-46px) translateY(45px) rotate(-90deg) scale(.10); }
  50%  { -webkit-transform: rotate(180deg) translateX(-61px) translateY(43px) rotate(-180deg) scale(0.01); }
  60%  { -webkit-transform: rotate(185deg) translateX(-84px) translateY(43px) rotate(-185deg) scale(.10); }
  70%  { -webkit-transform: rotate(195deg) translateX(-115px) translateY(51px) rotate(-195deg) scale(.30); }
  80%  { -webkit-transform: rotate(210deg) translateX(-153px) translateY(68px) rotate(-210deg) scale(.50); }
  90%  { -webkit-transform: rotate(270deg) translateX(-115px) translateY(137px) rotate(-270deg) scale(.70); }
  100%  { -webkit-transform: rotate(360deg) translateX(38px) translateY(205px) rotate(-360deg) scale(1.2); }
}
@keyframes jupiter { /*1.3 */
  0%  { -webkit-transform: rotate(0deg) translateX(38px) translateY(360px) rotate(0deg) scale(1.2); }
  10%  { -webkit-transform: rotate(90deg) translateX(14px) translateY(240px) rotate(-90deg) scale(.70); }
  20%  { -webkit-transform: rotate(130deg) translateX(-14px) translateY(120px) rotate(-90deg) scale(.50); }
  30%  { -webkit-transform: rotate(165deg) translateX(-30px) translateY(90px) rotate(-90deg) scale(.30); }
  40%  { -webkit-transform: rotate(175deg) translateX(-46px) translateY(80px) rotate(-90deg) scale(.10); }
  50%  { -webkit-transform: rotate(180deg) translateX(-61px) translateY(75px) rotate(-180deg) scale(.1); }
  60%  { -webkit-transform: rotate(185deg) translateX(-84px) translateY(75px) rotate(-185deg) scale(.10); }
  70%  { -webkit-transform: rotate(195deg) translateX(-115px) translateY(80px) rotate(-195deg) scale(.30); }
  80%  { -webkit-transform: rotate(210deg) translateX(-153px) translateY(100px) rotate(-210deg) scale(.50); }
  90%  { -webkit-transform: rotate(270deg) translateX(-115px) translateY(240px) rotate(-270deg) scale(.70); }
  100%  { -webkit-transform: rotate(360deg) translateX(38px) translateY(360px) rotate(-360deg) scale(1.2); }
}
@keyframes saturn { /* 2 */
  0%  { -webkit-transform: rotate(0deg) translateX(50px) translateY(360px) rotate(0deg) scale(1.2); }
  10%  { -webkit-transform: rotate(90deg) translateX(20px) translateY(240px) rotate(-90deg) scale(.70); }
  20%  { -webkit-transform: rotate(130deg) translateX(-20px) translateY(120px) rotate(-90deg) scale(.50); }
  30%  { -webkit-transform: rotate(165deg) translateX(-40px) translateY(90px) rotate(-90deg) scale(.30); }
  40%  { -webkit-transform: rotate(175deg) translateX(-60px) translateY(80px) rotate(-90deg) scale(.10); }
  50%  { -webkit-transform: rotate(180deg) translateX(-80px) translateY(75px) rotate(-180deg) scale(.1); }
  60%  { -webkit-transform: rotate(185deg) translateX(-110px) translateY(75px) rotate(-185deg) scale(.10); }
  70%  { -webkit-transform: rotate(195deg) translateX(-150px) translateY(80px) rotate(-195deg) scale(.30); }
  80%  { -webkit-transform: rotate(210deg) translateX(-200px) translateY(100px) rotate(-210deg) scale(.50); }
  90%  { -webkit-transform: rotate(270deg) translateX(-150px) translateY(240px) rotate(-270deg) scale(.70); }
  100%  { -webkit-transform: rotate(360deg) translateX(50px) translateY(360px) rotate(-360deg) scale(1.2); }
}
@keyframes uranus { /* 2 */
  0%  { -webkit-transform: rotate(0deg) translateX(50px) translateY(360px) rotate(0deg) scale(1.2); }
  10%  { -webkit-transform: rotate(90deg) translateX(20px) translateY(240px) rotate(-90deg) scale(.70); }
  20%  { -webkit-transform: rotate(130deg) translateX(-20px) translateY(120px) rotate(-90deg) scale(.50); }
  30%  { -webkit-transform: rotate(165deg) translateX(-40px) translateY(90px) rotate(-90deg) scale(.30); }
  40%  { -webkit-transform: rotate(175deg) translateX(-60px) translateY(80px) rotate(-90deg) scale(.10); }
  50%  { -webkit-transform: rotate(180deg) translateX(-80px) translateY(75px) rotate(-180deg) scale(.1); }
  60%  { -webkit-transform: rotate(185deg) translateX(-110px) translateY(75px) rotate(-185deg) scale(.10); }
  70%  { -webkit-transform: rotate(195deg) translateX(-150px) translateY(80px) rotate(-195deg) scale(.30); }
  80%  { -webkit-transform: rotate(210deg) translateX(-200px) translateY(100px) rotate(-210deg) scale(.50); }
  90%  { -webkit-transform: rotate(270deg) translateX(-150px) translateY(240px) rotate(-270deg) scale(.70); }
  100%  { -webkit-transform: rotate(360deg) translateX(50px) translateY(360px) rotate(-360deg) scale(1.2); }
}
@keyframes neptune { /* 2.1*/
  0%  { -webkit-transform: rotate(0deg) translateX(55px) translateY(400px) rotate(0deg) scale(1.2); }
  10%  { -webkit-transform: rotate(90deg) translateX(22px) translateY(264px) rotate(-90deg) scale(.70); }
  20%  { -webkit-transform: rotate(130deg) translateX(-22px) translateY(131px) rotate(-90deg) scale(.50); }
  30%  { -webkit-transform: rotate(165deg) translateX(-44px) translateY(99px) rotate(-90deg) scale(.30); }
  40%  { -webkit-transform: rotate(175deg) translateX(-66px) translateY(88px) rotate(-90deg) scale(.10); }
  50%  { -webkit-transform: rotate(180deg) translateX(-88px) translateY(83px) rotate(-180deg) scale(.01); }
  60%  { -webkit-transform: rotate(185deg) translateX(-121px) translateY(83px) rotate(-185deg) scale(.10); }
  70%  { -webkit-transform: rotate(195deg) translateX(-165px) translateY(88px) rotate(-195deg) scale(.30); }
  80%  { -webkit-transform: rotate(210deg) translateX(-220px) translateY(111px) rotate(-210deg) scale(.50); }
  90%  { -webkit-transform: rotate(270deg) translateX(-165px) translateY(264px) rotate(-270deg) scale(.70); }
  100%  { -webkit-transform: rotate(360deg) translateX(55px) translateY(400px) rotate(-360deg) scale(1.2); }
}


</style>
