import React, { useState, useEffect, useRef } from 'react';
import { Volume2, BookOpen, Play } from 'lucide-react';
import { speakChinese } from '../../utils/speech';
import HanziWriter from 'hanzi-writer';

export const DetailMode = ({ vocabulary = [], selectedWordId, onSelectWord }) => {
  const [activeId, setActiveId] = useState(selectedWordId || (vocabulary[0] ? vocabulary[0].id : 1));
  const writerRef = useRef(null);
  const containerRef = useRef(null);

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
        padding: 6,
        strokeAnimationSpeed: 1,
        delayBetweenStrokes: 150,
        strokeColor: '#2563eb', // Blue primary strokes
        radicalColor: '#e53e3e', // Red radical strokes
        outlineColor: '#f1f5f9',
        showOutline: true
      });
      writerRef.current = writer;
      writer.animateCharacter();
    } catch (e) {
      console.error("HanziWriter init error:", e);
    }
  }, [activeId, currentWord]);

  const handlePlayStroke = () => {
    if (writerRef.current) {
      writerRef.current.animateCharacter();
    }
  };

  // Helper to render inline red Chinese radical characters matching Screenshot B
  const renderMnemonicWithRedRadicals = (text) => {
    if (!text) return null;
    const parts = text.split(/([\u4e00-\u9fa5]{1,2})/g);
    return parts.map((part, index) => {
      if (/^[\u4e00-\u9fa5]{1,2}$/.test(part)) {
        return (
          <span key={index} className="red-radical-text">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  if (!currentWord) return null;

  return (
    <div className="detail-mode-container">
      {/* Left Column: Word Selection Sidebar List */}
      <div className="detail-sidebar-list">
        <div className="sidebar-header-text">
          <BookOpen size={16} /> 15 Từ Vựng HSK 1 Bài 1
        </div>
        <div className="sidebar-items-scroll">
          {vocabulary.map((item) => {
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

      {/* Right Column: Detailed Explanation */}
      <div className="detail-main-content sample-style-card">
        {/* Top Header Row */}
        <div className="sample-header-row">
          <div className="sample-title-box">
            <h1 className="sample-hanzi">{currentWord.hanzi}</h1>
            <span className="sample-pinyin">({currentWord.pinyin})</span>
          </div>

          <button 
            className="sample-speech-pill"
            onClick={() => speakChinese(currentWord.hanzi)}
          >
            <Volume2 size={18} /> Nghe Đọc Từ '{currentWord.hanzi}'
          </button>
        </div>

        {/* Meaning Row */}
        <div className="sample-meaning-row">
          <span className="emoji-icon">💡</span>
          <span className="meaning-green-text">
            <strong>Nghĩa:</strong> {currentWord.meaning}
          </span>
        </div>

        {/* Example Pill */}
        {currentWord.exampleHanzi && (
          <div className="sample-example-pill">
            <span className="emoji-icon">📌</span>
            <span className="example-text">
              Ví dụ: <strong>{currentWord.exampleHanzi}</strong> ({currentWord.examplePinyin}) – {currentWord.exampleMeaning}
            </span>
          </div>
        )}

        {/* 1. Khoanh đỏ 1 (Lấy từ Khoanh đỏ A - da-chiet-tu.pages.dev) */}
        <div className="sample-radicals-section">
          <div className="radicals-header-title">
            <span className="emoji-icon">🎨</span>
            <span>Chiết tự & Tô màu nét bộ thủ cho 1 chữ của từ "{currentWord.hanzi}":</span>
          </div>

          {/* Box A design: Dashed border card + "✍️ Xem cách viết" link below */}
          <div className="box-a-container">
            <div ref={containerRef} className="box-a-canvas"></div>
            <button className="box-a-stroke-btn" onClick={handlePlayStroke}>
              ✍️ Xem cách viết
            </button>
          </div>
        </div>

        {/* 2. Khoanh đỏ 2 (Lấy từ Khoanh đỏ B - da-chiet-tu.pages.dev) */}
        <div className="box-b-mnemonic-container">
          <div className="box-b-header-title">APP_MNEMONIC</div>
          <div className="box-b-content-body">
            {renderMnemonicWithRedRadicals(currentWord.mnemonic)}
          </div>
        </div>
      </div>
    </div>
  );
};
