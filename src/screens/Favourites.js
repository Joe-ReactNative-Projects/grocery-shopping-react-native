import {StatusBar} from "expo-status-bar";
import {
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	Image,
	Button,
	Text,
	View,
} from "react-native";

export default function Favourites() {
	return (
		<View className="flex-1 justify-center items-center">
			<StatusBar style="dark" />

			<Text className="text-2xl">This is the Favourites page</Text>
		</View>
	);
}
