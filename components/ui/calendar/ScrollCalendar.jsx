import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { lightModeStyles } from "../../../styles/theme/light";
import { utilityStyles } from "../../../styles/utility";

function ScrollCalendar() {
  const [date, setDate] = useState(null);
  const [days, setDays] = useState([]);

  useEffect(() => {
    const today = new Date();
    const currentDay = today.getDate();
    const year = today.getFullYear();
    const month = today.getMonth();

    const totalDays = new Date(year, month + 1, 0).getDate();
    const monthDays = [];

    // Build normal list (1 → totalDays)
    for (let day = 1; day <= totalDays; day++) {
      const weekday = new Date(year, month, day)
        .toLocaleDateString("en-US", { weekday: "short" });

      monthDays.push({
        label: weekday,
        value: day.toString(),
      });
    }

    // Reorder so current day is first
    const todayIndex = currentDay - 1;

    const reordered = [
      ...monthDays.slice(todayIndex),  // today → end of month
      ...monthDays.slice(0, todayIndex) // beginning → yesterday
    ];

    setDays(reordered);
    setDate(currentDay.toString()); // highlight today
  }, []);

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ columnGap: 8, height: 55 }}
      showsHorizontalScrollIndicator={false}
    >
      {days.map((item) => {
        const isActive = date === item.value;

        return (
          <Pressable
            key={item.value}
            style={[
              styles.tabContainer,
              isActive ? styles.tabContainerActive : styles.tabContainerInActive
            ]}
            onPress={() => setDate(item.value)}
          >
            <Text
              style={[
                utilityStyles.fontMedium,
                utilityStyles.text2Xs,
                isActive ? styles.tabTextActive : styles.tabTextInActive
              ]}
            >
              {item.label}
            </Text>

            <Text
              style={[
                utilityStyles.textXs,
                utilityStyles.fontBold,
                isActive ? styles.tabTextActive : styles.tabTextInActive
              ]}
            >
              {item.value}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    ...utilityStyles.pXs,
    ...utilityStyles.flexCol,
    ...utilityStyles.gXs,
    ...lightModeStyles.bgPrimary,
    ...utilityStyles.alignCenter,
    ...utilityStyles.roundedXl,
    width: 45,
    height: 55,
  },
  tabContainerActive: {
    ...lightModeStyles.bgPrimary,
  },
  tabContainerInActive: {
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#ccc",
  },
  tabTextActive: {
    ...lightModeStyles.colorOnPrimary,
  },
  tabTextInActive: {
    ...lightModeStyles.textLight,
  },
});

export default ScrollCalendar;
