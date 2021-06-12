import "mapbox-gl/dist/mapbox-gl.css"
import { Threebox } from "threebox-plugin"
// example object

const objects = [
	[-117.06651266267941, 32.76570649214452],
	[-117.06651266267949, 32.7657064921445],
]

export const loadMap = (map, locations) => addEntity(map, "client", objects)

const addEntity = (map, type, objects) =>
	map.addLayer({
		id: type,
		type: "custom",
		redneringMode: "3d",

		onAdd: (map, mbxContext) => {
			window.tb = new Threebox(map, mbxContext, { defaultLights: true })
			let options = {
				obj: type === "client" ? "/pin/scene.gltf" : "/pin2/scene.gltf",
				type: "gltf",
				scale: 40,
				untis: "meters",
				anchor: "center",
				rotation: { x: 90, y: 180, z: 0 }, //default rotation
			}

			for (let i = 0; i < objects.length; i++) {
				const object = objects[i]

				console.log("adding an object " + JSON.stringify(object))

				window.tb.loadObj(options, model => {
					if (i === 1) options.rotation = { x: 60, y: 170, z: 10 }
					const instance = model.setCoords([object[0], object[1]])
					window.tb.add(instance)
				})
			}
		},
		render: (gl, matrix) => window.tb.update(),
	})
