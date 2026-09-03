import React, { useState, useEffect, useRef } from 'react';
import { Volume2, BookOpen } from 'lucide-react';
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
        strokeColor: '#2563eb', // Blue strokes
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

  if (!currentWord) return null;

  return (
    <div className="detail-mode-container">
      {/* Left Column: Word List */}
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

      {/* Right Column: Detailed Explanation matching user screenshot 100% */}
      <div className="detail-main-content sample-style-card">
        {/* Top Header Row: Hanzi + Pinyin on left, Speech Pill on right */}
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

        {/* 1. Meaning Section (Green underline 1 in screenshot) */}
        <div className="sample-meaning-row">
          <span className="emoji-icon">💡</span>
          <span className="meaning-green-text">
            <strong>Nghĩa:</strong> {currentWord.meaning}
          </span>
        </div>

        {/* 2. Example Section (Red underline 2 in screenshot) */}
        {currentWord.exampleHanzi && (
          <div className="sample-example-pill">
            <span className="emoji-icon">📌</span>
            <span className="example-text">
              Ví dụ: <strong>{currentWord.exampleHanzi}</strong> ({currentWord.examplePinyin}) – {currentWord.exampleMeaning}
            </span>
          </div>
        )}

        {/* 3. Radicals & Stroke Order Section (Red underline 3 in screenshot) */}
        <div className="sample-radicals-section">
          <div className="radicals-header-title">
            <span className="emoji-icon">🎨</span>
            <span>Chiết tự & Tô màu nét bộ thủ cho 1 chữ của từ "{currentWord.hanzi}":</span>
          </div>

          <div className="radical-card-box">
            <div ref={containerRef} className="radical-canvas-holder"></div>
            <div className="radical-card-caption">
              Nét chữ '{currentWord.hanzi.charAt(0)}'
            </div>
            
            {/* Colored Radical Circles matching screenshot (e.g. Red circle 1, Blue circle 2) */}
            {currentWord.radicals && currentWord.radicals.length > 0 && (
              <div className="radical-circles-row">
                {currentWord.radicals.map((rad, idx) => (
                  <span key={idx} className={`rad-circle-tag ${idx === 0 ? 'red' : 'blue'}`} title={rad.name}>
                    {rad.hanzi}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 4. Mnemonic Section (Green box at bottom in screenshot) */}
        <div className="sample-mnemonic-box">
          <div className="mnemonic-title-row">
            <span className="emoji-icon">🌱</span>
            <span className="emoji-icon">🍸</span>
            <span className="mnemonic-title-text">APP_MNEMONIC (Mẹo Nhớ Chiết Tự Sinh Động):</span>
          </div>

          <div className="mnemonic-content-line">
            • <strong>Chữ '{currentWord.hanzi}' ({currentWord.hanViet || currentWord.pinyin}):</strong> {currentWord.mnemonic}
          </div>
        </div>
      </div>
    </div>
  );
};
