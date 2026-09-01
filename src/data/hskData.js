export const hskLessons = [
  {
    id: "hsk1-lesson1",
    level: "HSK 1",
    lessonNumber: 1,
    titleHanzi: "你好！",
    titleVietnamese: "Xin chào",
    description: "Học cách chào hỏi đơn giản, thể hiện sự lịch sự và đáp lại câu xin lỗi trong giao tiếp hàng ngày.",
    vocabulary: [
      {
        id: 1,
        hanzi: "你",
        pinyin: "nǐ",
        hanViet: "Nhĩ",
        type: "Đại từ",
        typeColor: "blue",
        meaning: "Bạn / Anh / Chị"
      },
      {
        id: 2,
        hanzi: "好",
        pinyin: "hǎo",
        hanViet: "Hảo",
        type: "Tính từ",
        typeColor: "purple",
        meaning: "Tốt / An / Khỏe"
      },
      {
        id: 3,
        hanzi: "你好",
        pinyin: "nǐ hǎo",
        hanViet: "Nhĩ hảo",
        type: "Cụm từ",
        typeColor: "gray",
        meaning: "Xin chào"
      },
      {
        id: 4,
        hanzi: "王",
        pinyin: "Wáng",
        hanViet: "Vương",
        type: "Danh từ",
        typeColor: "green",
        meaning: "Họ Vương"
      },
      {
        id: 5,
        hanzi: "老师",
        pinyin: "lǎoshī",
        hanViet: "Lão sư",
        type: "Danh từ",
        typeColor: "green",
        meaning: "Giáo viên / Thầy cô giáo"
      },
      {
        id: 6,
        hanzi: "王老师",
        pinyin: "Wáng lǎoshī",
        hanViet: "Vương lão sư",
        type: "Danh từ",
        typeColor: "green",
        meaning: "Thầy/Cô giáo Vương"
      },
      {
        id: 7,
        hanzi: "大家",
        pinyin: "dàjiā",
        hanViet: "Đại gia",
        type: "Đại từ",
        typeColor: "blue",
        meaning: "Mọi người / Tất cả mọi người"
      },
      {
        id: 8,
        hanzi: "学生",
        pinyin: "xuéshēng",
        hanViet: "Học sinh",
        type: "Danh từ",
        typeColor: "green",
        meaning: "Học sinh / Sinh viên"
      },
      {
        id: 9,
        hanzi: "们",
        pinyin: "men",
        hanViet: "Môn",
        type: "Trợ từ",
        typeColor: "orange",
        meaning: "Các / Hậu tố số nhiều chỉ người"
      },
      {
        id: 10,
        hanzi: "您",
        pinyin: "nín",
        hanViet: "Nhẫn",
        type: "Đại từ",
        typeColor: "blue",
        meaning: "Ngài / Ông / Bà / Thầy / Cô (tôn kính)"
      },
      {
        id: 11,
        hanzi: "你们",
        pinyin: "nǐmen",
        hanViet: "Nhĩ môn",
        type: "Đại từ",
        typeColor: "blue",
        meaning: "Các bạn"
      },
      {
        id: 12,
        hanzi: "谢谢",
        pinyin: "xièxie",
        hanViet: "Tạ tạ",
        type: "Động từ",
        typeColor: "red",
        meaning: "Cảm ơn"
      },
      {
        id: 13,
        hanzi: "不客气",
        pinyin: "bú kèqi",
        hanViet: "Bất khách khí",
        type: "Cụm từ",
        typeColor: "gray",
        meaning: "Không có gì / Đừng khách khí"
      },
      {
        id: 14,
        hanzi: "同学",
        pinyin: "tóngxué",
        hanViet: "Đồng học",
        type: "Danh từ",
        typeColor: "green",
        meaning: "Bạn học"
      },
      {
        id: 15,
        hanzi: "再见",
        pinyin: "zàijiàn",
        hanViet: "Tái kiến",
        type: "Động từ",
        typeColor: "red",
        meaning: "Tạm biệt / Hẹn gặp lại"
      }
    ],
    dialogues: [
      {
        id: "d1",
        title: "Bài khóa 1: Lời chào thông thường",
        context: "Trường học - Hai bạn học sinh gặp nhau",
        lines: [
          { speaker: "A (Li Na)", hanzi: "你好！", pinyin: "Nǐ hǎo!", vietnamese: "Xin chào!" },
          { speaker: "B (Wang Ming)", hanzi: "你好！", pinyin: "Nǐ hǎo!", vietnamese: "Xin chào!" }
        ]
      },
      {
        id: "d2",
        title: "Bài khóa 2: Chào thầy cô & Chào mọi người",
        context: "Trong lớp học - Học sinh chào thầy Vương",
        lines: [
          { speaker: "Học sinh", hanzi: "王老师，您好！", pinyin: "Wáng lǎoshī, nín hǎo!", vietnamese: "Em chào thầy Vương ạ!" },
          { speaker: "Thầy giáo", hanzi: "同学们好！ / 大家好！", pinyin: "Tóngxuémen hǎo! / Dàjiā hǎo!", vietnamese: "Chào các em / Chào mọi người!" }
        ]
      },
      {
        id: "d3",
        title: "Bài khóa 3: Cảm ơn và Tạm biệt",
        context: "Tan học - Giúp đỡ nhau",
        lines: [
          { speaker: "A", hanzi: "谢谢你！", pinyin: "Xièxie nǐ!", vietnamese: "Cảm ơn bạn!" },
          { speaker: "B", hanzi: "不客气！再见！", pinyin: "Bú kèqi! Zàijiàn!", vietnamese: "Không có gì! Tạm biệt!" }
        ]
      }
    ],
    grammar: [
      {
        id: "g1",
        title: "1. Đại từ xưng hô: 你 (nǐ) vs 您 (nín)",
        summary: "Sử dụng '您' để thể hiện sự tôn kính với thầy cô, người lớn.",
        explanation: "Trong tiếng Trung, '你' (nǐ - Nhĩ) dùng cho bạn bè đồng lứa. Khi chào thầy cô (王老师 - Vương lão sư) hoặc người lớn tuổi, dùng '您' (nín - Nhẫn) để thể hiện sự kính trọng.",
        examples: [
          { hanzi: "你好！", pinyin: "Nǐ hǎo!", vietnamese: "Chào bạn!" },
          { hanzi: "王老师，您好！", pinyin: "Wáng lǎoshī, nín hǎo!", vietnamese: "Em chào thầy Vương ạ!" }
        ]
      },
      {
        id: "g2",
        title: "2. Hậu tố số nhiều 们 (men)",
        summary: "Ghép vào sau đại từ hoặc danh từ chỉ người.",
        explanation: "Hậu tố '们' (men - Môn) dùng tạo số nhiều:",
        rules: [
          "你 (bạn) ➔ 你们 (các bạn)",
          "同学 (bạn học) ➔ 同学们 (các bạn học / các em học sinh)"
        ],
        examples: [
          { hanzi: "你们好！", pinyin: "Nǐmen hǎo!", vietnamese: "Chào các bạn!" },
          { hanzi: "同学们好！", pinyin: "Tóngxuémen hǎo!", vietnamese: "Chào các em học sinh!" }
        ]
      }
    ],
    exercises: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Từ nào mang âm Hán Việt là 'Lão sư', nghĩa là 'Giáo viên / Thầy cô'?",
        options: [
          { id: "A", text: "同学 (tóngxué)" },
          { id: "B", text: "老师 (lǎoshī)", isCorrect: true },
          { id: "C", text: "学生 (xuéshēng)" },
          { id: "D", text: "大家 (dàjiā)" }
        ],
        explanation: "'老师' (lǎoshī) nghĩa là Giáo viên / Thầy cô giáo."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Khi ai đó cảm ơn '谢谢' (xièxie), bạn đáp lại như thế nào?",
        options: [
          { id: "A", text: "你好！" },
          { id: "B", text: "不客气！", isCorrect: true },
          { id: "C", text: "再见！" },
          { id: "D", text: "您好！" }
        ],
        explanation: "'不客气' (bú kèqi - Bất khách khí) nghĩa là 'Không có gì / Đừng khách khí'."
      }
    ]
  }
];
