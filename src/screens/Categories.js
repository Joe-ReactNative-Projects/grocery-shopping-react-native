import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import React from "react";
import {
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	Image,
	Button,
	ScrollView,
	FlatList,
	Text,
	View,
} from "react-native";
import EmptyDark from "./../../assets/EmptyDark.png";
import {AntDesign} from "@expo/vector-icons";
import {DATA} from "./../data/FoodCategory";
import {categories} from "./../data/FoodCategory";
import {useNavigation} from "@react-navigation/native";

const item = ({title}) => (
	<View>
		<Text>{title}</Text>
	</View>
);

export default function Categories() {
	const [activeCategory, setActiveCategory] = useState(1);

	const navigation = useNavigation();

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
					{/* Categories */}

					<View className="mt-5">
						<FlatList
							horizontal
							showsHorizontalScrollIndicator={false}
							data={categories}
							className="overflow-visible"
							renderItem={({item}) => {
								let isActive = item.id == activeCategory;
								let textColor = isActive ? "#FAFBFD" : "#616A7D";

								return (
									<TouchableOpacity
										onPress={() => setActiveCategory(item.id)}
										style={{
											backgroundColor: isActive ? "#F9B023" : "#fff00000",
										}}
										className="p-4 px-5 rounded-full mr-2 border border-[#B2BBCE] shadow ">
										<Text className="font-semibold" style={{color: textColor}}>
											{item.title}
										</Text>
									</TouchableOpacity>
								);
							}}
							keyExtractor={(item) => item.id}
						/>
					</View>
				</View>

				<View className="px-5 mt-7">
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
											<TouchableOpacity
												onPress={() => navigation.navigate("CategoryList")}>
												<Text className="text-[18px] mb-2 font-bold text-greyb">
													{DATA.title}
												</Text>

												<Text className="text-[16px] font-normal text-greyb2">
													{DATA.subtitle}
												</Text>
											</TouchableOpacity>
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
