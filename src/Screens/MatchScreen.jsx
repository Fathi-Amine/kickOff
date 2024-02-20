import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import MatchFilterContainer from "../components/MatchFilterContainer";
import MatchupContainer from "../components/MatchupContainer";
import HomeContainer from "../components/HomeContainer";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const GalileoDesign = () => {
    return (
        <View style={styles.galileoDesign}>
            <View style={[styles.depth0Frame0, styles.frameLayout]}>
                <MatchFilterContainer />
                <View style={[styles.depth1Frame1, styles.frameLayout]}>
                    <View style={styles.depth2Frame0}>
                        <View style={styles.depth3Frame0}>
                            <View style={styles.depth4Frame0}>
                                <Text style={[styles.all, styles.allTypo]}>All</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.depth2Frame1, styles.depth2FrameSpaceBlock]}>
                        <View style={styles.depth3Frame01}>
                            <View style={styles.depth4Frame0}>
                                <Text style={[styles.all, styles.allTypo]}>Premier League</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.depth2Frame2, styles.depth2FrameSpaceBlock]}>
                        <View style={styles.depth3Frame02}>
                            <View style={styles.depth4Frame0}>
                                <Text style={[styles.all, styles.allTypo]}>
                                    UEFA Champions League
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.depth2Frame3, styles.depth2FrameSpaceBlock]}>
                        <View style={styles.depth3Frame03}>
                            <View style={styles.depth4Frame0}>
                                <Text style={[styles.all, styles.allTypo]}>La Liga</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.depth2Frame4, styles.depth2FrameSpaceBlock]}>
                        <View style={styles.depth3Frame04}>
                            <View style={styles.depth4Frame0}>
                                <Text style={[styles.all, styles.allTypo]}>Bundesliga</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <MatchupContainer
                    competitionName="Premier League"
                    matchupTitle="Chelsea vs Liverpool"
                />
                <MatchupContainer
                    competitionName="UEFA Champions League"
                    matchupTitle="Atletico Madrid vs Man United"
                    propWidth={206}
                    propWidth1={206}
                    propWidth2={206}
                />
                <MatchupContainer
                    competitionName="La Liga"
                    matchupTitle="Real Madrid vs Barcelona"
                    propWidth={173}
                    propWidth1={173}
                    propWidth2={173}
                />
                <MatchupContainer
                    competitionName="Bundesliga"
                    matchupTitle="Bayern Munich vs RB Leipzig"
                    propWidth={192}
                    propWidth1={192}
                    propWidth2={192}
                />
                <View style={styles.depth1Frame6} />
                <View style={[styles.depth1Frame7, styles.depth1FrameBg]}>
                    <View style={styles.depth2Frame01}>
                        <HomeContainer
                            depth5Frame0={require("../assets/depth-5-frame-01.png")}
                            home="Home"
                        />
                        <HomeContainer
                            depth5Frame0={require("../assets/depth-5-frame-02.png")}
                            home="Search"
                            propMarginLeft={8}
                            propWidth={43}
                        />
                        <View style={styles.depth3Frame2}>
                            <View style={styles.depth4Frame05}>
                                <Image
                                    style={styles.depth5Frame0}
                                    contentFit="cover"
                                    source={require("../assets/depth-5-frame-03.png")}
                                />
                            </View>
                            <View style={styles.depth4Frame1}>
                                <View style={styles.depth5Frame01}>
                                    <Text style={[styles.favorites, styles.allTypo]}>
                                        Favorites
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.depth1Frame8, styles.depth1FrameBg]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    frameLayout: {
        overflow: "hidden",
        width: 390,
    },
    allTypo: {
        color: Color.colorWhite,
        fontFamily: FontFamily.beVietnamProMedium,
        fontWeight: "500",
    },
    depth2FrameSpaceBlock: {
        marginLeft: 12,
        paddingVertical: 0,
        paddingHorizontal: Padding.p_base,
        justifyContent: "center",
        alignItems: "center",
        height: 32,
        backgroundColor: Color.colorDarkslategray,
        borderRadius: Border.br_xs,
        flexDirection: "row",
    },
    depth1FrameBg: {
        backgroundColor: Color.colorGray_100,
        width: 390,
    },
    all: {
        fontSize: FontSize.size_sm,
        lineHeight: 21,
        textAlign: "left",
    },
    depth4Frame0: {
        alignSelf: "stretch",
    },
    depth3Frame0: {
        width: 18,
        height: 21,
    },
    depth2Frame0: {
        width: 50,
        paddingVertical: 0,
        backgroundColor: Color.colorDarkslategray,
        borderRadius: Border.br_xs,
        paddingHorizontal: Padding.p_base,
        justifyContent: "center",
        alignItems: "center",
        height: 32,
        flexDirection: "row",
    },
    depth3Frame01: {
        width: 108,
        height: 21,
    },
    depth2Frame1: {
        width: 140,
    },
    depth3Frame02: {
        width: 173,
        height: 21,
    },
    depth2Frame2: {
        width: 205,
    },
    depth3Frame03: {
        width: 51,
        height: 21,
    },
    depth2Frame3: {
        width: 83,
    },
    depth3Frame04: {
        width: 76,
        height: 21,
    },
    depth2Frame4: {
        width: 108,
    },
    depth1Frame1: {
        height: 56,
        padding: Padding.p_xs,
        flexDirection: "row",
    },
    depth1Frame6: {
        height: 333,
        width: 390,
    },
    depth5Frame0: {
        width: 24,
        height: 24,
    },
    depth4Frame05: {
        borderRadius: 16,
        width: 48,
        justifyContent: "center",
        height: 32,
        alignItems: "center",
        flexDirection: "row",
    },
    favorites: {
        fontSize: FontSize.size_xs,
        letterSpacing: 0,
        lineHeight: 18,
        textAlign: "center",
    },
    depth5Frame01: {
        alignSelf: "stretch",
        alignItems: "center",
    },
    depth4Frame1: {
        width: 58,
        height: 18,
        marginTop: 4,
        alignItems: "center",
    },
    depth3Frame2: {
        width: 114,
        marginLeft: 8,
        height: 54,
        alignItems: "center",
    },
    depth2Frame01: {
        width: 358,
        height: 54,
        flexDirection: "row",
    },
    depth1Frame7: {
        borderStyle: "solid",
        borderColor: Color.colorDarkslategray,
        borderTopWidth: 1,
        height: 75,
        paddingTop: Padding.p_5xs,
        paddingBottom: Padding.p_xs,
        paddingHorizontal: Padding.p_base,
        backgroundColor: Color.colorGray_100,
    },
    depth1Frame8: {
        height: 20,
    },
    depth0Frame0: {
        backgroundColor: Color.colorGray_200,
        height: 844,
    },
    galileoDesign: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
    },
});

export default GalileoDesign;
