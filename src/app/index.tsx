import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrototypeNotice } from '../components/PrototypeNotice';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>ELECTION INTELLIGENCE & TRANSPARENCY PLATFORM</Text>
        <Text style={styles.title}>Field reporting</Text>
        <Text style={styles.subtitle}>
          Submit polling-unit results and document election-day incidents.
        </Text>
      </View>

      <PrototypeNotice />

      <Link href="/sign-in" asChild>
        <Pressable accessibilityRole="button" style={styles.signInButton}>
          <Text style={styles.signInText}>Agent sign in</Text>
        </Pressable>
      </Link>

      <Link href="/check-in" asChild>
        <Pressable accessibilityRole="button" style={styles.assignmentCard}>
          <Text style={styles.cardLabel}>POLLING UNIT</Text>
          <View style={styles.assignmentRow}>
            <Text style={styles.assignmentTitle}>Assignment not connected</Text>
            <Text style={styles.arrow}>›</Text>
          </View>
          <Text style={styles.cardBody}>
            Your verified agent account and assigned Polling Unit will appear here after sign-in is
            connected.
          </Text>
          <Text style={styles.status}>NOT CHECKED IN</Text>
        </Pressable>
      </Link>

      <Text style={styles.sectionTitle}>Create a report</Text>
      <Link href="/result" asChild>
        <Pressable accessibilityRole="button" style={styles.actionCard}>
          <View style={styles.iconBox}>
            <Text style={styles.icon}>01</Text>
          </View>
          <View style={styles.actionCopy}>
            <Text style={styles.actionTitle}>Submit a result</Text>
            <Text style={styles.actionDescription}>Photo with OCR or manual entry</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </Pressable>
      </Link>

      <Link href="/incident" asChild>
        <Pressable accessibilityRole="button" style={styles.actionCard}>
          <View style={[styles.iconBox, styles.incidentIconBox]}>
            <Text style={[styles.icon, styles.incidentIcon]}>02</Text>
          </View>
          <View style={styles.actionCopy}>
            <Text style={styles.actionTitle}>Report an incident</Text>
            <Text style={styles.actionDescription}>Describe what happened and add evidence</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </Pressable>
      </Link>

      <Link href="/submission-status" asChild>
        <Pressable accessibilityRole="button" style={styles.statusLink}>
          <Text style={styles.statusLinkText}>Preview submission status screens</Text>
          <Text style={styles.arrow}>›</Text>
        </Pressable>
      </Link>

      <Text style={styles.footer}>
        Reports require a verified agent account and an assigned Polling Unit.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 36,
    gap: 16,
  },
  header: {
    gap: 9,
    marginBottom: 4,
  },
  eyebrow: {
    color: '#50625E',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  title: {
    color: '#173B35',
    fontSize: 32,
    fontWeight: '800',
  },
  subtitle: {
    color: '#52615E',
    fontSize: 16,
    lineHeight: 23,
  },
  assignmentCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E7E4',
    borderRadius: 16,
    borderWidth: 1,
    gap: 8,
    padding: 18,
  },
  cardLabel: {
    color: '#5B6F69',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  assignmentTitle: {
    color: '#243D37',
    fontSize: 17,
    fontWeight: '700',
  },
  assignmentRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBody: {
    color: '#5B6865',
    fontSize: 14,
    lineHeight: 20,
  },
  status: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F2F1',
    borderRadius: 20,
    color: '#5C6864',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  sectionTitle: {
    color: '#213B35',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 7,
  },
  signInButton: {
    alignItems: 'center',
    backgroundColor: '#17664E',
    borderRadius: 12,
    justifyContent: 'center',
    minHeight: 50,
  },
  signInText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  actionCard: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E7E4',
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 14,
    minHeight: 82,
    padding: 16,
  },
  iconBox: {
    alignItems: 'center',
    backgroundColor: '#E7F2ED',
    borderRadius: 12,
    height: 46,
    justifyContent: 'center',
    width: 46,
  },
  icon: {
    color: '#17664E',
    fontSize: 14,
    fontWeight: '800',
  },
  incidentIconBox: {
    backgroundColor: '#FCEDE5',
  },
  incidentIcon: {
    color: '#A34D2C',
  },
  actionCopy: {
    flex: 1,
    gap: 5,
  },
  actionTitle: {
    color: '#213B35',
    fontSize: 16,
    fontWeight: '700',
  },
  actionDescription: {
    color: '#61706B',
    fontSize: 13,
    lineHeight: 18,
  },
  arrow: {
    color: '#42655C',
    fontSize: 26,
  },
  statusLink: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 48,
    paddingHorizontal: 4,
  },
  statusLinkText: {
    color: '#17664E',
    fontSize: 14,
    fontWeight: '700',
  },
  footer: {
    color: '#63716D',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
    textAlign: 'center',
  },
});
