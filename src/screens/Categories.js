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
import EmptyDark from "./../../assets/EmptyDark.png";
import {AntDesign} from "@expo/vector-icons";

export default function Categories() {
	return (
		<View className="flex-1 lightblue">
			<StatusBar style="light" />

			{/* Name and notification */}
			<View className="pt-20 px-5 bg-lightblue">
				{/* Top part */}

				<Text className="text-greyb5 font-semibold text-[22px] mb-6">
					Hey, Halal
				</Text>

				<Text className="mb-8 text-[30px] text-greyb text-left">Shop</Text>
				<Text>By Category</Text>

				{/* Two drop downs */}
				<View className="flex-row justify-between mb-3">
					<View>
						<Text className="text-[11px] text-greyb5 font-extrabold	opacity-50 mb-1">
							DELIVERY TO
						</Text>
						<Text className="text-[14px] text-greyb5">
							Green Way 3000, Sylhet
						</Text>
					</View>

					<View>
						<Text className="text-[11px] text-greyb5 font-extrabold	opacity-50 mb-1">
							Within
						</Text>
						<Text className="text-[14px] text-greyb5">1 Hour</Text>
					</View>
				</View>
			</View>

			<SafeAreaView className="flex-1">
				<View className="bg-white px-5">
					{/* Top part */}

					{/* Recommended section */}

					<Text className="mb-8 text-[30px] text-greyb text-left">
						Recommended
					</Text>
				</View>
			</SafeAreaView>
		</View>
	);
}
