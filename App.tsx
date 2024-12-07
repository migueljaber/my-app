import React from "react";
import {
    NativeBaseProvider, StatusBar,
} from "native-base";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Routes} from "./src/routes";

export default function App() {
    return (
        <NativeBaseProvider>
            <StatusBar/>
            <SafeAreaProvider>
                <Routes/>
            </SafeAreaProvider>

        </NativeBaseProvider>
    );
}

