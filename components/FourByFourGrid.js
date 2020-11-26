import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";

const FourByFourGrid = (props) => {
	const {
		box1,
		box2,
		box3,
		box4,
		row1Color,
		row2Color,
		box2Color,
		box3Color,
	} = props;
	return (
		<Card style={{ ...styles.boxContainer, ...props.style }}>
			<View style={{ ...styles.row, ...styles.row1 }}>
				<View style={{ ...styles.box, ...styles.box1 }}>
					<Text style={{ ...styles.boxContent, ...styles.box1Content }}>
						{box1}
					</Text>
				</View>
				<View style={{ ...styles.box, ...styles.box2 }}>
					<Text style={{ ...styles.boxContent, ...styles.box1Content }}>
						{box2}
					</Text>
				</View>
			</View>

			<View style={{ ...styles.row, ...styles.row2 }}>
				<View style={{ ...styles.box, ...styles.box3 }}>
					<Text style={{ ...styles.boxContent, ...styles.box1Content }}>
						{box4}
					</Text>
				</View>
				<View style={{ ...styles.box, ...styles.box4 }}>
					<Text style={{ ...styles.boxContent, ...styles.box1Content }}>
						{box3}
					</Text>
				</View>
			</View>
		</Card>
	);
};

const styles = StyleSheet.create({
	boxContainer: {
		backgroundColor: Colors.tertiaryColor,
		color: Colors.secondaryColor,
		padding: 0,
	},

	row: {
		flexDirection: "row",
		width: "100%",
		height: "50%",
	},
	row1: {
		borderBottomWidth: 1,
		borderColor: Colors.secondaryColor,
		backgroundColor: Colors.tertiaryColor,
	},
	row2: {
		backgroundColor: Colors.negativeColor,
	},
	box: {
		width: "50%",
		justifyContent: "center",
		alignItems: "center",
	},
	box2: {
		backgroundColor: Colors.darkOverlay,
	},
	box4: {
		backgroundColor: Colors.darkOverlay,
	},
	boxContent: {
		textAlign: "center",
		color: Colors.secondaryColor,
		fontSize: 30,
	},
});

export default FourByFourGrid;
