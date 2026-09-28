import { MovieProps } from "@/types/interface";
import { Link } from "expo-router";
import { Star } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  title,
  id,
  vote_average,
  poster_path,
  release_date,
  original_language,
}: MovieProps) => {
  return (
    <Link href={`/movies/${id}`} asChild className="bg-black rounded-lg">
      <TouchableOpacity className="w-[30%] rounded-lg">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://placehold.co/600x400/1a1a1a/FFFFFF.png`,
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-sm text-white font-bold" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row gap-1 items-center  ">
          <Star size={15} fill={"yellow"} />
          <Text className="text-sm text-white font-bold">
            {Math.round(vote_average * 10) / 10}
          </Text>
        </View>
        <View className="flex-row gap-1 items-center justify-between ">
          <Text className="text-sm text-white font-bold">
            {release_date.split("-")[0]}
          </Text>
          <Text className="text-sm text-white font-medium">Movie</Text>
        </View>
        <View className="absolute top-2 right-2 bg-slate-900 rounded-l-full rounded-r-full w-10 p-1 flex-1 justify-center items-center">
          <Text className="text-sm text-white font-bold ">
            {original_language}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
