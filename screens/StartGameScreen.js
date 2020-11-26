import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from "react-native";
import Card from "../components/Card";
import FourByFourGrid from "../components/FourByFourGrid";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState("");

	const numInputHandler = (inputText) => {
		setEnteredValue(inputText.replace(/[^\d]/g, ""));
	};

	const resetHandler = () => {
		setEnteredValue("");
	};

	const confirmHandler = () => {
		const gameNumber = parseInt(enteredValue);
		if (isNaN(gameNumber) || gameNumber <= 0 || gameNumber >= 99) {
			Alert.alert(
				"Aw man, I don't know that number!",
				"Try picking one that falls in the 1-99 range--I know ALL of those!",
				[{ text: "Okay!", style: "destructive", onPress: resetHandler }]
			);
		}

		setConfirmed(true);
		setSelectedNumber(gameNumber);
		setEnteredValue("");
	};

	let gameOutput;

	// if (confirmed) {
	// 	gameOutput = "";
	// }

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.container}>
				<Text style={styles.title}>Start a New Game!</Text>

				<Card style={styles.inputContainer}>
					<Text>Pick a number</Text>
					<Input
						style={styles.input}
						blurOnSubmit
						keyboardType="number-pad"
						maxLength={2}
						value={enteredValue}
						onChangeText={numInputHandler}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								title="Reset"
								onPress={resetHandler}
								color={Colors.negativeColor}
							/>
						</View>
						<View style={styles.button}>
							<Button
								title="Confirm"
								onPress={confirmHandler}
								color={Colors.positiveColor}
							/>
						</View>
					</View>
				</Card>
				<FourByFourGrid
					box1="You"
					box2={selectedNumber}
					box3={selectedNumber}
					box4="Robo Nemesis"
					style={styles.gameContainer}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		alignItems: "center",
		backgroundColor: Colors.primaryColor,
	},
	title: {
		fontSize: 25,
	},
	inputContainer: {
		alignItems: "center",
		justifyContent: "center",
		minWidth: 300,
		maxWidth: "100%",
		marginVertical: 10,
		padding: 15,
		shadowColor: "black",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		backgroundColor: Colors.secondaryColor,
		elevation: 5,
		borderRadius: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "75%",
		paddingHorizontal: 5,
	},
	button: {
		width: "45%",
	},
	input: {
		width: 50,
		textAlign: "center",
	},
	gameContainer: {
		width: "95%",
		height: "50%",
	},
});

export default StartGameScreen;
