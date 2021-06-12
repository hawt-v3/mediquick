import { BellIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text, Tooltip } from "@chakra-ui/react";
import theme from "../theme";

export const MissionsDisplay = ({
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
            <Text fontSize="14px">{m.patientLocation}</Text>
          </Box>
          {/* buttons and stuffs */}
          <Box d="flex">
            <Tooltip
              hasArrow
              bg="gray.300"
              closeOnClick
              color="black"
              label="Focus Mission"
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
              hasArrow
              bg="gray.300"
              color="black"
              closeOnClick
              label="Prioritize Mission"
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