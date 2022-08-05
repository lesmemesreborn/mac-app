import { View, Text, StyleSheet, Image, FlatList } from "react-native"
import React from "react"
import { SIZES, COLORS } from "../../constants"
import { categories } from "../categories"

const Item = ({ image, name }) => (
  <View style={styles.item}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.itemText}>{name}</Text>
  </View>
)

const Categories = () => {
  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.texth1}>Hey,</Text>
        <Text style={styles.texth2}>what's up?</Text>
      </View>
      <FlatList
        key={""}
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { paddingTop: 60, marginLeft: 25, backgroundColor: COLORS.black },
  title: { marginBottom: 15 },
  texth1: {
    fontSize: SIZES.h1,
    fontWeight: "bold",
    color: "white",
  },
  texth2: {
    fontSize: SIZES.h2,
    fontWeight: "400",
    color: "white",
  },
  image: {
    width: "90%",
    height: 40,
    borderWidth: 1,
  },
  item: {
    borderRadius: 15,
    backgroundColor: COLORS.gray,
    width: 80,
    height: 80,
    marginRight: 25,
    marginBottom: 10,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "700",
    color: "white",
  },
})

export default Categories
