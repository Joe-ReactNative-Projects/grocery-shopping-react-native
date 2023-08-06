import {StatusBar} from "expo-status-bar";
import {SafeAreaView, Text, Image, View, TouchableOpacity} from "react-native";
import EmptyDark from "./../../assets/EmptyDark.png";
import Emojie from "./../../assets/Emoji.png";
import Sliderdark from "./../../assets/Sliderdark.png";
import {AntDesign} from "@expo/vector-icons";

export default function Onboardv1({navigation}) {
	return (
		<SafeAreaView className="flex-1  bg-[#fff]">
			<View className="flex-1 px-16  ">
				<StatusBar style="auto" hidden={true} />

				{/* Empty images */}
				<View className="flex-1">
					<View className="flex-1 mb-16 items-center justify-center">
						<Image className="mt-10" source={EmptyDark} />
					</View>
				</View>

				{/* Top part */}
				<View className="flex-1 justify-center ">
					<Text className="text-greyb1 font-bold text-[30px] mb-8">
						Your holiday shopping delivered to your home{"  "}
						<Image source={Emojie} />
					</Text>
					<Text className="mb-8 text-[18px] text-greyb2 text-left">
						There's something for everyone to enjoy with Sweet Shop Favourites
					</Text>

					<Image className="mb-8" source={Sliderdark} />

					<TouchableOpacity
						className="bg-lightblue py-5 w-fit rounded-xl flex-row	justify-center"
						onPress={() => navigation.navigate("Onboardv2")}>
						<Text className="text-center text-greyb6 text-[16px] mr-5">
							Get Started
						</Text>
						<AntDesign name="arrowright" size={24} color="#FAFBFD" />
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}
