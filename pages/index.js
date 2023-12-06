import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Modal,

  ModalContent,
  ModalCloseButton,
  ModalBody,

  ModalOverlay,

  useDisclosure,
  useToast


} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoFacebook, } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()
  const handleClick = () => {
    const phoneNumber = '0868943096';
    navigator.clipboard.writeText(phoneNumber);
    toast({
      title: 'Đã copy',
      description: "0868943096",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
  };

  return (
    <>
      <Layout>


        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody style={{ padding: '70px' }}>
              <img
                alt=""
                loading="lazy"
                width={300}
                height={300}
                decoding="async"
                data-nimg={1}
                srcSet="/qr.jpg"
                src="/qr.jpg"
                style={{ color: "transparent", objectFit: "cover", borderRadius: 10 }}
              />

            </ModalBody>

          </ModalContent>
        </Modal>
        <Container>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            Hello, I&apos;m Yến Chu Nè
          </Box>

          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Yến Chu
              </Heading>
              <p>Tôi là ( Streamer )</p>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign="center"
            >
              <Box
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                w="100px"
                h="100px"
                display="inline-block"
                borderRadius="full"
                overflow="hidden"
              >
                <ProfileImage
                  src="/profile5.jpg"
                  alt="Profile image"
                  borderRadius="full"
                  width="100"
                  height="100"
                />
              </Box>
            </Box>
          </Box>

          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              Kênh Donate
            </Heading>
            <List style={{ display: 'flex' }}>

              <ListItem>
                <Link target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    onClick={onOpen}
                  >
                    <span className="chakra-button__icon css-1wh2kri">
                      <img
                        alt=""
                        aria-hidden="true"
                        focusable="false"
                        loading="lazy"
                        width={20}
                        height={20}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="https://donate.phatsaygame.live/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvcb.ae2c33c0.png&w=32&q=75"
                        src="https://donate.phatsaygame.live/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvcb.ae2c33c0.png&w=32&q=75"
                      />

                    </span>

                    QR VCB
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"

                  >
                    <span className="chakra-button__icon css-1wh2kri">

                      <img
                        alt=""
                        aria-hidden="true"
                        focusable="false"
                        loading="lazy"
                        width={20}
                        height={20}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="https://img.cake.vn/2021/09/e166aa95-z2434192104284_4a91929db3363e3c43118490fcbe922f.jpg"
                        src="https://img.cake.vn/2021/09/e166aa95-z2434192104284_4a91929db3363e3c43118490fcbe922f.jpg"
                      />
                    </span>

                    Cake Bank
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    onClick={handleClick}
                  >
                    <span className="chakra-button__icon css-1wh2kri">
                      <img
                        alt=""
                        aria-hidden="true"
                        focusable="false"
                        loading="lazy"
                        width={20}
                        height={20}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="https://donate.phatsaygame.live/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpasscode.b53cb137.png&w=32&q=75"
                        src="https://donate.phatsaygame.live/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpasscode.b53cb137.png&w=32&q=75"
                      />
                    </span>
                    STK
                  </Button>
                </Link>
              </ListItem>
            </List>

          </Section>





          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              Social Network
            </Heading>
            <List>
              <ListItem>
                <Link href="https://www.facebook.com/yenchuuuu" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoFacebook />}
                  >
                    FaceBook
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.instagram.com/yenchuuuu" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoInstagram />}
                  >
                    Instagram
                  </Button>
                </Link>
              </ListItem>

            </List>
            <Box align="center" my={4}>
              <Button
                as={NextLink}

                href="
                mailto:forworkdpl@gmail.com"
                scroll={false}
                leftIcon={<EmailIcon />}
                colorScheme="teal"
              >
                Liên Hệ Công Việc
              </Button>
            </Box>
          </Section>

        </Container>
      </Layout>
    </>
  )


}

export default Home
export { getServerSideProps } from '../components/chakra'
