import { StyleSheet, Text, Image, View } from "react-native"
import React from "react"

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png",
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png",
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  },

  image: {
    height: 50,
    width: 57,
  },
})

export default Header
