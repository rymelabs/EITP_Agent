import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { PrototypeNotice } from '../components/PrototypeNotice';

export default function SignInScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.heading}>
        <Text style={styles.eyebrow}>AGENT ACCESS</Text>
        <Text style={styles.title}>Sign in to report</Text>
        <Text style={styles.description}>
          Use the account registered for your assigned Polling Unit.
        </Text>
      </View>

      <PrototypeNotice />

      <View style={styles.form}>
        <Text style={styles.label}>REGISTERED AGENT ID</Text>
        <TextInput
          accessibilityLabel="Registered agent ID"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Enter your agent ID"
          placeholderTextColor="#87938F"
          style={styles.input}
        />

        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          accessibilityLabel="Password"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Enter your password"
          placeholderTextColor="#87938F"
          secureTextEntry
          style={styles.input}
        />

        <Pressable accessibilityRole="button" accessibilityState={{ disabled: true }} disabled style={styles.submitButton}>
          <Text style={styles.submitText}>Sign in</Text>
        </Pressable>
        <Text style={styles.helper}>
          Sign-in method and account recovery process will be confirmed with operations.
        </Text>
      </View>

      <View style={styles.securityCard}>
        <Text style={styles.securityTitle}>Protect your access</Text>
        <Text style={styles.securityBody}>
          Never share your password or leave an authenticated device unattended.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 18,
    padding: 20,
  },
  heading: {
    gap: 8,
  },
  eyebrow: {
    color: '#50625E',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  title: {
    color: '#173B35',
    fontSize: 27,
    fontWeight: '800',
  },
  description: {
    color: '#52615E',
    fontSize: 15,
    lineHeight: 22,
  },
  form: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E7E4',
    borderRadius: 16,
    borderWidth: 1,
    gap: 11,
    padding: 18,
  },
  label: {
    color: '#425B52',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.6,
    marginTop: 3,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D7E0DC',
    borderRadius: 10,
    borderWidth: 1,
    color: '#243D37',
    fontSize: 15,
    minHeight: 48,
    paddingHorizontal: 13,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: '#9AA9A3',
    borderRadius: 12,
    justifyContent: 'center',
    marginTop: 7,
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
    textAlign: 'center',
  },
  securityCard: {
    backgroundColor: '#EEF4F1',
    borderRadius: 12,
    gap: 6,
    padding: 15,
  },
  securityTitle: {
    color: '#28473E',
    fontSize: 14,
    fontWeight: '700',
  },
  securityBody: {
    color: '#52615E',
    fontSize: 13,
    lineHeight: 19,
  },
});
