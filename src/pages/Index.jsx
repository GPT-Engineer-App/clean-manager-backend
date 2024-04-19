import { Box, Button, Container, Flex, Heading, Input, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const toast = useToast();

  const [managerName, setManagerName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");

  const handleAddManager = async () => {
    const response = await fetch("https://api.example.com/managers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: managerName, email: managerEmail }),
    });

    if (response.ok) {
      toast({
        title: "Manager added.",
        description: "You have successfully added a new cleaning manager.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setManagerName("");
      setManagerEmail("");
    } else {
      toast({
        title: "Error",
        description: "Failed to add manager.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  const handleAddCustomer = async () => {
    const response = await fetch("https://api.example.com/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: customerName, address: customerAddress }),
    });

    if (response.ok) {
      toast({
        title: "Customer added.",
        description: "You have successfully added a new customer.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setCustomerName("");
      setCustomerAddress("");
    } else {
      toast({
        title: "Error",
        description: "Failed to add customer.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
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
