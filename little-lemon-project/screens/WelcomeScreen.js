import * as React from 'react';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style= {styles.container}>
      <Image
        style = {styles.img}
        source={require('../assets/little-lemon-logo.png')}
        resizeMode='center'
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
        />
      
      <Text style= {styles.innerText}>
        Little Lemon, your local Mediterranean Bistro
      </Text>

      <Pressable 
        onPress={() => navigation.navigate('Subcribe')}
        style={styles.innerBox}
        >
        <Text style={styles.innerTextBox}>
          Newsletter
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent:'space-between',
    // alignContent:'space-between',
    alignItems:'center',
    // backgroundColor: '#fff'
  },
  img: {
    height:200,
    width: 200,
    marginTop: 150,
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    // marginHorizontal: 90,
  },
  innerText: {
    fontSize: 20,
    // marginVertical: 40,
    alignSelf:'stretch',
    marginHorizontal: 30,
    textAlign:'center',
  },
  innerBox:{
    backgroundColor: '#495E57',
    borderRadius: 10,
    // marginTop: 30
    marginBottom: 40,
    // alignItems:'flex-end',
    alignSelf:'stretch',
    marginHorizontal: 20,
  },
  innerTextBox: {
    fontSize: 20,
    padding: 8,
    // marginHorizontal: 100,
    color: '#fff',
    textAlign:'center',
  },
})

export default WelcomeScreen;
