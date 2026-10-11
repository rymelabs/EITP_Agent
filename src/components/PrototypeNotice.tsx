import { StyleSheet, Text, View } from 'react-native';

export function PrototypeNotice() {
  return (
    <View accessibilityRole="alert" style={styles.notice}>
      <Text style={styles.title}>Prototype preview</Text>
      <Text style={styles.body}>
        No sign-in or report submission is connected. Do not enter real election data.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notice: {
    backgroundColor: '#FFF5DD',
    borderColor: '#E9D39D',
    borderRadius: 12,
    borderWidth: 1,
    gap: 4,
    paddingHorizontal: 14,
    paddingVertical: 11,
  },
  title: {
    color: '#654B12',
    fontSize: 13,
    fontWeight: '800',
  },
  body: {
    color: '#654B12',
    fontSize: 12,
    lineHeight: 17,
  },
});
