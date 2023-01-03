import { createDrawerNavigator } from "@react-navigation/drawer";
import TestScreen from "../screens/TestScreen";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator
            swipeEnabled={true}
            onSwipe={() => console.log("Drawer was swiped!")}
        >
            <Drawer.Screen name="Article" component={TestScreen} />
        </Drawer.Navigator>
    );
};

export default MyDrawer;
