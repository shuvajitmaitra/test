import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../Screens/Home/HomeScreen";
import DetailsScreen from "../../Screens/DetailsScreen/DetailsScreen";

const HomeStack = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        // options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}
