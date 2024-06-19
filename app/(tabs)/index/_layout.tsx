import React from 'react';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

export default function IndexStack() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: Colors.light.tabIconDefault,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 36
        },
        headerRight: () => (
            <View style={styles.iconStyles}>
                <Ionicons size={25} name='person' color='white' />
            </View>
        )
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerTitle: 'AI' }}
      />
      {/* Hier können Sie weitere Bildschirme hinzufügen, falls erforderlich */}
    </Stack>
  )
}

export const styles = StyleSheet.create({
    iconStyles: {
        margin: '5%',
        backgroundColor: Colors.light.primary,
        borderRadius: 50,
        padding: 10, 
    }
})
