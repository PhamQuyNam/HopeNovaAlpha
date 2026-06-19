import { create } from 'zustand'

/*
 * Store quản lý giỏ hàng (client state).
 * Lưu ý: đây là state TẠM trên client để UI phản hồi nhanh (optimistic UI).
 * Khi có backend thật, mỗi action (add/remove/update) nên kèm gọi API
 * thông qua React Query mutation trong features/cart/api để đồng bộ với server.
 */
export const useCartStore = create((set, get) => ({
  items: [], // [{ productId, name, price, image, quantity }]

  addItem: (product) => {
    const items = get().items
    const existing = items.find((item) => item.productId === product.productId)

    if (existing) {
      set({
        items: items.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        ),
      })
    } else {
      set({ items: [...items, product] })
    }
  },

  removeItem: (productId) => {
    set({ items: get().items.filter((item) => item.productId !== productId) })
  },

  updateQuantity: (productId, quantity) => {
    set({
      items: get().items.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      ),
    })
  },

  clearCart: () => set({ items: [] }),

  // Getter tiện ích: tổng số lượng sản phẩm (hiển thị badge icon giỏ hàng)
  totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

  // Getter tiện ích: tổng tiền
  totalPrice: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
}))
