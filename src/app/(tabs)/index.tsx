import {View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchInput from '@/components/SearchInput'

export default function HomeLayout(){
    return(
        <SafeAreaView edges={['top']}>
        <View className="flex-col gap-2 items-center">
            <Text className="text-2xl font-bold">MZ</Text>
        <View>
            <SearchInput />
        </View>
        
        </View></SafeAreaView>
    )
}