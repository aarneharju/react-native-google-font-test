import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts, Lato_100Thin } from '@expo-google-fonts/lato';

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Lato_100Thin', fontSize: 40 }}>Lato Thin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
