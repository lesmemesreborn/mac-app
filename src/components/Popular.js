import { View, Text, StyleSheet, Image, FlatList } from "react-native"
import React from "react"
import { SIZES, COLORS } from "../../constants"
import { popular } from "../popular"

const Item = ({ image, name, price }) => (
  <View style={styles.item}>
    <Image source={{ uri: image }} style={styles.image} />
    <View>
      <Text style={name.length < 14 ? styles.itemText : styles.itemTextSmall}>
        {name}
      </Text>
      <Text style={styles.itemPrice}>{price}</Text>
    </View>
  </View>
)

const Popular = () => {
  const renderItem = ({ item }) => (
    <Item name={item.name} image={item.image} price={item.price} />
  )

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.texth1}>Popular</Text>
      </View>
      <FlatList
        key={""}
        data={popular}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    marginLeft: 25,
    backgroundColor: COLORS.black,
  },
  title: {
    marginBottom: 15,
  },
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
    resizeMode: "stretch",
    width: 60,
    height: 30,
    position: "absolute",
    top: 5,
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
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  itemText: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "700",
    color: "white",
    numberOfLines: 1,
    marginTop: "75%",
  },
  itemPrice: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "700",
    color: COLORS.primary,
  },
  itemTextSmall: {
    fontSize: 8,
    textAlign: "center",
    fontWeight: "700",
    color: "white",
    numberOfLines: 1,
    marginTop: "75%",
  },
})

export default Popular
