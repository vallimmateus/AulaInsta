import React from "react";
import {
	View,
	StyleSheet,
	TouchableNativeFeedback as TNF,
	Dimensions,
} from "react-native";

import Grid from "../images/vectors/instagram-grid-line.svg";
import Reels from "../images/vectors/instagram-reels-line-gray.svg";
import Contact from "../images/vectors/instagram-contact-line-gray.svg";

const vw = Dimensions.get("screen").width;

export default function Aba() {
	return (
		<View style={styles.container}>
			<TNF>
				<View style={styles.tab}>
					<Grid width={23} height={23} />
				</View>
			</TNF>
			<TNF>
				<View style={styles.tab}>
					<Reels width={23} height={23} />
				</View>
			</TNF>
			<TNF>
				<View style={styles.tab}>
					<Contact width={23} height={23} />
				</View>
			</TNF>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: vw,
		height: 50,
		backgroundColor: "#1a1a1a",
		borderColor: "#565656",
		borderTopWidth: 0.2,
		flexDirection: "row",
	},

	tab: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
