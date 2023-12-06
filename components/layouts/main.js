import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Yến Chu Nè homepage" />
        <meta name="author" content="Yến Chu Nè" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="/public/profile5.jpg" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Yến Chu Nè" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />

        <meta property="og:site_name" content="Yến Chu Nè" />
        <meta name="og:title" content="Yến Chu Nè" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/profile5.jpg" />
        <title>Yến Chu Nè </title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
