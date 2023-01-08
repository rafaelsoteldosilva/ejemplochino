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
import { TextInput } from "react-native-paper";
import TextInputComponent from "../screenComponents/TextInputComponent";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const RatingReviewsAndSharing = ({ starRatingAverage, reviews }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [errorText, setErrorText] = useState("");

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
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <KeyboardAwareScrollView
                    contentContainerStyle={styles.container}
                    style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                >
                    <View style={styles.outsideModal}>
                        <View style={styles.modalView}>
                            <StarRating
                                isDish={false}
                                categoryIndex={-1}
                                dishIndex={-1}
                                itIsEditable={true}
                                averageRating={0}
                            />
                            <TextInputComponent
                                label="Your Name"
                                disabled={!isEnabled}
                                multiline={false}
                                numberOfLines={1}
                                keyboardType="default"
                                secureTextEntry={false}
                                hasError={true}
                                errorText={"this is an error"}
                            />
                            <TextInputComponent
                                label="Restaurant Number"
                                disabled={!isEnabled}
                                multiline={false}
                                numberOfLines={1}
                                keyboardType="decimal-pad"
                                secureTextEntry={false}
                                hasError={true}
                                errorText={"this is an error"}
                            />
                            <TextInputComponent
                                label="Your Review"
                                disabled={!isEnabled}
                                multiline={true}
                                numberOfLines={4}
                                keyboardType="default"
                                secureTextEntry={false}
                                hasError={true}
                                errorText={"this is an error"}
                            />
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <Pressable
                                    style={[styles.button, styles.buttonOpen]}
                                    onPress={() =>
                                        setModalVisible(!modalVisible)
                                    }
                                >
                                    <Text style={styles.textStyle}>Submit</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() =>
                                        setModalVisible(!modalVisible)
                                    }
                                >
                                    <Text style={styles.textStyle}>
                                        Cancelar
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
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
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    myText: {
        width: "100%",
    },
    itemBox: {
        backgroundColor: "#6669A3",
        padding: 8,
        borderRadius: 8,
    },
    outsideModal: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        width: "100%",
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
        marginTop: 10,
    },
    buttonOpen: {
        backgroundColor: "#2196F3",
    },
    buttonClose: {
        backgroundColor: "#B6D5F3",
        marginLeft: 10,
    },
    buttoncancel: {},
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
