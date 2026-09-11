import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { colors, typography } from "@/constants";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: {
          fontSize: typography.small,
          fontWeight: "700",
        },
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.border,
          minHeight: 64,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons color={color} name="home" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "My Reports",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons color={color} name="assignment" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          title: "Alerts",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons color={color} name="campaign" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons color={color} name="more-horiz" size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
