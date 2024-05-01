import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MaxItems = 5;
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const OutlineEditList = ({ onChange }) => {
  const [items, setItems] = useState(["Item 1"]);

  const addItem = (text) => {
    if (items.length < MaxItems) {
      setItems([...items, text]);
      onChange([...items, text]); // Notify parent component about the change
    }
  };

  const updateItem = (index, newText) => {
    const updatedItems = [...items];
    updatedItems[index] = newText;
    setItems(updatedItems);
    onChange(updatedItems); // Notify parent component about the change
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    onChange(updatedItems); // Notify parent component about the change
  };

  const handleKeyPress = (index, event) => {
    if (
      event.nativeEvent.key === "Backspace" &&
      items[index] === "" &&
      items.length > 1
    ) {
      deleteItem(index);
    }
    if (event.nativeEvent.key === "Enter" && items.length < MaxItems) {
      addItem("New Item");
    }
  };

  const handleAddButtonClick = () => {
    addItem("New Item");
  };

  return (
    <View style={styles.listContainer}>
      {items.map((item, index) => (
        <View style={styles.itemContainer} key={index}>
          <MaterialCommunityIcons
            name={"checkbox-blank-outline"}
            size={24}
            color="#fffafa"
          />
          <TextInput
            style={styles.input}
            value={item}
            multiline={false}
            returnKeyType="next"
            onChangeText={(text) => updateItem(index, text)}
            onKeyPress={(event) => handleKeyPress(index, event)}
          />
        </View>
      ))}
      {items.length < MaxItems && (
        <View style={styles.addItemContainer}>
          <TouchableOpacity
            onPress={handleAddButtonClick}
            style={styles.addButton}
          >
            <Text style={styles.newItemButton}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1B1B1B",
    alignItems: "left",
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFAFA",
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  newItemButton: {
    fontSize: 30,
    marginLeft: 2,
    color: "#FFFAFA",
  },
  addButtonText: {
    color: "#FFFAFA",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: "#FFFAFA",
  },
  bullet: {
    width: 25,
    height: 25,
    resizeMode: "stretch",
  },
});

export default OutlineEditList;
