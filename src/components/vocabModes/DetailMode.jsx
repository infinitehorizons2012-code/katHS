import React, { useState, useEffect } from 'react';
import { Volume2, Lightbulb, Sparkles, BookOpen, Layers } from 'lucide-react';
import { speakChinese } from '../../utils/speech';
import HanziWriter from 'hanzi-writer';

export const DetailMode = ({ vocabulary = [], selectedWordId, onSelectWord }) => {
  const [activeId, setActiveId] = useState(selectedWordId || (vocabulary[0] ? vocabulary[0].id : 1));
  const writerRef = React.useRef(null);
  const containerRef = React.useRef(null);

  const currentWord = vocabulary.find(v => v.id === activeId) || vocabulary[0];

  useEffect(() => {
    if (!containerRef.current || !currentWord) return;

    containerRef.current.innerHTML = '';
    const cleanHanzi = currentWord.hanzi.replace(/[^\u4e00-\u9fa5]/g, '');
    const charToDraw = cleanHanzi.charAt(0) || currentWord.hanzi;

    try {
      const writer = HanziWriter.create(containerRef.current, charToDraw, {
        width: 140,
        height: 140,
        padding: 5,
        strokeAnimationSpeed: 1,
        delayBetweenStrokes: 150,
        strokeColor: '#1e293b',
        radicalColor: '#e53e3e',
        outlineColor: '#e2e8f0',
        showOutline: true
      });
      writerRef.current = writer;
      writer.animateCharacter();
    } catch (e) {
      console.error("HanziWriter init error:", e);
    }
  }, [activeId, currentWord]);

  if (!currentWord) return null;

  return (
    <div className="detail-mode-container">
      {/* Left Column: Word Selection List */}
      <div className="detail-sidebar-list">
        <div className="sidebar-header-text">
          <BookOpen size={16} /> 15 Từ Vựng HSK 1 Bài 1
        </div>
        <div className="sidebar-items-scroll">
          {vocabulary.map((item, index) => {
            const isSelected = item.id === currentWord.id;
            return (
              <button
                key={item.id}
                className={`detail-word-card ${isSelected ? 'active' : ''}`}
                onClick={() => {
                  setActiveId(item.id);
                  if (onSelectWord) onSelectWord(item.id);
                  speakChinese(item.hanzi);
                }}
              >
                <div className="word-card-left">
                  <span className="word-hanzi">{item.hanzi}</span>
                  <span className="word-pinyin">({item.pinyin})</span>
                </div>
                <div className="word-meaning-short">{item.meaning}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: Detailed Explanation & Mnemonic (Red Circled Section from User Screenshot) */}
      <div className="detail-main-content">
        {/* Header Card */}
        <div className="detail-header-row">
          <div className="detail-title-group">
            <h2 className="detail-hanzi">{currentWord.hanzi}</h2>
            <span className="detail-pinyin">({currentWord.pinyin})</span>
            {currentWord.hanViet && (
              <span className="detail-hanviet-badge">[{currentWord.hanViet}]</span>
            )}
            <span className="detail-type-badge">{currentWord.type}</span>
          </div>

          <button 
            className="btn-speech-big"
            onClick={() => speakChinese(currentWord.hanzi)}
          >
            <Volume2 size={20} /> Nghe Đọc Từ '{currentWord.hanzi}'
          </button>
        </div>

        {/* Meaning Box */}
        <div className="detail-section-box meaning-box">
          <div className="section-label">
            <Sparkles size={18} className="gold-icon" /> Nghĩa Tiếng Việt:
          </div>
          <div className="meaning-highlight-text">{currentWord.meaning}</div>
        </div>

        {/* Examples Section */}
        {currentWord.exampleHanzi && (
          <div className="detail-section-box example-box">
            <div className="section-label">📌 Ví dụ minh họa:</div>
            <div className="example-content-card">
              <div className="ex-text">
                <span className="ex-hz">{currentWord.exampleHanzi}</span>
                <span className="ex-py">({currentWord.examplePinyin})</span>
                <span className="ex-vi">– {currentWord.exampleMeaning}</span>
              </div>
              <button 
                className="btn-ex-speaker"
                onClick={() => speakChinese(currentWord.exampleHanzi)}
              >
                <Volume2 size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Stroke Order & Radicals Section */}
        <div className="detail-section-box radicals-box">
          <div className="section-label">
            <Layers size={18} className="blue-icon" /> Chiết tự & Tô màu nét bộ thủ cho từ "{currentWord.hanzi}":
          </div>
          <div className="stroke-flex-wrapper">
            <div className="hanzi-canvas-card">
              <div ref={containerRef} className="canvas-holder"></div>
              <span className="canvas-caption">Nét chữ '{currentWord.hanzi.charAt(0)}'</span>
            </div>

            {currentWord.radicals && currentWord.radicals.length > 0 && (
              <div className="radicals-list">
                <div className="radicals-title">Bộ thủ cấu thành:</div>
                <div className="radicals-badges">
                  {currentWord.radicals.map((rad, idx) => (
                    <span key={idx} className="radical-pill">
                      <strong className="rad-hz">{rad.hanzi}</strong> ({rad.name})
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mnemonic / Mẹo Nhớ Chiết Tự (Matching user screenshot) */}
        <div className="detail-section-box mnemonic-box">
          <div className="mnemonic-header">
            <Lightbulb size={20} className="bulb-green" />
            <span>Mẹo Nhớ Chiết Tự Sinh Động (Mnemonic):</span>
          </div>
          <p className="mnemonic-body-text">
            {currentWord.mnemonic || `Chữ '${currentWord.hanzi}' (${currentWord.hanViet} / ${currentWord.pinyin}): cấu thành từ các nét bộ thủ quen thuộc giúp bạn ghi nhớ sâu và lâu hơn trong quá trình luyện viết.`}
          </p>
        </div>
      </div>
    </div>
  );
};
