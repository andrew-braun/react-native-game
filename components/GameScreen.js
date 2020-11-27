import React from "react";
import { StyleSheet } from "react-native";
import FourByFourGrid from "../components/FourByFourGrid";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {
	const { userNumber, robotNumber } = props;
	return (
		<FourByFourGrid
			box1="You"
			box2={userNumber}
			box3={robotNumber}
			box4="Robo Nemesis"
			style={styles.gameContainer}
			row1Color={Colors.positiveColor}
			row2Color={Colors.negativeColor}
			box2Color={Colors.darkOverlay}
			box3Color={Colors.darkOverlay}
			row1TextColor={Colors.secondaryColor}
			row2TextColor={Colors.secondaryColor}
		/>
	);
};

const styles = StyleSheet.create({
	gameContainer: {
		width: "95%",
		height: "50%",
	},
});

export default StartGameScreen;
