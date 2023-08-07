import {StatusBar} from "expo-status-bar";
import {
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	Image,
	Button,
	ScrollView,
	Flatlist,
	Text,
	View,
} from "react-native";
import EmptyDark from "./../../assets/EmptyDark.png";
import {AntDesign} from "@expo/vector-icons";
import {DATA} from "./../data/FoodCategory";
import {categories} from "./../data/FoodCategory";

export default function Categories() {
	return (
		<View className="flex-1 lightblue">
			<StatusBar style="light" />

			{/* Name and notification */}
			<View className="pt-24 px-5 bg-lightblue">
				{/* Top part */}

				<View className="flex-row justify-between">
					<Text className="text-greyb5 font-semibold text-[22px] mb-6">
						Hey, Halal
					</Text>
					<View className="flex-row gap-8">
						<AntDesign name="search1" size={24} color="#F8F9FB" />
						<AntDesign name="shoppingcart" size={24} color="white" />
					</View>
				</View>

				<View className="mb-3">
					<Text className="text-[50px] text-greyb6 text-left font-light">
						Shop
					</Text>
					<Text className="text-[50px] text-greyb6 text-left font-extrabold">
						By Category
					</Text>
				</View>
			</View>

			<ScrollView className="flex-1">
				<View className="bg-white px-5">
					{/* Top part */}

					{/* Recommended section */}

					<Text className="mb-8 text-[30px] text-greyb text-left">
						Recommended
					</Text>

					{/* Categories */}

					<View>
						<Flatlist
							horizontal
							showsHorizontalScrollIndicator={false}
							data={categories}
							keyExtractor={(item) => item.id}
							className="overflow-visible"
							renderItem={({item}) => {
								return (
									<TouchableOpacity>
										<Text>{item.title}</Text>
									</TouchableOpacity>
								);
							}}
						/>
					</View>
				</View>

				<View className="px-5 mt-12">
					<View className="flex-col gap-y-7">
						{DATA.map((DATA, index) => {
							const isEvenItem = index % 2 === 0;
							const imageBgColor = isEvenItem ? "bg-[#FFDC83]" : "bg-[#FFC3BB]"; // Define alternate background colors here
							return (
								<View className="flex-row h-48 gap-x-5">
									{/* Image */}
									<View
										className={`flex-1 rounded-lg justify-center items-center ${imageBgColor}`}>
										<Image source={EmptyDark} className="w-20 h-20" />
									</View>

									{/* Text */}
									<View className="flex-1 py-7 justify-between ">
										<View>
											<Text className="text-[18px] mb-2 font-bold text-greyb">
												{DATA.title}
											</Text>
											<Text className="text-[16px] font-normal text-greyb2">
												{DATA.subtitle}
											</Text>
										</View>

										<View>
											<Text className="font-normal text-greyb3 text-[14px] mb-2 ">
												Starting from
											</Text>
											<Text className="font-semibold text-lightblue text-[16px] ">
												{DATA.price}
												<Text className="font-light">/KG</Text>
											</Text>
										</View>
									</View>
								</View>
							);
						})}
					</View>
				</View>
			</ScrollView>
		</View>
	);
}
