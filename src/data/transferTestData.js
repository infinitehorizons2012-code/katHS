export const transferTestData = [
  {
    level: 1,
    title: "CẤP ĐỘ 1: NHẬN BIẾT (RECALL & IDENTIFICATION)",
    goal: "Nhận diện chính xác Hán tự, Pinyin, Hán-Việt và Nghĩa tiếng Việt của các thành tố ngôn ngữ cốt lõi.",
    questions: [
      {
        id: "1.1",
        title: "Câu 1.1",
        content: "Từ chữ Hán nào dưới đây đại diện cho đại từ xưng hô tôn kính (\"Ngài / Thầy / Cô / Ông / Bà\")?",
        options: [
          { label: "A", text: "你 (nǐ - Nhĩ - Bạn / Anh / Chị)", isCorrect: false },
          { label: "B", text: "您 (nín - Nhẫn - Ngài / Thầy / Cô - tôn kính)", isCorrect: true },
          { label: "C", text: "们 (men - Môn - Các / Hậu tố số nhiều)", isCorrect: false },
          { label: "D", text: "好 (hǎo - Hảo - Tốt / Khỏe)", isCorrect: false }
        ],
        explanation: "您 (nín - Nhẫn - Ngài / Thầy / Cô) là đại từ xưng hô tôn kính dùng cho cấp trên, thầy cô hoặc đối tác. 你 (nǐ - Nhĩ - Bạn) dùng cho đối tượng ngang hàng."
      },
      {
        id: "1.2",
        title: "Câu 1.2",
        content: "Từ 大家 có Pinyin, Hán-Việt và Nghĩa tiếng Việt chính xác là gì?",
        options: [
          { label: "A", text: "大家 (dàjiā - Đại gia - Mọi người / Tất cả mọi người)", isCorrect: true },
          { label: "B", text: "学生 (xuéshēng - Học sinh - Học sinh / Sinh viên)", isCorrect: false },
          { label: "C", text: "同学 (tóngxué - Đồng học - Bạn học)", isCorrect: false },
          { label: "D", text: "老师 (lǎoshī - Lão sư - Giáo viên / Thầy cô)", isCorrect: false }
        ],
        explanation: "大家 (dàjiā - Đại gia - Mọi người / Tất cả mọi người) là đại từ tập thể chỉ toàn bộ những người có mặt trong ngữ cảnh giao tiếp."
      },
      {
        id: "1.3",
        title: "Câu 1.3",
        content: "Cụm từ chữ Hán 不客气 được phiên âm Pinyin, Hán-Việt và giải nghĩa tiếng Việt là gì?",
        options: [
          { label: "A", text: "再见 (zàijiàn - Tái kiến - Tạm biệt / Hẹn gặp lại)", isCorrect: false },
          { label: "B", text: "谢谢 (xièxie - Tạ tạ - Cảm ơn)", isCorrect: false },
          { label: "C", text: "你好 (nǐ hǎo - Nhĩ hảo - Xin chào)", isCorrect: false },
          { label: "D", text: "不客气 (bú kèqi - Bất khách khí - Không có gì / Đừng khách khí)", isCorrect: true }
        ],
        explanation: "不客气 (bú kèqi - Bất khách khí - Không có gì / Đừng khách khí) là đáp lời lịch sự chuẩn xác khi nhận được lời cảm ơn 谢谢 (xièxie)."
      }
    ]
  },
  {
    level: 2,
    title: "CẤP ĐỘ 2: THÔNG HIỂU (COMPREHENSION & STRUCTURAL LOGIC)",
    goal: "Thông hiểu sắc thái văn hóa giao tiếp và logic vị trí của các cấu trúc ngữ pháp khép kín.",
    questions: [
      {
        id: "2.1",
        title: "Câu 2.1",
        content: "Khi gặp Tổng giám đốc đối tác 王老师 (Wáng lǎoshī - Vương lão sư) tại sảnh công ty, câu chào nào dưới đây thể hiện đúng sắc thái kính ngữ lịch sự?",
        options: [
          { label: "A", text: "你好", isCorrect: false },
          { label: "B", text: "王老师，您好！ (Wáng lǎoshī, nín hǎo! - Vương lão sư, Nhẫn hảo! - Chào thầy/cô Vương!)", isCorrect: true },
          { label: "C", text: "大家好", isCorrect: false },
          { label: "D", text: "再见 (zàijiàn - Tái kiến - Tạm biệt)", isCorrect: false }
        ],
        explanation: "Câu chào kính ngữ trang trọng kết hợp [Danh từ/Chức danh] + 您好 → 王老师，您好！ (Wáng lǎoshī, nín hǎo!)."
      },
      {
        id: "2.2",
        title: "Câu 2.2",
        content: "Cấu trúc nào dưới đây biểu đạt đúng vị trí ngữ pháp của hậu tố chỉ số nhiều 们 (men - Môn - Các)?",
        options: [
          { label: "A", text: "们同学 (men tóngxué)", isCorrect: false },
          { label: "B", text: "同学们 (tóngxuémen - Đồng học môn - Các bạn học)", isCorrect: true },
          { label: "C", text: "们你们 (men nǐmen)", isCorrect: false },
          { label: "D", text: "好们 (hǎo men)", isCorrect: false }
        ],
        explanation: "Theo quy tắc ngữ pháp phẳng [Danh từ / Đại từ chỉ người] + 们, hậu tố 们 (men) bắt buộc đứng sau danh từ chỉ người 同学 (tóngxué - Bạn học) → 同学们 (tóngxuémen - Các bạn học)."
      },
      {
        id: "2.3",
        title: "Câu 2.3",
        content: "Khi kết thúc buổi làm việc và ra về, phát ngôn nào dưới đây thể hiện hành vi chào tạm biệt văn minh?",
        options: [
          { label: "A", text: "谢谢 (xièxie - Tạ tạ - Cảm ơn)", isCorrect: false },
          { label: "B", text: "不客气", isCorrect: false },
          { label: "C", text: "再见 (zàijiàn - Tái kiến - Tạm biệt / Hẹn gặp lại)", isCorrect: true },
          { label: "D", text: "您好 (nín hǎo - Nhẫn hảo - Xin chào ngài)", isCorrect: false }
        ],
        explanation: "再见 (zàijiàn - Tái kiến - Tạm biệt) là thuật ngữ khép lại cuộc giao tiếp."
      }
    ]
  },
  {
    level: 3,
    title: "CẤP ĐỘ 3: VẬN DỤNG (APPLICATION & CONTEXTUALIZING)",
    goal: "Vận dụng linh hoạt các cấu trúc ngữ pháp để hoàn thành đoạn thoại và sắp xếp tiến trình giao tiếp.",
    questions: [
      {
        id: "3.1",
        title: "Câu 3.1",
        content: "Hãy chọn cụm từ thích hợp điền vào chỗ trống để hoàn thành thoại kính ngữ 1-1:\n\nNhân sự A: 王老师，___！\nGiám đốc B: 你好！",
        options: [
          { label: "A", text: "你好", isCorrect: false },
          { label: "B", text: "您好", isCorrect: true },
          { label: "C", text: "大家好", isCorrect: false },
          { label: "D", text: "同学们好", isCorrect: false }
        ],
        explanation: "Điền 您好 (nín hǎo) để đảm bảo sắc thái tôn kính đối với cấp trên 王老师 (Wáng lǎoshī)."
      },
      {
        id: "3.2",
        title: "Câu 3.2",
        content: "Hãy chọn từ thích hợp điền vào chỗ trống để chào toàn thể bạn học / đồng nghiệp trước khi bắt đầu bài thuyết trình:\n\nNgười nói: ___好！",
        options: [
          { label: "A", text: "大家", isCorrect: true },
          { label: "B", text: "您", isCorrect: false },
          { label: "C", text: "王", isCorrect: false },
          { label: "D", text: "不客气", isCorrect: false }
        ],
        explanation: "Điền 大家 (dàjiā) để tạo thành 大家好！ (dàjiā hǎo! - Chào mọi người!), biểu đạt lời chào tập thể."
      },
      {
        id: "3.3",
        title: "Câu 3.3",
        content: "Hãy sắp xếp 4 phát ngôn sau thành chuỗi giao tiếp 3 bước (Chào hỏi → Cảm ơn & Đáp lời → Tạm biệt) hoàn chỉnh:\n\n(1) 再见！\n(2) 王老师，您好！\n(3) 不客气！\n(4) 谢谢王老师！",
        options: [
          { label: "A", text: "(2) → (4) → (3) → (1)", isCorrect: true },
          { label: "B", text: "(1) → (2) → (3) → (4)", isCorrect: false },
          { label: "C", text: "(4) → (3) → (2) → (1)", isCorrect: false },
          { label: "D", text: "(2) → (1) → (4) → (3)", isCorrect: false }
        ],
        explanation: "Sắp xếp chuẩn tiến trình: (2) Chào hỏi → (4) Cảm ơn → (3) Đáp lời cảm ơn → (1) Tạm biệt."
      }
    ]
  },
  {
    level: 4,
    title: "CẤP ĐỘ 4: THÀNH THỤC (MASTERY & REAL-WORLD PROBLEM SOLVING)",
    goal: "Phân tích lỗi sai RCA (Root Cause Analysis) và giải quyết các tình huống thực chiến doanh nghiệp.",
    isEssay: true,
    questions: [
      {
        id: "4.1",
        title: "Câu 4.1",
        content: "Tình huống: Học viên A chào cấp trên: 王老师，你好！ (Wáng lǎoshī, nǐ hǎo!).\nYêu cầu: Phân tích lỗi sai, chỉ ra nguyên nhân gốc rễ (RCA) và đưa ra phương án sửa.",
        answerTitle: "BÁO CÁO RCA:",
        answerContent: "**Lỗi sai**: Dùng đại từ thân mật 你 (nǐ) thay vì kính ngữ 您 (nín) với đối tượng là cấp trên 王老师.\n**Root Cause**: Học viên bị thói quen phản xạ câu chào chung 你好, thiếu tư duy phân cấp đối tượng giao tiếp.\n**Phương án sửa**: Thay 你 bằng 您 → 王老师，您好！ (Wáng lǎoshī, nín hǎo! - Vương lão sư, Nhẫn hảo! - Chào thầy/cô Vương!)."
      },
      {
        id: "4.2",
        title: "Câu 4.2",
        content: "Tình huống: Học viên B bắt đầu cuộc họp team bằng phát ngôn: 们同学，你好！ (men tóngxué, nǐ hǎo!).\nYêu cầu: Phân tích lỗi sai RCA và đưa ra câu sửa chuẩn xác.",
        answerTitle: "BÁO CÁO RCA:",
        answerContent: "**Lỗi sai**: Đặt sai vị trí hậu tố 们 (men) lên trước danh từ và dùng câu chào cá nhân 你好 cho tập thể.\n**Root Cause**: Nhầm lẫn quy tắc hậu tố chỉ số nhiều (nghĩ 们 đứng trước như từ \"các\" trong tiếng Việt).\n**Phương án sửa**: Chuyển 们 ra sau danh từ và dùng từ chào tập thể → 同学们好！ (tóngxuémen hǎo! - Đồng học môn hảo! - Chào các bạn học!) hoặc 大家好！ (dàjiā hǎo!)."
      },
      {
        id: "4.3",
        title: "Câu 4.3",
        content: "Tình huống: Bạn là Nhân sự Xuất nhập khẩu bàn giao xong chứng từ cho nhóm đối tác 你们 (nǐmen - Các bạn). Hãy xây dựng kịch bản thoại 3 bước hoàn chỉnh chuẩn 100% Closed Lexicon.",
        answerTitle: "KỊCH BẢN GIẢI QUYẾT TÌNH HUỐNG THỰC CHÍNH:",
        answerContent: "**Bước 1 (Chào hỏi & Bàn giao)**:\nNhân sự XNK: 你们好！ (nǐmen hǎo! - Nhĩ môn hảo! - Chào các bạn!)\n\n**Bước 2 (Cảm ơn & Đáp lời)**:\nNhân sự XNK: 谢谢你们！ (xièxie nǐmen! - Tạ tạ nhĩ môn! - Cảm ơn các bạn!)\nĐội ngũ đối tác: 不客气！ (bú kèqi! - Bất khách khí! - Không có gì / Đừng khách khí!)\n\n**Bước 3 (Tạm biệt)**:\nNhân sự XNK & Đối tác: 再见！ (zàijiàn! - Tái kiến! - Tạm biệt / Hẹn gặp lại!)"
      }
    ]
  }
];
