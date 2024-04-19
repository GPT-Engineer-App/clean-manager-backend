import { Box, Button, Container, Flex, Heading, Input, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleAddManager = () => {
    toast({
      title: "Manager added.",
      description: "You have successfully added a new cleaning manager.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleAddCustomer = () => {
    toast({
      title: "Customer added.",
      description: "You have successfully added a new customer.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={5}>
      <Heading mb={6}>Cleaning Service Management System</Heading>
      <Stack spacing={10}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack spacing={4}>
            <Heading size="md">Add Cleaning Manager</Heading>
            <Input placeholder="Manager Name" />
            <Input placeholder="Manager Email" />
            <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddManager}>
              Add Manager
            </Button>
          </VStack>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack spacing={4}>
            <Heading size="md">Add Customer</Heading>
            <Input placeholder="Customer Name" />
            <Input placeholder="Customer Address" />
            <Button leftIcon={<FaPlus />} colorScheme="green" onClick={handleAddCustomer}>
              Add Customer
            </Button>
          </VStack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Index;
