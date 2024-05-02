import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Corrected import for navigation
import { router } from "expo-router";

const NewMessage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // State to track focus
  const navigation = useNavigation(); // Corrected navigation usage

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://yourapi.com/search-users?username=${searchTerm}`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    }
  }, [searchTerm]);

  const handleStartChat = (userId) => {
    console.log("Start chat with user:", userId);
    // Add logic to initiate chat here
  };

  const handleCancel = () => {
    router.back(); // Using the corrected navigation method
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCancel}>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Message</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by username"
        placeholderTextColor={isFocused ? "#606060" : "#606060"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={setSearchTerm}
        value={searchTerm}
      />
      {loading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : searchTerm.length > 0 && searchResults.length === 0 ? (
        <Text style={styles.noResults}>No users found</Text>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.resultItem}
              onPress={() => handleStartChat(item.id)}
            >
              <Text style={styles.itemText}>{item.username}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#1B1B1B",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  cancelButton: {
    color: "#FFF",
    fontSize: 16,
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -43 }],
  },
  searchInput: {
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "#252525",
    borderRadius: 40,
    margin: 15,
    textAlign: "left",
    borderColor: "#4B4B4B",
    borderWidth: 1,
    height: 30,
    color: "#fff",
  },
  loading: {
    color: "#fff",
    marginLeft: 10,
  },
  noResults: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 18,
  },
});

export default NewMessage;
