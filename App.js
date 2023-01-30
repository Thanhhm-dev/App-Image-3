import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.screen}>
          <Text style={[styles.number]}>12121212121</Text>
        </View>
        <View style={styles.keyboard}>
          <View style={styles.row}>
            <Text style={[styles.buttonCircle, styles.firstRow]}>C</Text>
            <Text style={[styles.buttonCircle, styles.firstRow]}>+/-</Text>
            <Text style={[styles.buttonCircle, styles.firstRow]}>%</Text>
            <Text style={[styles.buttonCircle, styles.lastChild]}>÷</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.buttonCircle}>7</Text>
            <Text style={styles.buttonCircle}>8</Text>
            <Text style={styles.buttonCircle}>9</Text>
            <Text style={[styles.buttonCircle, styles.lastChild]}>x</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.buttonCircle}>4</Text>
            <Text style={styles.buttonCircle}>5</Text>
            <Text style={styles.buttonCircle}>6</Text>
            <Text style={[styles.buttonCircle, styles.lastChild]}>-</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.buttonCircle}>1</Text>
            <Text style={styles.buttonCircle}>2</Text>
            <Text style={styles.buttonCircle}>3</Text>
            <Text style={[styles.buttonCircle, styles.lastChild]}>+</Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.buttonCircle, styles.buttonZero]}>0</Text>
            <Text style={styles.buttonCircle}>,</Text>
            <Text style={[styles.buttonCircle, styles.lastChild]}>=</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  screen: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  number: {
    color: '#e7e7e7',
    fontSize: 55
  },
  keyboard: {
    flex: 4.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonCircle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    lineHeight: 80,
    marginTop: 10,
    backgroundColor: '#333333',
    color: '#e7e7e7',
    textAlign: 'center',
    fontSize: 35
  },
  firstRow: {
    backgroundColor: '#a5a5a5',
    color: '#0a0a0a'
  },
  lastChild: {
    backgroundColor: '#fe9505'
  },
  buttonZero: {
    width: 180
  }
});
