import {
	View,
	SafeAreaView,
	FlatList,
	TouchableOpacity,
	ScrollView,
	Image,
	Text,
} from "react-native";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {AntDesign} from "@expo/vector-icons";
import {products} from "../data/ProductData";
import EmptyDark from "./../../assets/EmptyDark.png";

const tags = [
	{
		id: "1",
		title: "Popular",
	},
	{
		id: "2",
		title: "Low Price",
	},
	{
		id: "3",
		title: "Small Fishes",
	},
	{
		id: "4",
		title: "Big Fishes",
	},
];

const CategoryList = () => {
	const navigation = useNavigation();
	// const item = props.route.params;
	const [activeCategory, setActiveCategory] = useState(1);

	return (
		<SafeAreaView className="flex-1 bg-[#ffffff]">
			<StatusBar style="dark" />

			<ScrollView className="flex-1 mt-7 ">
				<View className="bg-white px-5">
					<View className="flex-row items-center justify-between">
						<TouchableOpacity
							className="rounded-full p-3 bg-greyb5"
							onPress={() => navigation.goBack()}>
							<AntDesign name="left" size={24} color="#1E222B" />
						</TouchableOpacity>
						<Text className=" font-normal text-[16px]">Big & Small Fishes</Text>
						<View className="flex-row gap-8">
							<TouchableOpacity>
								<AntDesign name="search1" size={24} color="#1E222B" />
							</TouchableOpacity>
							<TouchableOpacity>
								<AntDesign name="shoppingcart" size={24} color="#1E222B" />
							</TouchableOpacity>
						</View>
					</View>

					<View className="mt-5 mb-5">
						<FlatList
							horizontal
							showsHorizontalScrollIndicator={false}
							data={tags}
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
				<View className="flex-row flex-wrap gap-5 justify-center">
					{products.map((product) => {
						return (
							<View className="bg-greyb5 w-40 h-48 py-5 px-5 rounded-lg justify-between">
								<View className="justify-center items-center">
									<Image source={EmptyDark} className="w-20 h-20" />
								</View>

								<View className="items-end ">
									<TouchableOpacity className="w-7 h-7 rounded-full bg-[#2A4BA0] items-center justify-center">
										<AntDesign name="plus" size={15} color="#fff" />
									</TouchableOpacity>
								</View>

								<View>
									<Text className="font-semibold text-[14px] mb-2 ">
										{product.price}
									</Text>
									<Text className="text-[12px] font-normal text-greyb2">
										{product.title}
									</Text>
								</View>
							</View>
						);
					})}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CategoryList;
