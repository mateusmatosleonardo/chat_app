import {
  ColorValue,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInput,
  TextInputContentSizeChangeEventData,
  TextInputFocusEventData,
  TextInputSubmitEditingEventData,
  TextStyle,
} from "react-native";

export interface IInput {
  value?: string;
  onChangeText?: (text: string) => void;
  hasIcon?: boolean;
  securityIcon?: boolean;
  visiblePassword?: boolean;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onFocus?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  style?: StyleProp<TextStyle>;
  secureTextEntry?: boolean | undefined;
  placeholder?: string | undefined;
  placeholderTextColor?: ColorValue | undefined;
  maxLength?: number | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  ref?: React.LegacyRef<TextInput> | undefined;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  autoCapitalize?: "none" | "sentences" | "characters" | "words";
  multiline?: boolean | undefined;
  onContentSizeChange?:
    | ((e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => void)
    | undefined;
  onPress?: () => void;
}
