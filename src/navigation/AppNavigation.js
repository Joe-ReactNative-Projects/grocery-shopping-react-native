import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Onboardv1 from "../screens/Onboardv1";
import Onboardv2 from "../screens/Onboardv2";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
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
					component={Home}
					// options={{title: "Welcome"}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigation;
