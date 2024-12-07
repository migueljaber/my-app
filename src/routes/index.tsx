import {Box} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
import {AutenticacaoRotas} from "./autenticacao.routes";
import {AutenticadoRoutes} from "./autenticado";
import {useState} from "react";


export function Routes(){

    const [estaLogado, setEstaLogado] = useState(false)

    return (
        <Box flex={1}>
            <NavigationContainer>
                {estaLogado ? <AutenticadoRoutes /> : <AutenticacaoRotas />}
            </NavigationContainer>
        </Box>
    )
}