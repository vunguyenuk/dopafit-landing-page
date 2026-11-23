# Nội dung, logo, video và review — 23/11/2026

## Danh sách yêu cầu

- [x] Nội dung các section theo Figma `211:1276`: 500+ bài tập; bốn câu pain point; Lộ trình tập luyện; Theo dõi chuyên sâu; Sẵn sàng tập; CTA cuối trang.
- [x] Logo chính thức `235:1839`, sau animation chữ D; cùng một SVG ở header/footer, desktop/mobile. Giữ nguyên kích thước gốc của SVG, chỉ thay kích thước wrapper.
- [x] Toàn bộ sáu card của fan dùng video thực từ thư mục Excercises, xen kẽ nữ/nam. Giữ nguyên slot và đích fan hiện tại.
- [x] Pain point: lần lượt nhấn từng dòng bằng scroll; dòng active lớn/sáng, các dòng khác nhỏ/tối. Giữ toàn bộ clock/pin/exit của hero gốc.
- [x] Bốn feature dưới Lộ trình và FAQ tăng cỡ chữ; thêm nút Tải ứng dụng ngay theo luồng tải hiện có.
- [x] Thêm heading riêng cho cả bốn feature ở orbit.
- [x] Mục Thấy tiến bộ: một màn hình Sức mạnh tổng cuộn xuống biểu đồ, từ hai trạng thái tham chiếu trong `211:1679` (xem STRENGTH-SCROLL.md).
- [x] Section Bạn không cô đơn: typography/màu/hai cột từ `93:3218`; hai cột chạy ngược chiều; dừng khi hover/focus/ngoài viewport/tab ẩn; giảm chuyển động có thể cuộn đọc thủ công.
- [x] Điều khiển/nhãn trang bằng tiếng Việt. Giữ nguyên tên riêng Dopafit, Apple Health, App Store, Android. Review được trích nguyên văn; không tự dịch rồi coi là nguyên văn.

## Figma và dữ liệu

File: `2lNpfPEq2wVnGk07bVLghz`.
Các phản hồi source lưu cạnh tài liệu này: `211-1276.txt`, `211-1307.txt`, `211-1679.txt`, `235-1839.txt`, `93-3218.txt`.

| Node Figma mới | Slot đang có | Áp dụng |
| --- | --- | --- |
| 211:1282 | 147:2750 | 500+ bài tập… |
| 211:1406 | 147:2850 | Bốn dòng pain point |
| 211:1407 | 147:2851 | Lộ trình tập luyện dành riêng cho bạn |
| 211:1308 / 1319 / 1316 / 1312 | 147:2777 / 2793 / 2789 / 2785 | Bốn mục chữ, bốn UI tương ứng |
| 211:1409 | 147:2852 | Theo dõi chuyên sâu, bức phá từng buổi tập (chính tả theo source) |
| 211:1467–1470 | 147:2910–2913 | Heading và nội dung bốn feature |
| 211:1679 | 147:2917 | Sức mạnh tổng và biểu đồ mức tạ |
| 211:1410 | 147:2853 | Sẵn sàng tập mọi lúc mọi nơi |
| 211:1670 + 93:3218 | community-reviews | Heading + review |
| 211:1411 | 147:2854 | Bắt đầu tập luyện với Dopafit hôm nay |

Logo: `assets/brand/dopafit-wordmark.svg`, xuất trực tiếp từ Figma, source 760 × 86.654.
Sức mạnh: `assets/orbit-ui/strength-reference.png`, asset Figma 535 × 448; không vẽ lại số liệu/giao diện.

Workbook chỉ đọc: `/Users/vunguyen/Desktop/Dopafit — 80 review (App Store & Google Play).xlsx`.
Thực tế có **91 dòng review không rỗng**, không phải 80 như tên file. Cột A là nội dung, K là tiêu đề. `reviews.json` lưu cả 91 dòng và số dòng gốc; hiển thị 89 review có nội dung tiếng Việt, bỏ hai nội dung chỉ có tiếng Anh để đúng yêu cầu ngôn ngữ. Giữ nguyên cả phản hồi tích cực và góp ý; không tạo tên người viết, ngày hoặc nguồn store. Workbook không có điểm sao gốc. Sau đó người dùng yêu cầu dựa vào nội dung nhận xét: phần bổ sung bên dưới ghi rõ quy tắc ước tính và cách hiển thị; không coi đó là rating cửa hàng. Rating intro từ Figma vẫn tách biệt.

## Motion và source code tái sử dụng

- `assets/vendor/skydive-hero-source.js`: `mount`, clock `enterAt/enterSpan/write/exitAt/exitSpan`, `$I`, `sourceCardFrame`. Chỉ đổi adapter text sang bốn dòng và giữ ảnh thẳng đứng theo AGENTS.md. Khoảng nhấn dòng lấy từ clock gốc: `enterAt + enterSpan*.75` đến `exitAt-.02`; tỷ lệ inactive `.62`, opacity `.25` là giá trị ước lượng cho yêu cầu mới, không phải giá trị Figma được đo.
- Hero handoff: observer/scroll luôn commit frame cuối khi cuộn bỏ qua hero; tránh giữ `#landing` opacity 0. Không thêm quãng pin hoặc empty tail.
- `assets/figma/landing.css` `fan-reveal`: đúng snippet người dùng `.95s`, cubic-bezier(.2,.8,.2,1), delay `index*.13s`, opacity 1 ở 65%, start translate(-160px,90px)/rotate(-55deg)/scale(.5). `landing.js` chỉ phát một lần sau handoff khi fan vào viewport; bỏ việc dùng scroll để thay currentTime. Loop sau reveal vẫn dùng Andfold cũ.
- `assets/vendor/dropset-tracking-source.js`, `tracking.js`: giữ action lists a-48/a-55, pin, sort và đường ngang chạm mép outline. Bốn slot thay năm; pitch 110 design px được ước lượng để chữ 32px theo Figma có thể xuống hai dòng mà không đè nhau.
- `assets/phone/recording-player.js`: giữ `setStep` / crossfade `.5s ease` từ dev reference đã trích trước đó. `screen-ui.js` đồng bộ điểm chuyển UI với điểm xuất hiện copy `.20 → .45` của dock để tránh chồng hai UI khi điện thoại chưa vào hẳn cột phải.
- `assets/figma/brand.js` + `brand.css`: giữ dp-slab / dp-hit / dp-burst / dp-sweep từ dev reference đã trích. Kết thúc sweep mới hiện SVG chính thức. Cả clone mobile đều có completion listener.
- `orbit-scene.js` và `orbit-ui.js`: giữ pin, vị trí tool, reveal và các function tương tác hiện có. Template goal là một viewport app cuộn nội dung, dùng pixel native từ asset sức mạnh; chi tiết clock/crop trong STRENGTH-SCROLL.md. Thêm heading vào caption.
- Review chạy dọc tuyến tính, hai group trùng nhau để nối vòng và hai chiều đối lập theo yêu cầu mới. Tốc độ 24 design px/s là giá trị triển khai ước lượng; chưa có motion source trong node Figma review. Không thay các motion source có sẵn bằng hiệu ứng mới.

## Video và UI điện thoại

`fan-sources.json` ghi tên video gốc, theo thứ tự sáu card. Clip được encode H.264 576px ngang/24fps, bỏ audio; hình poster lấy từ chính clip. Không dùng AI. Chỉ phát video khi vào viewport; pause khi ra ngoài/ẩn tab hoặc giảm chuyển động.

UI tracking:
1. Lịch sử: `focus-history.mp4` đã có từ recording Device Hub.
2. Phục hồi: native screenshot 23/11 lúc 15:22:50.
3. Hướng dẫn: native screenshot 23/11 lúc 15:23:29.
4. Sức mạnh tổng: native screenshot 23/11 lúc 15:21:57.

Ba screenshot mới lấy từ nút Screenshot của Device Hub, lưu cả PNG/WebP gốc trong `assets/content-2026-11-23/`, encode thành video giữ hình `.6s` để dùng player hiện có. **Đây là native screenshot hold, không phải bản quay thao tác.** Dùng đúng nội dung app, không tự vẽ menu/giá trị. App hiện khóa điểm sức mạnh sau 2/3 buổi; không tạo điểm mở khóa giả. Asset lịch sử 722 trong orbit là nguyên bản Figma được người dùng yêu cầu, không gán cho trạng thái app hiện tại.

## Bố cục và kiểm tra

Review được chèn sau ba card và trước Apple Health như Figma. Giữ tọa độ cũ của phần trên; đóng băng các slot tuyệt đối và dịch phần dưới 1420 design px để tránh thay chiều cao root làm nhảy tọa độ phần trăm. Font review có ngưỡng đọc được 16px nội dung /20px tiêu đề trên tablet. Không đổi thiết kế intro/phone geometry đang được chấp nhận.

Kiểm tra bằng Chrome headless/CDP ở 1440×900, 820×1180, 390×844 và 320×568; source/ảnh kiểm chứng và JSON validation lưu trong thư mục `qa/` cạnh tài liệu này. Kiểm tra nội dung, UI/feature tương ứng, fan timing, từng giai đoạn hero và cuộn ngược/skip, CTA, FAQ, logo, review counter-motion, không tràn ngang, reduced motion và lỗi JS/tải asset.

Nút tải tiếp tục dùng dialog tải ứng dụng có sẵn trong dự án; không tự tạo URL App Store mới.

## Follow-up: gentle reading lift and Regular type — 23/11, 16:07–16:29

- User explicitly requested the four pain-point lines to move gently upward while scrolling instead of remaining stationary. `assets/vendor/skydive-hero-source.js` → `mount()/draw()` retains the captured `Eoe` write interval, `$I` smoothstep easing and original entrance/exit clocks. The adapter now carries the existing34px lift through the read interval and adds a signed18px smoothstep pass to each line. These small travel values are manual adjustments requested by the user, not extracted source motion. The same scroll sample determines position, emphasis and reverse; no autonomous timer, extra scroll tail, spring, reflow or photo changes.
- `content.css` → `.pain-line>span` composes the short Y translation with the accepted emphasis scale. Reduced motion sets lift0, scale1 and full opacity.
- User requested Regular type for the tracking feature list, like FAQ. `.feature-tab` and `.faq-pl-q` now use400; equivalent mobile `.m-steps li`/`.m-faq-item summary` also400. Existing font sizes, wrapping widths, dividers, sort slots and UI mapping are unchanged.
- `qa/pain-lift-validation.json` verifies desktop/mobile forward and reverse transforms, monotone upward motion, no movement when scroll stops, Regular400 computed type, reduced motion and no JS/network errors or horizontal overflow. Initial, reading, exit and handoff screenshots are stored alongside it.

## Review stars and sequential wordmark — 23/11, 16:30–16:37 follow-up

- The user first selected actual ratings, then explicitly instructed using the Excel comments after confirming there was no star column/source link. `reviews.json` / `reviews-data.js` now add `estimatedRating` and `ratingBasis: estimated_from_review_text`; title, text and sourceRow remain unchanged. These are editorial estimates, not recovered App Store/Google Play scores.
- Manual scale:5 = clearly positive praise/benefit;4 = positive experience with a limited caveat/request;3 = neutral question/suggestion or mixed sentiment;2 = a clear complaint affecting use. No row warranted1. Distribution across91 imported rows:41×5,16×4,24×3,10×2. Row49 explicitly mentions4 stars and retains4. Both positive and critical comments remain displayed; the same two English-only rows remain excluded.
- Figma review source was re-read from `93:3218`, session `77cdd7e8-a25b-4743-99e6-23bd8373192d`. Exact `01546.svg` asset from node `93:3221` is saved as `assets/content-2026-11-23/review-stars.svg` (intrinsic170.99×38.77). `reviews.js` → `build()` places that five-star artwork above each title; a second clipped copy lights only the estimated count. No redrawn star paths or invented author/date fields. A visible per-card “Ước tính N/5” label plus section note identifies the basis; no rating/aggregateRating structured data is emitted. Mobile scales the asset wrapper; SVG bytes/root attributes stay unchanged. The column edge fade is narrowed from5% to2% so the first card’s stars are not dimmed before they enter the reading area.
- The two review columns keep the existing opposite continuous motion and actual-height speed calculation. Additional star-row height is included automatically by the existing ResizeObserver. Rating labels/section note keep a12px physical minimum on scaled desktop/tablet; mobile uses12/13px.
- User requested the full logo to push each letter out after the D animation. `assets/figma/brand.js` retains the reference `.arrive` slab/hit/burst/sweep timing from `dev-dopafit-app-2026-11-17T08-35-45-069Z/index.html`. At the existing `dp-sweep` completion, `revealWordmark()` reveals the official D, then O/P/A/F/I/T in order. Each letter uses an external SVG `<use>` referencing the unchanged official Figma asset: D, Vector_7, Vector_6, Vector_5, Vector_4, Vector_3, Vector_2. Original overlapping/slanted outlines and colours remain; no substitute font or path tracing.
- The letter movement is the user's new explicit motion request: .55s duration, .09s stagger, source sweep easing `cubic-bezier(.22,1,.36,1)`, X−42 SVG units (about10.5px at190px logo width) →0; D handoff fades .22s. These are implementation estimates, not Figma/source-animation values. The last T animationend switches seamlessly to the original complete SVG image. Header/footer desktop/mobile share the same event-driven stages; no independent completion timeout. Hover/focus replay resets the full sequence. Reduced motion immediately displays the static official SVG.
- `qa/ratings-brand-validation.json` checks89 visible original quotes/titles, labelled estimates/clip counts, exact loaded star asset dimensions, opposite review motion, source D phase preceding the stagger, ordered first-visible letter timestamps, unchanged logo dimensions, completion/replay on header/footer desktop/mobile, reduced motion, no overflow and no JS/network errors. `rating-source-validation.json` confirms all89 visible quotes/titles still match the saved pre-rating QA import.

## Latest user corrections — 16:51–16:55

See `../text-scroll-2026-11-23/IMPLEMENTATION.md`: supplied video-style scroll glyph sweep; D begins centred and retreats as letters emerge;57 positive4–5 selections without visible estimate labels (source estimates retained, not upgraded); review card radius24px matching the existing UI cards. This supersedes the earlier all89 review display and visible estimate-label layout, while retaining all91 source records. Current verification is in the same reference folder.

## Latest: one sentence at a time and repeating logo

The user corrected the persistent four-line presentation: only one centred sentence is now visible in each reading hold, with video-style glyph entry/exit and exact reverse sampling. The next request adds a2400ms full-wordmark hold and repeats the entire centred-D → sequential-letter reveal while the logo is visible. Details, source distinction and desktop/mobile/lifecycle/reduced-motion checks: `../single-sentence-2026-11-23/IMPLEMENTATION.md` and `validation.json`. Review selection/radius, Regular typography, phone framing and other completed changes are retained.
