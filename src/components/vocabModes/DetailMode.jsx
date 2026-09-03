import React, { useState, useEffect, useRef } from 'react';
import { Volume2, BookOpen } from 'lucide-react';
import { speakChinese } from '../../utils/speech';
import { singleCharDict } from '../../data/hskData';
import HanziWriter from 'hanzi-writer';

// Sub-component for rendering stroke card for each character in word
const SingleCharStrokeCard = ({ char, charInfo }) => {
  const containerRef = useRef(null);
  const [writer, setWriter] = useState(null);

  useEffect(() => {
    if (!containerRef.current || !char) return;
    containerRef.current.innerHTML = '';
    try {
      const newWriter = HanziWriter.create(containerRef.current, char, {
        width: 140,
        height: 140,
        padding: 4,
        strokeAnimationSpeed: 1,
        delayBetweenStrokes: 150,
        strokeColor: '#2563eb', // Blue primary strokes
        radicalColor: '#e53e3e', // Red radical strokes
        outlineColor: '#f1f5f9',
        showOutline: true
      });
      setWriter(newWriter);
      // Removed automatic animation to let user trigger it
    } catch (e) {
      console.error("HanziWriter error for", char, e);
    }
  }, [char]);

  const handleAnimate = () => {
    if (writer) {
      writer.animateCharacter();
    }
  };

  return (
    <div className="radical-card-box">
      <div className="radical-dashed-box">
        <div ref={containerRef} className="radical-canvas-holder"></div>
      </div>
      <button className="btn-write-trigger" onClick={handleAnimate}>
        ✍️ Xem cách viết
      </button>

      {charInfo && (
        <div className="radical-info-grid">
          <div className="grid-cell pinyin-cell">{charInfo.pinyin}</div>
          <div className="grid-cell hanviet-cell">{charInfo.hanViet}</div>
          <div className="grid-cell meaning-cell">{charInfo.meaning}</div>
        </div>
      )}
    </div>
  );
};

export const DetailMode = ({ vocabulary = [], selectedWordId, onSelectWord }) => {
  const [activeId, setActiveId] = useState(selectedWordId || (vocabulary[0] ? vocabulary[0].id : 1));

  const currentWord = vocabulary.find(v => v.id === activeId) || vocabulary[0];

  if (!currentWord) return null;

  const cleanHanzi = currentWord.hanzi.replace(/[^\u4e00-\u9fa5]/g, '');
  const charList = cleanHanzi.split('');

  // Helper to render inline red Chinese radical characters matching ttchi.pages.dev
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

        {/* Multi-Character Radicals & Stroke Order Section */}
        <div className="sample-radicals-section">
          <div className="radicals-header-title">
            <span className="emoji-icon">🎨</span>
            <span>Chiết tự & Tô màu nét bộ thủ cho {charList.length} chữ của từ "{currentWord.hanzi}":</span>
          </div>

          <div className="multi-char-cards-row">
            {charList.map((char, index) => (
              <SingleCharStrokeCard
                key={`${char}-${index}`}
                char={char}
                charInfo={singleCharDict[char]}
              />
            ))}
          </div>
        </div>

        {/* Multi-Character APP_MNEMONIC Section */}
        <div className="sample-mnemonic-box">
          <div className="mnemonic-title-row">
            <span className="emoji-icon">🌱</span>
            <span className="emoji-icon">🍸</span>
            <span className="mnemonic-title-text">APP_MNEMONIC (Mẹo Nhớ Chiết Tự Sinh Động):</span>
          </div>

          <div className="mnemonic-bullets-wrapper">
            {charList.map((char, idx) => {
              const charInfo = singleCharDict[char];
              if (!charInfo) return null;
              return (
                <div key={idx} className="mnemonic-bullet-block">
                  <div className="mnemonic-bullet-title">
                    • Chữ <strong>'{char}'</strong> ({charInfo.hanViet} / {charInfo.pinyin}):
                  </div>
                  <div className="mnemonic-content-line">
                    {renderMnemonicWithRedRadicals(charInfo.mnemonic)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cultural & Structural Etymology Section */}
        {(currentWord.culturalThinking || currentWord.structuralEtymology) && (
          <div className="cultural-box-wrapper">
            <div className="cultural-title-main">
              <span className="emoji-icon">🧩</span>
              <span className="emoji-icon">✳️</span>
              CẤU TRÚC CHIẾT TỰ & TƯ DUY VĂN HÓA TRUNG HOA:
            </div>
            
            <div className="cultural-inner-card">
              <div className="cultural-inner-subtitle">
                <span className="badge-cn">CN</span>
                Chiết Tự & Tư Duy Văn Hóa Cho Từ Vựng "{currentWord.hanzi}" ({currentWord.pinyin}):
              </div>

              {currentWord.culturalThinking && (
                <div className="cultural-section">
                  <div className="cultural-section-header">
                    <span className="emoji-icon">🏮</span> Tư duy & Văn hóa Trung Hoa:
                  </div>
                  <div className="cultural-text-body">
                    {currentWord.culturalThinking}
                  </div>
                </div>
              )}

              {currentWord.structuralEtymology && (
                <div className="cultural-section">
                  <div className="cultural-section-header">
                    <span className="emoji-icon">🧩</span> Kết cấu Chiết tự từ vựng:
                  </div>
                  <div className="cultural-text-body">
                    {currentWord.structuralEtymology}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
