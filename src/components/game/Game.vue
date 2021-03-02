<template>
  <div :class="$style.game">
    <svg :viewBox="`0 0 ${width} ${height}`">
      <Ladybug
        v-for="l in activeLadybugs"
        :key="l.id"
        :x="l.x"
        :y="l.y"
        :angle="l.angle"
        :color="l.color"
        :type="l.type"
        :size="ladybugSize"
        @click="() => onClickLadybug(l)"
      />
    </svg>
  </div>
</template>

<script>
import ladybugs from "@/ladybugs";
import Ladybug from "./Ladybug.vue";

const FPS = 60;
const LadybugSize = 100;

export default {
  components: { Ladybug },
  mounted() {
    this.onResize = () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    };
    window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
    this.stopMove();
  },
  created() {
    ladybugs.forEach((ladybug) => {
      if (ladybug.isPositionned) return;

      ladybug.changePosition({
        x: this.maxX * Math.random(),
        y: this.maxY * Math.random(),
        angle: 2 * Math.PI * Math.random(),
      });
    });

    this.ladybugs = ladybugs;
    this.startMove();
  },
  methods: {
    startMove() {
      if (this.animationIntervalId) this.stopMove();

      this.animationIntervalId = setInterval(() => {
        requestAnimationFrame(() => {
          this.activeLadybugs.forEach((ladybug) => {
            let x = ladybug.x + Math.cos(ladybug.angle);
            let y = ladybug.y + Math.sin(ladybug.angle);

            let angle;
            if (ladybug.x < 0) {
              x = 0;
              angle = Math.PI * Math.random() - Math.PI / 2;
            }
            if (ladybug.y < 0) {
              y = 0;
              angle = Math.PI * Math.random();
            }
            if (ladybug.x > this.maxX) {
              x = this.maxX;
              angle = Math.PI * Math.random() + Math.PI / 2;
            }
            if (ladybug.y > this.maxY) {
              y = this.maxY;
              angle = Math.PI * Math.random() + Math.PI;
            }

            if (angle) {
              const gap = angle - ladybug.angle;

              // if the gap is gt than PI, prefer subtract
              angle =
                Math.abs(gap) < Math.PI
                  ? ladybug.angle + gap
                  : ladybug.angle - ((2 * Math.PI - gap) % Math.PI);
            }
            ladybug.changePosition({
              x,
              y,
              angle: angle || ladybug.angle,
            });
          });
        });
      }, 1000 / FPS);
    },
    stopMove() {
      clearInterval(this.animationIntervalId);
    },
    onClickLadybug(ladybug) {
      ladybug.changeColor();
    },
  },
  data() {
    return {
      ladybugs: [],
      ladybugSize: LadybugSize,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  computed: {
    activeLadybugs() {
      return this.ladybugs.filter((l) => l.isVisible);
    },
    maxX() {
      return this.width - this.ladybugSize;
    },
    maxY() {
      return this.height - this.ladybugSize;
    },
  },
};
</script>
<style lang="scss" module>
.game {
  width: 100%;
  height: 100%;

  svg {
    height: 100%;
    width: 100%;
  }
}
</style>
