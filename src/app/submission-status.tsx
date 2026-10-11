import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrototypeNotice } from '../components/PrototypeNotice';

const statuses = [
  {
    label: 'QUEUED ON DEVICE',
    title: 'Waiting for a connection',
    message: 'Saved on this device. Not received by EITP yet.',
    color: '#835A17',
    background: '#FFF5DD',
  },
  {
    label: 'RECEIVED',
    title: 'Report received',
    message: 'The server has acknowledged this report. A reference ID is shown on the real receipt.',
    color: '#17664E',
    background: '#E8F3ED',
  },
  {
    label: 'NEEDS ACTION',
    title: 'Upload did not complete',
    message: 'Keep the report on this device and retry when ready. No receipt has been issued.',
    color: '#A34D2C',
    background: '#FCEDE5',
  },
];

export default function SubmissionStatusScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Submission status</Text>
      <Text style={styles.description}>
        Agents should always be able to tell whether a report is on the device or has reached EITP.
      </Text>

      <PrototypeNotice />

      {statuses.map((status) => (
        <View
          key={status.label}
          style={[styles.card, { backgroundColor: status.background }]}
        >
          <Text style={[styles.label, { color: status.color }]}>{status.label}</Text>
          <Text style={styles.cardTitle}>{status.title}</Text>
          <Text style={styles.message}>{status.message}</Text>
        </View>
      ))}

      <View style={styles.ruleCard}>
        <Text style={styles.ruleTitle}>Receipt rule</Text>
        <Text style={styles.message}>
          Show a success confirmation and reference ID only after an authoritative server
          acknowledgement. These examples are visual states only, not actual submissions.
        </Text>
      </View>

      <Link href="/receipt" asChild>
        <Pressable accessibilityRole="button" style={styles.receiptButton}>
          <Text style={styles.receiptButtonText}>Preview a server receipt</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 20,
    paddingBottom: 36,
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
    borderRadius: 14,
    gap: 7,
    padding: 16,
  },
  label: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  cardTitle: {
    color: '#263F39',
    fontSize: 16,
    fontWeight: '700',
  },
  message: {
    color: '#52615E',
    fontSize: 13,
    lineHeight: 19,
  },
  ruleCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E7E4',
    borderRadius: 14,
    borderWidth: 1,
    gap: 7,
    padding: 16,
  },
  ruleTitle: {
    color: '#28473E',
    fontSize: 14,
    fontWeight: '700',
  },
  receiptButton: {
    alignItems: 'center',
    borderColor: '#AAB8B2',
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 48,
  },
  receiptButtonText: {
    color: '#46635A',
    fontSize: 14,
    fontWeight: '700',
  },
});
