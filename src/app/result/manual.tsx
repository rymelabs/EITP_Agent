import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { PrototypeNotice } from '../../components/PrototypeNotice';

const sampleCandidates = ['Example party A', 'Example party B', 'Example party C'];

export default function ManualResultScreen() {
  const [figures, setFigures] = useState<Record<string, string>>({});
  const total = Object.values(figures).reduce((sum, value) => {
    const count = Number(value);
    return Number.isInteger(count) && count >= 0 ? sum + count : sum;
  }, 0);

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Enter result figures</Text>
      <Text style={styles.description}>
        Enter the vote count for each party or candidate on the configured result sheet.
      </Text>

      <PrototypeNotice />

      <View style={styles.dataWarning}>
        <Text style={styles.dataWarningTitle}>Sample form only</Text>
        <Text style={styles.dataWarningBody}>
          Example party names are placeholders, not real election data. Do not enter actual results.
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.pollingUnitHeader}>
          <Text style={styles.label}>POLLING UNIT</Text>
          <Text style={styles.value}>Not confirmed</Text>
        </View>
        <Text style={styles.helper}>A confirmed assignment is required before a real report.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Votes per party</Text>
        {sampleCandidates.map((candidate) => (
          <View key={candidate} style={styles.inputRow}>
            <Text style={styles.candidate}>{candidate}</Text>
            <TextInput
              accessibilityLabel={`Vote count for ${candidate}`}
              keyboardType="number-pad"
              onChangeText={(value) => setFigures((current) => ({ ...current, [candidate]: value }))}
              placeholder="0"
              placeholderTextColor="#87938F"
              style={styles.countInput}
              value={figures[candidate] ?? ''}
            />
          </View>
        ))}
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Entered votes</Text>
          <Text style={styles.totalValue}>{total.toLocaleString()}</Text>
        </View>
      </View>

      <View style={styles.reviewCard}>
        <Text style={styles.reviewTitle}>Verification</Text>
        <Text style={styles.helper}>
          Manual results are labeled as manually entered and require verifier approval before
          aggregation.
        </Text>
      </View>

      <Pressable accessibilityRole="button" accessibilityState={{ disabled: true }} disabled style={styles.submitButton}>
        <Text style={styles.submitText}>Submit result</Text>
      </Pressable>
      <Text style={styles.footer}>
        Submission becomes available when the official result schema, verified assignment, and
        backend are connected.
      </Text>
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
  dataWarning: {
    backgroundColor: '#FFF5DD',
    borderColor: '#E9D39D',
    borderRadius: 12,
    borderWidth: 1,
    gap: 5,
    padding: 14,
  },
  dataWarningTitle: {
    color: '#654B12',
    fontSize: 13,
    fontWeight: '800',
  },
  dataWarningBody: {
    color: '#654B12',
    fontSize: 12,
    lineHeight: 18,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E7E4',
    borderRadius: 16,
    borderWidth: 1,
    gap: 13,
    padding: 18,
  },
  pollingUnitHeader: {
    gap: 7,
  },
  label: {
    color: '#5B6F69',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  value: {
    color: '#263F39',
    fontSize: 16,
    fontWeight: '700',
  },
  helper: {
    color: '#687772',
    fontSize: 12,
    lineHeight: 18,
  },
  sectionTitle: {
    color: '#213B35',
    fontSize: 17,
    fontWeight: '700',
  },
  inputRow: {
    alignItems: 'center',
    borderBottomColor: '#EEF1EF',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 58,
  },
  candidate: {
    color: '#344742',
    flex: 1,
    fontSize: 14,
  },
  countInput: {
    backgroundColor: '#F7F8FA',
    borderColor: '#D7E0DC',
    borderRadius: 9,
    borderWidth: 1,
    color: '#243D37',
    fontSize: 16,
    minHeight: 44,
    minWidth: 80,
    paddingHorizontal: 12,
    textAlign: 'right',
  },
  totalRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  totalLabel: {
    color: '#465953',
    fontSize: 14,
    fontWeight: '700',
  },
  totalValue: {
    color: '#213B35',
    fontSize: 16,
    fontWeight: '800',
  },
  reviewCard: {
    backgroundColor: '#EEF4F1',
    borderRadius: 12,
    gap: 7,
    padding: 15,
  },
  reviewTitle: {
    color: '#28473E',
    fontSize: 14,
    fontWeight: '700',
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: '#9AA9A3',
    borderRadius: 12,
    justifyContent: 'center',
    minHeight: 50,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  footer: {
    color: '#687772',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
});
