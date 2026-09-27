import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


const saved = () => {
  return (
    <SafeAreaView edges={['top']}>
    <View>
      <Text>saved</Text>
    </View></SafeAreaView>
  )
}

export default saved

const styles = StyleSheet.create({})