import { logout } from '@/services/authService';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const handleLogout = async  () => {
  await logout();
  router.replace("/(auth)/login")
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.titleContainer}>
      <Text>Index</Text>
    <TouchableOpacity onPress={handleLogout}>
    <Text>Logout</Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  }
});
