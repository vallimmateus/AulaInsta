import React from "react";
import { ScrollView } from "react-native";
import Header from "../../components/Header";
import Infos from "../../components/Infos";
import Bio from "../../components/Bio";
import Destaques from "../../components/Destaques";
import Aba from "../../components/Aba";
import Posts from "../../components/Posts";
import Navigator from "../../components/Navigator";

export default function Perfil() {
	return (
		<>
			<Header />
			<ScrollView
				stickyHeaderIndices={[3]}
				style={{ backgroundColor: "#1a1a1a" }}
				showsVerticalScrollIndicator={false}
			>
				<Infos />
				<Bio />
				<Destaques />
				<Aba />
				<Posts />
			</ScrollView>
			<Navigator />
		</>
	);
}
