import {
    View,
    Text,
    Button,
    Image,
    Pressable,
    Modal,
    StyleSheet,
} from "react-native";
import React, { useRef, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
    AppStyle,
    globalImageStyle,
    globalTextStyle,
} from "../globalDefinitions/globalStyles";
import StarRating from "../screenComponents/StarRating";
import { TextInput } from "react-native-paper";
import TextInputComponent from "../screenComponents/TextInputComponent";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StarRatingComponent from "../screenComponents/StarRatingComponent";

const formDefaultValues = {
    name: "",
    rating: 0,
    restaurantNumber: 0,
    review: "",
};

const errorDefaultValues = {
    name: "",
    rating: "",
    restaurantNumber: "",
    review: "",
};

const formFields = {
    name: "name",
    rating: "rating",
    restaurantNumber: "restaurantNumber",
    review: "review",
};

const requiredFields = {
    name: true,
    rating: true,
    restaurantNumber: true,
    review: false,
};

const RatingReviewingAndSharing = ({
    starRatingAverage,
    reviews,
    todays_number,
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [newStarRating, setNewStarRating] = useState(-1);
    const [name, setName] = useState("");
    const [restaurantNumber, setRestaurantNumber] = useState(-1);
    const [review, setReview] = useState("");
    const errorNewStarRating = useRef("");
    const errorName = useRef("");
    const errorRestaurantNumber = useRef("");
    const errorReview = useRef("");
    const [forceRender, setForceRender] = useState(false);

    function validateEntries() {
        let modalHasErrors = false;

        newStarRating === -1 && requiredFields.rating
            ? (errorNewStarRating.current = "Por favor, elija su calificación")
            : (errorNewStarRating.current = "");

        name.length === 0 && requiredFields.name
            ? (errorName.current = "Por favor, escriba su nombre")
            : (errorName.current = "");

        Number(restaurantNumber) !== Number(todays_number) &&
        requiredFields.restaurantNumber
            ? (errorRestaurantNumber.current =
                  "lo siento, pero el número no coincide, por favor vuelva a intentarlo")
            : (errorRestaurantNumber.current = "");

        review.length === 0 && requiredFields.review
            ? (errorReview.current = "por favor, escriba un comentario")
            : (errorReview.current = "");

        modalHasErrors = false;
        modalHasErrors =
            modalHasErrors || errorNewStarRating.current.length > 0;
        modalHasErrors = modalHasErrors || errorName.current.length > 0;
        modalHasErrors =
            modalHasErrors || errorRestaurantNumber.current.length > 0;
        modalHasErrors = modalHasErrors || errorReview.current.length > 0;

        if (!modalHasErrors) {
            setModalVisible(!modalVisible);

            setNewStarRating(-1);
            setName("");
            setRestaurantNumber(0);
            setReview("");
        }
    }

    function pressedSubmit() {
        validateEntries();
        setForceRender(!forceRender);
    }

    function cancelled() {
        setNewStarRating(-1);
        setName("");
        setRestaurantNumber(0);
        setReview("");
        errorNewStarRating.current = "";
        errorName.current = "";
        errorRestaurantNumber.current = "";
        errorReview.current = "";
        setForceRender(!forceRender);
        setModalVisible(!modalVisible);
    }

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
                {/* <KeyboardAwareScrollView
                    contentContainerStyle={styles.container}
                    style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                > */}
                <View style={styles.outsideModal}>
                    <View style={styles.modalView}>
                        <StarRatingComponent
                            isDish={false}
                            categoryIndex={-1}
                            dishIndex={-1}
                            errorText={errorNewStarRating.current}
                            setNewStarRating={setNewStarRating}
                        />

                        <TextInputComponent
                            label="Your Name"
                            disabled={false}
                            multiline={false}
                            numberOfLines={1}
                            keyboardType="default"
                            secureTextEntry={false}
                            value={name}
                            setValue={setName}
                            hasError={errorName.current.length > 0}
                            errorText={errorName.current}
                        />
                        <TextInputComponent
                            label="Restaurant Number (Preguntarlo)"
                            disabled={false}
                            multiline={false}
                            numberOfLines={1}
                            keyboardType="decimal-pad"
                            secureTextEntry={false}
                            value={restaurantNumber}
                            setValue={setRestaurantNumber}
                            hasError={errorRestaurantNumber.current.length > 0}
                            errorText={errorRestaurantNumber.current}
                        />
                        <TextInputComponent
                            label="Your Review"
                            disabled={false}
                            multiline={true}
                            numberOfLines={4}
                            keyboardType="default"
                            secureTextEntry={false}
                            value={review}
                            setValue={setReview}
                            hasError={errorReview.current.length > 0}
                            errorText={errorReview.current}
                        />
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={pressedSubmit}
                            >
                                <Text style={styles.textStyle}>Submit</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={cancelled}
                            >
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                {/* </KeyboardAwareScrollView> */}
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

export default RatingReviewingAndSharing;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    itemBox: {
        backgroundColor: "#6669A3",
        padding: 8,
        borderRadius: 8,
    },
    outsideModal: {
        flex: 1,
        // backgroundColor: "rgba(0,0,0,0.6)",
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
