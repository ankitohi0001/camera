import {  Button, View ,Image , Text , StyleSheet} from 'react-native';
import {launchCameraAsync} from 'expo-image-picker';
import { useState } from 'react';
import { Colors } from '../constants/Colors';
import OutlinedButton from '../Ui/outlinebutton';
function ImagePicker() {

    const [pickedImage , setPickedImage] = useState(); 
  async function takeImageHandler() {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
setPickedImage(image.uri);
  }

  let ImagePreview = <Text>No imgae Taken yet</Text>

  if(pickedImage) {
    ImagePreview =  <Image style={styles.image} source={{uri: pickedImage}}/>;
  }
  return (
    <View>
      <View style={styles.imagePreview}>{ImagePreview}</View>
      <OutlinedButton icon={"camera"} onPress={takeImageHandler}> Take Image</OutlinedButton>
  
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
      width: '100%',
      height: 200,
      marginVertical: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.primary100,
      borderRadius: 4,
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });