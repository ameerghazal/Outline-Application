import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  text: {
    color: "#FFFAFA",
    fontFamily: "MontserratMedium",
    fontSize: 16,
  },
  alertText: {
    color: "red",
  },
  section: {
    marginBottom: 10,
    backgroundColor: "#4B4B4B",
    borderRadius: 10,
  },
  sectionItem: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  marginBottom: {
    marginBottom: 10,
  },
});

export default globalStyles;
