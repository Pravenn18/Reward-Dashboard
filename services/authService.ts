import EncryptedStorage from 'react-native-encrypted-storage';

export const login = async (email: string, password: string) => {
  if (email === 'test@example.com' && password === '123456') {
    const token = 'ey.mocked.jwt.token.abc123';
    const user = { id: '123', name: 'Test User', email };

    await EncryptedStorage.setItem('auth_token', token);
    await EncryptedStorage.setItem('user_data', JSON.stringify(user));

    return { token, user };
  } else {
    throw new Error('Invalid email or password');
  }
};

export const logout = async () => {
  await EncryptedStorage.removeItem('auth_token');
  await EncryptedStorage.removeItem('user_data');
};

export const getStoredUser = async () => {
  const token = await EncryptedStorage.getItem('auth_token');
  const user = await EncryptedStorage.getItem('user_data');
  return token && user ? { token, user: JSON.parse(user) } : null;
};
