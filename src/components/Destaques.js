import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { ColorsStory, Story } from "./Story";

import papelDeParede from "../images/destaques/papel-de-parede.jpg";
import migxs from "../images/destaques/migxs.jpg";
import Lorenhell from "../images/destaques/Lorenhell.jpg";
import Moitas from "../images/destaques/moitas.jpg";
import pimenta2018 from "../images/destaques/pimenta-2018.jpg";
import UNICAMP2018 from "../images/destaques/UNICAMP-2018.jpg";
import ENEM2017 from "../images/destaques/ENEM-2017.jpg";

export default function Destaques() {
	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<View style={[styles.destaque, { marginLeft: 4 }]}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={papelDeParede}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						papel de parede
					</Text>
				</View>
				<View style={styles.destaque}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={migxs}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						migxs
					</Text>
				</View>
				<View style={styles.destaque}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={Lorenhell}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						Lorenhell
					</Text>
				</View>
				<View style={styles.destaque}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={Moitas}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						Moitas
					</Text>
				</View>
				<View style={styles.destaque}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={pimenta2018}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						pimenta 2018
					</Text>
				</View>
				<View style={styles.destaque}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={UNICAMP2018}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						UNICAMP 2018
					</Text>
				</View>
				<View style={styles.destaque}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={ENEM2017}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						ENEM 2017
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1a1a1a",
		height: 105,
	},
	destaque: {
		alignItems: "center",
		justifyContent: "center",
		padding: 2,
		width: 82,
	},
	text: {
		color: "#FFF",
		fontSize: 12,
		paddingTop: 3,
		fontWeight: "300",
	},
});
