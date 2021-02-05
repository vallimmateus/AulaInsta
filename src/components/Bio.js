import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableHighlight as TH,
} from "react-native";
import Down from "../images/vectors/instagram-down-fill.svg";
import DownW from "../images/vectors/instagram-down-fill-white.svg";

const vw = Dimensions.get("screen").width; // vw é uma variável que contém como número o tamanho da tela

export default function Bio() {
	return (
		<View style={styles.container}>
			<Text style={styles.bioText}>
				<B>e(ste)la / zé</B>
			</Text>
			<Text style={styles.bioText}>🎓 EEL- USP (EF)</Text>
			<Text style={styles.bioText}>📌@palalaika_rep</Text>
			<Text style={styles.bioText}>⚓ Caçapava - SP/ Moitas - CE</Text>
			<Text style={styles.bioText}>
				<B>Ver tradução</B>
			</Text>
			<Text style={styles.bioText}>
				<Span>twitter.com/hagrideluxe</Span>
			</Text>
			<Text style={styles.bioText}>
				Seguido por <B>mateusantana13</B>, <B>tkimaid</B> e{" "}
				<B>outras 128 pessoas</B>
			</Text>
			<View style={styles.containerButton}>
				<View
					style={{
						borderRadius: 5,
						marginHorizontal: 3,
						overflow: "hidden",
						flex: 5,
					}}
				>
					<TH onPress={() => {}}>
						<View style={styles.btn}>
							<Text style={{ color: "#3CAE10" }}>
								<B>Seguindo</B>
							</Text>
							<Down
								height={11}
								width={11}
								style={{ marginLeft: 5 }}
							/>
						</View>
					</TH>
				</View>
				<View
					style={{
						borderRadius: 5,
						marginHorizontal: 3,
						overflow: "hidden",
						flex: 5,
					}}
				>
					<TH onPress={() => {}}>
						<View style={styles.btn}>
							<Text style={{ color: "#FFF" }}>
								<B>Mensagem</B>
							</Text>
						</View>
					</TH>
				</View>
				<View
					style={{
						borderRadius: 5,
						marginHorizontal: 3,
						overflow: "hidden",
						flex: 1,
					}}
				>
					<TH onPress={() => {}}>
						<View style={styles.btn}>
							<DownW height={11} width={11} />
						</View>
					</TH>
				</View>
			</View>
		</View>
	);
}

function B(props) {
	return <Text style={{ fontWeight: "bold" }}>{props.children}</Text>;
}

function Span(props) {
	return <Text style={{ color: "#E3F4FE" }}>{props.children}</Text>;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1a1a1a",
		width: vw,
		paddingHorizontal: 15,
		paddingBottom: 5,
	},

	bioText: {
		color: "#fff",
		fontSize: 14.6,
	},

	containerButton: {
		flexDirection: "row",
		marginTop: 22,
	},

	btn: {
		backgroundColor: "#000",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		borderWidth: 1.5,
		borderColor: "#565656",
		height: 30,
		flexDirection: "row",
	},
});
