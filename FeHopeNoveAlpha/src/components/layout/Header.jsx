import { ShoppingCart, Search, User } from 'lucide-react'
import { Link } from 'react-router-dom'

/*
 * Header chính của toàn site - hiển thị ở mọi trang thông qua MainLayout.
 * Cấu trúc tham khảo Shopee: nền cam, logo bên trái, ô tìm kiếm ở giữa,
 * giỏ hàng + tài khoản bên phải.
 */
export default function Header() {
  return (
    <header className="bg-primary sticky top-0 z-50">
      {/* Hàng trên: link phụ (Kênh người bán, Tải app...) - thu nhỏ trên mobile */}
      <div className="hidden md:block border-b border-white/20">
        <div className="container-shopee flex justify-end gap-4 py-1.5 text-xs text-white/90">
          <a href="#" className="hover:opacity-80">
            Kênh Người Bán
          </a>
          <a href="#" className="hover:opacity-80">
            Tải ứng dụng
          </a>
          <a href="#" className="hover:opacity-80">
            Kết nối
          </a>
        </div>
      </div>

      {/* Hàng chính: logo + search + giỏ hàng */}
      <div className="container-shopee flex items-center gap-6 py-3">
        <Link to="/" className="shrink-0">
          <span className="text-2xl font-bold text-white">shopee</span>
        </Link>

        {/* Ô tìm kiếm */}
        <div className="flex-1 flex bg-white rounded-sm overflow-hidden">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="flex-1 px-4 py-2 text-text-primary outline-none text-sm"
          />
          <button className="bg-primary-hover px-4 flex items-center justify-center">
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Icon giỏ hàng + tài khoản */}
        <div className="flex items-center gap-5 shrink-0">
          <Link to="/cart" className="relative text-white">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-white text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>
          <Link to="/login" className="text-white">
            <User className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  )
}
