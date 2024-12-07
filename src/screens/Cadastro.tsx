import {Center, Heading, ScrollView, VStack} from "native-base";
import {Controller, useForm} from "react-hook-form";
import {LoginType} from "../types/CadastroType";
import {Input} from "../components/Input";
import Button from "../components/Button";
import {useNavigation} from "@react-navigation/native";
import {AuthNavigationRoutesProps} from "../routes/autenticacao.routes";

export function Cadastro() {
    const {
        control,
        formState: {errors},
    } = useForm<LoginType>({
        defaultValues: {}
    })

    const navigation = useNavigation<AuthNavigationRoutesProps>();
    function voltarparalogin() {
        navigation.navigate("login")
    }
    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
            }}
            showsVerticalScrollIndicator={false}
        >
            <Center mt={40}>
                <Heading>
                    Crie sua conta

                </Heading>
            </Center>

            <Center padding={4}>
                <Controller
                    control={control}
                    name={"name"}
                    render={({field: {onChange, value}}) => (
                        <Input
                            icon={"person"}
                            placeholder={"Insira seu nome"}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize={"none"}
                            errorMessage={errors.email?.message}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name={"email"}
                    render={({field: {onChange, value}}) => (
                        <Input
                            icon={"email"}
                            placeholder={"E-mail"}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize={"none"}
                            errorMessage={errors.email?.message}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name={"password"}
                    render={({field: {onChange, value}}) => (
                        <Input
                            icon={"lock"}
                            placeholder={"Digite sua senha"}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize={"none"}
                            errorMessage={errors.password?.message}
                        />
                    )}
                />
            </Center>

            <VStack margin={4} space={2}>
                <Button title={"Cadastrar"}
                        isLoading={false}
                        onPress={() => {

                        }}
                />

                <Button title={"Voltar"}
                    variant={"outline"}
                    isLoading={false}
                    onPress={voltarparalogin}
                />
            </VStack>
        </ScrollView>
    )
}