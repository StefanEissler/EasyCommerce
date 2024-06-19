import { Image, StyleSheet, Platform, View, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ShoppingItem } from '@/components/ShoppingItem';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [shoppingItems, setShoppingItems] = useState<any>([]);

  return (
    <View style={{padding: '10%', height: '100%', backgroundColor: 'white'}}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Einkaufswagen!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        {shoppingItems.length < 0 ?
          shoppingItems.map((item:any) => {
            <ScrollView>
              <ShoppingItem itemName={item.name} itemPrice={item.price} type='default' />
            </ScrollView>
        }):(
          <ThemedView style={styles.shoppingEmpty}>
            <Ionicons name='information-circle-outline' size={28} color='red' />
            <ThemedText type="defaultSemiBold" lightColor='red' darkColor='red'>Einkaufwagen ist leer!</ThemedText>
          </ThemedView>
        )}
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    flex: 1, 
    justifyContent: 'center'
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  shoppingEmpty: {
    gap: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '100%'
  }
});
