---
layout: page
title: "No More HDR: Hỗ trợ"
permalink: /no-more-hdr/
lang: vi
share-description: "Không còn ảnh làm màn hình quá sáng. Tìm HDR ẩn trong thư viện và lưu bản sao bình thường, ảnh gốc vẫn được giữ an toàn."
---

Ảnh đã chụp có thể khiến điện thoại của bạn sáng chói khi xem hoặc đăng. Đó là HDR ẩn: độ sáng bổ sung được lưu bên trong ảnh. No More HDR tìm những ảnh đó và biến chúng thành bản sao SDR bình thường. Ảnh của bạn không bao giờ rời khỏi thiết bị.

Cần hỗ trợ? Gửi email cho chúng tôi tại [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com), hoặc xem [cách báo lỗi](#cách-báo-lỗi).

## Cách sử dụng

1. **Quét thư viện ảnh.** Khi mở ứng dụng lần đầu, chọn **Check my library** và cho phép truy cập ảnh. Ứng dụng sẽ kiểm tra ảnh của bạn ở chế độ nền. Bạn có thể theo dõi tiến trình và tạm dừng trong **Settings > HDR Scan**.
2. **Chỉ hiện ảnh HDR.** Dùng nút chuyển **HDR** trong Library để chỉ xem những ảnh có HDR. Chúng sẽ có nhãn HDR.
3. **Chọn và loại bỏ HDR.** Nhấn **Select**, chọn ảnh (hoặc **Select all HDR**), rồi nhấn **Remove HDR**. Giữ ứng dụng mở trong khi xử lý.
4. **Lưu dưới dạng bản sao.** Ứng dụng xử lý trên các bản sao, nên ảnh gốc của bạn không bị thay đổi. Các bản sao mới sẽ xuất hiện trong danh sách **Fixed**. Khi sẵn sàng, nhấn **Save to library** để thêm chúng vào thư viện Photos. Sau khi xử lý, bạn cũng có thể chọn xóa ảnh HDR gốc. Chúng sẽ được chuyển vào Recently Deleted, nơi bạn có thể khôi phục trong 30 ngày.
5. **Kiểm tra kết quả.** Nút chuyển **Fixed** hiển thị các bản sao SDR mà ứng dụng đã tạo, mỗi ảnh được đánh dấu FIXED.
6. **Ảnh đã nhập (quyền truy cập hạn chế, hoặc không có quyền).** Nếu bạn chỉ chia sẻ một số ảnh với ứng dụng, hoặc không chia sẻ, dùng **Import** (hoặc **Pick photos**) để tự chọn ảnh. No More HDR sẽ kiểm tra và giữ lại những ảnh có HDR trong **Imported**, nơi bạn có thể sửa chúng theo cách tương tự. Ảnh đã nhập là các bản sao được giữ trong ứng dụng; thư viện Photos của bạn không bị thay đổi.

## Câu hỏi thường gặp

**Tại sao một ảnh lại hiện là HDR?**
Nhiều ảnh chụp từ điện thoại đời mới lưu thêm thông tin độ sáng (một "gain map") kèm theo ảnh thông thường. Trên màn hình hỗ trợ HDR sáng, ảnh có thể trông sáng hơn nhiều so với phần còn lại của màn hình. Nhãn HDR nghĩa là ứng dụng đã tìm thấy thông tin đó trong ảnh.

**"Fixed" là gì?**
Một ảnh Fixed là bản sao SDR mà No More HDR đã tạo. Nó không còn thông tin HDR, nên trông giống nhau trên mọi màn hình.

**Ảnh gốc của tôi có bị thay đổi không?**
Không. Ứng dụng chỉ tạo bản sao. Ảnh gốc của bạn vẫn giữ nguyên trừ khi bạn chọn xóa chúng sau khi xử lý.

**Có hoạt động với ảnh iCloud không?**
Nếu bản gốc đầy đủ của một ảnh chỉ có trên iCloud mà không có trên điện thoại, ứng dụng sẽ hiện biểu tượng mây thay vì kiểm tra nó. Quá trình quét không bao giờ tải ảnh xuống. Bạn có thể mở ảnh và nhấn **Download and check**, hoặc tải ảnh xuống trong Photos, sau đó ảnh sẽ được kiểm tra như bình thường. Khi ứng dụng cần bản gốc trên iCloud để sửa ảnh, nó sẽ tự tải xuống (cần có kết nối internet).

**Quyền truy cập ảnh hạn chế là gì?**
iOS cho phép bạn chỉ chia sẻ một số ảnh được chọn với một ứng dụng. Trong trường hợp đó, No More HDR chỉ thấy những ảnh bạn đã chia sẻ. Vào **Settings > Photo access** để quản lý lựa chọn, hoặc cho phép truy cập toàn bộ thư viện. Bạn cũng có thể dùng **Import** để kiểm tra ảnh ngoài phạm vi đã chọn.

**Làm sao để đổi ngôn ngữ?**
No More HDR theo ngôn ngữ được đặt cho ứng dụng trong iOS. Mở **Settings > Language > Change language** để đến thẳng phần thiết lập hệ thống. Ứng dụng hỗ trợ: tiếng Anh, tiếng Việt, tiếng Tây Ban Nha, tiếng Bồ Đào Nha (Brazil), tiếng Nhật, tiếng Đức, tiếng Pháp, tiếng Trung (giản thể), tiếng Trung (phồn thể), tiếng Hàn, tiếng Indonesia, tiếng Nga, tiếng Thổ Nhĩ Kỳ, tiếng Ý và tiếng Thái.

**Làm sao để xóa bộ nhớ đệm?**
Mở **Settings > Cache**.
- **Clear scan cache** kiểm tra lại toàn bộ ảnh để tìm HDR.
- **Clear app cache** cũng xóa các bản sao Fixed chưa lưu vào thư viện, quên nhãn Fixed trên các ảnh đã lưu, và kiểm tra lại toàn bộ. Hãy lưu các bản sao bạn muốn giữ trước.

**Việc quét có làm hao pin hoặc nóng máy không?**
Kiểm tra một thư viện lớn có thể làm thiết bị ấm lên và tốn pin. Mở **Settings > HDR Scan** và nhấn **Pause** để dừng. Việc quét sẽ tiếp tục khi bạn nhấn **Unpause** hoặc khởi động lại ứng dụng.

**Vì sao một số ảnh không sửa được?**
Ứng dụng sẽ giữ nguyên ảnh, và cho bạn biết lý do, khi:
- ảnh không có HDR để loại bỏ;
- ảnh là Live Photo (chưa hỗ trợ);
- loại tệp, hoặc loại HDR, chưa được hỗ trợ;
- Photos không cho phép sửa (hãy thử lưu một bản sao);
- bản gốc trên iCloud không tải xuống được;
- không đủ dung lượng trống;
- kết quả không đạt kiểm tra của ứng dụng, nên ảnh được giữ nguyên;
- không thể đọc hoặc ghi tệp.

Một số trường hợp, như thiếu dung lượng hoặc lỗi tải từ iCloud, có thể xử lý được ở lần thử thứ hai. Dùng **Try the ones that might work** trên màn hình kết quả.

**Ứng dụng không thấy ảnh của tôi.**
Mở **Settings > Photo access**. Nếu quyền truy cập là Limited hoặc Not allowed, nhấn **Manage selected photos** hoặc **Change system setting** và cho phép truy cập (Full access cho phép kiểm tra toàn bộ thư viện). Nếu bạn không muốn cấp quyền, dùng **Import** để tự chọn ảnh.

## Cách báo lỗi

Trong ứng dụng, mở **Settings > Report a problem**. Nó sẽ mở một email gửi cho chúng tôi với phiên bản ứng dụng và phiên bản iOS đã được điền sẵn. Vui lòng thêm:

- phiên bản iOS và dòng máy của bạn (ví dụ iPhone 16 Pro);
- loại ảnh (ví dụ ảnh thường, Live Photo, ảnh chụp màn hình, ảnh iCloud hoặc ảnh đã nhập) và điều gì đã xảy ra;
- điều bạn mong đợi sẽ xảy ra, và bất kỳ thông báo nào bạn thấy.

Bạn cũng có thể gửi email trực tiếp đến [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com). Vui lòng không gửi ảnh riêng tư trừ khi chúng tôi yêu cầu.

## Thêm

- [Chính sách quyền riêng tư](/no-more-hdr/privacy/)
- [Báo lỗi](/no-more-hdr/report/)
