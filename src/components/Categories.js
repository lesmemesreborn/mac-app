import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { SIZES } from "../../constants"

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texth1}>Categories</Text>
      <Text style={styles.texth2}>Categories</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { paddingTop: 60 },
  texth1: {
    fontSize: SIZES.h1,
  },
  texth2: {
    fontSize: SIZES.h2,
  },
})

export default Categories
