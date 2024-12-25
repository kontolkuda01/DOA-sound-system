import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Show,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const menus = [
    { title: "Tentang Kami", link: "#about" },
    { title: "Produk Kami", link: "#product" },
    { title: "Hubungi Kami", link: "#contact" },
  ];
  return (
    <Box position="relative" zIndex={2}>
      <Flex
        position="fixed"
        bg="gray.100"
        _dark={{ bg: "gray.700", color: "gray.50" }}
        top={0}
        right={0}
        left={0}
        sx={{
          px: {
            base: 8,
            md: 12,
            lg: 16,
          },
          py: {
            base: 2,
          },
        }}
        as="nav"
        justify={"space-between"}
      >
        <Center>
          <Image src="/assets/logo.png" height={14} />
        </Center>
        <Show below="md">
          <Center>
            <IconButton
              ref={btnRef}
              onClick={onOpen}
              icon={<HamburgerIcon color="blue" />}
            />
          </Center>
        </Show>
        <Show above="md">
          <Flex color="blue" justify="space-between">
            {menus.map((el, i) => (
              <Link key={i} href={el.link} p={4}>
                {el.title}
              </Link>
            ))}
          </Flex>
        </Show>
      </Flex>
      <Drawer
        as="aside"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Flex direction="column">
              <Box>
                <Image src="/assets/logo.png" height={14} />
              </Box>
              {menus.map((el, i) => (
                <Link key={i} href={el.link} p={4}>
                  {el.title}
                </Link>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
