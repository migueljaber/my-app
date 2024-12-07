import {Box} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
import {AutenticacaoRotas} from "./autenticacao.routes";


export function Routes(){
    return (
        <Box flex={1}>
            <NavigationContainer>
                <AutenticacaoRotas />
            </NavigationContainer>
        </Box>
    )
}