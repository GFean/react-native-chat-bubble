import { ReactNode } from "react";
import { PressableProps, StyleProp, ViewProps, ViewStyle } from "react-native/types";

export  interface ChatBubbleProps extends Omit<ViewProps, 'hitSlop'>, PressableProps {
    /**
    * boolean prop to identify the message and therefore the alignment 
    */
     isOwnMessage: boolean;
     /**
    * simple react children prop
    */
     children: ReactNode;
    /**
    * color of your bubble
    */
     bubbleColor?: string;
    /**
    * color of the tail of the bubble, if you pass a bubbleColor prop and your tail and the bubble are the same colour, you don't need to use this prop, they'll match automatically
    */
     tailColor?: string;
    /**
    * boolean prop which defines the if the tail is displayed with your message, defaults to true
    */
     withTail?: boolean;
     hitSlop?: {top: number, bottom:number, left: number, right:number },
    /**
    * maxWidth of your bubble, when adjusting maxWidth this prop shall be used instead of style override, in order to use moderateScale. 
    * defaults to 250
    */
     maxWidth?: number,
     style?: StyleProp<ViewStyle>;
 }