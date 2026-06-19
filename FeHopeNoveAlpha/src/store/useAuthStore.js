import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/*
 * Store quản lý trạng thái đăng nhập (client state).
 * Dùng middleware "persist" để tự động lưu vào localStorage,
 * giúp người dùng không bị mất đăng nhập khi reload trang (F5).
 */
export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (user, token) => {
        localStorage.setItem('access_token', token)
        set({ user, isAuthenticated: true })
      },

      logout: () => {
        localStorage.removeItem('access_token')
        set({ user: null, isAuthenticated: false })
      },
    }),
    {
      name: 'auth-storage', // key lưu trong localStorage
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
)
