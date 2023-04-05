import React from 'react'
import {Card, Box, Heading, Container, Flex, Link } from "@chakra-ui/react"
import NextLink from 'next/link'

export default function Home() {
  return (
    <>
      <main>
      <Box minH="100vh">
        <Flex justify="space-between" textColor="white" bgColor="blue.800" h="12" px="5" py="3">
          <Link as ={NextLink} px="3" href="/" >
            <Heading size="md"> Home</Heading>
          </Link>
          <Flex>
            <Link as={NextLink} px="3" href="#about">About</Link>
            <Link as={NextLink} px="3" href="#works">Works</Link>
          </Flex>
        </Flex>
        <Container maxW="container.xl">
          <Card>
            <Heading>Kyohei Oka</Heading>
          </Card>
        </Container>
        </Box>
      </main>
    </>
  )
}
