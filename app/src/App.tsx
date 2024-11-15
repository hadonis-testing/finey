import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, PaperProvider, Text } from 'react-native-paper';

const App = () => {
	return (
		<PaperProvider>
			<View style={styles.container}>
				<Text>Open up App.tsx to start working on your app!</Text>
				<Button
					icon="camera"
					mode="contained"
					onPress={() => console.log('Pressed')}
				>
					Press me
				</Button>
				<StatusBar style={'auto'} animated={true} translucent={true} />
			</View>
		</PaperProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
