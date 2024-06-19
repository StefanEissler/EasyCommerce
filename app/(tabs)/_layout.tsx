import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarActiveBackgroundColor: Colors.light.primary,
        tabBarInactiveBackgroundColor: Colors.light.primary,
        tabBarShowLabel: false
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color="white" />
          ),
          headerRight: () => (
            <TabBarIcon
              name={colorScheme === 'dark' ? 'moon' : 'moon-outline'}
              color={Colors[colorScheme ?? 'light'].tint}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <View
            style={{
              position: 'absolute',
              bottom: 20, // space from bottombar
              height: 58,
              width: 58,
              borderRadius: 58,
              backgroundColor: Colors.light.secondary,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <TabBarIcon name={focused ? 'camera' : 'camera-outline'} color='white' />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="angebote"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bag-check' : 'bag-check-outline'} color='white' />
          ),
        }}
        />
    </Tabs>
  );
}

const MiddleStyle ={
  width: '20px',
  backgroundColor: 'purple'
}
