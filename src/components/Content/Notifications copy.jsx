import React, { useState, useEffect } from 'react';
import { FormControl, FormLabel, Switch, Box, Text } from '@chakra-ui/react';

function Notifications() {
  const [goldLogs, setGoldLogs] = useState([]);
  const [cryptoLogs, setCryptoLogs] = useState([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    // Retrieve gold purchase logs from localStorage
    const storedGoldLogs = JSON.parse(localStorage.getItem('purchaseLogGold')) || [];
    setGoldLogs(storedGoldLogs);

    // Retrieve crypto purchase logs from localStorage
    const storedCryptoLogs = JSON.parse(localStorage.getItem('purchaseLogCrypto')) || [];
    setCryptoLogs(storedCryptoLogs);
  }, []);

  const handleNotificationToggle = () => {
    if (notificationsEnabled) {
      setNotificationsEnabled(!notificationsEnabled);
      alert('No Emails will be sent from now on.');
    }
    else {
      setNotificationsEnabled(!notificationsEnabled);
      alert('Emails will be sent to your email ID regarding your purchases.');
    }
  };

  return (
    <Box p={5}>
      <FormControl
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <FormLabel
          htmlFor="notificationEmails"
          mb={0}
          cursor="pointer"
          userSelect="none"
        >
          Receive notification emails
        </FormLabel>
        <Switch
          id="notificationEmails"
          isChecked={notificationsEnabled}
          onChange={handleNotificationToggle}
        />
      </FormControl>

      <Box mt={5}>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          Gold Purchase Log
        </Text>
        {goldLogs.length === 0 ? (
          <Text>No gold purchase logs available.</Text>
        ) : (
          <Box>
            {goldLogs.map((log, index) => (
              <Box
                key={index}
                p={3}
                mb={2}
                borderWidth="1px"
                borderRadius="md"
                borderColor="gray.200"
                bg="gray.50"
              >
                <Text><b>Gold</b>: {log.quantity} grams bought for {log.points} points on {log.date}</Text>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      <Box mt={5}>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          Crypto Purchase Log
        </Text>
        {cryptoLogs.length === 0 ? (
          <Text>No crypto purchase logs available.</Text>
        ) : (
          <Box>
            {cryptoLogs.map((log, index) => (
              <Box
                key={index}
                p={3}
                mb={2}
                borderWidth="1px"
                borderRadius="md"
                borderColor="gray.200"
                bg="gray.50"
              >
                <Text><b>{log.crypto}</b>: {log.quantity} bought for {log.points} points on {log.date}</Text>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Notifications;