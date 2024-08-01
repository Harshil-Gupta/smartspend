import React, { useState } from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Button, Text } from '@chakra-ui/react';

import AccountSettings from './AccountSettings'
import CompanySettings from './CompanySettings'
import Notifications from './Notifications'
import Investments from './Investments/Investments'
import Portfolio from './Portfolio/Portfolio';
import Expenses from './Expenses';

const Content = () => {
  const tabs = ['Portfolio','Investment Choices', 'Expenses', 'Notifications'];
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [balance, setBalance] = useState(0);

  const handleShowBalance = () => {
    const storedBalance = localStorage.getItem('balance') || 1000;
    setBalance(storedBalance);
    setBalanceVisible(true);
  };

  return (
    <Box
      as="main"
      flex={3}
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      pt={5}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="gray.200"
      style={{ transform: 'translateY(-100px)' }}
    >
      <div>
      <Box
        d="flex"
        alignItems="center"
        justifyContent="center"
        py={5}
        px={8}
        borderWidth={1}
        borderColor="white"
        textAlign="center"
        flexDir="column"
        my={5}
      >
        <Button variant="solid" colorScheme="blue" size="lg" onClick={handleShowBalance}>
          Show Reward Balance
        </Button>
        {balanceVisible && (
          <Text color="brand.dark" fontWeight="bold" fontSize="2xl" mt={3}>
            Reward Coins Balance : {balance}
          </Text>
        )}
      </Box>
      </div>
      <Tabs>
        <TabList px={5}>
          {tabs.map(tab => (
            <Tab
              key={tab}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.cadet"
              borderBottomWidth={1}
              _active={{ bg: 'transparent' }}
              _selected={{ color: 'brand.dark', borderColor: 'brand.blue' }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels px={3} mt={5}>
        <TabPanel>
          <Portfolio />
          </TabPanel>
          <TabPanel>
            <Investments />
          </TabPanel>
          <TabPanel>
            <Expenses/>
          </TabPanel>
          <TabPanel>
          <Notifications/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Content
