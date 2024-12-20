import { useBookingsStore } from "@/store/bookingsStore";
import React from "react";
import { FlatList, View, Text } from "react-native";
// import { useBookingsStore } from "../store/bookingsStore";

export default function Bookings() {
  const { bookings } = useBookingsStore();

  if (bookings.length === 0) return <Text>No bookings yet!</Text>;

  return (
    <FlatList
      data={bookings}
      renderItem={({ item }) => (
        <Text className="p-2 border">{`Booking ID: ${item}`}</Text>
      )}
      keyExtractor={(item) => item.toString()}
    />
  );
}
