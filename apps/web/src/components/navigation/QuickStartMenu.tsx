import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  useColorMode,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Icon } from '@chakra-ui/react';
import { sitecoreQuickLinks } from "../../../data/data-navigation";



export const QuickStartMenu = (props) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Menu>
      <MenuButton as={Button} {...props} rightIcon={
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width="20px" height="20px">
            <g>
              <rect x="0" y="0" width="18.8" height="18.8" fill="currentColor" />
              <rect x="35.6" y="0" width="18.8" height="18.8" fill="currentColor" />
              <rect x="71.2" width="18.8" height="18.8" fill="currentColor" />
              <rect x="0.1" y="35.6" width="18.8" height="18.8" fill="currentColor" />
              <rect x="35.6" y="35.7" width="18.8" height="18.8" fill="currentColor" />
              <rect x="71.2" y="35.6" width="18.8" height="18.8" fill="currentColor" />
              <rect y="71.3" width="18.8" height="18.8" fill="currentColor" />
              <rect x="35.6" y="71.2" width="18.8" height="18.8" fill="currentColor" />
              <rect x="71.2" y="71.2" width="18.8" height="18.8" fill="currentColor" />
            </g>
          </svg>
        }
        variant="ghost"
      ></MenuButton>
      <MenuList>
        {sitecoreQuickLinks.children.map((link, key) => (
          <MenuItem key={key}>
            <Link as={NextLink} href={link.url} isExternal display={"block"} width={'90%'} color={linkColor}>
              {link.title}
            </Link>
            {<ExternalLinkIcon mx="2px" />}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
