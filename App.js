import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Header from "./src/components/Header"
import Categories from "./src/components/Categories"
import Popular from "./src/components/Popular"

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Categories />
      <Popular />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})

export default App
