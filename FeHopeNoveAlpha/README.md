# Frontend

Dự án sàn thương mại điện tử (clone Shopee), xây dựng bằng React + Vite + Tailwind CSS v4.
Backend: Spring Boot (repo riêng).

## 🚀 Bắt đầu

```bash
# 1. Clone repo, cài dependencies
npm install

# 2. Tạo file môi trường từ mẫu
cp .env.example .env
# Sửa VITE_API_URL trong .env nếu backend chạy ở port khác

# 3. Chạy dev server
npm run dev
```

Mở http://localhost:3000

## 📁 Cấu trúc thư mục

```
src/
├── assets/          # ảnh, icon tĩnh
├── components/
│   ├── ui/          # component dùng chung: Button, Input, Modal... (KHÔNG chứa logic nghiệp vụ)
│   └── layout/      # Header, Footer, Sidebar
├── features/        # chia theo NGHIỆP VỤ — mỗi người phụ trách 1-2 folder ở đây
│   ├── auth/
│   ├── product/
│   ├── cart/
│   └── order/
│       ├── components/   # component riêng của feature này
│       ├── hooks/         # custom hook riêng (vd: useAddToCart)
│       └── api/           # hàm gọi API riêng (vd: cartApi.js)
├── layouts/          # khung trang: MainLayout, AuthLayout
├── pages/            # trang hoàn chỉnh, ghép layout + feature
├── routes/            # khai báo route TẬP TRUNG tại useRouteElements.jsx
├── hooks/             # custom hook DÙNG CHUNG (useDebounce...)
├── lib/               # cấu hình thư viện: axios instance, react-query client
├── store/             # Zustand store (state phía client)
├── utils/             # hàm thuần: formatCurrency, formatDate...
└── constants/          # hằng số: đường dẫn route, key localStorage
```

## 🎨 Design Token

Toàn bộ màu sắc/font khai báo tại `src/index.css` (block `@theme`). **Không hardcode mã màu**
trong component (vd: không viết `bg-[#ee4d2d]`), luôn dùng class đã có sẵn:

| Class Tailwind                | Mã màu    | Dùng cho                        |
| ----------------------------- | --------- | ------------------------------- |
| `bg-primary` / `text-primary` | `#EE4D2D` | Nút mua, giá, badge, link chính |
| `bg-primary-hover`            | `#D8431F` | Trạng thái hover của primary    |
| `bg-primary-light`            | `#FFF0EB` | Nền banner, badge giảm giá      |
| `bg-bg-base`                  | `#F5F5F5` | Nền tổng thể trang              |
| `bg-bg-surface`               | `#FFFFFF` | Nền card, component             |
| `text-text-primary`           | `#222222` | Chữ chính                       |
| `text-text-secondary`         | `#555555` | Chữ mô tả                       |
| `text-text-muted`             | `#757575` | Chữ phụ (ngày, lượt bán)        |
| `border-border`               | `#E8E8E8` | Viền, divider                   |

Font chữ: **Roboto** (đã set mặc định trong `body`, không cần khai báo lại).

Cần thêm màu mới? Sửa **một chỗ duy nhất** trong `src/index.css`, không tự thêm màu rải rác.

## 🧩 Quy ước code

### State management — dùng đúng công cụ cho đúng việc

- **Dữ liệu từ server** (sản phẩm, đơn hàng, danh mục...) → **React Query** (`useQuery`/`useMutation`), viết trong `features/<tên>/api/`
- **State thuần UI/client** (giỏ hàng tạm, trạng thái đăng nhập, mở/đóng modal) → **Zustand**, viết trong `src/store/`
- KHÔNG dùng `useState` + `useEffect` để tự fetch API thủ công — luôn qua React Query để có cache/loading/error miễn phí

### Gọi API

Luôn gọi qua instance `http` tại `src/lib/http.js`, không tạo `axios.create()` mới ở nơi khác:

```js
// features/product/api/productApi.js
import http from '@/lib/http'

export const productApi = {
  getList: (params) => http.get('/products', { params }),
  getDetail: (id) => http.get(`/products/${id}`),
}
```

### Import — luôn dùng alias `@/`

```js
// ✅ Đúng
import Button from '@/components/ui/Button'

// ❌ Sai — tránh đường dẫn tương đối dài
import Button from '../../../components/ui/Button'
```

### Thêm route mới

Chỉ sửa **một file**: `src/routes/useRouteElements.jsx`. Thêm path mới vào `src/constants/path.js` trước, không hardcode string `"/cart"` trực tiếp trong component.

### Format & Lint trước khi commit

```bash
npm run lint        # kiểm tra lỗi
npm run lint:fix     # tự sửa lỗi đơn giản
npm run format       # format code theo Prettier
```

Khuyến khích bật **Format on Save** trong VS Code (cài extension Prettier + ESLint) để tự động format mỗi lần lưu file.

## 🌳 Quy ước Git (đề xuất cho team 3 người)

- Nhánh chính: `main` (luôn chạy được, không push thẳng vào đây)
- Mỗi người làm trên nhánh riêng theo feature: `feature/auth-login`, `feature/product-list`, `feature/cart-page`
- Tạo Pull Request để 1 thành viên còn lại review trước khi merge vào `main`
- Commit message ngắn gọn, có tiền tố: `feat:`, `fix:`, `style:`, `refactor:`, `chore:`
  - Ví dụ: `feat: thêm trang chi tiết sản phẩm`, `fix: sửa lỗi tính tổng giỏ hàng`

## 📦 Thư viện đã cài & lý do

| Thư viện                | Vai trò                           |
| ----------------------- | --------------------------------- |
| `react-router-dom`      | Điều hướng SPA                    |
| `axios`                 | Gọi API                           |
| `@tanstack/react-query` | Cache & đồng bộ dữ liệu server    |
| `zustand`               | Quản lý state phía client         |
| `react-hook-form`       | Quản lý form (login, checkout...) |
| `lucide-react`          | Bộ icon                           |
| `tailwindcss` v4        | Styling utility-first             |

## 🛠️ Scripts

| Lệnh              | Mô tả                        |
| ----------------- | ---------------------------- |
| `npm run dev`     | Chạy dev server (port 3000)  |
| `npm run build`   | Build production vào `dist/` |
| `npm run preview` | Xem thử bản build            |
| `npm run lint`    | Kiểm tra lỗi code            |
| `npm run format`  | Format code                  |
