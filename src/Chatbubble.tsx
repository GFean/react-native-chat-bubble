import { View, Pressable, StyleSheet } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import getStyleObj from './styles';
import { ChatBubbleProps } from 'react-native-chat-bubble';



const ChatBubble: React.FC<ChatBubbleProps> = ({
  isOwnMessage,
  children,
  bubbleColor = isOwnMessage ? '#1084ff' : 'grey',
  tailColor = bubbleColor,
  withTail = true,
  style,
  onPress,
  hitSlop,
  maxWidth,
  ...rest
}) => {
  const styles = getStyleObj({isOwnMessage, maxWidth})
  const SvgContainerStyle = isOwnMessage ? styles.svgContainerOwn : styles.svgContainerOther;
  const Container : typeof View | typeof Pressable =  onPress ? Pressable: View;
  const tailPath = isOwnMessage 
    ? "M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
    : "M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z";

  const bubbleStyle = StyleSheet.flatten([
    style,
    styles.bubble,
    isOwnMessage && styles.itemOut,
    {
      backgroundColor: bubbleColor,
    },

  ]);

  return (
    <Container {...rest} hitSlop={hitSlop} onPress={onPress} >
      <View style={bubbleStyle}>
        {children}
      </View>
      {withTail && (
        <View style={[styles.svgContainer, SvgContainerStyle]}>
          <Svg width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32.485 17.5 15.515 17.5" enable-background="new 32.485 17.5 15.515 17.5">
            <Path
                d={tailPath}
                fill={tailColor}
                x="0"
                y="0"
            />
          </Svg>
        </View>
      )}
      </Container>
  );
};

export default ChatBubble;
