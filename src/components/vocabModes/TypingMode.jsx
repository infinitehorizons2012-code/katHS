import React, { useState } from 'react';
import { Volume2, HelpCircle, Check, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakChinese } from '../../utils/speech';

export const TypingMode = ({ vocabulary = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputHanzi, setInputHanzi] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong' | null
  const [completedCount, setCompletedCount] = useState(0);

  const currentItem = vocabulary[currentIndex];

  const handleCheck = (e) => {
    e.preventDefault();
    if (!inputHanzi.trim() || !currentItem) return;

    speakChinese(currentItem.hanzi);

    // Normalize comparison (ignore punctuation/whitespace)
    const normalizedInput = inputHanzi.trim().replace(/[！!？?,，]/g, '');
    const normalizedTarget = currentItem.hanzi.replace(/[！!？?,，]/g, '');

    if (normalizedInput === normalizedTarget) {
      setFeedback('correct');
      setCompletedCount((prev) => prev + 1);

      setTimeout(() => {
        setFeedback(null);
        setInputHanzi('');
        setShowHint(false);

        if (currentIndex + 1 < vocabulary.length) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }
      }, 700);
    } else {
      setFeedback('wrong');
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setCompletedCount(0);
    setInputHanzi('');
    setFeedback(null);
    setShowHint(false);
  };

  if (!currentItem) return null;

  const progressPercent = Math.round(((currentIndex + 1) / vocabulary.length) * 100);

  return (
    <div className="mode-card-wrapper">
      <div className="typing-card-center">
        <div className="typing-header-label">GÕ CHỮ HÁN CHO NGHĨA:</div>
        <div className="typing-prompt-meaning">{currentItem.meaning}</div>

        <button 
          className="btn-typing-audio"
          onClick={() => speakChinese(currentItem.hanzi)}
          title="Nghe âm thanh"
        >
          <Volume2 size={24} />
        </button>

        <form onSubmit={handleCheck} className="typing-input-box">
          <input
            type="text"
            className={`typing-input-field ${feedback ? feedback : ''}`}
            placeholder="Nhập chữ Hán..."
            value={inputHanzi}
            onChange={(e) => {
              setInputHanzi(e.target.value);
              setFeedback(null);
            }}
            autoFocus
          />

          <div className="typing-actions-row">
            <button
              type="button"
              className="btn-link-hint"
              onClick={() => setShowHint(!showHint)}
            >
              {showHint ? `Gợi ý: ${currentItem.pinyin} [${currentItem.hanViet}]` : 'Xem gợi ý?'}
            </button>

            <button type="submit" className="btn-typing-submit">
              KIỂM TRA
            </button>
          </div>
        </form>

        {feedback === 'wrong' && (
          <div className="typing-feedback wrong">
            Chưa đúng rồi! Gợi ý đáp án: <strong>{currentItem.hanzi}</strong> ({currentItem.pinyin})
          </div>
        )}
      </div>

      <div className="typing-progress-footer">
        <div className="progress-label-text">
          TIẾN ĐỘ: {currentIndex + 1} / {vocabulary.length}
        </div>
        <div className="typing-progress-bg">
          <div className="typing-progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>
    </div>
  );
};
