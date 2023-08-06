import {StatusBar} from "expo-status-bar";
import {SafeAreaView, Text, Image, View, TouchableOpacity} from "react-native";
import Empty from "./../../assets/empty.png";
import Emojie from "./../../assets/Emoji.png";
import Slider from "./../../assets/Slider.png";
import {AntDesign} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";

export default function Onboardv2({navigation}) {
	return (
		<SafeAreaView className="flex-1  bg-darkblue">
			<View className="flex-1 px-16  ">
				<StatusBar style="auto" hidden={true} />

				<Ionicons
					name="arrow-back"
					size={24}
					color="#FAFBFD"
					onPress={() => navigation.navigate("Onboardv1")}
				/>

				{/* Top part */}
				<View className="flex-1 justify-center ">
					<Text className="text-greyb6 font-bold text-[30px] mb-8">
						Your holiday shopping delivered to your home{"  "}
						<Image source={Emojie} />
					</Text>
					<Text className="text-[18px] text-[#B2BBCE] text-left">
						There's something for everyone to enjoy with Sweet Shop Favourites
					</Text>

					<Image className="mt-8" source={Slider} />
				</View>

				{/* Empty images */}
				<View className="flex-1 justify-between  ">
					<View className="items-center">
						<Image className="mt-10" source={Empty} />
					</View>

					<TouchableOpacity
						className="bg-[#FAFBFD] py-5 w-fit rounded-xl flex-row	justify-center"
						onPress={() => navigation.navigate("Home")}>
						<Text className="text-center text-[16px] mr-5"> Get Started </Text>
						<AntDesign name="arrowright" size={24} color="black" />
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}
