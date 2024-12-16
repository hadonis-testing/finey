import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import RootNavigator from '@/navigation/RootNavigator';

const App = () => {
	return (
		<PaperProvider>
			<NavigationContainer>
				<SafeAreaView style={styles.container}>
					<RootNavigator />
				</SafeAreaView>
				<StatusBar style={'auto'} animated={true} translucent={true} />
			</NavigationContainer>
		</PaperProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

export default App;
