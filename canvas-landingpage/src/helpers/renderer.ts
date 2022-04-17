import * as THREE from "three"

const $canvas = document.querySelector("#bg") as HTMLCanvasElement

const renderer = new THREE.WebGLRenderer({
  canvas: $canvas,
})

export default renderer
