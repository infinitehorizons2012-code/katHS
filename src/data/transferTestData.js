export const transferTestData = {
  "hsk1-lesson1": [
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
          { label: "A", text: "你", isCorrect: false },
          { label: "B", text: "您", isCorrect: true },
          { label: "C", text: "们", isCorrect: false },
          { label: "D", text: "好", isCorrect: false }
        ],
        explanation: "您 (nín - Nhẫn - Ngài / Thầy / Cô) là đại từ xưng hô tôn kính dùng cho cấp trên, thầy cô hoặc đối tác. 你 (nǐ - Nhĩ - Bạn) dùng cho đối tượng ngang hàng."
      },
      {
        id: "1.2",
        title: "Câu 1.2",
        content: "Từ 大家 có Pinyin, Hán-Việt và Nghĩa tiếng Việt chính xác là gì?",
        options: [
          { label: "A", text: "dàjiā - Đại gia - Mọi người / Tất cả mọi người", isCorrect: true },
          { label: "B", text: "xuéshēng - Học sinh - Học sinh / Sinh viên", isCorrect: false },
          { label: "C", text: "tóngxué - Đồng học - Bạn học", isCorrect: false },
          { label: "D", text: "lǎoshī - Lão sư - Giáo viên / Thầy cô", isCorrect: false }
        ],
        explanation: "dàjiā - Đại gia - Mọi người / Tất cả mọi người là đại từ tập thể chỉ toàn bộ những người có mặt trong ngữ cảnh giao tiếp."
      },
      {
        id: "1.3",
        title: "Câu 1.3",
        content: "Cụm từ chữ Hán 不客气 được phiên âm Pinyin, Hán-Việt và giải nghĩa tiếng Việt là gì?",
        options: [
          { label: "A", text: "zàijiàn - Tái kiến - Tạm biệt / Hẹn gặp lại", isCorrect: false },
          { label: "B", text: "xièxie - Tạ tạ - Cảm ơn", isCorrect: false },
          { label: "C", text: "nǐ hǎo - Nhĩ hảo - Xin chào", isCorrect: false },
          { label: "D", text: "bú kèqi - Bất khách khí - Không có gì / Đừng khách khí", isCorrect: true }
        ],
        explanation: "bú kèqi - Bất khách khí - Không có gì / Đừng khách khí là đáp lời lịch sự chuẩn xác khi nhận được lời cảm ơn 谢谢 (xièxie)."
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
        content: "Khi gặp Tổng giám đốc đối tác 王老师 tại sảnh công ty, câu chào nào dưới đây thể hiện đúng sắc thái kính ngữ lịch sự?",
        options: [
          { label: "A", text: "你好", isCorrect: false },
          { label: "B", text: "王老师，您好！", isCorrect: true },
          { label: "C", text: "大家好", isCorrect: false },
          { label: "D", text: "再见", isCorrect: false }
        ],
        explanation: "Câu chào kính ngữ trang trọng kết hợp [Danh từ/Chức danh] + 您好 → 王老师，您好！ (Wáng lǎoshī, nín hǎo!)."
      },
      {
        id: "2.2",
        title: "Câu 2.2",
        content: "Cấu trúc nào dưới đây biểu đạt đúng vị trí ngữ pháp của hậu tố chỉ số nhiều 们?",
        options: [
          { label: "A", text: "们同学", isCorrect: false },
          { label: "B", text: "同学们", isCorrect: true },
          { label: "C", text: "们你们", isCorrect: false },
          { label: "D", text: "好们", isCorrect: false }
        ],
        explanation: "Theo quy tắc ngữ pháp phẳng [Danh từ / Đại từ chỉ người] + 们, hậu tố 们 (men) bắt buộc đứng sau danh từ chỉ người 同学 (tóngxué - Bạn học) → 同学们 (tóngxuémen - Các bạn học)."
      },
      {
        id: "2.3",
        title: "Câu 2.3",
        content: "Khi kết thúc buổi làm việc và ra về, phát ngôn nào dưới đây thể hiện hành vi chào tạm biệt văn minh?",
        options: [
          { label: "A", text: "谢谢", isCorrect: false },
          { label: "B", text: "不客气", isCorrect: false },
          { label: "C", text: "再见", isCorrect: true },
          { label: "D", text: "您好", isCorrect: false }
        ],
        explanation: "再见 là thuật ngữ khép lại cuộc giao tiếp."
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
        answerContent: "**Lỗi sai**: Dùng đại từ thân mật 你 (nǐ) thay vì kính ngữ 您 (nín) với đối tượng là cấp trên 王老师.\n**Root Cause**: Học viên bị thói quen phản xạ câu chào chung 你好, thiếu tư duy phân cấp đối tượng giao tiếp.\n**Phương án sửa**: Thay 你 bằng 您 → 王老师，您好！."
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
  ],
  "hsk1-lesson2": [
    {
      level: 1,
      title: "CẤP ĐỘ 1: NHẬN BIẾT (RECALL & IDENTIFICATION)",
      goal: "Nhận diện chính xác Hán tự, Pinyin, Hán-Việt và Nghĩa tiếng Việt của các thành tố ngôn ngữ cốt lõi.",
      questions: [
        {
          id: "1.1",
          title: "Câu 1.1",
          content: "Từ chữ Hán nào dưới đây đại diện cho đại từ nghi vấn mang nghĩa 'Cái gì'?",
          options: [
            { label: "A", text: "名字", isCorrect: false },
            { label: "B", text: "什么", "isCorrect": true },
            { label: "C", text: "叫", isCorrect: false },
            { label: "D", text: "请问", isCorrect: false }
          ],
          explanation: "什么 (shénme - Thập ma - Cái gì) là đại từ nghi vấn dùng trong câu hỏi tên 你叫什么名字？."
        },
        {
          id: "1.2",
          title: "Câu 1.2",
          content: "Cụm từ chữ Hán 对不起 có Pinyin, Hán-Việt và Nghĩa tiếng Việt chính xác là gì?",
          options: [
            { label: "A", text: "méi guānxi - Một quan hệ - Không sao", isCorrect: false },
            { label: "B", text: "bú kèqi - Bất khách khí - Không có gì", isCorrect: false },
            { label: "C", text: "duìbuqǐ - Đối bất khởi - Xin lỗi", "isCorrect": true },
            { label: "D", text: "zàijiàn - Tái kiến - Tạm biệt", isCorrect: false }
          ],
          explanation: "对不起 (duìbuqǐ - Đối bất khởi - Xin lỗi) là cụm từ xin lỗi lịch sự chuẩn văn hóa."
        },
        {
          id: "1.3",
          title: "Câu 1.3",
          content: "Từ chữ Hán 高兴 được phiên âm Pinyin, Hán-Việt và giải nghĩa tiếng Việt là gì?",
          options: [
            { label: "A", text: "rènshi - Nhận thức - Quen biết / Nhận biết", isCorrect: false },
            { label: "B", text: "gāoxìng - Cao hưng - Vui mừng / Phấn khởi", "isCorrect": true },
            { label: "C", text: "hěn - Hấn - Rất", isCorrect: false },
            { label: "D", text: "yě - Dã - Cũng", isCorrect: false }
          ],
          explanation: "高兴 (gāoxìng - Cao hưng - Vui mừng / Phấn khởi) là tính từ biểu thị cảm xúc vui vẻ khi gặp gỡ."
        }
      ]
    },
    {
      level: 2,
      title: "CẤP ĐỘ 2: THÔNG HIỂU (COMPREHENSION & STRUCTURAL LOGIC)",
      goal: "Thông hiểu trật tự từ ngữ pháp và logic phản xạ các cặp thoại giao tiếp.",
      questions: [
        {
          id: "2.1",
          title: "Câu 2.1",
          content: "Cấu trúc câu hỏi tên nào dưới đây biểu đạt đúng trật tự từ trong tiếng Trung?",
          options: [
            { label: "A", text: "你叫名字什么？", isCorrect: false },
            { label: "B", text: "请问，你叫什么名字？", "isCorrect": true },
            { label: "C", text: "什么名字叫你？", isCorrect: false },
            { label: "D", text: "你名字叫什么请问？", isCorrect: false }
          ],
          explanation: "Trật tự từ chuẩn câu hỏi tên: [Lời mời lịch sự 请问] + [Chủ ngữ 你] + [Động từ 叫] + [Đại từ nghi vấn 什么] + [Danh từ 名字]？."
        },
        {
          id: "2.2",
          title: "Câu 2.2",
          content: "Khi một đồng nghiệp va chạm nhẹ và thốt lên 对不起！ (duìbuqǐ! - Xin lỗi!), phản xạ đáp lời nào dưới đây là chuẩn xác nhất?",
          options: [
            { label: "A", text: "不客气", isCorrect: false },
            { label: "B", text: "没关系", "isCorrect": true },
            { label: "C", text: "再见", isCorrect: false },
            { label: "D", text: "你好", isCorrect: false }
          ],
          explanation: "Lời xin lỗi 对不起 (duìbuqǐ) đi cặp với lời đáp tỏ ý không bận tâm 没关系 (méi guānxi) hoặc 没事 (méishì). (不客气 dùng đáp lại 谢谢)."
        },
        {
          id: "2.3",
          title: "Câu 2.3",
          content: "Trong câu bày tỏ niềm vui khi quen biết 很高兴认识你！ (Hěn gāoxìng rènshi nǐ!), từ 认识 đóng vai trò gì và mang nghĩa gì?",
          options: [
            { label: "A", text: "Tính từ - Vui mừng", isCorrect: false },
            { label: "B", text: "Phó từ - Rất", isCorrect: false },
            { label: "C", text: "Động từ - Quen biết / Nhận biết", "isCorrect": true },
            { label: "D", text: "Đại từ - Bạn", isCorrect: false }
          ],
          explanation: "认识 (rènshi - Nhận thức) là động từ mang nghĩa quen biết / làm quen với ai đó."
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
          content: "Hãy chọn cặp từ thích hợp điền vào chỗ trống (1) và (2) để hoàn thành đoạn thoại làm quen:\nĐối tác A: 请问，你叫___(1)___名字？\nBạn B: ___(2)___叫李文。",
          options: [
            { label: "A", text: "(1) 什么 / (2) 我", "isCorrect": true },
            { label: "B", text: "(1) 我 / (2) 什么", isCorrect: false },
            { label: "C", text: "(1) 是 / (2) 不", isCorrect: false },
            { label: "D", text: "(1) 您 / (2) 叫", isCorrect: false }
          ],
          explanation: "Chỗ trống (1) điền đại từ nghi vấn 什么 (shénme), chỗ trống (2) điền đại từ nhân xưng 我 (wǒ) → 我叫李文 (Tôi tên là Lý Văn)."
        },
        {
          id: "3.2",
          title: "Câu 3.2",
          content: "Hãy chọn từ thích hợp điền vào chỗ trống để tạo câu phủ định danh tính:\nA: 你是老师吗？\nB: 我___是老师，我是学生。",
          options: [
            { label: "A", text: "很 (hěn - Rất)", isCorrect: false },
            { label: "B", text: "也 (yě - Cũng)", isCorrect: false },
            { label: "C", text: "不 (bù - Không)", "isCorrect": true },
            { label: "D", text: "好 (hǎo - Tốt)", isCorrect: false }
          ],
          explanation: "Điền phó từ phủ định 不 (bù) đứng trước 是 (shì) để tạo thành 不是 (bú shì - không phải là)."
        },
        {
          id: "3.3",
          title: "Câu 3.3",
          content: "Hãy chọn câu đáp lời chuẩn xác nhất của người B khi người A nói câu xã giao lần đầu gặp mặt:\nNgười A: 很高兴认识你！\nNgười B: ___！",
          options: [
            { label: "A", text: "我不高兴！", isCorrect: false },
            { label: "B", text: "我也很高兴认识你！", "isCorrect": true },
            { label: "C", text: "对不起，没关系！", isCorrect: false },
            { label: "D", text: "你叫什么名字？", isCorrect: false }
          ],
          explanation: "Người B dùng phó từ 也 (yě - cũng) đứng trước 很高兴 để thể hiện sự đồng điệu cảm xúc 我也很高兴认识你！."
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
          content: "Tình huống: Học viên A giới thiệu bản thân bằng câu: 我的名字是叫李文。 (Wǒ de míngzi shì jiào Lǐ Wén.).\nYêu cầu: Phân tích lỗi sai, chỉ ra nguyên nhân gốc rễ (RCA) và đưa ra phương án sửa chuẩn gọn nhất.",
          answerTitle: "BÁO CÁO RCA:",
          answerContent: "**Lỗi sai**: Dùng thừa động từ 是 (shì) đi liền với động từ 叫 (jiào) làm câu bị rườm rà.\n**Root Cause**: Học viên dịch thô từ tiếng Việt ('Tên của tôi là gọi là Lý Văn') hoặc nhầm lẫn cấu trúc 是 và 叫.\n**Phương án sửa**: Rút gọn về 1 trong 2 câu chuẩn: 我叫李文。 (Wǒ jiào Lǐ Wén. - Tôi tên là Lý Văn) hoặc 我的名字叫李文。 (Wǒ de míngzi jiào Lǐ Wén.)."
        },
        {
          id: "4.2",
          title: "Câu 4.2",
          content: "Tình huống: Trong một sự kiện giao thương, học viên B nhận nhầm đối tác và nói 对不起！ (duìbuqǐ!), đối tác mỉm cười đáp 不客气！ (bú kèqi!).\nYêu cầu: Phân tích lỗi giao tiếp RCA trong phản ứng của đối tác và đưa ra phản xạ đúng.",
          answerTitle: "BÁO CÁO RCA:",
          answerContent: "**Lỗi sai**: Dùng 不客气 (bú kèqi - Đừng khách khí) để đáp lại lời xin lỗi 对不起.\n**Root Cause**: Nhầm lẫn bẫy đối thoại giữa Cảm ơn (谢谢 → 不客气) và Xin lỗi (对不起 → 没关系).\n**Phương án sửa**: Thay 不客气 bằng 没关系 (méi guānxi - Không sao) hoặc 没事 (méishì - Không có gì)."
        },
        {
          id: "4.3",
          title: "Câu 4.3",
          content: "Tình huống: Bạn đại diện cho doanh nghiệp XNK đón tiếp đối tác mới 白家月 (Bái Jiāyuè). Hãy xây dựng kịch bản thoại 3 bước hoàn chỉnh bao gồm: Hỏi tên → Xác nhận & Xin lỗi nếu nhầm → Chào xã giao vui mừng quen biết chuẩn 100% Closed Lexicon.",
          answerTitle: "KỊCH BẢN GIẢI QUYẾT TÌNH HUỐNG THỰC CHÍNH:",
          answerContent: "**Bước 1 (Hỏi tên & Giới thiệu)**:\nNhân sự XNK: 您好！请问，您叫什么名字？ (Nín hǎo! Qǐngwèn, nín jiào shénme míngzi? - Chào ngài! Xin hỏi ngài tên là gì?)\nĐối tác: 你好！我叫白家月。 (Nǐ hǎo! Wǒ jiào Bái Jiāyuè. - Xin chào! Tôi tên là Bạch Gia Nguyệt.)\n\n**Bước 2 (Xác nhận & Xã giao quen biết)**:\nNhân sự XNK: 白老师，您好！我是学生。很高兴认识你！ (Bái lǎoshī, nín hǎo! Wǒ shì xuéshēng. Hěn gāoxìng rènshi nǐ! - Chào cô Bạch! Tôi là học sinh. Rất vui được quen biết cô!)\nĐối tác: 我也很高兴认识你！ (Wǒ yě hěn gāoxìng rènshi nǐ! - Tôi cũng rất vui được quen biết bạn!)\n\n**Bước 3 (Cảm ơn & Kết thúc giao tế)**:\nNhân sự XNK: 谢谢白老师！再见！ (Xièxie Bái lǎoshī! Zàijiàn! - Cảm ơn cô Bạch! Tạm biệt!)\nĐối tác: 再见！ (Zàijiàn! - Tạm biệt!)"
        }
      ]
    }
  ]
};
