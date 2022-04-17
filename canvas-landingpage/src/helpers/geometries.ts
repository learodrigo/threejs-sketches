import * as THREE from "three"
import normaliseTexture from "./normaliseTexture"
import { texture } from "./textures"

export const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({ map: texture, normalMap: normaliseTexture })
)

const torusGeometry = new THREE.TorusGeometry(10, 3, 50, 100)
const torusMaterial = new THREE.MeshStandardMaterial({
  color: 0xff6347,
  wireframe: false,
})
export const torus = new THREE.Mesh(torusGeometry, torusMaterial)
