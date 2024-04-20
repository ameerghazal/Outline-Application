import { useState } from "react";
import { TouchableOpacity } from "react-native";
const ToggleSVG = ({ callback, el1, el2 }) => {
  const [liked, setLiked] = useState(false);

  return (
    <TouchableOpacity
      style={{ flexDirection: "row" }}
      onPress={() => {
        setLiked(!liked);
        if (callback) {
          callback();
        }
      }}
    >
      {liked ? el1 : el2}
    </TouchableOpacity>
  );
};

export default ToggleSVG;
