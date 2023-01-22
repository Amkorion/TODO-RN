import { StyleSheet, Text, Pressable, LinearGradient } from "react-native";

function MyButton({
  title,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
}) {
  return (
    <Pressable
      style={{
        ...styles.container,
        ...buttonStyle,
        backgroundColor: buttonColor || "#5e0acc",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.title,
          ...textStyle,
          color: titleColor || "white",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}

export default MyButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "#5e0acc",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});
