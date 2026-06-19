import axios from 'axios'

/*
 * File này tạo MỘT instance axios DUY NHẤT cho cả app.
 * Lý do tập trung tại đây thay vì mỗi người tự gọi axios.get(...) riêng lẻ:
 *  1. Tự động gắn token đăng nhập vào MỌI request (không phải nhớ gắn thủ công)
 *  2. Xử lý lỗi 401 (hết hạn đăng nhập) tập trung 1 chỗ -> tự logout, redirect
 *  3. Đổi base URL backend chỉ cần sửa 1 dòng (.env), không phải tìm sửa khắp nơi
 */

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// ----- Request interceptor: gắn token vào mọi request -----
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// ----- Response interceptor: xử lý lỗi tập trung -----
http.interceptors.response.use(
  (response) => response.data, // trả thẳng data, khỏi phải gọi response.data ở mọi nơi
  (error) => {
    const status = error.response?.status

    if (status === 401) {
      // Token hết hạn / chưa đăng nhập -> dọn dẹp và đẩy về trang login
      localStorage.removeItem('access_token')
      // Không hard-redirect ở đây để tránh phá flow SPA;
      // thường sẽ kết hợp với route bảo vệ (ProtectedRoute) để tự điều hướng
    }

    // Có thể thêm: toast hiển thị lỗi chung tại đây nếu muốn xử lý tự động
    return Promise.reject(error)
  }
)

export default http
