import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Tech = ({ children: title }) => {
  return <Text style={styles.tech}>{title}</Text>
}

const styles = StyleSheet.create({
  tech: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  }
})

export default Tech
