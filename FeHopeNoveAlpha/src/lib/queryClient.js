import { QueryClient } from '@tanstack/react-query'

/*
 * QueryClient quản lý toàn bộ cache dữ liệu fetch từ server.
 * Cấu hình mặc định tại đây áp dụng cho MỌI request trong app,
 * tránh việc mỗi người set staleTime/retry khác nhau gây hành vi không nhất quán.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2, // dữ liệu được coi là "mới" trong 2 phút, không tự fetch lại
      retry: 1, // lỗi thì thử lại 1 lần, tránh spam server khi API lỗi
      refetchOnWindowFocus: false, // tắt tự fetch lại khi quay lại tab (UX tốt hơn cho TMĐT)
    },
  },
})
