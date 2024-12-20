import React from "react";
import { FlatList, Text, StyleSheet, View, Image } from "react-native";
import { useSearchStore } from "@/store/searchStore"; // Assuming your store holds the search query
import { SearchBar } from "@/components/SearchBar";
import { Link } from "expo-router";

export default function Home() {
  const { query } = useSearchStore();

  // Assuming you fetch or have static bookings data here
  const bookings = [
    { id: 1, name: "Booking 1", imageUrl: "https://via.placeholder.com/120" },
    { id: 2, name: "Booking 2", imageUrl: "https://via.placeholder.com/120" },
    { id: 3, name: "Booking 3", imageUrl: "https://via.placeholder.com/120" },
  ];

  // Filter bookings based on the search query
  const filteredBookings = bookings.filter((booking: any) =>
    booking.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar />
      {/* Display filtered bookings */}
      <FlatList
        data={filteredBookings}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.detailsContainer}>
              <Text style={styles.bookingText}>{`Booking Name: ${item.name}`}</Text>
              <View style={styles.propertyInfo}>
                <Text style={styles.bookingId}>Booking ID: {item.id}</Text>
              </View>
              <View style={styles.locationRow}>
                <Text style={styles.locationText}>Location: Placeholder Location</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.priceText}>Price: $200</Text>
              </View>
              <Link href="/propertyDetails">View details</Link>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  bookingText: {
    fontSize: 18,
    fontWeight: "600",
  },
  propertyInfo: {
    marginTop: 5,
  },
  bookingId: {
    fontSize: 14,
    color: "gray",
  },
  locationRow: {
    marginTop: 8,
  },
  locationText: {
    fontSize: 14,
    color: "gray",
  },
  priceRow: {
    marginTop: 8,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
