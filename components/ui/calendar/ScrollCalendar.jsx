import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { lightModeStyles } from "../../../styles/theme/light";
import { utilityStyles } from "../../../styles/utility";

const toLocalDateString = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

function ScrollCalendar({ startDate, endDate, onSelect }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [days, setDays] = useState([]);

  useEffect(() => {
    const toDateObj = (d) => (d ? new Date(d) : null);

    const providedStart = toDateObj(startDate);
    const providedEnd = toDateObj(endDate);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let rangeStart, rangeEnd;

    if (providedStart && providedEnd) {
      rangeStart = new Date(providedStart);
      rangeEnd = new Date(providedEnd);
    } else {
      rangeStart = new Date(today);
      rangeEnd = new Date(today);
      rangeEnd.setDate(today.getDate() + 13);
    }

    rangeStart.setHours(0, 0, 0, 0);
    rangeEnd.setHours(0, 0, 0, 0);

    // Generate date list
    const temp = [];
    let current = new Date(rangeStart);

    while (current <= rangeEnd) {
      const monthLabel = current.toLocaleDateString("en-US", { month: "short" });
      const dayNumber = current.getDate();
      const value = toLocalDateString(current);

      temp.push({ monthLabel, dayNumber, value });
      current.setDate(current.getDate() + 1);
    }

    setDays(temp);

    // Initial selection
    const initial = providedStart
      ? toLocalDateString(providedStart)
      : toLocalDateString(today);

    setSelectedDate(initial);
    onSelect?.(initial);
  }, [startDate, endDate]);

  const handleSelect = (value) => {
    setSelectedDate(value);
    onSelect?.(value);
  };

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ columnGap: 8, height: 55 }}
      showsHorizontalScrollIndicator={false}
    >
      {days.map((item) => {
        const isActive = selectedDate === item.value;

        return (
          <Pressable
            key={item.value}
            style={[
              styles.tabContainer,
              isActive ? styles.tabContainerActive : styles.tabContainerInactive,
            ]}
            onPress={() => handleSelect(item.value)}
          >
            <Text
              style={[
                utilityStyles.fontMedium,
                utilityStyles.textXs,
                isActive ? styles.tabTextActive : styles.tabTextInactive,
              ]}
            >
              {item.monthLabel}
            </Text>

            <Text
              style={[
                utilityStyles.textXs,
                utilityStyles.fontBold,
                isActive ? styles.tabTextActive : styles.tabTextInactive,
              ]}
            >
              {item.dayNumber}
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
  tabContainerInactive: {
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#ccc",
  },
  tabTextActive: {
    ...lightModeStyles.colorOnPrimary,
  },
  tabTextInactive: {
    ...lightModeStyles.textLight,
  },
});

export default ScrollCalendar;
