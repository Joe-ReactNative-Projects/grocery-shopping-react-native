import React, {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {View} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../screens/Home";
import Onboardv1 from "../screens/Onboardv1";
import Onboardv2 from "../screens/Onboardv2";
import Categories from "../screens/Categories";
import Favourites from "../screens/Favourites";
import More from "../screens/More";

import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const getFonts = () => {
	return Font.loadAsync({
		"manrope-light": require("../../assets/fonts/Manrope-Light.ttf"),
		"manrope-regular": require("../../assets/fonts/Manrope-Regular.ttf"),
		"manrope-medium": require("../../assets/fonts/Manrope-Medium.ttf"),
		"manrope-bold": require("../../assets/fonts/Manrope-Bold.ttf"),
		"manrope-semibold": require("../../assets/fonts/Manrope-SemiBold.ttf"),
		"manrope-extrabold": require("../../assets/fonts/Manrope-ExtraBold.ttf"),
		"manrope-extralight": require("../../assets/fonts/Manrope-ExtraLight.ttf"),
	});
};

const AppNavigation = () => {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	if (!fontsLoaded) {
		return (
			<AppLoading
				startAsync={getFonts}
				onFinish={() => setFontsLoaded(true)}
				onError={console.warn}
			/>
		);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Onboardv1">
				<Stack.Screen
					name="Onboardv1"
					component={Onboardv1}
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name="Onboardv2"
					component={Onboardv2}
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name="Home"
					component={HomeTabs}
					options={{headerShown: false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);

	function HomeTabs() {
		return (
			<Tab.Navigator
				screenOptions={({route}) => ({
					headerShown: false,
					tabBarShowLabel: true,
					tabBarActiveTintColor: "#E0B420",
					tabBarInactiveTintColor: "#3E4554",

					tabBarItemStyle: {
						marginTop: route.state && route.state.index === 0 ? -10 : 10, // Move active tab upwards a bit
					},
					tabBarStyle: {
						backgroundColor: "#F8F7FB",
						borderTopEndRadius: 25,
						borderTopStartRadius: 25,
						paddingTop: 10,
						// position: "absolute",
						height: 100, // Increase the height for increased tab height
					},

					tabBarIcon: ({focused, color, size}) => {
						let iconName;
						let iconColor;

						if (route.name === "Home") {
							iconName = focused ? "home" : "home-outline";
						} else if (route.name === "Categories") {
							iconName = focused ? "apps" : "apps-outline";
						} else if (route.name === "Favourites") {
							iconName = focused ? "heart" : "heart-outline";
						} else {
							iconName = focused
								? "ellipsis-vertical"
								: "ellipsis-vertical-outline";
						}

						// set the color of the icon based on focused state
						// iconColor = focused ? "#fff" : "#f99";

						if (color) {
							iconColor = color;
						}

						// pass the modified color to the Ionicons component
						return (
							<View
								style={{
									backgroundColor: focused ? "#1E222B" : "#", // Set your desired background color
									borderRadius: 50, // Adjust the border radius as needed
									padding: 15, // Adjust the padding as needed
									height: 60, // Increase the height for increased tab height
									width: 60,
									justifyContent: "center", // Center the icon vertically
									alignItems: "center", // Center the icon horizontally
									marginTop: focused ? -30 : 1, // Move active tab upwards a bit
								}}>
								<Ionicons name={iconName} size={size} color={iconColor} />
							</View>
						);
					},
					tabBarLabel: ({focused, color}) => {
						if (focused) {
							return null; // Hide the label for active tabs
						}
						return <Text style={{color}}>{route.name}</Text>; // Show the label for inactive tabs
					},
					tabBarLabelStyle: {
						fontSize: 12, // Set the desired font size for the tab label
					},
				})}>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						tabBarLabel: "Home",
					}}
				/>
				<Tab.Screen
					name="Categories"
					component={Categories}
					options={{
						tabBarLabel: "Categories",
					}}
				/>
				<Tab.Screen
					name="Favourites"
					component={Favourites}
					options={{
						tabBarLabel: "Favourite",
					}}
				/>
				<Tab.Screen
					name="More"
					component={More}
					options={{
						tabBarLabel: "More",
					}}
				/>
			</Tab.Navigator>
		);
	}
};

export default AppNavigation;
