import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').width;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },

});

export default style