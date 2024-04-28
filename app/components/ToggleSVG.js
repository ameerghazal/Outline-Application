import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

const ToggleSVG = ({ callback, el1, el2, toggled }) => {
  const [isToggled, setToggled] = useState(toggled);

  return (
    <TouchableOpacity
      style={{ flexDirection: "row" }}
      onPress={() => {
        setToggled(!isToggled);
        if (callback) {
          callback();
        }
      }}
    >
      {/* el2 is the element you want when toggled (ex: check box is checked) */}
      {isToggled ? el2 : el1}
    </TouchableOpacity>
  );
};

export default ToggleSVG;
