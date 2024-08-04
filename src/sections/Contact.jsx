import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { sectionStyle } from "../lib";
import { useState } from "react";

export default function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const clearForm = () => {
    setName("");
    setMail("");
    setText("");
  };
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [text, setText] = useState("");

  const nameErr = name === "";
  const mailErr = mail === "";
  const textErr = text === "";
  return (
    <>
      <Flex
        as="section"
        id="contact"
        sx={sectionStyle}
        alignItems="center"
        direction="column"
      >
        <Heading p={2} size={{ base: "sm", md: "md" }} color="teal.400">
          Hubungi Kami
        </Heading>
        <Heading p={2}>Kami menunggumu!</Heading>
        <Box p={2} w={{ md: "500px", lg: "750px" }}>
          <Text align="center">
            Kamu sedang mencari pekerjaan? Kami juga sedang mencari pekerja.
            Hubungi kami lebih awal, supaya kamu bisa menjadi keluarga di
            Sigmart!
          </Text>
        </Box>
        <Flex mt={6} gap={4} direction="column" items="center">
          <Box>
            <FormControl
              isInvalid={nameErr}
              isRequired
              w={{ base: "300px", md: "500px", lg: "750px" }}
              p={2}
            >
              <FormLabel>Nama</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {!nameErr ? (
                <FormHelperText>
                  Masukkan nama supaya kamu mudah dikenali.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Nama wajib diisi.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={mailErr}
              isRequired
              w={{ base: "300px", md: "500px", lg: "750px" }}
              p={2}
            >
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              {!mailErr ? (
                <FormHelperText>
                  Kami tidak akan menyebar emailmu.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email wajib diisi.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={textErr}
              isRequired
              w={{ base: "300px", md: "500px", lg: "750px" }}
              p={2}
            >
              <FormLabel>Pesan</FormLabel>
              <Textarea
                placeholder="Masukkan pesanmu disini..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              {!textErr ? (
                <FormHelperText>Masukkan pesanmu.</FormHelperText>
              ) : (
                <FormErrorMessage>Pesan wajib diisi.</FormErrorMessage>
              )}
            </FormControl>
            {!nameErr && !mailErr && !textErr && (
              <Button m={2} colorScheme="teal" onClick={onOpen}>
                Kirim!
              </Button>
            )}
            {(name || mail || text) && (
              <Button m={2} colorScheme="red" onClick={clearForm}>
                Bersihkan
              </Button>
            )}

            <Text fontSize="xs" my={2} color="gray.800">
              * tombol hanya akan muncul ketika semua kolom terisi.
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lihat form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading my={2} size="md">
              {name} ({mail})
            </Heading>
            <Text my={2} size="lg">
              &quot;{text}&quot;
            </Text>
            <Divider my={2} orientation="horizontal" />
            <Text fontSize="sm" color="gray.800">
              Tenang saja, informasi ini tidak akan disimpan. Setelah kamu
              menutup pop-up ini, kamu bisa langsung membersihkannya.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Tutup
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
