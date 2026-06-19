import { useRoutes } from 'react-router-dom'
import { PATH } from '@/constants/path'

import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'

import HomePage from '@/pages/HomePage'
import CartPage from '@/pages/CartPage'
import LoginPage from '@/pages/LoginPage'
import NotFoundPage from '@/pages/NotFoundPage'

/*
 * Khai báo TOÀN BỘ route của app tại một nơi.
 * Khi team thêm trang mới, chỉ cần thêm 1 dòng vào đây — KHÔNG sửa rải rác
 * trong nhiều file App.jsx lồng nhau, giảm conflict khi 3 người cùng thêm route.
 *
 * Cấu trúc: các route con của MainLayout sẽ tự động có Header/Footer,
 * các route con của AuthLayout sẽ có giao diện riêng cho đăng nhập/đăng ký.
 */
export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: PATH.HOME,
      element: <MainLayout />,
      children: [
        { path: PATH.HOME, element: <HomePage /> },
        { path: PATH.CART, element: <CartPage /> },
        // Thêm route mới của các trang dùng MainLayout vào đây
      ],
    },
    {
      path: '',
      element: <AuthLayout />,
      children: [
        { path: PATH.LOGIN, element: <LoginPage /> },
        // { path: PATH.REGISTER, element: <RegisterPage /> }
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ])

  return routeElements
}
