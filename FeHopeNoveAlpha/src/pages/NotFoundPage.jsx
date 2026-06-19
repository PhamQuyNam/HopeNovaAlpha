import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-primary">404</h1>
      <p className="text-text-secondary">Không tìm thấy trang bạn yêu cầu</p>
      <Link to="/" className="text-primary hover:underline">
        Quay về trang chủ
      </Link>
    </div>
  )
}
