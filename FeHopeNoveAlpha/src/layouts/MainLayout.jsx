import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

/*
 * MainLayout: layout dùng cho đa số trang (trang chủ, danh sách sản phẩm, chi tiết...).
 * <Outlet /> là nơi React Router sẽ render trang con tương ứng vào.
 *
 * Lý do tách Layout riêng thay vì viết Header/Footer lặp lại trong từng page:
 * - Đổi Header/Footer 1 lần, áp dụng cho mọi trang
 * - Có thể có nhiều layout khác nhau (vd AuthLayout không có Header/Footer
 *   cho trang đăng nhập/đăng ký để giao diện tối giản hơn)
 */
export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
