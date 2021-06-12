import { AtSignIcon, LockIcon, SettingsIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import {
  Avatar,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import firebase from "../firebase";
import theme from "../theme";

export const Navbar = () => {
  const { currentUser } = useAuth();
  const history = useHistory();

  return (
    <Box
      as="nav"
      w="100%"
      h="4.5rem"
      d="flex"
      top="0"
      position="fixed"
      zIndex="999"
      justifyContent="space-around"
      alignItems="center"
      bgColor="#ffffff"
      boxShadow="0 1px 8px -4px gray"
    >
      <Heading
        fontWeight="black"
        as={RouterLink}
        to="/"
        cursor="pointer"
        color={'red.400'}
        bgClip="text"
        bgGradient="linear(to-r, red.400,purple.500, blue.400)"
        // colour={theme.colours.hexAccent}
        // colour={theme.colours.accent}
        transition="filter 200ms"
        _hover={{
          filter: "brightness(0.9)",
        }}
        userSelect="none"
      >
        mediquick
      </Heading>
      <Box id="items" d="flex" justifyContent="space-between">
        <Button variant="ghost" as={RouterLink} to="/" mr="4">
          Home
        </Button>
        <Button variant="ghost" as={RouterLink} to="/dashboard" mr="4">
          Dashboard
        </Button>

        {!currentUser ? (
          <>
            <Button
              variant="ghost"
              mr="4"
              ml="10"
              as={RouterLink}
              to="/login"
              colorScheme={'red.400'}
            >
              Log In
            </Button>
            <Button
              mr="4"
              colorScheme={'red.400'}
              as={RouterLink}
              to="/register"
            >
              Register
            </Button>
          </>
        ) : (
          <Menu closeOnBlur={true} zIndex="999">
            <MenuButton
              ml={10}
              as={Button}
              rounded="full"
              variant="link"
              cursor="pointer"
              d="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Flex alignItems="center" color={`${theme.colours.accent}.900`}>
                <Avatar mr="2" size="sm" />
                <span>{currentUser.displayName}</span>
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem
                d="flex"
                justifyContent="space-between"
                as={RouterLink}
                to="/@me"
              >
                <span>My Profile</span>
                <AtSignIcon mr="2" />
              </MenuItem>
              <MenuItem
                d="flex"
                justifyContent="space-between"
                as={RouterLink}
                to="/@me/settings"
              >
                <span>Settings</span>
                <SettingsIcon mr="2" />
              </MenuItem>
              <MenuDivider />
              <MenuItem
                d="flex"
                justifyContent="space-between"
                onClick={() =>
                  firebase
                    .auth()
                    .signOut()
                    .then(() => history.push("login"))
                }
              >
                <span>Log Out</span>
                <LockIcon mr="2" />
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>
    </Box>
  );
};