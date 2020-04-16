// @ts-ignore
import React, { useEffect } from 'react';
// @ts-ignore
import { StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import { useDispatch, useSelector } from 'react-redux'
// @ts-ignore
import { getJoke } from 'lerna-test-multi-redux/ducks/joke'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  const joke = useSelector((state: any) => state.joke.joke);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getJoke())
  }, [dispatch])

  return (
    <View style={styles.container}>
      <Text>{joke ? `random joke: ${joke.value}` : ''}</Text>
    </View>
  );
}
