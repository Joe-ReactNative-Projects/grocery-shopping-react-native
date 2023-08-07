import {StatusBar} from "expo-status-bar";
import {
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	Text,
	ScrollView,
	Image,
	View,
	ImageBackground,
	FlatList,
} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import Topb from "../../assets/topback.png";

import {DATA} from "./../data/FruitsTea.js";
import EmptyDark from "./../../assets/EmptyDark.png";

export default function Home() {
	return (
		<View className="flex-1 lightblue">
			<StatusBar style="auto" />

			{/* Name and notification */}
			<View className="pt-24 px-5 bg-lightblue">
				{/* Top part */}

				<View className="flex-row justify-between">
					<Text className="text-greyb5 font-semibold text-[22px] mb-6">
						Hey, Halal
					</Text>
					<TouchableOpacity>
						<AntDesign name="shoppingcart" size={24} color="white" />
					</TouchableOpacity>
				</View>
				<TouchableOpacity className="rounded-full py-5 px-5 bg-darkblue flex-row mb-6">
					<View className="mr-4">
						<AntDesign name="search1" size={24} color="#F8F9FB" />
					</View>

					<TextInput
						placeholder="Search products or store"
						placeholderTextColor="#8891A5"
						className="text-[16px] text-greyb6"
						// value={email}
						// onChangeText={(text) => setEmail(text)}
					/>
				</TouchableOpacity>

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
							WITHIN
						</Text>
						<Text className="text-[14px] text-greyb5">1 Hour</Text>
					</View>
				</View>
			</View>

			<ScrollView className="">
				<View className="">
					{/* Top part */}
					<View className="">
						<ImageBackground
							source={Topb}
							resizeMode="contain"
							className="w-full h-80 justify-center -mt-12">
							<View className="px-5 flex-row justify-between items-center gap-x-5">
								<View className="py-10 px-5 rounded-2xl bg-lightyellow flex-1">
									<Text className="text-[26px] font-light mb-2">
										<Text className="font-extrabold ">346</Text>
										{""} USD
									</Text>
									<Text className="font-medium text-[14px] text-greyb">
										Your total savings
									</Text>
								</View>
								<View className="py-10 px-5 rounded-2xl bg-[#E4DDCB] flex-1 ">
									<Text className=" text-[26px] font-light mb-2">
										<Text className="font-extrabold ">215</Text>
										{""} HRS
									</Text>
									<Text className="font-medium text-[14px] text-greyb">
										Your total savings
									</Text>
								</View>
							</View>
						</ImageBackground>
					</View>

					<View className="px-5 -mt-12">
						<Text className=" text-[20px] mb-5 font-bold text-greyb text-left">
							Deals on Fruits & Tea
						</Text>
						<View className="flex-row flex-wrap gap-5">
							{DATA.map((DATA) => {
								return (
									<View className="bg-greyb5 w-40 h-56 py-5 px-5 rounded-lg justify-between">
										<View className="justify-center items-center">
											<Image source={EmptyDark} className="w-20 h-20" />
										</View>
										<View>
											<Text className="font-semibold text-[14px] mb-2 ">
												{DATA.price}
											</Text>
											<Text className="text-[12px] font-normal text-greyb2">
												{DATA.title}
											</Text>
										</View>
									</View>
								);
							})}
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}
