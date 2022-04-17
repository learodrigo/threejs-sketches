import * as THREE from "three"
import normaliseTexture from "./normaliseTexture"

const addCircle = (scene: THREE.Scene) => {
  const geometry = new THREE.SphereGeometry(Math.random() + 0.1, 24, 24)

  const material = new THREE.MeshStandardMaterial({
    normalMap: normaliseTexture,
    color: 0xffffff,
  })

  const circle = new THREE.Mesh(geometry, material)

  const [x, y, z] = Array(3)
    .fill(0)
    .map(() => THREE.MathUtils.randFloatSpread(100))

  circle.position.set(x, y, z)
  scene.add(circle)
}

export default addCircle
