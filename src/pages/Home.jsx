import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Home = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Framer Picture",
    title: "Simple Card App",
    desc: "A production-ready motion library for React. Utilize the power behind Framer, the best prototyping tool for teams.",
  };
  return (
    <Box>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <Box
          h="100vh"
          bg="#e6dfdf"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 4 }}
            >
              <Image src={property.imageUrl} alt={property.imageAlt} />
            </motion.div>
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {property.title}
                </Box>
              </Box>

              <Box my="1.5rem" fontWeight="400" as="h4" lineHeight="1.8">
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 3, duration: 1.3 }}
                >
                  {property.desc}
                </motion.div>
              </Box>

              <Box display="flex" justifyContent="space-between">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 4, duration: 1.4 }}
                >
                  <Badge borderRadius="5px" p=".2rem 1rem" colorScheme="red" textTransform="capitalize">
                    Animation
                  </Badge>
                </motion.div>

                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 4, duration: 1.8 }}
                >
                  <Badge borderRadius="5px" p=".2rem 1rem" colorScheme="green" textTransform="capitalize">
                    Framer
                  </Badge>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 4, duration: 2.1 }}
                >
                  <Badge borderRadius="5px" p=".2rem 1rem" colorScheme="yellow" textTransform="capitalize">
                    Interaction
                  </Badge>
                </motion.div>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Home;
