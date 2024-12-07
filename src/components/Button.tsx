import {
    Button as ButtonNativeBase,
    HStack,
    IButtonProps,
    Text,
} from 'native-base'

type Props = IButtonProps & {
    title?: string;
    variant?: "solid" | "outline";
}

export default function Button({
                                   title,
                                   subText,
                                   variant = 'solid',
                                   ...rest
                               }: Props) {

    return (
        <ButtonNativeBase
            w={"full"}
            h={16}
            bg={variant === "outline" ? "red.100" : 'blue.500'}
            borderWidth={variant === "outline" ? 1 : 0}
            borderColor={"red.500"}
            _pressed={{
                bg: variant === "outline" ? "red.500" : "red.600",
                opacity: 0.3
            }}
            {...rest}
        >
            <HStack>

                {title && (
                    <Text color={"gray.900"} fontSize={"lg"} mr={2}>
                        {title}
                    </Text>
                )}
            </HStack>

        </ButtonNativeBase>
    )
}
