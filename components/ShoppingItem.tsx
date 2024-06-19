import { View, Text, StyleSheet } from "react-native";


export type ShoppingItemProps = {
    type: string,
    itemName: string,
    itemPrice: number,
}


export function ShoppingItem({type = 'default', itemName, itemPrice}:ShoppingItemProps){


    return(
        <View style={type === 'default' ? styles.default : undefined}>
            <Text>
                {itemName}
            </Text>
            <Text>
                {itemPrice}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    default: {

    }
})