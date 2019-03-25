import React from 'react';
//import bibliothèque react native
import {Image, Dimensions} from 'react-native';
//import bibliothèque native base

// import du composant photoview (zoom)
import ImageZoom from 'react-native-image-pan-zoom';

export default class PhotoZoomComposant extends React.Component {
  render() {
    return (
      <ImageZoom cropWidth={Dimensions.get('window').width}
                 cropHeight={250}
                 imageWidth={350}
                 imageHeight={250}>
          <Image style={{width:350, height:250 }}
                 source={require("../../public/images/rs2019-2.jpg")}/>
      </ImageZoom>
    );
  }
}
