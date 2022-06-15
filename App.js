import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import axios from "axios";
import { Button } from "@rneui/themed";
import { ButtonGroup } from "@rneui/themed";
export default function App() {
  ////////////////////to Create data
  const post = () => {
    axios.post("https://test-9af07-default-rtdb.firebaseio.com/data.json", {
      name: "abd",
      age: "21",
    });
  };
  ///////////////////to read data
  function ap() {
    axios
      .get("https://test-9af07-default-rtdb.firebaseio.com/data.json")
      .then((response) => alert(JSON.stringify(Object.values(response.data))))
      .catch((error) => alert(error))
      .finally(() => alert("its executed"));
  }
  /////////////////to Update data
  function update() {
    const employee = {
      name: "yayha",
      age: "9",
    };
    axios
      .put("https://test-9af07-default-rtdb.firebaseio.com/data.json", employee)
      .then((res) => console.log(res.data));
  }
  ///////////////////to delete
  function deletee() {
    axios
      .delete("https://test-9af07-default-rtdb.firebaseio.com/data.json")
      .then((res) => console.log(res.data));
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={post}
        style={{
          width: 100,
          height: 27,
          backgroundColor: "green",
          borderRadius: "20%",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: "10px",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>On Create</Text>
      </Pressable>
      <Pressable
        onPress={ap}
        style={{
          width: 100,
          height: 27,
          backgroundColor: "green",
          borderRadius: "20%",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: "10px",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>Show</Text>
      </Pressable>
      <Pressable
        onPress={update}
        style={{
          width: 100,
          height: 27,
          backgroundColor: "green",
          borderRadius: "20%",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: "10px",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>Update</Text>
      </Pressable>
      <Pressable
        onPress={deletee}
        style={{
          width: 100,
          height: 27,
          backgroundColor: "green",
          borderRadius: "20%",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: "10px",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>deletee</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
