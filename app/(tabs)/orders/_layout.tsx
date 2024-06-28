/* eslint-disable prettier/prettier */
import { Stack } from 'expo-router';

export default function OrdersScreen() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
