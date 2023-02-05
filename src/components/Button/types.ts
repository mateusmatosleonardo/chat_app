import { PressableStateCallbackType, StyleProp, ViewStyle } from "react-native";

export interface IButton {
  onPress: () => void;
  style?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
  title?: string;
  colorTitle?: string;
  hasIcon?: boolean;
}
