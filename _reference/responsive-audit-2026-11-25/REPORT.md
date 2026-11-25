# Responsive audit — Dopafit, 25 November 2026

## Kết quả

**Responsive: 2/4 — mobile có layout riêng nhưng tablet còn lỗi đáng kể.** Xác nhận 7 lỗi: **P0: 0 · P1: 4 · P2: 3 · P3: 0**. Chưa nên coi bản hiện tại là đã sẵn sàng responsive cho tablet.

Lượt này chỉ audit responsive, không sửa application source. Không đánh giá lại concept/visual đã được duyệt. Những phần ảnh fan, phone reveal hoặc fade được chủ ý cắt trong scroll scene không bị tính là lỗi chỉ vì nằm ngoài viewport. Không chấm tổng /20 vì accessibility, performance, theming và anti-patterns chưa được audit đầy đủ trong phạm vi yêu cầu này.

## Cách kiểm tra

Chrome headless trên macOS, CSS viewport, DPR 1; thao tác bằng Chrome DevTools Protocol trên http://127.0.0.1:8097/. Chờ font và phone sẵn sàng; đo bounding rect, font vật lý sau zoom/transform, kiểm tra screenshot ở intro đã hiện copy, Section 2, orbit giữa/cuối, places và cuối trang. Kiểm tra thêm cả bốn panel orbit trên 320/390px, modal tải app, và resize qua breakpoint.

| Nhóm | Viewport đã chạy |
|---|---|
| Mobile | 320×568, 360×800, 390×844, 430×932, 600×960 |
| Tablet / ngang | 601×960, 768×1024, 844×390, 1024×768 |
| Desktop | 1280×720, 1440×900, 1920×1080, 2560×1440, 3440×1440 |

Đây là mô phỏng viewport Chrome, chưa phải kiểm thử thiết bị thật/Safari iOS/Firefox. Chưa xác nhận safe area, browser toolbar động, bàn phím ảo hoặc hiệu năng GPU trên điện thoại. Chưa chứng nhận toàn bộ các frame chuyển tiếp hay WCAG. Số font nhỏ dưới đây là vấn đề đọc được đã xác nhận bằng hình; không tự quy kết một font-size cụ thể thành vi phạm WCAG.

## Các lỗi cần sửa trước

### R1 · P1 — Section “500+” đè chữ lên CTA và card trên tablet

- **Tái hiện:** 601×960, 768×1024, 844×390 và 1024×768; scroll tới “500+ exercises…”.
- **Bằng chứng:** 601px: heading rộng chỉ **169.3px** nhưng font **40px**, từ y110.3 đến423.9; CTA y182.9–222.9 nằm bên trong heading. 768px: heading y109.6–288.7, CTA y202.4–242.3. 1024px vẫn có giao nhau khoảng29px.
- **Tác động:** tiêu đề không đọc trọn vẹn, nút tải app chen giữa dòng chữ; fan đi qua nội dung chưa hoàn tất.
- **Vị trí:** [content.css:2](/Users/vunguyen/Desktop/dopafit-landing-page/assets/content-2026-11-23/content.css:2); [typography.css:34](/Users/vunguyen/Desktop/dopafit-landing-page/assets/figma/typography.css:34); [typography.js:10](/Users/vunguyen/Desktop/dopafit-landing-page/assets/figma/typography.js:10).
- **Nguyên nhân:** `max-width:90vw` dùng trong canvas đã CSS zoom nên chiều rộng bị thu thêm một lần, trong khi font có floor40px; CTA vẫn neo `top:233px` design thay vì sau chiều cao chữ thực.
- **Đề xuất:** quy đổi chiều rộng viewport về cùng hệ tọa độ với canvas; đặt CTA sau đáy heading đã đo. Giữ nguyên keyframe fan và vị trí card cuối.
- **Lệnh phù hợp:** `/adapt`, `/layout`.
- **Ảnh:** [s2-601.png](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/s2-601.png) · [s2-768.png](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/s2-768.png).

### R2 · P1 — Caption và màn hình orbit chồng/cắt nhau ở tablet

- **Tái hiện:** 601×960 và768×1024; scroll tới “See progress…” rồi overview cuối section.
- **Bằng chứng:** 768px caption bắt đầu x552, rộng200px, phone nằm đè vào vùng bên phải caption. Overview601px: caption “500+ exercise videos” bắt đầu **x−14.4px**; body caption recovery xuống tới y523 trong khi caption phía dưới bắt đầu y467. Các khối chữ giao nhau. Screenshot xác nhận cả clipping trái lẫn chồng chữ.
- **Tác động:** mô tả tính năng bị phone/nhân vật che; không phân biệt được caption thuộc UI nào.
- **Vị trí:** [orbit-scene.js:113](/Users/vunguyen/Desktop/dopafit-landing-page/assets/figma/orbit-scene.js:113); [content.css:142](/Users/vunguyen/Desktop/dopafit-landing-page/assets/content-2026-11-23/content.css:142); [typography.js:32](/Users/vunguyen/Desktop/dopafit-landing-page/assets/figma/typography.js:32).
- **Nguyên nhân:** giữ cỡ chữ vật lý18px nhưng vẫn đặt cả bốn nhóm trong tọa độ overview desktop. Window clamp ưu tiên giữ phone trong màn hình, không đủ chỗ cho caption; box height không đại diện cho toàn bộ text overflow.
- **Đề xuất:** thêm bố trí tablet cho các nhóm hiện có; tính giới hạn từ toàn bộ title/body/UI đã render, không chỉ offset box. Duy trì thứ tự scroll, source motion và toggle hai bên.
- **Lệnh phù hợp:** `/adapt`, `/layout`.
- **Ảnh:** [orbit-768.png](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/orbit-768.png) · [overview-601.png](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/overview-601.png).

### R3 · P1 — Các cột footer đè nhãn và link trên601–1024px

- **Tái hiện:** cuộn cuối trang601×960,768×1024,1024×768.
- **Bằng chứng:** 768px: nhãn Product y804.7–822.8; link Features y811.3–835.3; link tiếp theo y824.9–848.9. Link cao24px nhưng chỉ cách nhau13.6px. 601px khoảng cách còn10.6px. Support và Legal có lỗi tương tự. Legal/footer cuối cũng chạm slogan ở601px.
- **Tác động:** link và nhãn khó đọc, hit area các link chồng nhau, dễ chọn nhầm.
- **Vị trí:** [index.html:667](/Users/vunguyen/Desktop/dopafit-landing-page/index.html:667); [typography.js:40](/Users/vunguyen/Desktop/dopafit-landing-page/assets/figma/typography.js:40); [typography.css:11](/Users/vunguyen/Desktop/dopafit-landing-page/assets/figma/typography.css:11).
- **Nguyên nhân:** normalize font footer lên16px nhưng khoảng cách/top tuyệt đối của từng dòng vẫn giảm theo canvas zoom.
- **Đề xuất:** cho danh sách footer chảy theo normal flow/grid ở tablet; khoảng cách theo line-height vật lý, giữ logo và ảnh/footer concept đã duyệt.
- **Lệnh phù hợp:** `/adapt`, `/typeset`.
- **Ảnh:** [bottom-768.png](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/bottom-768.png) · [footer-601.png](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/footer-601.png).

### R4 · P1 — Intro320px: heading đè mô tả

- **Tái hiện:** 320×568, scroll cho intro copy hiện hoàn tất.
- **Bằng chứng:** title top86px, cao105.6px (3dòng), bottom191.6px. Mô tả bắt đầu174px: **đè17.6px** lên dòng “what to train today.”.
- **Tác động:** thông điệp đầu trang không đọc rõ dù animation đã kết thúc.
- **Vị trí:** [intro.css:26](/Users/vunguyen/Desktop/dopafit-landing-page/assets/intro/intro.css:26); [intro.css:34](/Users/vunguyen/Desktop/dopafit-landing-page/assets/intro/intro.css:34).
- **Nguyên nhân:** breakpoint màn hình thấp dùng khoảng top88px cố định, chỉ đủ title2dòng; 320px wrap thành3dòng.
- **Đề xuất:** đặt mô tả và proof sau chiều cao title thực hoặc dùng grid/flow cho copy, tách khỏi tọa độ animation của phone.
- **Lệnh phù hợp:** `/adapt`, `/layout`.
- **Ảnh:** [intro-320.png](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/intro-320.png).

## Các lỗi cần xử lý tiếp

### R5 · P2 — Intro thu nhỏ mô tả/badge quá mức sau600px hoặc khi màn hình thấp

- **Tái hiện:** 601×960,768×1024,844×390.
- **Bằng chứng:** mô tả ở600px =15px; sang601px còn **7.5px**,768px =9.6px,844×390 =8.7px. Screenshot601px còn cho thấy header che phần trên title. Badge/App Store cũng thu theo frame16:9, rất nhỏ so với CTA header.
- **Tác động:** chênh1px viewport làm giảm mạnh khả năng đọc; landscape khó xem phần copy.
- **Vị trí:** [intro.css:7](/Users/vunguyen/Desktop/dopafit-landing-page/assets/intro/intro.css:7); [intro.css:10](/Users/vunguyen/Desktop/dopafit-landing-page/assets/intro/intro.css:10); [intro.css:23](/Users/vunguyen/Desktop/dopafit-landing-page/assets/intro/intro.css:23).
- **Nguyên nhân:** desktop `min(px,vw,svh)` không có cỡ chữ tối thiểu và frame16:9 áp dụng ngay từ601px; tọa độ title không dành khoảng trống cho fixed header.
- **Đề xuất:** thêm tablet/short-height treatment cho copy/proof, giữ minimum readable type và chừa header; không đổi pose/video của phone.
- **Lệnh phù hợp:** `/adapt`, `/typeset`.
- **Ảnh:** [intro-601.png](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/intro-601.png) · [intro-844.png](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/intro-844.png).

### R6 · P2 — UI tính năng mobile bị scale nhỏ đến mức khó đọc

- **Tái hiện:** orbit mobile320×568 và390×844, panel recovery/log/strength. Panel video hướng dẫn không gặp mức thu nhỏ này.
- **Bằng chứng:** native strength phone còn khoảng **90×195px** ở320px và **123×266px** ở390px; scale của cả UI stage lần lượt0.322 và0.361. Recovery còn89px/137px chiều rộng; set log320px chỉ rộng101px. Các nhãn trong UI nhỏ dù caption ngoài vẫn đọc được.
- **Tác động:** người xem nhận ra khối phone nhưng khó theo dõi kết quả/thao tác đang được giới thiệu, trái với mục tiêu demo app.
- **Vị trí:** [mobile.js:213](/Users/vunguyen/Desktop/dopafit-landing-page/assets/mobile/mobile.js:213); [mobile.css:58](/Users/vunguyen/Desktop/dopafit-landing-page/assets/mobile/mobile.css:58).
- **Nguyên nhân:** ép heading + toggle + figure + chip + caption + native UI vào `100svh`, sau đó scale UI theo phần chiều cao còn lại, không có ngưỡng readable UI width.
- **Đề xuất:** điều chỉnh phân bổ không gian/scroll slot của mobile để native UI có kích thước tối thiểu hợp lý; tái sử dụng UI và motion hiện có, không thay bằng màn hình giả mới.
- **Lệnh phù hợp:** `/adapt`.
- **Ảnh:** [tool-320-3.png](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/tool-320-3.png) · [tool-390-2.png](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/tool-390-2.png).

### R7 · P2 — Resize qua600px tải lại trang và mất trạng thái nội dung

- **Tái hiện:** tại600×960, cuộn FAQ và mở câu đầu; tăng width lên601px.
- **Bằng chứng:** `performance.timeOrigin` đổi (navigation thật); FAQ đang mở chuyển thành cả6câu đóng. Scroll từ22164px bị clamp về18924px; FAQ từ top79.6px xuống554.6px trong viewport.
- **Tác động:** xoay thiết bị/resize cửa sổ làm người xem mất câu đang đọc và vị trí nội dung; scene/video cũng phải khởi tạo lại.
- **Vị trí:** [mobile.js:16](/Users/vunguyen/Desktop/dopafit-landing-page/assets/mobile/mobile.js:16); [responsive-guard.js:11](/Users/vunguyen/Desktop/dopafit-landing-page/assets/figma/responsive-guard.js:11).
- **Nguyên nhân:** hai listener cùng dùng `location.reload()` khi qua breakpoint để đổi hai bản DOM.
- **Đề xuất:** trước mắt bảo toàn section/progress, toggle và FAQ nếu vẫn cần reload; dài hạn mount/unmount theo media query với cleanup scene, giữ source animation. Không chỉ restore số pixel vì chiều cao hai layout khác nhau.
- **Lệnh phù hợp:** `/adapt`.
- **Bằng chứng JSON:** [resize-state.json](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/resize-state.json); ảnh [resize-before-600.png](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/resize-before-600.png) · [resize-after-601.png](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/resize-after-601.png).

## Mẫu lỗi chung

1. Canvas1920px dùng CSS zoom, trong khi một số font được normalize về kích thước vật lý nhưng width/gap/top vẫn nằm ở design pixels. Đây là nguồn lỗi tablet lặp lại ở Section2, orbit và footer.
2. Breakpoint600px thay toàn bộ cách dựng DOM. Không có tầng layout tablet đủ rộng cho nhiều cột desktop nhưng đủ thấp để tránh scale UI quá nhỏ.
3. `overflow:clip` che dấu một số lỗi: không có scrollbar ngang không đồng nghĩa nội dung không bị cắt. Audit đã đo từng khối và xem screenshot để xác nhận.

## Những phần đang ổn trong phạm vi đã kiểm tra

- Không phát hiện document-level horizontal overflow trong14viewport và các trạng thái đã lấy mẫu. Clipping bên trong vẫn được ghi riêng ở R2.
- Intro360/390/430/600px không đè title lên mô tả như320px; bản desktop1280px trở lên cũng có khoảng cách title/body trong mẫu đã đo.
- Các heading section được cap ở64px trên1440–3440px; không tiếp tục phóng chữ theo màn hình ultrawide trong phép đo này.
- Dialog tải app nằm trong viewport, nội dung không bị crop ở320,390,601,768,1024,1440px. Nút đóng vẫn nhìn thấy.
- Mobile FAQ/footer dùng flow riêng, không gặp lỗi chồng cột giống footer tablet ở ảnh320px.
- Hai lượt matrix/detail không ghi nhận JavaScript exception hoặc HTTP response4xx/5xx từ tài nguyên trang. Đây không phải đo hiệu năng hoặc kiểm thử toàn bộ luồng chức năng.

## Thứ tự xử lý đề xuất

1. `/adapt` + `/layout`: R1/R2/R3, xử lý breakpoint tablet và hệ tọa độ/spacing trước.
2. `/adapt` + `/typeset`: R4/R5, copy intro dựa chiều cao thực, readable sizes trên tablet/landscape.
3. `/adapt`: R6/R7, không thu UI quá nhỏ và bảo toàn trạng thái khi đổi breakpoint.
4. `/polish`: kiểm tra lại alignment và spacing trên14viewport sau sửa; chạy `/audit` lại để xác nhận.

Các nhóm sửa có thể thực hiện riêng hoặc cùng một lượt; không cần thay concept hoặc source animation đã chấp nhận.

## Tệp kiểm chứng

- [matrix.json](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/matrix.json): số đo14viewport và log lỗi.
- [details.json](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/details.json):4panelmobile, caption overview, footer, modal.
- [audit-matrix.cjs](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/audit-matrix.cjs), [audit-details.cjs](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/audit-details.cjs), [audit-resize.cjs](/Users/vunguyen/Desktop/dopafit-landing-page/_reference/responsive-audit-2026-11-25/audit-resize.cjs): script tái hiện bằng Node/Chrome CDP; không thêm dependencies vào app.
