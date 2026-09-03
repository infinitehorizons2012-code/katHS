import React, { useState, useEffect, useRef } from 'react';
import { Volume2, BookOpen } from 'lucide-react';
import { speakChinese } from '../../utils/speech';
import { singleCharDict } from '../../data/hskData';
import HanziWriter from 'hanzi-writer';

// Sub-component for rendering stroke card for each character in word
const SingleCharStrokeCard = ({ char, charInfo }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !char) return;
    containerRef.current.innerHTML = '';
    try {
      const writer = HanziWriter.create(containerRef.current, char, {
        width: 125,
        height: 125,
        padding: 4,
        strokeAnimationSpeed: 1,
        delayBetweenStrokes: 150,
        strokeColor: '#2563eb', // Blue primary strokes
        radicalColor: '#e53e3e', // Red radical strokes
        outlineColor: '#f1f5f9',
        showOutline: true
      });
      writer.animateCharacter();
    } catch (e) {
      console.error("HanziWriter error for", char, e);
    }
  }, [char]);

  return (
    <div className="radical-card-box">
      <div ref={containerRef} className="radical-canvas-holder"></div>
      <div className="radical-card-caption">
        Nét chữ '{char}'
      </div>
      
      {/* Radical tags for this character */}
      {charInfo?.radicals && (
        <div className="radical-circles-row">
          {charInfo.radicals.map((rad, idx) => (
            <span key={idx} className={`rad-circle-tag ${idx === 0 ? 'red' : 'blue'}`} title={rad.name}>
              {rad.hanzi}
            </span>
          ))}
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
      </div>
    </div>
  );
};
