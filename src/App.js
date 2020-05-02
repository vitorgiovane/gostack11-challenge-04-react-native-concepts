import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet
} from "react-native";

import api from './services/api'
import Repository from "./components/Repository";

export default function App() {
  const [repositories, setRepositories] = useState([])
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    api.get('repositories').then(response => {
      const repositories = response.data
      setRepositories(repositories)
      console.log(repositories)
    })
  }, [])

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={repositories}
          style={styles.container}
          keyExtractor={repository => repository.id}
          renderItem={({ item: repository }) => (
            <Repository repository={repository} />
          )}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  }
});
