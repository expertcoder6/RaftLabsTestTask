import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { HelloWave } from "@/components/HelloWave";
import { useRouter } from "expo-router"; // Import useRouter to handle navigation

export default function PropertyDetails() {
  const router = useRouter(); // Initialize the router for navigation

  // Hardcoded property details
  const property = {
    name: "Luxury Beachfront Villa",
    description: "A stunning 4-bedroom beachfront villa with ocean views, private pool, and modern amenities.",
    location: "Miami, FL",
    price: "2,500,000",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://example.com/path-to-image.jpg", // Example image URL
  };

  // Function to handle button click and navigate to the booking page
  const handleBooking = () => {
    router.push("/booking"); // Navigate to the booking page
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={{ uri: property.image }}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Property Details</ThemedText>
        <HelloWave />
      </ThemedView>

      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <Text style={styles.propertyName}>{property.name}</Text>
        <Text style={styles.propertyDescription}>{property.description}</Text>

        <View style={styles.propertyInfo}>
          <Text style={styles.infoText}>Location: {property.location}</Text>
          <Text style={styles.infoText}>Price: ${property.price}</Text>
          <Text style={styles.infoText}>Bedrooms: {property.bedrooms}</Text>
          <Text style={styles.infoText}>Bathrooms: {property.bathrooms}</Text>
        </View>

        {/* Replace the Link with a Button */}
        <Button title="Confirm Book" onPress={handleBooking} />
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 20,
  },
  reactLogo: {
    height: 250,
    width: "100%",
    borderRadius: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  propertyName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  propertyDescription: {
    fontSize: 16,
    marginBottom: 15,
    color: "gray",
  },
  propertyInfo: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
