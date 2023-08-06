import {StatusBar} from "expo-status-bar";
import {SafeAreaView, Text, View} from "react-native";

export default function Onboardv2() {
	return (
		<View className="flex-1 items-center justify-center">
			<Text className="text-white text-2xl">
				Open up App.js to start working on your app!
			</Text>
			<StatusBar style="auto" />
		</View>
	);
}
