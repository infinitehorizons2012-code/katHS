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
        type: "Đại từ",
        typeColor: "blue",
        meaning: "(số ít) anh, chị, bạn...",
        exampleHanzi: "你好！",
        examplePinyin: "Nǐ hǎo!",
        exampleMeaning: "Xin chào!"
      },
      {
        id: 2,
        hanzi: "好",
        pinyin: "hǎo",
        type: "Tính từ",
        typeColor: "purple",
        meaning: "khỏe, tốt",
        exampleHanzi: "好久不见",
        examplePinyin: "Hǎojiǔ bùjiàn",
        exampleMeaning: "Lâu rồi không gặp"
      },
      {
        id: 3,
        hanzi: "您",
        pinyin: "nín",
        type: "Đại từ",
        typeColor: "blue",
        meaning: "(lịch sự) ông, bà, ngài...",
        exampleHanzi: "您好！",
        examplePinyin: "Nín hǎo!",
        exampleMeaning: "Cháu chào ông/bà! (Kính trọng)"
      },
      {
        id: 4,
        hanzi: "你们",
        pinyin: "nǐmen",
        type: "Đại từ",
        typeColor: "blue",
        meaning: "(số nhiều) các anh, các chị, các bạn...",
        exampleHanzi: "你们好！",
        examplePinyin: "Nǐmen hǎo!",
        exampleMeaning: "Chào các bạn!"
      },
      {
        id: 5,
        hanzi: "对不起",
        pinyin: "duìbuqǐ",
        type: "Động từ",
        typeColor: "red",
        meaning: "xin lỗi",
        exampleHanzi: "对不起，我迟到了。",
        examplePinyin: "Duìbuqǐ, wǒ chídào le.",
        exampleMeaning: "Xin lỗi, tôi đến muộn rồi."
      },
      {
        id: 6,
        hanzi: "没关系",
        pinyin: "méi guānxi",
        type: "Cụm từ",
        typeColor: "gray",
        meaning: "không sao đâu, không có vấn đề gì đâu",
        exampleHanzi: "没关系，别客气。",
        examplePinyin: "Méi guānxi, bié kèqi.",
        exampleMeaning: "Không sao đâu, đừng khách khí."
      },
      {
        id: 7,
        hanzi: "上课!",
        pinyin: "Shàng kè!",
        type: "Cụm từ",
        typeColor: "gray",
        meaning: "Vào học đi!",
        exampleHanzi: "同学们，上课！",
        examplePinyin: "Tóngxuémen, shàngkè!",
        exampleMeaning: "Các em học sinh, vào học thôi!"
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
        title: "Bài khóa 2: Chào người lớn & Chào số nhiều",
        context: "Trong lớp học - Học sinh chào thầy giáo",
        lines: [
          { speaker: "Học sinh", hanzi: "您好！", pinyin: "Nín hǎo!", vietnamese: "Em chào thầy ạ!" },
          { speaker: "Thầy giáo", hanzi: "你们好！", pinyin: "Nǐmen hǎo!", vietnamese: "Chào các em!" }
        ]
      },
      {
        id: "d3",
        title: "Bài khóa 3: Xin lỗi và đáp lại",
        context: "Sân trường - Va chạm nhỏ khi đi lại",
        lines: [
          { speaker: "A", hanzi: "对不起！", pinyin: "Duìbuqǐ!", vietnamese: "Xin lỗi!" },
          { speaker: "B", hanzi: "没关系！", pinyin: "Méi guānxi!", vietnamese: "Không sao đâu!" }
        ]
      }
    ],
    grammar: [
      {
        id: "g1",
        title: "1. Đại từ xưng hô: 你 (nǐ) vs 您 (nín)",
        summary: "Sử dụng '您' để thể hiện sự tôn kính, lịch sự với người lớn tuổi, thầy cô hoặc cấp trên.",
        explanation: "Trong tiếng Trung, '你' (nǐ) dùng để xưng hô với bạn bè đồng lứa hoặc người nhỏ tuổi hơn. Khi cần thể hiện thái độ kính trọng với ông bà, thầy cô, khách hàng hoặc người lớn tuổi, chúng ta dùng '您' (nín).",
        examples: [
          { hanzi: "你好！", pinyin: "Nǐ hǎo!", vietnamese: "Chào bạn!" },
          { hanzi: "您好！", pinyin: "Nín hǎo!", vietnamese: "Chào ông/bà/thầy/cô ạ!" }
        ]
      },
      {
        id: "g2",
        title: "2. Hậu tố số nhiều 们 (men)",
        summary: "Thêm '们' vào sau đại từ hoặc danh từ chỉ người để tạo dạng số nhiều.",
        explanation: "Khi muốn diễn đạt số nhiều cho đại từ nhân xưng:",
        rules: [
          "你 (bạn) ➔ 你们 (các bạn)",
          "我 (tôi) ➔ 我们 (chúng tôi)",
          "他 (anh ấy) ➔ 他们 (các anh ấy)",
          "老师 (thầy cô) ➔ 老师们 (các thầy cô)"
        ],
        examples: [
          { hanzi: "你们好！", pinyin: "Nǐmen hǎo!", vietnamese: "Chào các bạn!" },
          { hanzi: "同学们好！", pinyin: "Tóngxuémen hǎo!", vietnamese: "Chào các em học sinh!" }
        ]
      },
      {
        id: "g3",
        title: "3. Cấu trúc Lời chào: [Đại từ / Tên] + 好!",
        summary: "Công thức chào hỏi phổ biến nhất trong tiếng Trung.",
        explanation: "Chỉ cần ghép đại từ xưng hô hoặc danh xưng + '好' để chào hỏi ai đó.",
        examples: [
          { hanzi: "王老师好！", pinyin: "Wáng lǎoshī hǎo!", vietnamese: "Em chào thầy Vương ạ!" },
          { hanzi: "大家好！", pinyin: "Dàjiā hǎo!", vietnamese: "Chào mọi người!" }
        ]
      },
      {
        id: "g4",
        title: "4. Cặp câu Xin lỗi - Đáp lại",
        summary: "Cách nói xin lỗi và đáp lại khi có lỗi nhẹ.",
        explanation: "Khi lỡ làm phiền ai đó:",
        rules: [
          "Người xin lỗi nói: 对不起！ (Duìbuqǐ!)",
          "Người đáp lại nói: 没关系！ (Méi guānxi!)"
        ],
        examples: [
          { hanzi: "A: 对不起！ B: 没关系！", pinyin: "A: Duìbuqǐ! B: Méi guānxi!", vietnamese: "A: Xin lỗi! B: Không sao đâu!" }
        ]
      }
    ],
    exercises: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Từ nào dùng để chào người lớn tuổi hoặc cấp trên một cách lịch sự, kính trọng?",
        options: [
          { id: "A", text: "你 (nǐ)" },
          { id: "B", text: "您 (nín)", isCorrect: true },
          { id: "C", text: "你们 (nǐmen)" },
          { id: "D", text: "对不起 (duìbuqǐ)" }
        ],
        explanation: "'您' (nín) là dạng kính ngữ của '你' (nǐ), dùng cho người lớn tuổi hoặc người cần tôn kính."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Khi đối phương nói '对不起！' (Duìbuqǐ!), bạn nên đáp lại như thế nào?",
        options: [
          { id: "A", text: "你好！" },
          { id: "B", text: "没关系！", isCorrect: true },
          { id: "C", text: "上课！" },
          { id: "D", text: "再见！" }
        ],
        explanation: "'没关系！' (Méi guānxi!) nghĩa là 'Không sao đâu!', đáp lại lời xin lỗi."
      },
      {
        id: "q3",
        type: "pinyin-match",
        question: "Chọn Pinyin đúng cho từ '你们':",
        options: [
          { id: "A", text: "nín" },
          { id: "B", text: "nǐmen", isCorrect: true },
          { id: "C", text: "duìbuqǐ" },
          { id: "D", text: "hǎo" }
        ],
        explanation: "'你们' có pinyin là 'nǐmen' (nghĩa là các bạn, các anh/chị)."
      },
      {
        id: "q4",
        type: "fill-in-blank",
        question: "Hoàn thành đoạn hội thoại: A: 您好！ - B: ______好！ (Chào số nhiều các em)",
        correctAnswer: "你们",
        hint: "Đại từ chỉ 'các bạn / các em' (số nhiều)",
        explanation: "Thầy giáo chào lại các em học sinh bằng '你们好！'"
      }
    ]
  },
  {
    id: "hsk1-lesson2",
    level: "HSK 1",
    lessonNumber: 2,
    titleHanzi: "谢谢你！",
    titleVietnamese: "Cảm ơn bạn",
    description: "Học cách nói cảm ơn, đáp lại lời cảm ơn và câu tạm biệt trong giao tiếp.",
    vocabulary: [
      { id: 1, hanzi: "谢谢", pinyin: "xièxie", type: "Động từ", typeColor: "red", meaning: "cảm ơn", exampleHanzi: "谢谢你！", examplePinyin: "Xièxie nǐ!", exampleMeaning: "Cảm ơn bạn!" },
      { id: 2, hanzi: "不客气", pinyin: "bú kèqi", type: "Cụm từ", typeColor: "gray", meaning: "đừng khách khí, không có gì", exampleHanzi: "不客气！", examplePinyin: "Bú kèqi!", exampleMeaning: "Không có gì đâu!" },
      { id: 3, hanzi: "再见", pinyin: "zàijiàn", type: "Động từ", typeColor: "red", meaning: "tạm biệt", exampleHanzi: "明天再见！", examplePinyin: "Míngtiān zàijiàn!", exampleMeaning: "Ngày mai gặp lại!" },
      { id: 4, hanzi: "不", pinyin: "bù", type: "Phó từ", typeColor: "orange", meaning: "không (phủ định)", exampleHanzi: "不好", examplePinyin: "bù hǎo", exampleMeaning: "không tốt" }
    ],
    dialogues: [
      {
        id: "l2-d1",
        title: "Bài khóa 1: Nói lời cảm ơn",
        context: "Bạn giúp đỡ nhau",
        lines: [
          { speaker: "A", hanzi: "谢谢你！", pinyin: "Xièxie nǐ!", vietnamese: "Cảm ơn bạn!" },
          { speaker: "B", hanzi: "不客气！", pinyin: "Bú kèqi!", vietnamese: "Không có gì đâu!" }
        ]
      }
    ],
    grammar: [
      {
        id: "l2-g1",
        title: "1. Cặp câu Cảm ơn - Đáp lại",
        summary: "Cách nói cảm ơn và đáp lại sự biết ơn.",
        explanation: "Khi ai đó giúp đỡ bạn: A: 谢谢！ (Xièxie!) ➔ B: 不客气！ (Bú kèqi!)",
        examples: [{ hanzi: "A: 谢谢！ B: 不客气！", pinyin: "A: Xièxie! B: Bú kèqi!", vietnamese: "A: Cảm ơn! B: Không có gì!" }]
      }
    ],
    exercises: []
  }
];
