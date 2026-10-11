import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#F7F8FA' },
          headerTintColor: '#173B35',
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: '#F7F8FA' },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'EITP Agent', headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ title: 'Agent sign in' }} />
        <Stack.Screen name="check-in" options={{ title: 'Polling Unit check-in' }} />
        <Stack.Screen name="result" options={{ title: 'Submit a result' }} />
        <Stack.Screen name="result/manual" options={{ title: 'Manual result entry' }} />
        <Stack.Screen name="result/photo" options={{ title: 'Result sheet photo' }} />
        <Stack.Screen name="result/review" options={{ title: 'Review extracted figures' }} />
        <Stack.Screen name="incident" options={{ title: 'Report an incident' }} />
        <Stack.Screen name="receipt" options={{ title: 'Submission receipt' }} />
        <Stack.Screen name="submission-status" options={{ title: 'Submission status' }} />
      </Stack>
    </>
  );
}
