import React from "react";
import {
	View,
	Image,
	StyleSheet,
	Dimensions,
	TouchableOpacity as TO,
} from "react-native";

import ReelsFill from "../images/vectors/instagram-reels-fill.svg";
import Galery from "../images/vectors/instagram-galery-fill.svg";

const vw = Dimensions.get("screen").width;

const imagens = [
	{
		id: Math.random(),
		source: require("../images/posts/post1.jpg"),
		icon: null,
	},
	{
		id: Math.random(),
		source: require("../images/posts/post2.jpg"),
		icon: "galery",
	},
	{
		id: Math.random(),
		source: require("../images/posts/post3.jpg"),
		icon: null,
	},
	{
		id: Math.random(),
		source: require("../images/posts/post4.jpg"),
		icon: "reels",
	},
	{
		id: Math.random(),
		source: require("../images/posts/post5.jpg"),
		icon: "galery",
	},
	{
		id: Math.random(),
		source: require("../images/posts/post6.jpg"),
		icon: null,
	},
	{
		id: Math.random(),
		source: require("../images/posts/post7.jpg"),
		icon: null,
	},
	{
		id: Math.random(),
		source: require("../images/posts/post8.jpg"),
		icon: null,
	},
	{
		id: Math.random(),
		source: require("../images/posts/post9.jpg"),
		icon: null,
	},
	{
		id: Math.random(),
		source: require("../images/posts/post10.jpg"),
		icon: "galery",
	},
	{
		id: Math.random(),
		source: require("../images/posts/post11.jpg"),
		icon: "galery",
	},
	{
		id: Math.random(),
		source: require("../images/posts/post12.jpg"),
		icon: "galery",
	},
	{
		id: Math.random(),
		source: require("../images/posts/post13.jpg"),
		icon: "galery",
	},
	{
		id: Math.random(),
		source: require("../images/posts/post14.jpg"),
		icon: null,
	},
	{
		id: Math.random(),
		source: require("../images/posts/post15.jpg"),
		icon: "galery",
	},
];

export default function Posts() {
	return <View style={styles.containerPosts}>{Post()}</View>;
}

function Post() {
	return imagens.map((element) => {
		return (
			<TO key={element.id} onPress={() => {}}>
				<View style={styles.container}>
					<Image source={element.source} style={styles.image} />
					{element.icon === "galery" && (
						<Galery width={17} height={17} style={styles.icon} />
					)}
					{element.icon === "reels" && (
						<ReelsFill width={17} height={17} style={styles.icon} />
					)}
				</View>
			</TO>
		);
	});
}

const styles = StyleSheet.create({
	containerPosts: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		backgroundColor: "#1a1a1a",
	},

	container: {
		position: "relative",
	},

	image: {
		width: vw / 3 - 2,
		height: vw / 3 - 2,
		margin: 1,
	},

	icon: {
		position: "absolute",
		top: 8,
		right: 8,
	},
});
