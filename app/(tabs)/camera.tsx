import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Button, Pressable } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {

  const selectImage = () => {

  }

  const takePicture = () => {

  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="camera" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Scanne ein Produkt</ThemedText>
      </ThemedView>
      <ThemedText>Scanne ein Produkt um es automatisch in deinen Warenkorb hinzuzufügen</ThemedText>
      <Pressable onPress={() => selectImage()}>
        <ThemedView style={styles.cameraOption}>
          <ThemedText type='defaultSemiBold'>Wähle ein Bild aus deinem Album</ThemedText>
            <Ionicons name='phone-portrait-outline' size={28} />
        </ThemedView>
      </Pressable>
      <Pressable onPress={() => takePicture()}>
        <ThemedView style={styles.cameraOption}>
          <ThemedText type='defaultSemiBold'>Mache ein Bild mit deiner Kamera</ThemedText>
            <Ionicons name='camera-outline' size={28} />
        </ThemedView>
      </Pressable>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  cameraOption: {
    flexDirection: 'row',
    gap: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
  }
});
