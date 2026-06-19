/*
 * Khai báo TẤT CẢ đường dẫn route tại một nơi duy nhất.
 * Lý do: nếu mỗi người tự gõ string "/cart", "/Cart", "/gio-hang" rải rác khắp nơi,
 * chỉ cần 1 người gõ sai là Link sẽ không hoạt động và rất khó phát hiện.
 * Dùng hằng số PATH.CART thì sai sẽ báo lỗi ngay lúc code (import sai tên).
 */
export const PATH = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  CART: '/cart',
  PRODUCT_DETAIL: '/product/:id',
  ORDER: '/order',
  PROFILE: '/profile',
}
