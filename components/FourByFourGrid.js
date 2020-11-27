import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from "../components/Card";

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
		row1TextColor,
		row2TextColor,
	} = props;
	const row1Styles = { backgroundColor: row1Color };
	const row2Styles = { backgroundColor: row2Color };
	const box2Styles = { backgroundColor: box2Color };
	const box3Styles = { backgroundColor: box3Color };
	const row1TextStyles = { color: row1TextColor };
	const row2TextStyles = { color: row2TextColor };

	return (
		<Card style={{ ...styles.boxContainer, ...props.style }}>
			<View style={{ ...styles.row, ...styles.row1, ...row1Styles }}>
				<View style={{ ...styles.box, ...styles.box1 }}>
					<Text
						style={{
							...styles.boxContent,
							...styles.box1Content,
							...row1TextStyles,
						}}
					>
						{box1}
					</Text>
				</View>
				<View style={{ ...styles.box, ...styles.box2, ...box2Styles }}>
					<Text
						style={{
							...styles.boxContent,
							...styles.box1Content,
							...row1TextStyles,
						}}
					>
						{box2}
					</Text>
				</View>
			</View>

			<View style={{ ...styles.row, ...styles.row2, ...row2Styles }}>
				<View style={{ ...styles.box, ...styles.box4 }}>
					<Text
						style={{
							...styles.boxContent,
							...styles.box1Content,
							...row2TextStyles,
						}}
					>
						{box4}
					</Text>
				</View>
				<View style={{ ...styles.box, ...styles.box3, ...box3Styles }}>
					<Text
						style={{
							...styles.boxContent,
							...styles.box1Content,
							...row2TextStyles,
						}}
					>
						{box3}
					</Text>
				</View>
			</View>
		</Card>
	);
};

const styles = StyleSheet.create({
	boxContainer: {
		padding: 0,
	},

	row: {
		flexDirection: "row",
		width: "100%",
		height: "50%",
	},
	row1: {
		borderBottomWidth: 1,
		borderColor: "white",
	},
	box: {
		width: "50%",
		justifyContent: "center",
		alignItems: "center",
	},
	boxContent: {
		textAlign: "center",
		fontSize: 30,
	},
});

export default FourByFourGrid;
