import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Search } from 'lucide-react-native'

const SearchInput = () => {
  return (
    <View className="flex-row gap-border mx-2">
      <TextInput placeholder='Search for something' className='p-4  rounded-full text-lg'/>
      <Pressable onPress={()=>{}} className="p-4 bg-blue-500">
        <Search color={'white'} size={25}/>
      </Pressable>
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({})