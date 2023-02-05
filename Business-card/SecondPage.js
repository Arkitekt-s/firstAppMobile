
import { Text, StyleSheet, StatusBar, View, Image, Button, ImageBackground } from 'react-native';
const SecondPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image}
                             source={{uri:"https://media4.giphy.com/media/GbpRRfKyq7Wzda6bVk/giphy.gif?cid=ecf05e47hz2n58z21sd2qa5wq7p53v9aisdiqtktn8ixbd5n&rid=giphy.gif&ct=g"}}/>
            <Text style={styles.text}>Maersk</Text>
            <StatusBar style="auto" />
            <View style={styles.btnLogout}>
                <Button title="Logout" color="red" onPress={() => navigation.navigate('Home')}  />
            </View>

        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //defult of web is column should be change to row
        flexDirection: 'column',
        backgroundColor: '#27594F',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: "#f1f1f1",
        fontSize: 35,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        marginTop: 20,
    },
    image: {
        width: 500,
        height: 200,
        resizeMode: 'contain'
    },
    btnLogout: {
        color: "#fff",
        padding: 10,
        borderRadius: 10,
        marginTop: 30,
        //color of button


    }

});
export default SecondPage;