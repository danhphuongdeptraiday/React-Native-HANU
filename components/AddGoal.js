import { useState } from "react";
import { StyleSheet, Button, Text, View, TextInput, Modal } from "react-native";

export default function AddGoal(props) {
  const [newGoal, setNewGoal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = false(true);

  return (
    <View style={styles.topSection}>
      <Button
        title="Open"
        onPress={() => {
          setModalVisiable(true);
        }}
      />
      <Modal transparent={false} visible={true}>
        <View style={styles.topSection}>
          <TextInput
            value={newGoal}
            onChangeText={setNewGoal}
            style={styles.input}
            placeholder="Enter somethingg"
          ></TextInput>
          <View style={styles.btn1}>
            <Button
              onPress={() => props.addGoal(newGoal)}
              color="blue"
              title="Add Goal"
            ></Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  topSection: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  input: {
    borderWidth: 2,
    width: 250,
    padding: 10,
    display: "inline-block",
    borderRadius: 10,
    marginRight: 10,
  },
  btn1: {
    padding: 4,
    backgroundColor: "#5F9EA0",
    borderRadius: 10,
    borderColor: "",
  },
});
