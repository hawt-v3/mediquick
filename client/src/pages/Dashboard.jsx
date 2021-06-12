import { Box } from "@chakra-ui/layout"
import {
	Heading,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Layout } from "../Components/Layout"
import Maps from "../Components/Map/index"
import { loadMap } from "../Components/Map/located"
import { MissionsDisplay } from "../Components/MissionsDisplay"
import { QueueDisplay } from "../Components/QueueDisplay"
import { getShelters } from "../Shelter"
import theme from "../theme"

//const locations = [{ lat: 32.76570649214452, long: -117.06651266267941 }, {lat: 32.7657064921445, long: -117.0665126626796, }]
let locations = {}

const mapLoad = map => {
	setTimeout(() => {
		window.map = map
		loadMap(map, locations)
	}, 2000)
}

const Dashboard = () => {
	const [missions, setMissions] = useState([])
	const [focusedItem, setFocusedItem] = useState()

	useEffect(() => {
		getShelters()
		console.log("getting missions....")
		setMissions([
			{
				patientName: "Johnny Sins",
				patientLocation: "Abbey Road Downtown",
				important: true,
				id: 123,
			},
			{
				patientName: "Johnny Sins",
				patientLocation: "Abbey Road Downtown",
				important: false,
				id: 456,
			},
			{
				patientName: "Johnny Sins",
				patientLocation: "Abbey Road Downtown",
				important: true,
				id: 789,
			},
		])
	}, [])

	const flipImportance = key => {
		const newList = missions.map((m, k) => {
			if (k === key) {
				const updatedItem = {
					...m,
					important: !m.important,
				}
				return updatedItem
			}
			return m
		})
		setMissions(newList)
	}

	return (
		<Layout>
			<Box
				w="100%"
				h="90vh"
				display="grid"
				gridTemplateColumns="1fr 3fr"
				gridGap="2rem"
				p="3rem">
				<Box
					w="100%"
					h="100%"
					backgroundColor={theme.colours.white}
					boxShadow="0px 2px 6px -1px gray"
					borderRadius="xl">
					<Tabs
						w="100%"
						variant="soft-rounded"
						colorScheme={theme.colours.accent}
						p="0">
						<TabList w="100%">
							<Tab w="80%" m="1.5rem">
								Missions
							</Tab>
							<Tab w="80%" m="1.5rem">
								Queue
							</Tab>
						</TabList>

						<TabPanels p="0">
							<TabPanel p="0">
								<hr />
								<Heading fontSize="22px" ml="1rem" mt="1rem">
									Ongoing Missions
								</Heading>
								<MissionsDisplay
									missions={missions}
									flipImportance={flipImportance}
									focusedItem={focusedItem}
									setFocusedItem={setFocusedItem}
								/>
							</TabPanel>
							<TabPanel p="0">
								<hr />
								<Heading fontSize="22px" ml="1rem" mt="1rem">
									Current Queue
								</Heading>

								<QueueDisplay
									missions={missions}
									flipImportance={flipImportance}
									focusedItem={focusedItem}
									setFocusedItem={setFocusedItem}
								/>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>

				<Box
					w="100%"
					h="100%"
					backgroundColor={theme.colours.white}
					boxShadow="0px 2px 6px -1px gray"
					borderRadius="xl"
					p="2rem">
					<Maps mapLoad={mapLoad} />
				</Box>
			</Box>
		</Layout>
	)
}

export default Dashboard
