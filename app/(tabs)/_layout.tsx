import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { colorPrimitives } from "@/constants/theme";
import { lightModeStyles } from "@/styles/theme/light";
import { Platform } from "react-native";
import { BookFilled } from "../../assets/icons/BookFilled";
import { BookLine } from "../../assets/icons/BookLine";
import { CalendarFilled } from "../../assets/icons/CalendarFilled";
import { CalendarLine } from "../../assets/icons/CalendarLine";
import { ExamFilled } from "../../assets/icons/ExamFilled";
import { ExamLine } from "../../assets/icons/ExamLine";
import { HomeFilled } from "../../assets/icons/HomeFilled";
import { HomeLine } from "../../assets/icons/HomeLine";
import { ResitFilled } from "../../assets/icons/ResitFilled";
import { ResitLine } from "../../assets/icons/ResitLine";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: colorPrimitives.light.tabBarActiveColor,
        tabBarInactiveTintColor: colorPrimitives.light.tabBarInactiveColor,
        tabBarStyle: {
          ...lightModeStyles.bgLight,
          borderTopWidth: 0.5,
          borderTopColor: colorPrimitives.light.colorBorder,
          height: Platform.OS === "ios" ? 83 : 83,
          paddingBottom: Platform.OS === "ios" ? 20 : 20,
        },
      }}
    >
      <Tabs.Screen
        name={"Home"}
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <HomeFilled color={color} width={24} height={24} />;
            }
            return <HomeLine color={color} width={24} height={24} />;
          },
        }}
      />
      <Tabs.Screen
        name={"Schedule"}
        options={{
          title: "Schedule",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <CalendarFilled color={color} width={24} height={24} />;
            }
            return <CalendarLine color={color} width={24} height={24} />;
          },
        }}
      />
      <Tabs.Screen
        name={"Exam"}
        options={{
          title: "Exam",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <ExamFilled color={color} width={24} height={24} />;
            }
            return <ExamLine color={color} width={24} height={24} />;
          },
        }}
      />
      <Tabs.Screen
        name={"Resit"}
        options={{
          title: "Resit",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <ResitFilled color={color} width={24} height={24} />;
            }
            return <ResitLine color={color} width={24} height={24} />;
          },
        }}
      />
      <Tabs.Screen
        name={"Course"}
        options={{
          title: "Course",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <BookFilled color={color} width={24} height={24} />;
            }
            return <BookLine color={color} width={24} height={24} />;
          },
        }}
      />
    </Tabs>
  );
}
