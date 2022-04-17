import camera from "./camera"

const moveCamera = (object: THREE.Mesh) => {
  const t = document.body.getBoundingClientRect().top

  object.rotation.x += 0.05
  object.rotation.y += 0.075
  object.rotation.z += 0.05

  camera.position.x = t * -0.0002
  camera.position.y = t * -0.0002
  camera.position.z = t * -0.01
}

export default moveCamera
