import camera from "./camera"
import controls from "./controls"
import { torus } from "./geometries"
import renderer from "./renderer"
import scene from "./scene"

const animate = () => {
  requestAnimationFrame(animate)

  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01

  controls.update()

  renderer.render(scene, camera)
}

export default animate
