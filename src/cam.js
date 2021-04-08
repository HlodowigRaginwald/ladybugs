import { create as createDiffy } from "diffyjs";

const suscribers = [];

const ResX = 20;
const ResY = 20;
createDiffy({
  resolution: { x: ResX, y: ResY },
  sensitivity: 0.2,
  threshold: 25,
  debug: true,
  containerClassName: "my-diffy-container",
  sourceDimensions: { w: 200, h: 200 },
  onFrame: (matrix) => {
    suscribers.forEach((s) => s(matrix));
  },
});

const hasMotionColision = (
  matrix,
  { x, y, height, width, containerHeight, containerWidth } = {},
) => {
  const stepX = containerWidth / ResX;
  const stepY = containerHeight / ResY;

  const minX = Math.floor(x / stepX);
  const maxX = Math.ceil((x + width) / stepX);
  const minY = Math.floor(y / stepY);
  const maxY = Math.ceil((y + height) / stepY);

  return matrix.some((col, matX) => {
    return col.some((value, matY) => {
      if (value > 200) return false;
      return matX >= minX && matX <= maxX && matY >= minY && matY <= maxY;
    });
  });
};

// eslint-disable-next-line import/prefer-default-export
export function onMotion(callback) {
  const onFrame = (matrix) => {
    callback((elem) => hasMotionColision(matrix, elem));
  };

  const index = suscribers.push(onFrame) - 1;

  return () => {
    suscribers.splice(index, 1);
  };
}
