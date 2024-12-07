import {Container, FlatList, Heading, HStack, Pressable, Text, VStack} from "native-base";
import React, {useState} from "react";
import { TouchableOpacity } from "react-native";

type Post = {
    id: number;
    userId: string;
    content: string;
    likes: number;
    createdAt: string;
}

export function Home() {

    const [posts, setPosts] = useState<Post[]>(
        [
            {
                id: 1,
                userId: "1",
                content: "Primeiro Post na Plataforma",
                likes: 0,
                createdAt: "2024-12-07"
            }
        ]
    );

    return (
        <VStack flex={1}>
            <FlatList
                data={posts}
                renderItem={({item}) => (

                    <TouchableOpacity>
                        <HStack
                            bg={"gray.500"}
                            alignItems={"center"}
                            p={2}
                            pr={4}
                            mb={3}
                            rounded={"md"}>

                            <VStack flex={1}>
                                <Heading fontSize={"lg"} color={"white"} fontFamily={"heading"}>
                                </Heading>
                                <Text fontSize={"sm"} color={"gray.200"} mt={1} numberOfLines={1}>
                                </Text>
                            </VStack>
                        </HStack>
                    </TouchableOpacity>
                )}
            />
        </VStack>
    )
}