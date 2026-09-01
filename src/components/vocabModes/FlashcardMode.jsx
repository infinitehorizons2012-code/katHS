import React, { useState } from 'react';
import { Volume2, ArrowLeft, ArrowRight, Shuffle, RotateCw } from 'lucide-react';
import { speakChinese } from '../../utils/speech';

export const FlashcardMode = ({ vocabulary = [] }) => {
  const [deck, setDeck] = useState(vocabulary);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!deck || deck.length === 0) return null;

  const currentItem = deck[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % deck.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + deck.length) % deck.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  return (
    <div className="mode-card-wrapper">
      <div 
        className={`flashcard-box ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {!isFlipped ? (
          <div className="flashcard-front">
            <div className="card-hanzi">{currentItem.hanzi}</div>
            <button 
              className="btn-card-speaker"
              onClick={(e) => {
                e.stopPropagation();
                speakChinese(currentItem.hanzi);
              }}
              title="Phát âm"
            >
              <Volume2 size={32} />
            </button>
          </div>
        ) : (
          <div className="flashcard-back">
            <div className="back-pinyin">{currentItem.pinyin}</div>
            <div className="back-hanviet">[{currentItem.hanViet}]</div>
            <div className="back-meaning">{currentItem.meaning}</div>
            <div className="back-type-badge">{currentItem.type}</div>
            <button 
              className="btn-card-speaker small"
              onClick={(e) => {
                e.stopPropagation();
                speakChinese(currentItem.hanzi);
              }}
            >
              <Volume2 size={20} /> Nghe âm
            </button>
          </div>
        )}
      </div>

      <div className="flashcard-controls-bar">
        <div className="counter-text">{currentIndex + 1} / {deck.length}</div>
        <div className="controls-btns-group">
          <button className="btn-control-icon" onClick={handlePrev} title="Từ trước">
            <ArrowLeft size={20} />
          </button>
          <button className="btn-control-icon" onClick={handleShuffle} title="Trộn ngẫu nhiên">
            <Shuffle size={20} />
          </button>
          <button className="btn-control-icon" onClick={handleNext} title="Từ tiếp theo">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
