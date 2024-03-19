import React, { useState } from "react";
import { Box, Heading, Input, Button, Grid, Image, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const retailers = [
  { name: "Amazon", price: 9.99, image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbWF6b24lMjBsb2dvfGVufDB8fHx8MTcxMDg3NDY4NXww&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Walmart", price: 8.99, image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YWxtYXJ0JTIwbG9nb3xlbnwwfHx8fDE3MTA4NzQ2ODV8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Target", price: 10.49, image: "https://images.unsplash.com/photo-1665410618173-2ffade789974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0YXJnZXQlMjBsb2dvfGVufDB8fHx8MTcxMDg3NDY4Nnww&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Costco", price: 7.99, image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb3N0Y28lMjBsb2dvfGVufDB8fHx8MTcxMDg3NDY4Nnww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = retailers.filter((retailer) => retailer.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Chocolate Price Comparison
      </Heading>
      <HStack mb={8}>
        <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search retailers..." />
        <Button leftIcon={<FaSearch />} onClick={handleSearch}>
          Search
        </Button>
      </HStack>
      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        {searchResults.map((retailer, index) => (
          <Box key={index} borderWidth={1} borderRadius="md" p={4}>
            <VStack align="center">
              <Image src={retailer.image} alt={retailer.name} boxSize="100px" />
              <Text fontWeight="bold">{retailer.name}</Text>
              <Text fontSize="xl" fontWeight="bold" color="green.500">
                ${retailer.price}
              </Text>
            </VStack>
          </Box>
        ))}
      </Grid>
      <Divider my={8} />
      <Heading as="h2" size="lg" mb={4}>
        All Retailers
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        {retailers.map((retailer, index) => (
          <Box key={index} borderWidth={1} borderRadius="md" p={4}>
            <VStack align="center">
              <Image src={retailer.image} alt={retailer.name} boxSize="100px" />
              <Text fontWeight="bold">{retailer.name}</Text>
              <Text fontSize="xl" fontWeight="bold" color="green.500">
                ${retailer.price}
              </Text>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
