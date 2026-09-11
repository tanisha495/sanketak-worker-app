import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { colors } from "@/constants";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: colors.background },
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="report/voice" />
        <Stack.Screen name="report/text" />
        <Stack.Screen name="report/review" />
        <Stack.Screen name="report/photo" />
        <Stack.Screen name="report/success" />
        <Stack.Screen name="report-details/[id]" />
        <Stack.Screen name="language" />
      </Stack>
    </>
  );
}
