# Sức mạnh tổng: một màn hình app cuộn bên trong

Yêu cầu sửa ngày 23/11/2026: hình Figma 211:1679 thể hiện hai trạng thái trước/sau khi cuộn của cùng một màn hình; không phải một bảng so sánh để đưa nguyên hình vào trang.

## Asset và viewport

Giữ nguyên pixel native từ `assets/orbit-ui/strength-reference.png` (Figma 211:1679, ảnh gốc 1294 × 1084; hệ tọa độ Figma 535 × 448). Không tạo thêm chỉ số, chart hoặc UI mới. Không tạo video giả rồi gọi là quay app.

`assets/figma/orbit-ui.js` → `goalTpl` chuyển asset tham chiếu thành **một** khung app dọc 390 × 844. Status bar và thanh điều hướng dưới giữ nguyên vị trí. Chỉ vùng nội dung bên trong 358 × 710 được cuộn; không có mũi tên hay chữ “Cuộn xuống” trong kết quả hiển thị.

Hai vùng nội dung từ cùng asset được nối tại phần giá trị 1RM 47,5 kg, dùng CSS background crop (không sửa file ảnh):

- Hệ tọa độ crop 2× Figma, ảnh nền 1070 × 896.
- Khung native ban đầu: offset ảnh `(-68, -36)`; vùng cuộn nằm `(14,52)`, kích thước `358×710`.
- Vùng trên: source `(-82,-88)`, cao 674.
- Vùng dưới: source `(-688,-88)`, cao 710; đặt ngay sau vùng trên.
- Tổng nội dung 1384; hành trình cuộn 674 px.

Tọa độ crop là giá trị đo/ước lượng thủ công từ hai trạng thái source, không phải motion metadata của Figma. Khung desktop 340 × 735,795 giữ đúng tỷ lệ màn hình. Mobile dùng cùng art và fit riêng phần UI sau chip/heading/copy để không bị cắt thanh điều hướng.

## Source motion được dùng

- `assets/figma/orbit-scene.js` → `SH`, `map`: giữ clock/pin của source Skydive đã trích trước đó (`TEt=.025`, `REt=.435`, `mKe=5`). Trong slot tool thứ tư: `local=(p-TEt)/REt*mKe-3`.
- `assets/mobile/mobile.js` → `onScroll`: dùng `tPos` của cùng slot Sức mạnh tổng, với ORBIT_LEAD/ORBIT_SLOT hiện có; không thêm quãng cuộn toàn trang.
- `setStrengthProgress` lấy đoạn `.15→.85` của slot, ease smoothstep, rồi translate riêng surface nội dung từ `0` tới `-674px`. Đầu/cuối có khoảng giữ để đọc; hai ngưỡng `.15/.85` là ước lượng pacing cho yêu cầu này.
- Cuộn lên chạy ngược cùng clock, không reset/tự phát lại theo timer.
- Reduced motion: không tự dịch nội dung; viewport hỗ trợ cuộn thủ công bằng bàn phím/chuột.

Không thay scene điện thoại 3D, UI tracking bên phải, logo, fan, review hoặc các tool khác.

## Kiểm tra

Chrome/CDP: đầu/giữa/cuối và cuộn ngược trên desktop 1440×900, mobile 390×844; kiểm tra viewport/khung cố định, một màn hình duy nhất, chart hiện dần, không tràn ngang, thanh điều hướng nằm trọn trong viewport. Reduced motion vẫn đọc được phần dưới bằng cuộn thủ công. Kết quả/ảnh trong `qa/strength-*`.
