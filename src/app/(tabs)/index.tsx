import MovieCard from "@/components/MovieCard";
import SearchInput from "@/components/SearchInput";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeLayout() {
  const router = useRouter();

  const {
    data: movies,
    loading,
    error,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <SafeAreaView edges={["top"]}>
      <View className="flex-1 gap-2 items-center bg-blue-950 min-h-screen">
        <Image
          source={require("@/assets/images/bg.png")}
          className="w-full absolute z-0 h-full"
          resizeMode="cover"
        />
        <ScrollView
          className="flex-1 px-5 mt-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ minHeight: 100, paddingBottom: 10 }}
        >
          <Image
            source={require("@/assets/images/icon.png")}
            className="w-20 h-20 rounded-lg mx-auto mb-2"
          />
          {loading ? (
            <ActivityIndicator
              size={"large"}
              color="#0000ff"
              className="mt-10 self-center"
            />
          ) : error ? (
            <Text>{error?.message}</Text>
          ) : (
            <View>
              {/* @ts-ignore */}
              <SearchInput
                onPress={() => router.push("/search")}
                placeholder="Search for movies"
              />
              <>
                <Text className="font-bold text-lg text-white mt-5 mb-3">
                  Latest Movies
                </Text>
                <FlatList
                  data={movies?.results ?? []}
                  renderItem={({ item }) => <MovieCard {...item} />}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={3}
                  columnWrapperStyle={{
                    justifyContent: "flex-start",
                    gap: 20,
                    paddingRight: 5,
                    marginBottom: 3,
                  }}
                  className="mt-2 pb-32"
                  scrollEnabled={false}
                />
              </>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
