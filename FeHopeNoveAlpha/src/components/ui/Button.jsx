/*
 * Component Button dùng chung toàn app.
 * Đây là VÍ DỤ MẪU để cả team theo cùng 1 pattern khi tạo component trong components/ui:
 *  - Nhận "variant" để tái sử dụng nhiều kiểu khác nhau thay vì tạo nhiều component riêng lẻ
 *  - Dùng design token (bg-primary, text-primary...) đã khai báo ở index.css,
 *    KHÔNG hardcode mã màu (vd: không viết bg-[#ee4d2d]) để khi đổi theme chỉ sửa 1 chỗ
 */

const VARIANT_CLASS = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  outline: 'border border-primary text-primary hover:bg-primary-light',
  ghost: 'text-text-secondary hover:bg-gray-100',
}

const SIZE_CLASS = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  return (
    <button
      className={`
        rounded-sm font-medium transition-colors duration-150
        disabled:opacity-50 disabled:cursor-not-allowed
        ${VARIANT_CLASS[variant]}
        ${SIZE_CLASS[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
