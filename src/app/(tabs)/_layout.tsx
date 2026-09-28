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
      <View className="flex-col items-center justify-center w-[100px] mt-8 bg-blue-500 h-[66px] rounded-full">
        <View>{icon}</View>
        <Text className="text-xl text-white font-bold ">{title}</Text>
      </View>
    );
  }
  return (
    <View className="mt-6 flex-col items-center justify-center w-[112px]">
      <View>{icon}</View>
      <Text className="text-sm text-white ">{title}</Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          
        },
        tabBarStyle: {
          margin: "auto",
          position: "absolute",
          height: 64,
          marginBottom: 20,
          marginHorizontal: 10,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#03288d",
          borderColor: 'transparent'
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
              icon={<Home size={30} color={focused ? "white" : "white"} />}
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
              icon={<Search size={30} color={focused ? "white" : "white"} />}
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
              icon={<Bookmark size={30} color={focused ? "white" : "white"} />}
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
              icon={<Settings size={30} color={focused ? "white" : "white"} />}
            />
          ),
        }}
      />
    </Tabs>
  );
}
