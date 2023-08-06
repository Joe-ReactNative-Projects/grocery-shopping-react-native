import {StatusBar} from "expo-status-bar";
import {SafeAreaView, Text, View} from "react-native";

import tw from "twrnc";

export default function Home() {
	return (
		<View className="flex-1 items-center justify-center bg-black">
			<Text className="text-white text-2xl">This is the Home Screen </Text>
			{/* <StatusBar style="auto" /> */}
		</View>
	);
}
