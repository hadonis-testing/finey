import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { setTabBar } from '@/navigation/common/CommonBottomTabContent';
import CommonSetIcon from '@/navigation/common/CommonSetIcon';
import { NavigationId } from '@/navigation/common/NavigationId';
import HomeScreen from '@/screens/HomeScreen';

const RNTab = createBottomTabNavigator();

const RootNavigator = () => {
	return (
		<RNTab.Navigator screenOptions={{ headerShown: false }} tabBar={setTabBar}>
			<RNTab.Screen
				name={NavigationId.HOME}
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return CommonSetIcon({
							isFocus: focused,
							iconName: 'home',
							size,
							color,
						});
					},
					tabBarLabel: 'Trang chủ',
				}}
			/>
		</RNTab.Navigator>
	);
};

export default RootNavigator;
