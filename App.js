import {StatusBar} from "expo-status-bar";
import {SafeAreaView, Text, View} from "react-native";

import tw from "twrnc";

export default function App() {
	return (
		<View className="flex-1 items-center justify-center bg-black">
			<Text className="text-white text-2xl">
				Open up App.js to start working on your app!
			</Text>
			<StatusBar style="auto" />
		</View>
	);
}
