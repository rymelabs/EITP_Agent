import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrototypeNotice } from '../components/PrototypeNotice';

export default function ReceiptScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.receiptHeader}>
        <View style={styles.checkmark}>
          <Text style={styles.checkmarkText}>✓</Text>
        </View>
        <Text style={styles.title}>Report received</Text>
        <Text style={styles.subtitle}>
          The server receipt is the confirmation that a report reached EITP.
        </Text>
      </View>

      <PrototypeNotice />

      <View style={styles.receiptCard}>
        <Text style={styles.label}>REFERENCE ID</Text>
        <Text style={styles.reference}>Issued by the server</Text>
        <Text style={styles.body}>
          A real reference ID will appear here only after the server acknowledges the submission.
        </Text>
      </View>

      <View style={styles.detailCard}>
        <Text style={styles.detailTitle}>Report details</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Submission type</Text>
          <Text style={styles.detailValue}>Not available in preview</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Polling Unit</Text>
          <Text style={styles.detailValue}>Not confirmed</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Verification</Text>
          <Text style={styles.detailValue}>Separate from receipt status</Text>
        </View>
      </View>

      <Text style={styles.footer}>
        This is a screen preview, not a successful submission. No report has been sent.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    gap: 17,
    padding: 20,
    paddingBottom: 36,
  },
  receiptHeader: {
    alignItems: 'center',
    gap: 9,
    paddingVertical: 8,
  },
  checkmark: {
    alignItems: 'center',
    backgroundColor: '#E8F3ED',
    borderRadius: 28,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  checkmarkText: {
    color: '#17664E',
    fontSize: 29,
    fontWeight: '700',
  },
  title: {
    color: '#173B35',
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    color: '#52615E',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
  receiptCard: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#C9DAD1',
    borderRadius: 16,
    borderWidth: 1,
    gap: 8,
    padding: 19,
  },
  label: {
    color: '#5B6F69',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  reference: {
    color: '#263F39',
    fontSize: 18,
    fontWeight: '800',
  },
  body: {
    color: '#52615E',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
  },
  detailCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E7E4',
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
    padding: 18,
  },
  detailTitle: {
    color: '#213B35',
    fontSize: 15,
    fontWeight: '700',
  },
  detailRow: {
    borderBottomColor: '#EEF1EF',
    borderBottomWidth: 1,
    gap: 4,
    paddingBottom: 9,
  },
  detailLabel: {
    color: '#687772',
    fontSize: 12,
  },
  detailValue: {
    color: '#344742',
    fontSize: 13,
    fontWeight: '600',
  },
  footer: {
    color: '#687772',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
});
