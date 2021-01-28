import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/apiClient';

interface AuthState {
  token: string;
  user: Record<string, unknown>;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: Record<string, unknown>;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@appointment:token');
    const user = localStorage.getItem('@appointment:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('auth', {
      email,
      password,
    });

    const { token, user } = response.data;
    localStorage.setItem('@appointment:token', token);
    localStorage.setItem('@appointment:user', JSON.stringify(user));
    setData({ user, token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@appointment:token');
    localStorage.removeItem('@appointment:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
