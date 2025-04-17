import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ordered, reStocked} from './cakeSlice';
import {useAppSelector, useAppDispatch} from '../../app/hooks';

const CakeView = () => {
  const numOfCakes = useAppSelector(state => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Text>Number of cakes: {numOfCakes}</Text>
      <Button
        title="Order cake"
        onPress={() => {
          dispatch(ordered());
        }}
      />
      <Button
        title="Restock cake"
        onPress={() => {
          dispatch(reStocked(3));
        }}
      />
    </View>
  );
};

export default CakeView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
});
