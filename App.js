import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App=function() {
  return (
    <View style={styles.container}> 
      <View>
        <Text style={styles.text}>  110518037  </Text>
      </View>
      <View>
        <Text style={styles.text2}> 陳鈺文 </Text>
      </View>
      <View>
        <Text style={styles.text3}> \ ^ o ^ / </Text>
      </View>
    </View>
  );
}

// const App=() => <Text style={styles.text1}>110518037</Text>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edddbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    backgroundColor: '#4a3201',
    fontSize: 23,
  },
  text2: {
    color: '#fff',
    backgroundColor: '#4a3201',
    fontSize: 40,
  },
  text3: {
    color: '#4a3201',
    fontSize: 40,
  },
});

export default App;
