import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { PrototypeNotice } from '../components/PrototypeNotice';

export default function ResultScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choose how to submit</Text>
      <Text style={styles.description}>
        Both methods will be available for each assigned Polling Unit.
      </Text>

      <PrototypeNotice />

      <Link href="/result/photo" asChild>
        <Pressable accessibilityRole="button" style={styles.methodCard}>
          <Text style={styles.methodLabel}>PHOTO + OCR</Text>
          <Text style={styles.methodTitle}>Capture the result sheet</Text>
          <Text style={styles.body}>
            Photograph the completed sheet, review the extracted figures, and correct them before
            submission.
          </Text>
          <Text style={styles.requirement}>Preview capture flow ›</Text>
        </Pressable>
      </Link>

      <Link href="/result/manual" asChild>
        <Pressable accessibilityRole="button" style={styles.methodCard}>
          <Text style={styles.methodLabel}>MANUAL ENTRY</Text>
          <Text style={styles.methodTitle}>Enter the figures yourself</Text>
          <Text style={styles.body}>
            Enter vote totals in a structured form. Manual results are intended to require verifier
            approval before aggregation.
          </Text>
          <Text style={styles.requirement}>Preview manual form ›</Text>
        </Pressable>
      </Link>

      <Text style={styles.notice}>
        Submission is unavailable until the agent account, Polling Unit assignment, result schema,
        and backend are connected.
      </Text>
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
  methodCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E7E4',
    borderRadius: 16,
    borderWidth: 1,
    gap: 9,
    minHeight: 140,
    padding: 18,
  },
  methodLabel: {
    color: '#17664E',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.9,
  },
  methodTitle: {
    color: '#213B35',
    fontSize: 18,
    fontWeight: '700',
  },
  body: {
    color: '#52615E',
    fontSize: 14,
    lineHeight: 21,
  },
  requirement: {
    color: '#755B2B',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 3,
  },
  notice: {
    color: '#52615E',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
  },
});
