import React, { useEffect, useRef, useState } from 'react';
import HanziWriter from 'hanzi-writer';
import { X, Play, RotateCcw, Volume2 } from 'lucide-react';
import { speakChinese } from '../utils/speech';

export const StrokeOrderModal = ({ word, onClose }) => {
  const containerRef = useRef(null);
  const writerRef = useRef(null);
  const [selectedChar, setSelectedChar] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract clean Chinese characters from word (excluding punctuation)
  const chars = (word?.hanzi || '').replace(/[^\u4e00-\u9fa5]/g, '').split('');

  useEffect(() => {
    if (chars.length > 0 && !selectedChar) {
      setSelectedChar(chars[0]);
    }
  }, [word]);

  useEffect(() => {
    if (!containerRef.current || !selectedChar) return;

    // Clear previous canvas
    containerRef.current.innerHTML = '';

    try {
      const writer = HanziWriter.create(containerRef.current, selectedChar, {
        width: 180,
        height: 180,
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
      console.error("HanziWriter initialization error:", e);
    }
  }, [selectedChar]);

  const handleAnimate = () => {
    if (writerRef.current) {
      setIsPlaying(true);
      writerRef.current.animateCharacter({
        onComplete: () => setIsPlaying(false)
      });
    }
  };

  if (!word) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 className="modal-title">Tập viết chữ Hán: {word.hanzi}</h3>
            <p className="modal-subtitle">{word.pinyin} - {word.meaning}</p>
          </div>
          <button className="btn-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {chars.length > 1 && (
          <div className="char-selector">
            <span>Chọn chữ: </span>
            {chars.map(c => (
              <button
                key={c}
                className={`btn-char ${selectedChar === c ? 'active' : ''}`}
                onClick={() => setSelectedChar(c)}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <div className="stroke-writer-area">
          <div ref={containerRef} className="hanzi-canvas-box"></div>
          <div className="stroke-controls">
            <button className="btn-action" onClick={handleAnimate} disabled={isPlaying}>
              <Play size={16} /> phát nét vẽ
            </button>
            <button className="btn-action secondary" onClick={() => speakChinese(selectedChar || word.hanzi)}>
              <Volume2 size={16} /> Đọc âm
            </button>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-done" onClick={onClose}>Đóng</button>
        </div>
      </div>
    </div>
  );
};
