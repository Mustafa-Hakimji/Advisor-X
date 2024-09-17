import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Dashboard = ({route}) => {
  console.log('====================================');
  console.log('Name received --> ', route?.params?.name);
  console.log('====================================');
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
