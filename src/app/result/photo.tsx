import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrototypeNotice } from '../../components/PrototypeNotice';

export default function ResultPhotoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Capture the result sheet</Text>
      <Text style={styles.description}>
        Keep the full sheet in frame and make sure all figures are readable.
      </Text>

      <PrototypeNotice />

      <View style={styles.captureFrame}>
        <View style={styles.documentIcon}>
          <Text style={styles.documentGlyph}>▤</Text>
        </View>
        <Text style={styles.frameTitle}>Camera preview</Text>
        <Text style={styles.frameBody}>
          The camera will open here when permissions and capture are implemented.
        </Text>
      </View>

      <View style={styles.stepsCard}>
        <Text style={styles.stepsTitle}>What happens next</Text>
        <Text style={styles.step}>1. Capture or select the original result sheet.</Text>
        <Text style={styles.step}>2. Review the extracted vote figures and confidence.</Text>
        <Text style={styles.step}>3. Correct unclear figures before submitting for review.</Text>
      </View>

      <View style={styles.statusCard}>
        <Text style={styles.statusTitle}>OCR service not connected</Text>
        <Text style={styles.frameBody}>
          No image has been captured or uploaded. This preview does not process or save evidence.
        </Text>
      </View>

      <Link href="/result/review" asChild>
        <Pressable accessibilityRole="button" style={styles.previewButton}>
          <Text style={styles.previewButtonText}>View OCR review preview</Text>
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
  captureFrame: {
    alignItems: 'center',
    backgroundColor: '#EEF2F0',
    borderColor: '#B8C5BF',
    borderRadius: 18,
    borderStyle: 'dashed',
    borderWidth: 1.5,
    gap: 10,
    justifyContent: 'center',
    minHeight: 280,
    padding: 25,
  },
  documentIcon: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    height: 64,
    justifyContent: 'center',
    width: 64,
  },
  documentGlyph: {
    color: '#17664E',
    fontSize: 32,
  },
  frameTitle: {
    color: '#263F39',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 3,
  },
  frameBody: {
    color: '#5B6865',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
  },
  stepsCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E7E4',
    borderRadius: 16,
    borderWidth: 1,
    gap: 11,
    padding: 18,
  },
  stepsTitle: {
    color: '#213B35',
    fontSize: 15,
    fontWeight: '700',
  },
  step: {
    color: '#52615E',
    fontSize: 13,
    lineHeight: 19,
  },
  statusCard: {
    backgroundColor: '#F2F5F3',
    borderRadius: 12,
    gap: 5,
    padding: 15,
  },
  statusTitle: {
    color: '#38564C',
    fontSize: 13,
    fontWeight: '700',
  },
  previewButton: {
    alignItems: 'center',
    borderColor: '#AAB8B2',
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 48,
  },
  previewButtonText: {
    color: '#46635A',
    fontSize: 14,
    fontWeight: '700',
  },
});
