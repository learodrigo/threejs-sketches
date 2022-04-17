import * as THREE from "three"

export const pointLight = new THREE.PointLight(0xffffff)
export const ambientLight = new THREE.AmbientLight(0xffffff)
export const lightHelper = new THREE.PointLightHelper(pointLight)
export const gridHelper = new THREE.GridHelper(200, 50)
