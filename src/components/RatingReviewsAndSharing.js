import {
    View,
    Text,
    Button,
    Image,
    Pressable,
    Modal,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
    AppStyle,
    globalImageStyle,
    globalTextStyle,
} from "../globalDefinitions/globalStyles";
import StarRating from "./StarRating";
import ModalBackdrop from "./ModalBackdrop";

const RatingReviewsAndSharing = ({ starRatingAverage, reviews }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ display: "flex", flexDirection: "column" }}>
            <StarRating
                isDish={false}
                categoryIndex={-1}
                dishIndex={-1}
                itIsEditable={false}
                averageRating={starRatingAverage}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            This is a modal, good!
                        </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: 10,
                        marginBottom: 10,
                        justifyContent: "space-between",
                    }}
                >
                    <Pressable
                        style={({ pressed }) => [
                            styles.itemBox,
                            pressed && {
                                opacity: 0.8,
                                backgroundColor: "lightskyblue",
                            },
                        ]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Entypo name="thumbs-up" size={20} color="white" />
                            <Text
                                style={[
                                    { marginLeft: 5, color: "white" },
                                    globalTextStyle.text,
                                    {
                                        fontSize: 20,
                                        marginTop: 0,
                                        marginBottom: 0,
                                    },
                                ]}
                            >
                                Add Review
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [
                            styles.itemBox,
                            pressed && {
                                opacity: 0.8,
                                backgroundColor: "lightskyblue",
                            },
                        ]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Entypo
                                name="magnifying-glass"
                                size={20}
                                color="white"
                            />
                            <Text
                                style={[
                                    { marginLeft: 5, color: "white" },
                                    globalTextStyle.text,
                                    {
                                        fontSize: 20,
                                        marginTop: 0,
                                        marginBottom: 0,
                                    },
                                ]}
                            >
                                Show Reviews
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Pressable
                    style={({ pressed }) => [
                        styles.itemBox,
                        pressed && {
                            opacity: 0.8,
                            backgroundColor: "lightskyblue",
                        },
                    ]}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <View
                        style={{
                            color: "white",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Entypo name="share" size={20} color="white" />
                        <Text
                            style={[
                                { marginLeft: 5, color: "white" },
                                globalTextStyle.text,
                                {
                                    fontSize: 20,
                                    marginTop: 0,
                                    marginBottom: 0,
                                },
                            ]}
                        >
                            Share
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

export default RatingReviewsAndSharing;

const styles = StyleSheet.create({
    itemBox: {
        backgroundColor: "#6669A3",
        padding: 8,
        borderRadius: 8,
    },
    centeredView: {
        backgroundColor: "rgba(0,0,0,0.6)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
