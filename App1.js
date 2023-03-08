// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
//   Button,
//   Alert,
//   ScrollView,
//   FlatList,
//   Pressable,
//   Image,
//   Modal,
// } from "react-native";
// import AddGoal from "./components/AddGoal";
// import { Item } from "./Item";

// export default function App() {
//   const [goals, setGoals] = useState([]);

//   const addGoal = (newGoal) => {
//     setGoals([...goals, newGoal]);
//   };
//   console.log(goals);
//   return (
//     <View style={styles.container}>
//         <AddGoal addGoal={addGoal} />

//       <View style={styles.bottomSection}>
//         <Image
//           source={require("./assets/CoverPage.jpg")}
//           style={{
//             width: "100%",
//             height: "100%",
//             position: "absolute",
//             top: 0,
//           }}
//         />
//         <FlatList
//           style={styles.model}
//           data={goals}
//           renderItem={(obj) => (
//             <Pressable
//               style={(action) => {
//                 if (action.pressed) {
//                   return styles.pressedItem;
//                 } else {
//                   return styles.normalItem;
//                 }
//               }}
//               onPress={() => {
//                 console.log("hello");
//               }}
//             >
//               <Text key={obj.index} style={styles.goalsItems}>
//                 {obj.item}
//               </Text>
//             </Pressable>
//           )}
//         />
//       </View>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // paddingTop: 30,
//   },

//   bottomSection: {
//     flex: 4,
//     backgroundColor: "wheat",
//     paddingTop: 30,
//     // justifyContent: "center",
//     alignItems: "center",
//   },

//   btn1: {
//     padding: 1,
//     backgroundColor: "#5F9EA0",
//     borderRadius: 10,
//     borderColor: "",
//   },

//   goalsItems: {
//     width: 300,
//     backgroundColor: "orange",
//     padding: 10,
//     marginBottom: 8,
//   },

//   model: {
//     paddingRight: 10,
//   },

//   pressedItem: {
//     backgroundColor: "red",
//   },
//   normalItem: {
//     // backgroundColor: "orange",
//   },
// });
