import React from "react"
import { StyleSheet, Text, ScrollView } from "react-native"
import Header from "./src/components/Header"
import Categories from "./src/components/Categories"
import Popular from "./src/components/Popular"

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Categories />
      <Popular />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    fontFamily: "Georgia",
  },
})

export default App
