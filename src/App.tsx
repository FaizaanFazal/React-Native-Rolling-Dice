import React, { useCallback, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ReactNativeHapticFeedback from "react-native-haptic-feedback";


import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

{/* <> general syntax , pass object with image props etc.. */}
type DiceProps = PropsWithChildren<{
  imageUrl :ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
};


const Dice =({imageUrl}:DiceProps):JSX.Element =>{
  return(
  <View>
    <Image style={styles.diceImage} source={imageUrl} />
  </View>
  )
}

function App(): JSX.Element {
  const [diceimage,setDiceimage]=useState<ImageSourcePropType>(DiceOne)

  const rolldice=()=>{
    let randomnumber=Math.floor(Math.random()*6)+1;
   
    switch(randomnumber){
      case 1:
        setDiceimage(DiceOne)
        break;
      case 2:
        setDiceimage(DiceTwo)
        break;
      case 3:
          setDiceimage(DiceThree)
          break;
      case 4:
            setDiceimage(DiceFour)
            break;
      case 5:
            setDiceimage(DiceFive)
            break;
      case 6:
              setDiceimage(DiceSix)
              break;
            default:
        setDiceimage(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }


 return(
  <View style={styles.container}>
      <Dice imageUrl={diceimage}/>
      <Pressable  onPress={rolldice}>
        <Text style={styles.rollDiceBtnText}>
          Roll</Text>
      </Pressable>
  </View>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
    transform: [{rotate: '90deg'}],
  
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
