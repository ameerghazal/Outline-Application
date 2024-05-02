import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Corrected import for navigation
import { router, useLocalSearchParams } from "expo-router";
import { FIREBASE_DB } from "../../firebase"; // Adjust the path
import { collection, query, where, getDocs } from "firebase/firestore";
import { IP } from "../(home_feed)/HomeFeed";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // State to track focus
  const navigation = useNavigation(); // Corrected navigation usage



  const handleSearch = async () => {
    useEffect(() => {
        fetch(
          `http://${IP}:500/pullUserSearch?searchQuery=${searchTerm}`
        )
          .then((response) => response.json())
          .then((pData) => setSearchResults(pData))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);
  };

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    } else {
      setSearchResults([]); // Clear search results when search term is empty
    }
  }, [searchTerm]);

  const handlePushToUserProfile = (userId, firstName, lastName, username) => {
    router.push({
      pathname: "/userProfile",
      query: {
        uid: userId,
        firstName: firstName,
        lastName: lastName,
        username: username,
      },
    });
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
        <Text style={styles.headerTitle}>Search</Text>
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
              onPress={() =>
                handleStartChat(
                  item.id,
                  item.firstName,
                  item.lastName,
                  item.username
                )
              }
            >
              <View style={styles.userContainer}>
                <Image
                  source={{ uri: item.photoUrl || "null" }} // Provide a default image URL if photoUrl is null
                  style={styles.profileImage}
                />
                <View style={styles.userInfo}>
                  <Text style={styles.nameText}>
                    {item.firstName} {item.lastName}
                  </Text>
                  <Text style={styles.usernameText}>@{item.username}</Text>
                </View>
              </View>
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
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
  noResults: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
  resultItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Make the image round
    marginRight: 10,
  },
  userInfo: {
    flexDirection: "column",
  },
  nameText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  usernameText: {
    fontSize: 14,
    color: "#aaa",
  },
});

export default Search;