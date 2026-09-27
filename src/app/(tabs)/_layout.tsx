import { Tabs } from "expo-router";
import { Bookmark, Home, Search, Settings } from "lucide-react-native";
import { Text, View } from "react-native";

interface Props {
  focused: boolean;
  title: string;
  icon: React.ReactNode;
}

const TabNav = ({ focused, title, icon }: Props) => {
  if (focused) {
    return (
      <View className="flex-col items-center justify-center w-[112px] mt-7 bg-purple-700 h-[63px] rounded-full">
        <View>{icon}</View>
        <Text className="text-xl text-white font-bold ">{title}</Text>
      </View>
    );
  }
  return (
    <View className="mt-7">
      <View>{icon}</View>
      <Text className="text-xl text-white font-bold ">{title}</Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          width: "90%",
          position: "fixed",
          margin: "auto",
          marginBottom: 20,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabNav
              focused={focused}
              title="Home"
              icon={<Home size={30} color={focused ? "white" : "black"} />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabNav
              focused={focused}
              title="Search"
              icon={<Search size={30} color={focused ? "white" : "black"} />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <TabNav
              focused={focused}
              title="Saved"
              icon={<Bookmark size={30} color={focused ? "white" : "black"} />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <TabNav
              focused={focused}
              title="Settings"
              icon={<Settings size={30} color={focused ? "white" : "black"} />}
            />
          ),
        }}
      />
    </Tabs>
  );
}
