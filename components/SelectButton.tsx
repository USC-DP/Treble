import { Pressable, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

type Props = {
    text?: string,
    event?: void,

}

export default function SelectButton({ text, event }: Props) {
    return (

        <Button mode="contained" uppercase={false} style={style.button} labelStyle={{ color: "white", fontSize: 18 }}
         color={'#0f5aba'}>{text}</Button>

    );
}

const style = StyleSheet.create({
    button: {
        margin: 5
        //0f5aba - dark, 759ac9 - light
    }
})