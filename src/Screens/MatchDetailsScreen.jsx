import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import MatchUpContainer1 from "../components/MatchUpContainer1.jsx";
import LeagueContainer from "../components/LeagueContainer.jsx";
import { Color, Padding, FontFamily, FontSize, Border } from "../../assets/css/GlobalStyles";

const MatchDetailsScreen = () => {
    return (
        <View style={styles.galileoDesign}>
            <View style={[styles.depth0Frame0, styles.frameBg2]}>
                <MatchUpContainer1 matchupInfo="Everton vs. Newcastle" />
                <View style={styles.frameLayout2}>
                    <View style={styles.frameLayout2}>
                        <View style={[styles.depth3Frame0, styles.frameLayout2]}>
                            <Image
                                style={[styles.depth4Frame0, styles.framePosition]}
                                contentFit="cover"
                                source={require("../../assets/squad.png")}
                            />
                        </View>
                    </View>
                </View>
                <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock1]}>
                    <View style={styles.depth2Frame01}>
                        <Text style={[styles.everton, styles.vsFlexBox]}>Everton</Text>
                    </View>
                </View>
                <View style={[styles.depth1Frame3, styles.depth1FrameSpaceBlock]}>
                    <View style={styles.depth2Frame01}>
                        <Text style={[styles.vs, styles.vsTypo]}>vs</Text>
                    </View>
                </View>
                <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock1]}>
                    <View style={styles.depth2Frame01}>
                        <Text style={[styles.everton, styles.vsFlexBox]}>Newcastle</Text>
                    </View>
                </View>
                <View style={[styles.depth1Frame5, styles.depth1FrameFlexBox]}>
                    <View style={styles.depth2Frame04}>
                        <View style={styles.depth3Frame01}>
                            <Text
                                style={[styles.dateTime, styles.satJan8FlexBox]}
                            >{`Date & Time`}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.depth1FrameSpaceBlock}>
                    <View style={styles.depth3Frame01}>
                        <Text style={[styles.satJan8, styles.satJan8FlexBox]}>
                            Sat, Jan 8, 2023, 2:30 PM
                        </Text>
                    </View>
                </View>
                <View style={[styles.depth1Frame5, styles.depth1FrameFlexBox]}>
                    <View style={styles.depth2Frame06}>
                        <View style={styles.depth3Frame01}>
                            <Text style={[styles.dateTime, styles.satJan8FlexBox]}>
                                Leagues
                            </Text>
                        </View>
                    </View>
                </View>
                <LeagueContainer
                    playerStatsId={require("../../assets/League.png")}
                    playerNameOrLeague="Premier League"
                    footballCategory="English Football"
                />
                <View style={[styles.depth1Frame9, styles.depth1FrameFlexBox]}>
                    <View style={styles.depth2Frame07}>
                        <View style={[styles.depth3Frame03, styles.frameLayout1]}>
                            <View
                                style={[styles.depth4Frame01, styles.depth4FrameSpaceBlock1]}
                            >
                                <View style={[styles.depth5Frame0, styles.frameBg1]}>
                                    <View style={styles.depth3Frame01}>
                                        <Text style={[styles.addToCalendar, styles.watchTypo]}>
                                            Add to calendar
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.depth3Frame1, styles.frameLayout]}>
                            <View style={[styles.depth4Frame02, styles.frameBg]}>
                                <View style={[styles.depth5Frame01, styles.frameBg]}>
                                    <View style={styles.depth3Frame01}>
                                        <Text style={[styles.watch, styles.watchTypo]}>Watch</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                {/*<View style={styles.depth1Frame10} />*/}
                <View style={[styles.depth1Frame11, styles.depth1FrameBg]}>
                    <View style={styles.depth2Frame08}>
                        <View style={styles.depth3FrameLayout}>
                            <View style={[styles.depth4Frame03, styles.depth4FrameFlexBox]}>
                                <Image
                                    style={styles.depth5Frame02}
                                    contentFit="cover"
                                    source={require("../../assets/Home.png")}
                                />
                            </View>
                            <View style={[styles.depth4Frame1, styles.depth4FrameSpaceBlock]}>
                                <View style={styles.depth2Frame01}>
                                    <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.depth3Frame11, styles.depth3FrameLayout]}>
                            <View style={[styles.depth4Frame03, styles.depth4FrameFlexBox]}>
                                <Image
                                    style={styles.depth5Frame02}
                                    contentFit="cover"
                                    source={require("../../assets/searchlens.png")}
                                />
                            </View>
                            <View
                                style={[styles.depth4Frame11, styles.depth4FrameSpaceBlock]}
                            >
                                <View style={styles.depth2Frame01}>
                                    <Text style={[styles.home, styles.homeTypo]}>Search</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.depth3Frame11, styles.depth3FrameLayout]}>
                            <View style={[styles.depth4Frame05, styles.depth4FrameFlexBox]}>
                                <Image
                                    style={styles.depth5Frame02}
                                    contentFit="cover"
                                    source={require("../../assets/favorites.png")}
                                />
                            </View>
                            <View
                                style={[styles.depth4Frame12, styles.depth4FrameSpaceBlock]}
                            >
                                <View style={styles.depth2Frame01}>
                                    <Text style={[styles.favorites, styles.homeTypo]}>
                                        Favorites
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.depth1Frame12, styles.depth1FrameBg]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    frameBg2: {
        backgroundColor: Color.colorGray_200,
        overflow: "hidden",
    },
    frameLayout2: {
        height: 208,
        width: 390,
    },
    framePosition: {
        left: 0,
        top: 0,
        position: "absolute",
    },
    depth1FrameSpaceBlock1: {
        paddingBottom: Padding.p_xs,
        paddingHorizontal: Padding.p_base,
    },
    vsFlexBox: {
        textAlign: "center",
        color: Color.colorWhite,
    },
    depth1FrameSpaceBlock: {
        paddingTop: Padding.p_9xs,
        height: 40,
        paddingBottom: Padding.p_xs,
        paddingHorizontal: Padding.p_base,
        width: 390,
    },
    vsTypo: {
        fontFamily: FontFamily.beVietnamProRegular,
        lineHeight: 20,
        fontSize: FontSize.size_base,
    },
    depth1FrameFlexBox: {
        flexDirection: "row",
        paddingHorizontal: Padding.p_base,
        width: 390,
    },
    satJan8FlexBox: {
        textAlign: "left",
        color: Color.colorWhite,
    },
    frameLayout1: {
        width: 149,
        justifyContent: "center",
        flexDirection: "row",
        height: 40,
    },
    depth4FrameSpaceBlock1: {
        paddingVertical: 0,
        borderRadius: Border.br_xs,
        paddingHorizontal: Padding.p_base,
        alignItems: "center",
    },
    frameBg1: {
        backgroundColor: Color.colorDarkslategray,
        overflow: "hidden",
    },
    watchTypo: {
        lineHeight: 21,
        fontSize: FontSize.size_sm,
        textAlign: "left",
        fontFamily: FontFamily.beVietnamProBold,
        fontWeight: "700",
        letterSpacing: 0,
    },
    frameLayout: {
        width: 84,
        justifyContent: "center",
        flexDirection: "row",
        height: 40,
    },
    frameBg: {
        backgroundColor: Color.colorGoldenrod,
        overflow: "hidden",
    },
    depth1FrameBg: {
        backgroundColor: Color.colorGray_100,
        width: 390,
    },
    depth4FrameFlexBox: {
        height: 32,
        flexDirection: "row",
        alignItems: "center",
    },
    depth4FrameSpaceBlock: {
        marginTop: 4,
        height: 18,
        alignItems: "center",
    },
    homeTypo: {
        fontFamily: FontFamily.beVietnamProMedium,
        fontWeight: "500",
        lineHeight: 18,
        fontSize: FontSize.size_xs,
        textAlign: "center",
        letterSpacing: 0,
    },
    depth3FrameLayout: {
        width: 114,
        height: 54,
        alignItems: "center",
    },
    depth4Frame0: {
        zIndex: 0,
        height: 218,
        width: 390,
        overflow: "hidden",
    },
    depth3Frame0: {
        overflow: "hidden",
        backgroundColor: Color.colorGray_200,
    },
    everton: {
        // fontSize: FontSize.size_3xl,
        lineHeight: 26,
        fontFamily: FontFamily.beVietnamProBold,
        fontWeight: "700",
        letterSpacing: 0,
    },
    depth2Frame01: {
        alignSelf: "stretch",
        alignItems: "center",
    },
    depth1Frame2: {
        height: 60,
        paddingTop: Padding.p_xl,
        alignItems: "center",
        width: 390,
    },
    vs: {
        textAlign: "center",
        color: Color.colorWhite,
    },
    depth1Frame3: {
        alignItems: "center",
    },
    dateTime: {
        fontSize: FontSize.size_lg,
        lineHeight: 23,
        fontFamily: FontFamily.beVietnamProBold,
        fontWeight: "700",
        letterSpacing: 0,
    },
    depth3Frame01: {
        alignSelf: "stretch",
    },
    depth2Frame04: {
        width: 108,
        height: 23,
    },
    depth1Frame5: {
        height: 40,
        paddingTop: Padding.p_base,
        paddingBottom: Padding.p_5xs,
    },
    satJan8: {
        fontFamily: FontFamily.beVietnamProRegular,
        lineHeight: 24,
        fontSize: FontSize.size_base,
    },
    depth2Frame06: {
        width: 75,
        height: 23,
    },
    addToCalendar: {
        color: Color.colorWhite,
    },
    depth5Frame0: {
        width: 117,
        height: 21,
    },
    depth4Frame01: {
        backgroundColor: Color.colorDarkslategray,
        overflow: "hidden",
        justifyContent: "center",
        width: 149,
        flexDirection: "row",
        height: 40,
    },
    depth3Frame03: {
        justifyContent: "center",
        left: 0,
        top: 0,
        position: "absolute",
    },
    watch: {
        color: Color.colorGray_200,
    },
    depth5Frame01: {
        width: 47,
        height: 21,
    },
    depth4Frame02: {
        width: 84,
        justifyContent: "center",
        flexDirection: "row",
        height: 40,
        paddingVertical: 0,
        borderRadius: Border.br_xs,
        paddingHorizontal: Padding.p_base,
        alignItems: "center",
    },
    depth3Frame1: {
        left: 274,
        top: 0,
        position: "absolute",
        width: 84,
    },
    depth2Frame07: {
        width: 358,
        height: 40,
    },
    depth1Frame9: {
        height: 64,
        justifyContent: "space-between",
        paddingVertical: Padding.p_xs,
    },
    depth1Frame10: {
        height: 31,
        width: 390,
    },
    depth5Frame02: {
        height: 24,
        width: 24,
    },
    depth4Frame03: {
        paddingHorizontal: 0,
        paddingVertical: Padding.p_9xs,
        width: 24,
    },
    home: {
        color: Color.colorDarkgray,
    },
    depth4Frame1: {
        width: 35,
    },
    depth4Frame11: {
        width: 43,
    },
    depth3Frame11: {
        marginLeft: 8,
    },
    depth4Frame05: {
        borderRadius: Border.br_base,
        width: 48,
        justifyContent: "center",
    },
    favorites: {
        color: Color.colorWhite,
    },
    depth4Frame12: {
        width: 58,
    },
    depth2Frame08: {
        height: 54,
        width: 358,
        flexDirection: "row",
    },
    depth1Frame11: {
        borderStyle: "solid",
        borderColor: Color.colorDarkslategray,
        borderTopWidth: 1,
        height: 75,
        paddingTop: Padding.p_5xs,
        paddingBottom: Padding.p_xs,
        paddingHorizontal: Padding.p_base,
    },
    depth1Frame12: {
        height: 20,
    },
    depth0Frame0: {
        height: 844,
        overflow: "hidden",
        width: 390,
    },
    galileoDesign: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
    },
});

export default MatchDetailsScreen;
