import MovieCard from "@/components/MovieCard";
import SearchInput from "@/components/SearchInput";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useEffect, useState } from "react";
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
    refetch: loadMovies,
    loading,
    error,
    reset,
  } = useFetch(() => fetchMovies({ query: "" }), false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timeoutId =setTimeout(async () => {
      if (searchTerm.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);
    return () => clearTimeout(timeoutId);

  }, [searchTerm]);

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
              <View className="w-full flex-row justify-center mt-1">
                <Image
                  source={require("@/assets/images/icon.png")}
                  className="w-20 h-20 rounded-lg mx-auto mb-2"
                />
              </View>
              <View className="my-5 flex-row justify-center px-3">
                {/* @ts-ignore */}
                <SearchInput
                  placeholder="Search for movies"
                  value={searchTerm}
                  onChangeText={(text: string) => setSearchTerm(text)}
                />
              </View>
              {loading && <ActivityIndicator size="large" color="0000ff" />}
              {error && (
                <Text className="text-red-500">Error: {error?.message}</Text>
              )}
              {!loading &&
                !error &&
                searchTerm.trim() &&
                movies?.results.length > 0 && (
                  <Text className="text-white text-xl font-bold">
                    Search Results for:
                    <Text className="text-violet-500">{searchTerm}</Text>
                  </Text>
                )}
            </>
          }
          ListEmptyComponent={
            !loading && !error ?(
              <View className="mt-10 px-5">
                <Text className="text-white text-center text-lg">
                  {searchTerm.trim()
                    ? `No results found for "${searchTerm}"`
                    : "Start typing to search for movies."}
                </Text>
              </View>
            ) : null
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default search;

const styles = StyleSheet.create({});
