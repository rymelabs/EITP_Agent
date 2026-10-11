import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { PrototypeNotice } from '../components/PrototypeNotice';

const incidentCategories = [
  'Violence or threats',
  'Voter intimidation',
  'Ballot-box interference',
  'Vote buying',
  'Accreditation or voting disruption',
  'Election materials issue',
  'Delayed voting',
  'Counting or result dispute',
  'Other',
];

export default function IncidentScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [description, setDescription] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Report an incident</Text>
      <Text style={styles.description}>
        Record what happened and preserve the details for the response team.
      </Text>

      <PrototypeNotice />

      <View style={styles.card}>
        <Text style={styles.label}>INCIDENT CATEGORY</Text>
        {incidentCategories.map((category) => (
          <Pressable
            key={category}
            accessibilityRole="radio"
            accessibilityState={{ selected: selectedCategory === category }}
            onPress={() => setSelectedCategory(category)}
            style={[styles.categoryOption, selectedCategory === category && styles.categorySelected]}
          >
            <View
              style={[
                styles.radio,
                selectedCategory === category && styles.radioSelected,
              ]}
            />
            <Text style={styles.category}>{category}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>WHAT HAPPENED?</Text>
        <TextInput
          accessibilityLabel="Incident description"
          editable
          multiline
          onChangeText={setDescription}
          placeholder="Describe what you observed..."
          placeholderTextColor="#788580"
          style={styles.input}
          textAlignVertical="top"
          value={description}
        />
        <Text style={styles.label}>PHOTO OR VIDEO EVIDENCE</Text>
        <Text style={styles.body}>
          Add evidence to support the report. Original files will be retained with an integrity
          record.
        </Text>
        <Pressable accessibilityRole="button" disabled style={styles.attachButton}>
          <Text style={styles.attachText}>＋  Add photo or video</Text>
        </Pressable>
        <Text style={styles.helper}>Evidence picker is not connected in this preview.</Text>
      </View>

      <View style={styles.metadataCard}>
        <Text style={styles.metadataTitle}>Time and location</Text>
        <Text style={styles.body}>
          Submission time will be recorded automatically. Location is optional and will only be
          included with your permission.
        </Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityState={{ disabled: true }}
        disabled
        style={styles.submitButton}
      >
        <Text style={styles.submitText}>Submit incident</Text>
      </Pressable>
      <Text style={styles.notice}>
        {selectedCategory && description.trim()
          ? 'Your preview selections are local only; nothing has been saved or sent.'
          : 'Choose a category and add a description. Submission will be enabled when the service is connected.'}
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
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E7E4',
    borderRadius: 16,
    borderWidth: 1,
    gap: 10,
    padding: 18,
  },
  label: {
    color: '#5B6F69',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginBottom: 3,
  },
  categoryOption: {
    alignItems: 'center',
    borderBottomColor: '#EEF1EF',
    borderBottomWidth: 1,
    flexDirection: 'row',
    gap: 11,
    minHeight: 43,
  },
  categorySelected: {
    backgroundColor: '#F1F7F4',
  },
  radio: {
    borderColor: '#8A9993',
    borderRadius: 10,
    borderWidth: 1.5,
    height: 19,
    width: 19,
  },
  radioSelected: {
    backgroundColor: '#17664E',
    borderColor: '#17664E',
  },
  category: {
    color: '#344742',
    flex: 1,
    fontSize: 14,
    paddingVertical: 9,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D7E0DC',
    borderRadius: 10,
    borderWidth: 1,
    color: '#243D37',
    fontSize: 15,
    minHeight: 112,
    padding: 13,
  },
  attachButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderColor: '#AAB8B2',
    borderRadius: 9,
    borderStyle: 'dashed',
    borderWidth: 1,
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  attachText: {
    color: '#46635A',
    fontSize: 14,
    fontWeight: '700',
  },
  metadataCard: {
    backgroundColor: '#EEF4F1',
    borderRadius: 12,
    gap: 7,
    padding: 15,
  },
  metadataTitle: {
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
  helper: {
    color: '#687772',
    fontSize: 12,
    lineHeight: 18,
  },
  body: {
    color: '#52615E',
    fontSize: 14,
    lineHeight: 21,
  },
  notice: {
    color: '#52615E',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
  },
});
