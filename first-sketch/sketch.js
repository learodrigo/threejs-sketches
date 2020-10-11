import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/build/three.module.js'

const main = () => {
    const canvas = document.getElementById('canvas')
    // canvas.width = window.innerWidth
    // canvas.height = window.innerHeight

    const renderer = new THREE.WebGLRenderer({ canvas })

    // Field of view (angle) - three uses randians but for camera takes degrees
    const fov = 75
    const aspect = 2
    const near = 0.1
    const far = 5
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.z = 2

    const scene = new THREE.Scene()

    // Light
    const color = '#fff'
    const intensity = 1
    const light = new THREE.DirectionalLight(color, intensity)
    light.position.set(-1, 2, 4)
    scene.add(light)

    const boxW = 1
    const boxH = 1
    const boxD = 1
    const geometry = new THREE.BoxGeometry(boxW, boxH, boxD)

    const makeInstance = (geometry, color, x) => {
        const material = new THREE.MeshPhongMaterial({ color })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)
        cube.position.x = x

        return cube
    }

    const cubes = [
        makeInstance(geometry, '#44aa88', 0),
        makeInstance(geometry, '#8844aa', -2),
        makeInstance(geometry, '#aa8844', 2)
    ]

    const render = (time) => {
        time *= 0.001

        cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * 0.1
            const rot = time * speed
            cube.rotation.x = rot
            cube.rotation.y = rot
        })


        renderer.render(scene, camera)

        requestAnimationFrame(render)
    }

    requestAnimationFrame(render)
}

main()
