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
        meaning: "Bạn / Anh / Chị (ngôi thứ 2 số ít)",
        mnemonic: "người (亻) đứng bên cạnh bạn (尔); \"bạn, anh, chị\".",
        radicals: [{ hanzi: '亻', name: 'Nhân đứng' }, { hanzi: '尔', name: 'Nhĩ' }],
        exampleHanzi: "你好！",
        examplePinyin: "Nǐ hǎo!",
        exampleMeaning: "Xin chào bạn!"
      },
      {
        id: 2,
        hanzi: "好",
        pinyin: "hǎo",
        hanViet: "Hảo",
        type: "Tính từ",
        typeColor: "purple",
        meaning: "Tốt / An / Khỏe",
        mnemonic: "người phụ nữ (女) bế đứa con (子); hình ảnh \"tốt, đẹp, an lành\".",
        radicals: [{ hanzi: '女', name: 'Nữ' }, { hanzi: '子', name: 'Tử' }],
        exampleHanzi: "很好！",
        examplePinyin: "Hěn hǎo!",
        exampleMeaning: "Rất tốt!"
      },
      {
        id: 3,
        hanzi: "你好",
        pinyin: "nǐ hǎo",
        hanViet: "Nhĩ hảo",
        type: "Cụm từ",
        typeColor: "gray",
        meaning: "Xin chào",
        mnemonic: "lời chúc bạn (你) luôn tốt lành (好); câu chào xin chào.",
        radicals: [{ hanzi: '你', name: 'Nhĩ' }, { hanzi: '好', name: 'Hảo' }],
        exampleHanzi: "你好！",
        examplePinyin: "Nǐ hǎo!",
        exampleMeaning: "Xin chào!"
      },
      {
        id: 4,
        hanzi: "王",
        pinyin: "Wáng",
        hanViet: "Vương",
        type: "Danh từ",
        typeColor: "green",
        meaning: "Họ Vương",
        mnemonic: "ba nét ngang đại diện Trời-Đất-Người, nét sổ (丨) nối liền lại; vị \"vua, vương\".",
        radicals: [{ hanzi: '三', name: 'Tam' }, { hanzi: '丨', name: 'Sổ' }],
        exampleHanzi: "王老师",
        examplePinyin: "Wáng lǎoshī",
        exampleMeaning: "Thầy/Cô giáo Vương"
      },
      {
        id: 5,
        hanzi: "老师",
        pinyin: "lǎoshī",
        hanViet: "Lão sư",
        type: "Danh từ",
        typeColor: "green",
        meaning: "Giáo viên / Thầy cô giáo",
        mnemonic: "người già dặn kinh nghiệm (老) truyền dạy tri thức (师); \"thầy cô giáo\".",
        radicals: [{ hanzi: '老', name: 'Lão' }, { hanzi: '师', name: 'Sư' }],
        exampleHanzi: "王老师好！",
        examplePinyin: "Wáng lǎoshī hǎo!",
        exampleMeaning: "Em chào thầy/cô Vương ạ!"
      },
      {
        id: 6,
        hanzi: "王老师",
        pinyin: "Wáng lǎoshī",
        hanViet: "Vương lão sư",
        type: "Danh từ",
        typeColor: "green",
        meaning: "Thầy/Cô giáo Vương",
        mnemonic: "thầy/cô giáo (老师) họ Vương (王); quy tắc xưng hô lịch sự đặt họ trước chức danh.",
        radicals: [{ hanzi: '王', name: 'Vương' }, { hanzi: '老', name: 'Lão' }, { hanzi: '师', name: 'Sư' }],
        exampleHanzi: "王老师，您好！",
        examplePinyin: "Wáng lǎoshī, nín hǎo!",
        exampleMeaning: "Chào thầy Vương ạ!"
      },
      {
        id: 7,
        hanzi: "大家",
        pinyin: "dàjiā",
        hanViet: "Đại gia",
        type: "Đại từ",
        typeColor: "blue",
        meaning: "Mọi người / Tất cả mọi người",
        mnemonic: "mái nhà chung lớn (大 + 家); \"mọi người, tất cả mọi người\".",
        radicals: [{ hanzi: '大', name: 'Đại' }, { hanzi: '家', name: 'Gia' }],
        exampleHanzi: "大家好！",
        examplePinyin: "Dàjiā hǎo!",
        exampleMeaning: "Chào mọi người!"
      },
      {
        id: 8,
        hanzi: "学生",
        pinyin: "xuéshēng",
        hanViet: "Học sinh",
        type: "Danh từ",
        typeColor: "green",
        meaning: "Học sinh / Sinh viên",
        mnemonic: "mầm sống (生) vươn lên qua con đường học tập (学); \"học sinh, sinh viên\".",
        radicals: [{ hanzi: '学', name: 'Học' }, { hanzi: '生', name: 'Sinh' }],
        exampleHanzi: "我是学生。",
        examplePinyin: "Wǒ shì xuéshēng.",
        exampleMeaning: "Tôi là học sinh."
      },
      {
        id: 9,
        hanzi: "们",
        pinyin: "men",
        hanViet: "Môn",
        type: "Trợ từ",
        typeColor: "orange",
        meaning: "Các / Hậu tố số nhiều chỉ người",
        mnemonic: "nhiều người (亻) cùng bước qua một cửa (门); biến \"tôi, anh\" thành \"chúng tôi, các anh\".",
        radicals: [{ hanzi: '亻', name: 'Nhân đứng' }, { hanzi: '门', name: 'Môn' }],
        exampleHanzi: "同学们",
        examplePinyin: "Tóngxuémen",
        exampleMeaning: "Các bạn học"
      },
      {
        id: 10,
        hanzi: "您",
        pinyin: "nín",
        hanViet: "Nhẫn",
        type: "Đại từ",
        typeColor: "blue",
        meaning: "Ngài / Ông / Bà / Thầy / Cô (tôn kính)",
        mnemonic: "đặt trái tim (心) kính trọng phía dưới bạn (你); lời chào kính trọng \"ngài, ông, bà, thầy, cô\".",
        radicals: [{ hanzi: '你', name: 'Nhĩ' }, { hanzi: '心', name: 'Tâm' }],
        exampleHanzi: "您好！",
        examplePinyin: "Nín hǎo!",
        exampleMeaning: "Kính chào ông/bà/thầy/cô!"
      },
      {
        id: 11,
        hanzi: "你们",
        pinyin: "nǐmen",
        hanViet: "Nhĩ môn",
        type: "Đại từ",
        typeColor: "blue",
        meaning: "Các bạn",
        mnemonic: "kết hợp bạn (你) và số nhiều (们); \"các bạn\".",
        radicals: [{ hanzi: '你', name: 'Nhĩ' }, { hanzi: '们', name: 'Môn' }],
        exampleHanzi: "你们好！",
        examplePinyin: "Nǐmen hǎo!",
        exampleMeaning: "Chào các bạn!"
      },
      {
        id: 12,
        hanzi: "谢谢",
        pinyin: "xièxie",
        hanViet: "Tạ tạ",
        type: "Động từ",
        typeColor: "red",
        meaning: "Cảm ơn",
        mnemonic: "dùng lời nói (言) chân thành từ tấc lòng (寸) cúi gập thân mình (身); \"cảm ơn\".",
        radicals: [{ hanzi: '言', name: 'Ngôn' }, { hanzi: '身', name: 'Thân' }, { hanzi: '寸', name: 'Thốn' }],
        exampleHanzi: "谢谢你！",
        examplePinyin: "Xièxie nǐ!",
        exampleMeaning: "Cảm ơn bạn!"
      },
      {
        id: 13,
        hanzi: "不客气",
        pinyin: "bú kèqi",
        hanViet: "Bất khách khí",
        type: "Cụm từ",
        typeColor: "gray",
        meaning: "Không có gì / Đừng khách khí",
        mnemonic: "không (不) cần tỏ thái độ (气) xa lạ như người khách (客); \"không có gì, đừng khách khí\".",
        radicals: [{ hanzi: '不', name: 'Bất' }, { hanzi: '客', name: 'Khách' }, { hanzi: '气', name: 'Khí' }],
        exampleHanzi: "不客气！",
        examplePinyin: "Bú kèqi!",
        exampleMeaning: "Không có gì đâu!"
      },
      {
        id: 14,
        hanzi: "同学",
        pinyin: "tóngxué",
        hanViet: "Đồng học",
        type: "Danh từ",
        typeColor: "green",
        meaning: "Bạn học",
        mnemonic: "những người cùng nhau (同) học tập (学); \"bạn học, bạn cùng lớp\".",
        radicals: [{ hanzi: '同', name: 'Đồng' }, { hanzi: '学', name: 'Học' }],
        exampleHanzi: "同学们好！",
        examplePinyin: "Tóngxuémen hǎo!",
        exampleMeaning: "Chào các em học sinh!"
      },
      {
        id: 15,
        hanzi: "再见",
        pinyin: "zàijiàn",
        hanViet: "Tái kiến",
        type: "Động từ",
        typeColor: "red",
        meaning: "Tạm biệt / Hẹn gặp lại",
        mnemonic: "hẹn lặp lại lần nữa (再) để gặp mặt (见); \"tạm biệt, hẹn gặp lại\".",
        radicals: [{ hanzi: '再', name: 'Tái' }, { hanzi: '见', name: 'Kiến' }],
        exampleHanzi: "明天再见！",
        examplePinyin: "Míngtiān zàijiàn!",
        exampleMeaning: "Ngày mai gặp lại!"
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
