import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function StarRating({
    isDish,
    categoryIndex,
    dishIndex,
    itIsEditable,
    averageRating,
    setStarRatingValue,
}) {
    const [starRating, setStarRating] = useState(averageRating);
    const [aStarWasClicked, setAStarWasClicked] = useState(false);

    useEffect(() => {
        if (!itIsEditable) {
            setStarRating(averageRating);
        } else {
            setStarRating(0);
        }
    }, []);

    function setRating(newValue) {
        if (!itIsEditable) return;
        setAStarWasClicked(true);
        setStarRating(newValue);
        setStarRatingValue(newValue);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setRating(1)}>
                <MaterialIcons
                    name={starRating >= 1 ? "star" : "star-border"}
                    size={32}
                    style={
                        starRating >= 1
                            ? styles.starSelected
                            : styles.starUnselected
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRating(2)}>
                <MaterialIcons
                    name={starRating >= 2 ? "star" : "star-border"}
                    size={32}
                    style={
                        starRating >= 2
                            ? styles.starSelected
                            : styles.starUnselected
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRating(3)}>
                <MaterialIcons
                    name={starRating >= 3 ? "star" : "star-border"}
                    size={32}
                    style={
                        starRating >= 3
                            ? styles.starSelected
                            : styles.starUnselected
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRating(4)}>
                <MaterialIcons
                    name={starRating >= 4 ? "star" : "star-border"}
                    size={32}
                    style={
                        starRating >= 4
                            ? styles.starSelected
                            : styles.starUnselected
                    }
                />
            </TouchableOpacity>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <TouchableOpacity onPress={() => setRating(5)}>
                    <MaterialIcons
                        name={starRating >= 5 ? "star" : "star-border"}
                        size={32}
                        style={
                            starRating >= 5
                                ? styles.starSelected
                                : styles.starUnselected
                        }
                    />
                </TouchableOpacity>
                {starRating >= 5 ? <Text> Gracias!</Text> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: 40,
        marginBottom: 5,
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
    starUnselected: {
        color: "#aaa",
    },
    starSelected: {
        color: "#E6E50B",
    },
});
