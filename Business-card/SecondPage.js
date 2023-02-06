
import { Text, StyleSheet, StatusBar, View, Image, Button, ImageBackground } from 'react-native';
const SecondPage =  ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image}
                             source={{uri:"https://www.joc.com/content-assets/styles/feature_image_1500w/s3%2Ffield_feature_image%2FShutterstock_2198037181.png"}}/>
            <Text style={styles.text}>Transportation Services</Text>
            <Text style={styles.text1}>Regardless of your industry, your commodity, or your key markets, Maersk has solutions that offer both small and large businesses the opportunity to grow. We serve our customers with frequent departures on all major trade lanes and inland services for a true end-to-end experience.</Text>
            <StatusBar style="auto" />
            <View style={styles.btnLogout}>
                <Button title="Logout" color="red" onPress={() => navigation.navigate('HomePage')}  />
            </View>

        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //defult of web is column should be change to row
        flexDirection: 'column',
        backgroundColor: '#636463',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',

    },
    text: {
        color: "#f1f1f1",
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        marginTop: 10,
        padding: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,


    },
    text1: {
        color: "#f1f1f1",
        //transparent background
        backgroundColor: 'rgba(0,0,0,0.5)',
        fontSize: 18,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        marginTop: 10,
        paddingTop: 20,
        paddingLeft:10,
        paddingRight:100,
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        bottom: 0,

    },
    image: {
        width: 450,
        height: 350,
        resizeMode: 'contain',
        marginTop:0,
        //make it behind the text
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    btnLogout: {
        color: "#fff",
        padding: 10,
        borderRadius: 50,
        marginTop: 30,
        width: 250,
        paddingTop: 250,


    }

});
export default SecondPage;