export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-border mt-10">
      <div className="container-shopee py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-semibold text-text-primary mb-3">CHĂM SÓC KHÁCH HÀNG</h4>
          <ul className="space-y-2 text-text-secondary">
            <li>
              <a href="#" className="hover:text-primary">
                Trung tâm trợ giúp
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Hướng dẫn mua hàng
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Đơn hàng
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-text-primary mb-3">VỀ CHÚNG TÔI</h4>
          <ul className="space-y-2 text-text-secondary">
            <li>
              <a href="#" className="hover:text-primary">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Tuyển dụng
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-text-muted">
        © 2026 Shopee Clone - Dự án học tập React + Spring Boot
      </div>
    </footer>
  )
}
