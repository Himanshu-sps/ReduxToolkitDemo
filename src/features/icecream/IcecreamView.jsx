import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ordered, reStocked} from './iceCreamSlice';

const IcecreamView = () => {
  const numOfIcecream = useSelector(state => state.iceCream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Number of Ice cream: {numOfIcecream}</Text>
      <Button
        title="Order icecream"
        onPress={() => {
          dispatch(ordered());
        }}
      />
      <Button
        title="Restock icecream"
        onPress={() => {
          dispatch(reStocked(10));
        }}
      />
    </View>
  );
};

export default IcecreamView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
});
