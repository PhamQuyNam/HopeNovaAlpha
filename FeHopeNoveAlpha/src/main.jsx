import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'

import './index.css'
import App from './App.jsx'
import { queryClient } from '@/lib/queryClient'

/*
 * Đây là điểm khởi tạo các Provider TOÀN CỤC của app:
 *  - BrowserRouter: bật tính năng routing (điều hướng SPA)
 *  - QueryClientProvider: bật cache cho React Query, dùng được useQuery/useMutation
 *    ở bất kỳ component nào trong app
 *
 * Zustand KHÔNG cần Provider (đây là một lợi thế so với Redux/Context),
 * chỉ cần import store và gọi hook trực tiếp trong component.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
)
