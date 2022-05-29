import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { increaseByOne, decreaseByOne } from '../redux/slices/counterSlice';

export default function Home() {
   const count = useSelector(state => state.counter.value);
   const dispatch = useDispatch();

   return (
      <View style={styles.container}>
         <StatusBar style="auto" />
         <Text style={styles.text}>Count: {count}</Text>

         <Pressable style={styles.button} onPress={() => dispatch(increaseByOne())}>
            <Text style={styles.buttonText}>Increase Button!</Text>
         </Pressable>
         <Pressable style={styles.button} onPress={() => dispatch(decreaseByOne())}>
            <Text style={styles.buttonText}>Decrease Button!</Text>
         </Pressable>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
   },
   text: {
      color: '#eee',
      padding: 10,
      fontSize: 20,
   },
   buttonText: {
      color: '#eee',
      fontSize: 15,
   },
   button: {
      marginBottom: 20,
      backgroundColor: '#222',
      padding: 10,
      fontSize: 20,
   },
});
