import { Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Settings(){
    return(
        <SafeAreaView edges={['top']}>
        <View><Text>Settings</Text></View></SafeAreaView>
    )
}