import _Base1024Emojis from './emojis.json'

// constants
export const base1024Emojis = expandPoints(_Base1024Emojis)

function expandPoints(meta: { basePoint: number; points: number[][] }) {
  const points: number[] = Array(1024).fill(1)
  meta.points.forEach(([index, diff]) => (points[index] = diff))
  return points
    .reduce((points: number[], point, index) => {
      points.push(points[index - 1] + point || point)
      return points
    }, [])
    .map((point) => point + meta.basePoint)
    .map((point) => String.fromCodePoint(point))
}
