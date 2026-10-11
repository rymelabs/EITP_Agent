import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { PrototypeNotice } from '../../components/PrototypeNotice';

const sampleExtraction = [
  { candidate: 'Example party A', initialValue: '—' },
  { candidate: 'Example party B', initialValue: '—' },
  { candidate: 'Example party C', initialValue: '—' },
];

export default function ResultReviewScreen() {
  const [figures, setFigures] = useState<Record<string, string>>({});

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Review extracted figures</Text>
      <Text style={styles.description}>
        Compare each value with the original result sheet and correct any OCR mistakes.
      </Text>

      <PrototypeNotice />

      <View style={styles.confidenceCard}>
        <Text style={styles.confidenceLabel}>SAMPLE OCR STATUS</Text>
        <Text style={styles.confidenceTitle}>Needs human review</Text>
        <Text style={styles.confidenceBody}>
          In the live flow, the system will show an OCR confidence result and flag uncertain
          extractions for a verifier.
        </Text>
      </View>

      <View style={styles.imageCard}>
        <Text style={styles.imageTitle}>Original result sheet</Text>
        <Text style={styles.imageBody}>The submitted image will be shown here for comparison.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Extracted vote totals</Text>
        <Text style={styles.helper}>Example party names and figures are not real election data.</Text>
        {sampleExtraction.map(({ candidate, initialValue }) => (
          <View key={candidate} style={styles.row}>
            <Text style={styles.candidate}>{candidate}</Text>
            <TextInput
              accessibilityLabel={`Review vote count for ${candidate}`}
              keyboardType="number-pad"
              onChangeText={(value) => setFigures((current) => ({ ...current, [candidate]: value }))}
              placeholder={initialValue}
              placeholderTextColor="#87938F"
              style={styles.valueInput}
              value={figures[candidate] ?? ''}
            />
          </View>
        ))}
      </View>

      <View style={styles.noticeCard}>
        <Text style={styles.noticeTitle}>Original evidence is preserved</Text>
        <Text style={styles.helper}>
          Agent corrections should be recorded separately from the original OCR output.
        </Text>
      </View>

      <Text style={styles.footer}>
        Review and confirmation controls are disabled until OCR and submission services are
        connected.
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
  confidenceCard: {
    backgroundColor: '#FFF5DD',
    borderColor: '#E9D39D',
    borderRadius: 12,
    borderWidth: 1,
    gap: 6,
    padding: 15,
  },
  confidenceLabel: {
    color: '#835A17',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  confidenceTitle: {
    color: '#654B12',
    fontSize: 15,
    fontWeight: '700',
  },
  confidenceBody: {
    color: '#654B12',
    fontSize: 12,
    lineHeight: 18,
  },
  imageCard: {
    alignItems: 'center',
    backgroundColor: '#EEF2F0',
    borderColor: '#B8C5BF',
    borderRadius: 14,
    borderStyle: 'dashed',
    borderWidth: 1,
    gap: 6,
    justifyContent: 'center',
    minHeight: 150,
    padding: 20,
  },
  imageTitle: {
    color: '#38564C',
    fontSize: 14,
    fontWeight: '700',
  },
  imageBody: {
    color: '#5B6865',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E7E4',
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
    padding: 18,
  },
  sectionTitle: {
    color: '#213B35',
    fontSize: 16,
    fontWeight: '700',
  },
  helper: {
    color: '#687772',
    fontSize: 12,
    lineHeight: 18,
  },
  row: {
    alignItems: 'center',
    borderBottomColor: '#EEF1EF',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 55,
  },
  candidate: {
    color: '#344742',
    flex: 1,
    fontSize: 14,
  },
  valueInput: {
    backgroundColor: '#F7F8FA',
    borderColor: '#D7E0DC',
    borderRadius: 9,
    borderWidth: 1,
    color: '#243D37',
    fontSize: 16,
    minHeight: 42,
    minWidth: 78,
    paddingHorizontal: 12,
    textAlign: 'right',
  },
  noticeCard: {
    backgroundColor: '#EEF4F1',
    borderRadius: 12,
    gap: 6,
    padding: 15,
  },
  noticeTitle: {
    color: '#28473E',
    fontSize: 14,
    fontWeight: '700',
  },
  footer: {
    color: '#687772',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
});
