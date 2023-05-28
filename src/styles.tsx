import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const getStyleObj = ({isOwnMessage, maxWidth}: {isOwnMessage: boolean, maxWidth?: number}) => {
 return StyleSheet.create({
    bubble: {
      maxWidth: moderateScale(maxWidth || 250, 2),
      alignSelf: isOwnMessage ? 'flex-end': 'flex-start',
      paddingHorizontal: moderateScale(10, 2),
      paddingTop: moderateScale(5, 2),
      paddingBottom: moderateScale(7, 2),
      borderRadius: 20,
      marginVertical: moderateScale(7,2),
    },
    itemOut: {
       alignSelf: 'flex-end',
    },
    svgContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      flex: 1
    },
    svgContainerOwn: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    svgContainerOther: {
      justifyContent: 'flex-end',
      alignItems: 'flex-start'
    },
});
}

export default getStyleObj