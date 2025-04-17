import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {fetchUsers} from './userSlice';
import {useAppDispatch, useAppSelector} from '../../app/hooks';

const UserView = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <View style={styles.container}>
      <Text>List of users</Text>
      {user.loading && <Text> Loading....</Text>}
      {!user.loading && user.error ? <Text> {user.error}</Text> : null}
      {!user.loading && user.users.length
        ? user.users.map(user => {
            return <Text key={user.id}>{user.name}</Text>;
          })
        : null}
    </View>
  );
};

export default UserView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
  },
});
