import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

import Svg, { Circle } from "react-native-svg";

import Home from "../images/vectors/instagram-home-line.svg";
import Search from "../images/vectors/instagram-search-line.svg";
import Reels from "../images/vectors/instagram-reels-line.svg";
import Marketplace from "../images/vectors/instagram-marketplace-line.svg";
import Account from "../images/vectors/instagram-account-line.svg";
import photoPerfil from "../images/perfil2.jpg";

const vw = Dimensions.get("screen").width;

export default function Navigator() {
	return (
		<View style={styles.container}>
			<Home width={25} height={25} />
			<Search width={25} height={25} />
			<Reels width={25} height={25} />
			<Marketplace width={25} height={25} />
			<View style={{ position: "relative" }}>
				<Account width={25} height={25} />
				{/* <Image source={photoPerfil} style={styles.perfil} /> */}
				<Svg height="4.4" width="25" style={styles.circle}>
					<Circle cx="12.5" cy="2.2" r="2.2" fill="#F11" />
				</Svg>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-around",
		backgroundColor: "#000",
		width: vw,
		paddingVertical: 10,
	},

	perfil: {
		height: 25,
		width: 25,
		borderRadius: 12.5,
	},

	circle: {
		position: "absolute",
		bottom: -8,
	},
});
