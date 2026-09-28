import MovieCard from "@/components/MovieCard";
import SearchInput from "@/components/SearchInput";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const search = () => {
  const {
    data: movies,
    loading,
    error,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <SafeAreaView edges={["top"]}>
      <View className="flex-1 bg-blue-900 min-h-screen">
        <Image
          source={require("@/assets/images/bg.png")}
          className="w-full absolute z-0 h-full"
          resizeMode="cover"
        />

        <FlatList
          data={movies?.results ?? []}
          renderItem={({ item }) => <MovieCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "center",
            gap: 20,
            marginVertical: 16,
          }}
          contentContainerStyle={{ paddingBottom: 100 }}
          className="mt-2 pb-32"
          ListHeaderComponent={
            <>
              <View className="w-full flex-row justify-center mt-20">
                <Image
                  source={require("@/assets/images/icon.png")}
                  className="w-20 h-20 rounded-lg mx-auto mb-2"
                />
              </View>
              <View className="my-5 flex-row justify-center">
                {/* @ts-ignore */}
                <SearchInput placeholder="Search for movies"  />
              </View>
              {loading && <ActivityIndicator size="large" color="0000ff" />}
              {error && (
                <Text className="text-red-500">Error: {error?.message}</Text>
              )}
              {!loading && !error && 'search term'.trim() && movies?.results.length > 0 && (
                <Text className="text-white text-xl font-bold">Search Results for: 
                  <Text className="text-violet-500">Search Term</Text>
                </Text>
              )}
            </>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default search;

const styles = StyleSheet.create({});
