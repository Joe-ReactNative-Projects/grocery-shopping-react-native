import {View, Image, TouchableOpacity, Text} from "react-native";
import React from "react";
import {products} from "../data/ProductData";
import EmptyDark from "./../../assets/EmptyDark.png";
import {AntDesign} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const ProductCard = ({item}) => {
	const navigation = useNavigation();

	return (
		<View className="flex-row flex-wrap gap-5 justify-center">
			{products.map((product) => {
				return (
					<View className="bg-greyb5 w-40 h-48 py-5 px-5 rounded-lg justify-between">
						<View className="justify-center items-center">
							<Image source={EmptyDark} className="w-20 h-20" />
						</View>

						<View className="items-end ">
							<TouchableOpacity
								onPress={() =>
									navigation.navigate("ProductScreen", {...product})
								}
								className="w-7 h-7 rounded-full bg-[#2A4BA0] items-center justify-center">
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
	);
};

export default ProductCard;
