import { Outlet } from 'react-router-dom'

/*
 * AuthLayout: layout riêng cho trang đăng nhập/đăng ký,
 * KHÔNG có Header/Footer đầy đủ để người dùng tập trung vào form.
 * Giống cách Shopee tách riêng giao diện trang login khỏi giao diện mua sắm.
 */
export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-md shadow-lg p-8">
        <Outlet />
      </div>
    </div>
  )
}
