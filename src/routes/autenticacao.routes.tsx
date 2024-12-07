import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack";
import {Login} from "../screens/Login";
import {Cadastro} from "../screens/Cadastro";


export type NaoAutenticado = {
    login: undefined;
    cadastro: undefined;
}

export type AuthNavigationRoutesProps = NativeStackNavigationProp<NaoAutenticado>

const {Navigator, Screen} = createNativeStackNavigator()

export function AutenticacaoRotas() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login}/>
            <Screen name="cadastro" component={Cadastro}/>
        </Navigator>
    )
}