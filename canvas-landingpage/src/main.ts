import "./style.css"

import addCircle from "./helpers/addCircle"
import {
  ambientLight,
  gridHelper,
  lightHelper,
  pointLight,
} from "./helpers/utils"
import { spaceTexture } from "./helpers/textures"
import moveCamera from "./helpers/moveCamera"
import { mercury, torus } from "./helpers/geometries"
import animate from "./helpers/animate"
import camera from "./helpers/camera"
import renderer from "./helpers/renderer"
import scene from "./helpers/scene"

// Setup
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)
scene.background = spaceTexture

// Torus
torus.position.x = 15
torus.position.y = 5
scene.add(torus)

// Starts
Array(200)
  .fill(0)
  .forEach(() => addCircle(scene))

// Mercury
mercury.position.z = 30
mercury.position.x = -10
scene.add(mercury)

// Light
pointLight.position.set(-20, 20, 20)
scene.add(pointLight)
scene.add(ambientLight)
scene.add(lightHelper, gridHelper)

document.body.onscroll = () => moveCamera(mercury)

animate()
