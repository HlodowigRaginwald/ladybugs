const LadybugsNumber = !Number.isNaN(parseInt(process.env.VUE_APP_LADYBUGS_NUMBER, 10))
  ? parseInt(process.env.VUE_APP_LADYBUGS_NUMBER, 10)
  : 5;

const AvailableColors = [
  "aqua",
  "red",
  "blue",
  "chocolate",
  "crimson",
  "darkgreen",
  "darksalmon",
  "ghostwhite",
  "greenyellow",
  "orchid",
];

class Ladybug {
  constructor() {
    this.score = 0;
    this.color = AvailableColors[Math.floor(Math.random() * AvailableColors.length)];
    this.type = Math.random() > 0.5 ? "square" : "circle";
    this.isPositionned = false;
    this.isVisible = true;
    this.id = Math.round(10 ** 5 * Math.random());
  }

  changeColor() {
    this.score += 1;

    const availableColors = AvailableColors.filter((c) => c !== this.color);

    this.color = availableColors[Math.floor(Math.random() * (availableColors.length - 1))];
  }

  changePosition({ x, y, angle }) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.isPositionned = true;
  }
}

export default new Array(LadybugsNumber).fill().map(() => new Ladybug());
