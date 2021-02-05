import React from "react";
import { View, Image, TouchableOpacity as TO } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const ColorsStory = {
	Story: ["#FEDA75", "#FA7E1E", "#D62976", "#962FBF", "#4F5BD5"],
	MelhoresAmigos: ["#4EBE19", "#4EBE19"],
	Destaques: ["#757575", "#757575"],
	Null: ["transparent", "transparent"],
};

export function Story({ colors, size, source }) {
	return (
		<LinearGradient
			colors={colors}
			start={{ x: 0, y: 1 }}
			end={{ x: 1, y: 0 }}
			style={{
				width: size,
				height: size,
				borderRadius: size * 0.5,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<View
				style={{
					backgroundColor: "#1a1a1a",
					width: size - 4,
					height: size - 4,
					borderRadius: size * 0.5,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<TO onPress={() => {}}>
					<Image
						style={{
							width: size * 0.9,
							height: size * 0.9,
							borderRadius: size * 0.5,
						}}
						source={source}
					/>
				</TO>
			</View>
		</LinearGradient>
	);
}
