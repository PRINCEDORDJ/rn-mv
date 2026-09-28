import { Search } from "lucide-react-native";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onPress?: () => void;
}

const SearchInput = ({ onPress, placeholder, onChangeText, value }: Props) => {
  return (
    <View>
      <Pressable className="flex-row justify-between border border-blue-700 rounded-lg ">
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          className="p-4  rounded-full text-lg w-[85%] "
          placeholderTextColor={"white"}
          onPress={onPress}
        />
        <Pressable onPress={onPress} className="p-4 bg-blue-500 rounded-r-lg">
          <Search color={"white"} size={25} />
        </Pressable>
      </Pressable>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
