import {
    FormControl,
    Icon,
    IInputProps,
    Input as NativeBaseInput, WarningOutlineIcon
} from 'native-base';
import {MaterialIcons} from "@expo/vector-icons";

type Props = IInputProps & {
    icon?: "email" | "person" | "lock",
    errorMessage?: string | null,
}

export function Input({icon, errorMessage = null, isInvalid, ...rest}: Props) {

    const invalid = !!errorMessage || isInvalid;

    return (
        <FormControl isInvalid={invalid} mb={4}>
            <NativeBaseInput
                InputLeftElement={
                    icon ? (
                        <Icon
                            as={<MaterialIcons name={icon}/>}
                            size={5}
                            ml={2}
                            color={"gray.200"}
                        />
                    ) : undefined
                }
                bg={"gray.650"}
                px={4}
                borderWidth={1}
                fontSize={{base: "md", md: "xl"}}
                color={"white"}
                fontFamily={"body"}
                borderRadius={"md"}
                placeholderTextColor={"gray.200"}
                isInvalid={invalid}
                _invalid={{
                    borderWidth: 1,
                    borderColor: "red.500"
                }}
                _focus={{
                    bg: "gray.700",
                    borderWidth: "1",
                    borderColor: "gray.200"
                }}
                {...rest}
            />
            <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
                _text={{
                    color: "red.500"
                }}
            >
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>

    )
}
