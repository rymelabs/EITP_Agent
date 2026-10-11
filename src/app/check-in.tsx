import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrototypeNotice } from '../components/PrototypeNotice';

export default function CheckInScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Confirm your Polling Unit</Text>
      <Text style={styles.description}>
        Check the assigned location before reporting results or incidents.
      </Text>

      <PrototypeNotice />

      <View style={styles.card}>
        <Text style={styles.label}>ASSIGNED LOCATION</Text>
        <Text style={styles.unit}>Not available yet</Text>
        <Text style={styles.body}>
          The verified agent assignment will load here after sign-in is connected.
        </Text>
      </View>

      <Pressable accessibilityRole="button" accessibilityState={{ disabled: true }} disabled style={styles.button}>
        <Text style={styles.buttonText}>Confirm Polling Unit</Text>
      </Pressable>
      <Text style={styles.help}>
        If the assigned Polling Unit is incorrect, reporting must remain blocked until an
        authorized coordinator resolves the mismatch.
      </Text>

      <Link href="/" asChild>
        <Pressable accessibilityRole="button" style={styles.backButton}>
          <Text style={styles.backText}>Return to field reporting</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 20,
  },
  title: {
    color: '#173B35',
    fontSize: 26,
    fontWeight: '800',
  },
  description: {
    color: '#52615E',
    fontSize: 15,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E7E4',
    borderRadius: 16,
    borderWidth: 1,
    gap: 9,
    padding: 18,
  },
  label: {
    color: '#5B6F69',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  unit: {
    color: '#263F39',
    fontSize: 18,
    fontWeight: '700',
  },
  body: {
    color: '#52615E',
    fontSize: 14,
    lineHeight: 21,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#9AA9A3',
    borderRadius: 12,
    justifyContent: 'center',
    minHeight: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  help: {
    color: '#687772',
    fontSize: 13,
    lineHeight: 19,
  },
  backButton: {
    alignItems: 'center',
    minHeight: 45,
    justifyContent: 'center',
  },
  backText: {
    color: '#17664E',
    fontSize: 14,
    fontWeight: '700',
  },
});
