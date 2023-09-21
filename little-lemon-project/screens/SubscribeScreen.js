import * as React from 'react';
import { View, Image, TextInput, Text, Pressable, Alert, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';
import {validateEmail} from '../utils/index';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, onChangeEmail] = React.useState('');
  return (
    <KeyboardAvoidingView
      style={{flex:1,}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <View 
      style={styles.container}
      >
      <Image
        source={require('../assets/little-lemon-logo-grey.png')}
        resizeMode='center'
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
        style={styles.img}
        />
      
      <Text style={styles.innerText}>
        Subcribe to our newsletter for our latest delicious recipes!
      </Text>

      {/* <Text>
        {String(validateEmail(email)).length > 4 ? 'not null' : 'null'}
      </Text>

      <Text>
        {String(validateEmail(email)).length}
      </Text> */}

      <TextInput
        value={email}
        onChangeText={onChangeEmail}
        placeholder='Type your email'
        style={styles.innerInputText}
        />
      
      <Pressable 
        onPress={() => {
          Alert.alert('Alert','Thanks for subcribing, stay tuned!');
          onChangeEmail('');
        }}
        disabled= {String(validateEmail(email)).length > 4 ? false : true}
        style={String(validateEmail(email)).length > 4 ? styles.innerBox: styles.innerBoxFalse}
        // style={styles.innerBox}
        >
        <Text style={styles.innerTextBox}>Subcribe</Text>
      </Pressable>

    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    // justifyContent:'space-between',
    // alignContent:'space-between',
    alignItems:'center',
    // backgroundColor: '#fff'
  },
  img: {
    height:100,
    width: 200,
    marginTop: 50,
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    // marginHorizontal: 100,
    // alignItems:'center',
    // alignContent: 'center',
    // justifyContent: 'center',
    // marginVertical: 100,
  },
  innerText: {
    fontSize: 20,
    marginVertical: 30,
    marginHorizontal: 23,
    textAlign: 'center',
    alignSelf:'stretch',
  },
  innerBox:{
    backgroundColor: '#495E57',
    borderRadius: 10,
    marginTop: 30,
    alignSelf:'stretch',
    marginHorizontal: 20,
    // marginBottom: 40,
    // alignItems:'flex-end',
  },
  innerTextBox: {
    fontSize: 20,
    padding: 8,
    textAlign: 'center',
    // alignSelf:'stretch',
    // backgroundColor: '#495E57',
    color: '#fff'
  },
  innerInputText: {
    fontSize: 20,
    padding: 8,
    paddingHorizontal: 16,
    marginHorizontal: 20,
    // marginLeft: 80,
    // marginRight: 100,
    // width:100,
    // justifyContent:'flex-start',
    // alignContent:'flex-start',
    // alignItems:'flex-start',
    borderWidth:3,
    borderColor:'#495E57',
    borderRadius: 10,
    alignSelf:'stretch',
  },
  innerBoxFalse: {
    // backgroundColor: '#495E57',
    borderRadius: 10,
    marginTop: 30,
    alignSelf:'stretch',
    marginHorizontal: 20,
    backgroundColor: 'grey',
  }
})

export default SubscribeScreen;
