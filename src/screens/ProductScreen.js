import {View, SafeAreaView, Text} from "react-native";
import React from "react";
import {useNavigation, useRoute} from "@react-navigation/native"; // Import useRoute

export default function ProductScreen(props) {
	// const {product} = props.route.params;
	const {title, price} = route.params;

	const route = useRoute();

	const navigation = useNavigation();
	return (
		<View className="flex-1">
			<SafeAreaView>
				<Text>This is the product page</Text>
				<Text>{title}</Text>
				{/* <Text>{product.price}</Text> */}
			</SafeAreaView>
		</View>
	);
}
