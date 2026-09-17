# FUJI Matcha Shop

Trang web FUJI Matcha Shop hiện đã được chuyển sang thiết kế tĩnh bằng HTML, CSS và JavaScript thuần, đồng thời kết nối với backend giả lập bằng `json-server`.

## Nội dung

- `index.html`: trang chủ sản phẩm.
- `product-detail.html`: trang chi tiết sản phẩm.
- `cart.html`: giỏ hàng với cập nhật số lượng và xóa sản phẩm.
- `checkout.html`: form thanh toán và gửi đơn hàng lên backend `json-server`.
- `order-history.html`: trang xem lại đơn hàng từ backend.
- `login.html` / `register.html`: form đăng nhập và đăng ký mẫu.
- `admin/`: giao diện quản trị tĩnh có bảo vệ login admin.
- `styles.css`: toàn bộ kiểu dáng giao diện.
- `app.js`: logic JavaScript thuần cho giỏ hàng, đăng nhập, checkout và liên kết json-server.

## Cài đặt và chạy

1. Mở terminal tại thư mục dự án.
2. Chạy `npm install` để cài `json-server`.
3. Chạy `npm run server` để khởi động backend giả lập trên `http://127.0.0.1:5000`.
4. Mở `index.html` bằng Live Server hoặc trình duyệt.

## Lưu ý

- `json-server` đang đọc dữ liệu từ `db.json`.
- Đăng nhập admin: `admin@phela.vn / admin123`.
- Đăng nhập khách: `user@phela.vn / user123`.
- Checkout sẽ gửi đơn hàng lên endpoint `http://127.0.0.1:5000/orders`.
- Lịch sử đơn hàng sẽ đọc từ endpoint `http://127.0.0.1:5000/orders`.
