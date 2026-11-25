# Responsive fixes — Dopafit, 25 November 2026

Đã xử lý 7 phát hiện R1–R7 trong responsive audit. Phạm vi là responsive; không thay asset, copy, concept hay source camera/keyframe đã được chấp nhận.

## Các thay đổi

| Audit | Xử lý |
|---|---|
| R1 — Heading/CTA/card ở Section 2 | Quy đổi `90vw` về hệ tọa độ canvas có CSS zoom. CTA đặt sau đáy heading thực, chừa 20px ở desktop ≤1280px và 36px ở desktop rộng hơn, tránh chạm fan. Tablet dùng layout một cột đã có. |
| R2 — Caption orbit chồng UI ở tablet | Tái sử dụng `DopafitMobileLanding.mount()` cho viewport ≤1100px. Mỗi nhịp giữ một nhóm caption/UI, không ép overview desktop vào tablet. Giữ toggle và thứ tự demo. |
| R3 — Footer đè link | Danh sách link desktop dùng flex flow, nhãn và link cách nhau theo kích thước vật lý; legal text có line-height 1.5. Tablet dùng footer flow hiện có. |
| R4 — Intro320px đè mô tả | `fitCopy()` đo offsetHeight thật của heading rồi đặt description/proof sau nó. Đo offset box để chuyển động reveal không gây feedback vào phép tính. |
| R5 — Intro tablet/landscape quá nhỏ | Cỡ mô tả có floor 15px, riêng viewport thấp compact là14px; title có floor32px. Compact intro áp dụng tới1100px, proof giữ kích thước đọc được. |
| R6 — Native UI mobile quá nhỏ | Giới hạn UI tối thiểu240px ở phone và300px ở tablet, trong chiều rộng khả dụng. Giảm figure trong nhịp active; phần UI vượt chiều cao di chuyển qua cùng scroll slot để đọc được tới cuối. Không tạo thêm màn hình hay kéo dài scroll budget. |
| R7 — Resize mất vị trí/FAQ | Một listener sở hữu breakpoint.600→601px không reload. Khi qua1100px, hai source build vẫn cần reload một lần, nhưng lưu/khôi phục section, progress/feature đang xem, FAQ và dialog; không dùng lại pixel scroll của layout khác. Toggle orbit tiếp tục dùng localStorage hiện có. |

Ngưỡng1100px, floor240/300px và khoảng20/24/36px là giá trị responsive do triển khai lựa chọn từ lỗi đã đo, không phải số đo trích từ Figma/video.

## Nguồn code và block tái sử dụng

- `assets/mobile/mobile.js` — `DopafitMobileLanding.mount()`, `panel()`, `fitOrbit()`, `onScroll()`: tái sử dụng nguyên cấu trúc một cột, native UI, chip, toggle, reveal và slot có sẵn; mở rộng phạm vi lên tablet.
- `assets/figma/orbit-ui.js` — `setStrengthProgress()` dùng `p*p*(3-2*p)`: dùng cùng smoothstep cho phần overflow của native UI trong compact slot. Khoảng chờ `.18` và span `.66` là ước lượng responsive để caption được đọc trước; phần di chuyển đảo chiều theo scroll. `ORBIT_LEAD=.35`, `ORBIT_SLOT=.8`, `ORBIT_MULTI=.9` không đổi.
- `assets/figma/landing.css` — `.fan-card.play` / `@keyframes fan-reveal`: giữ `.95s`, `cubic-bezier(.2,.8,.2,1)`, stagger`.13s`, transform đầu/cuối do người dùng cung cấp. Không sửa file này trong lượt responsive.
- `assets/vendor/skydive-hero-source.js` — `mount()` / `draw()`: giữ nguyên clock, ảnh upright, phần đọc, exitSpan, handoff và source opacity. Không sửa file này trong lượt responsive.
- `assets/mobile/phone3d-mobile.js`, `assets/phone/reference-motion.js`: tiếp tục dùng phone/camera track hiện có. Không chỉnh pose, yaw, glass hoặc camera trong lượt responsive.
- `assets/intro/intro.js` — chỉ thêm phép đo copy; `update()` và source track không đổi.
- `assets/figma/typography.js` — giữ normalize font hiện có, thêm tính vị trí CTA/footer theo text thực.

Các bản source trước lượt sửa nằm trong `before/`, giúp phân biệt phần responsive với các thay đổi tiếng Anh/UI đã tồn tại trong working tree.

## Kiểm chứng

Chrome headless macOS, CSS viewport, DPR1, qua Chrome DevTools Protocol trên `http://127.0.0.1:8097/`.

- 17 viewport:320×568,360×800,390×844,430×932,600×960,601×960,768×1024,844×390,1024×768,1100×800,1101×800,1200×800,1280×720,1440×900,1920×1080,2560×1440,3440×1440.
- Intro sau reveal, Section2, orbit, places, footer; screenshot và số đo trong `qa/matrix.json`.
- Bốn UI orbit ở320/390/601/768/844/1024px: đầu, giữa, cuối nhịp, cuộn ngược. Xác nhận minimum UI width, phần cuối UI vào vùng hiển thị, vị trí đảo chiều khớp. `qa/checks.json`.
- CTA desktop1101–3440px tách heading; footer label/link không giao nhau. `qa/checks.json` và `s2-final-*`, `footer-final-*`.
- FAQ600→601 giữ cùng navigation và trạng thái mở;601→1440→390 giữ câu đang mở và vị trí đọc, sai số vị trí nhỏ hơn1px trong mẫu đã chạy. `qa/checks.json`.
- Orbit768→1440→768 giữ cùng tool/progress, sai số nhỏ hơn0.001 slot. `qa/resize-orbit.json`.
- Hero đầu/giữa/cuối/cuộn ngược và handoff tại320/768/1101/1440px; source copy/photo đã fade ở cuối, Section2 vào viewport. Kiểm tra fan duration/delay/easing. Toggle orbit cả hai phía tại1101/1440px. `qa/motion.json`.
- Không ghi nhận Runtime exception hoặc HTTP4xx/5xx trong các lượt trên. `node --check` các JS sửa và `git diff --check` qua.

Script tái hiện: `verify-matrix.cjs`, `verify-checks.cjs`, `verify-motion.cjs`, `verify-resize.cjs`. Chạy bằng Node với Chrome macOS và preview8097 đang hoạt động; không thêm dependency vào app. `verify-desktop.cjs` và `verify-matrix-narrow-desktop.cjs` là lượt kiểm tra bổ sung sau khi tinh chỉnh khoảng CTA.

## Giới hạn và cảnh báo thiết kế

- Chưa kiểm thử thiết bị thật, Safari iOS hoặc Firefox; không chứng nhận safe area/browser toolbar động hay GPU performance.
- Native UI trên màn hình thấp được đọc bằng tiến trình scroll trong vùng cắt; không thu toàn bộ phone xuống vừa một frame nhỏ.
- Đổi qua breakpoint1100px vẫn có một navigation để dựng source build khác. Đã kiểm chứng khôi phục FAQ và orbit; không tuyên bố resize hoàn toàn không reload.
- Hook `gradient-text` tại `content.css` là false positive cho hiệu ứng pixel Chande mà người dùng đã yêu cầu/duyệt. Giữ nguyên hiệu ứng, miễn riêng rule/value trong file này bằng `ignore-value`, lưu tại `.impeccable/config.json`. Không tắt detector toàn dự án, không thay pixel thành gradient trang trí mới.
