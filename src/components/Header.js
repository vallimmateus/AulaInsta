import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Notification from "../images/vectors/instagram-notification-line.svg";
import LeftArrow from "../images/vectors/instagram-leftarrow-line.svg"; // Isso é o botão de voltar
import Options from "../images/vectors/instagram-options-fill.svg";

const vw = Dimensions.get("screen").width;

export default function Header() {
	return (
		<View style={styles.container}>
			<LeftArrow width={24} style={styles.leftarrow} />
			<View style={styles.nameContainer}>
				<Text style={styles.user}>hotzshower</Text>
			</View>
			<Notification height={24} width={35} />
			<Options height={16} width={40} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: vw,
		height: 50,
		backgroundColor: "#1a1a1a",
		alignItems: "center",
	},

	nameContainer: {
		flex: 1,
	},

	user: {
		fontFamily: "Roboto",
		fontSize: 18,
		fontWeight: "700",
		color: "#fff",
		paddingLeft: 20,
	},

	leftarrow: {
		marginLeft: 13,
	},
});
