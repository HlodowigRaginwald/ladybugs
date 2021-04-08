<template>
  <svg :x="x" :y="y" viewBox="0 0 100 100" :width="size" :height="size" :class="$style.svg">
    <g :transform="`rotate(${angleDeg})`" :class="$style.group">
      <polyline fill="none" points="100,40 95,45 95,55 100,60" stroke-width="2" />
      <polyline
        fill="none"
        points="90,15 80,20 70,50 80,80 90,85"
        stroke-width="2"
        :class="$style.animPawTop"
      />

      <polyline
        fill="none"
        points="65,3 55,5 80,50 55,95 65,97"
        stroke-width="2"
        :class="$style.animPawMiddle"
      />
      <polyline
        fill="none"
        points="10,10 30,15 50,50 30,85 10,90"
        stroke-width="2"
        :class="$style.animPawBottom"
      />

      <circle cx="80" cy="50" r="15" />
      <circle cx="92" cy="46" r="1" :fill="color" :class="$style.animColor" stroke-width="0" />
      <circle cx="92" cy="54" r="1" :fill="color" :class="$style.animColor" stroke-width="0" />

      <circle
        v-if="type === 'circle'"
        cx="50"
        cy="50"
        r="35"
        :fill="color"
        :class="$style.animColor"
        stroke-width="5"
      />

      <rect
        v-else
        x="17"
        y="17"
        width="66"
        height="66"
        :fill="color"
        :class="$style.animColor"
        stroke-width="5"
      />
      <circle cx="70" cy="50" r="8" />
      <circle cx="55" cy="30" r="7" />
      <circle cx="55" cy="70" r="7" />
      <circle cx="35" cy="40" r="6" />
      <circle cx="35" cy="60" r="6" />
      <polygon points="15,46 85,50 15,54" />
    </g>
  </svg>
</template>

<script>
import { onMotion } from "../../cam";

export default {
  props: {
    x: Number,
    y: Number,
    angle: Number,
    color: String,
    type: String,
    size: Number,
  },
  computed: {
    angleDeg() {
      return (360 * this.angle) / (2 * Math.PI);
    },
  },
  created() {
    onMotion((hasColision) => {
      const value = hasColision({
        x: this.x,
        y: this.y,
        width: this.size,
        height: this.size,
        containerWidth: window.innerWidth,
        containerHeight: window.innerHeight,
      });

      if (value) {
        this.$emit("click");
      }
    });
  },
};
</script>

<style lang="scss" module>
$animDuration: 500ms;

.svg {
  overflow: visible;
}
.group {
  fill: black;
  stroke: black;
  transform-origin: center center;
  cursor: pointer;
  transition: transform 1s;
  overflow: visible;
}

.animColor {
  transition: fill 300ms, stroke 300ms;
}

.animPawTop {
  transform-origin: 5% 50%;
  animation-name: pawTop;
  animation-duration: $animDuration;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @keyframes pawTop {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(3deg);
    }
    75% {
      transform: rotate(-3deg);
    }
  }
}

.animPawMiddle {
  transform-origin: 100% 50%;
  animation-name: pawMiddle;
  animation-duration: $animDuration;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @keyframes pawMiddle {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-5deg);
    }
    75% {
      transform: rotate(5deg);
    }
  }
}
.animPawBottom {
  transform-origin: 50% 50%;
  animation-name: pawBottom;
  animation-duration: $animDuration;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: $animDuration / 3;
  @keyframes pawBottom {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-5deg);
    }
    75% {
      transform: rotate(5deg);
    }
  }
}
</style>
