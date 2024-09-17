import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackActions} from '@react-navigation/native';

const Home = ({navigation}) => {
  const handleClick = () => {
    // navigation.navigate('Dashboard', {name: 'Mustafa'});
    navigation.dispatch(StackActions.replace('Dashboard'));
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go To Dashboard" onPress={() => handleClick()} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
