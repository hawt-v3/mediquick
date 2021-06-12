import { BellIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text, Tooltip } from "@chakra-ui/react";
import theme from "../theme";

export const QueueDisplay = ({
  missions,
  flipImportance,
  focusedItem,
  setFocusedItem,
}) => {
  return (
    <Box w="100%" h="100%" mt={5}>
      {missions.map((m, key) => (
        <Box
          key={key}
          width="100%"
          height="6rem"
          borderBottom="1px solid #aaa"
          p="1rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Text fontWeight="bold">{m.patientName}</Text>
            <Text fontSize="14px">{m.patientLocation} | 1:05PM</Text>
          </Box>
          {/* buttons and stuffs */}
          <Box d="flex">
            <Tooltip
              closeOnClick
              hasArrow
              bg="gray.300"
              color="black"
              label="Focus Queue"
              openDelay={1000}
            >
              <IconButton
                icon={<ViewIcon />}
                colorScheme={
                  m.id === focusedItem ? theme.colours.accent : "gray"
                }
                bgColor={
                  m.id === focusedItem ? theme.colours.accent + ".500" : ""
                }
                mr="0.5rem"
                onClick={() =>
                  m.id === focusedItem
                    ? setFocusedItem(null)
                    : setFocusedItem(m.id)
                }
              />
            </Tooltip>

            <Tooltip
              closeOnClick
              hasArrow
              bg="gray.300"
              color="black"
              label="Prioritize Patient"
              openDelay={1000}
            >
              <IconButton
                icon={<BellIcon />}
                colorScheme={m.important ? theme.colours.accent : "gray"}
                onClick={() => flipImportance(key)}
              />
            </Tooltip>
          </Box>
        </Box>
      ))}
    </Box>
  );
};