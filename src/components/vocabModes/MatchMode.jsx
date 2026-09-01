import React, { useState, useEffect } from 'react';
import { CheckCircle2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakChinese } from '../../utils/speech';

export const MatchMode = ({ vocabulary = [] }) => {
  const [matchedIds, setMatchedIds] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);

  useEffect(() => {
    resetMatchGame();
  }, [vocabulary]);

  const resetMatchGame = () => {
    setMatchedIds([]);
    setSelectedLeft(null);
    setSelectedRight(null);

    // Shuffle left items
    const left = [...vocabulary].sort(() => Math.random() - 0.5);
    // Shuffle right items separately
    const right = [...vocabulary].sort(() => Math.random() - 0.5);

    const letterKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G'];

    setLeftItems(left);
    setRightItems(right.map((item, index) => ({
      ...item,
      keyLetter: letterKeys[index % letterKeys.length]
    })));
  };

  const handleSelectLeft = (item) => {
    if (matchedIds.includes(item.id)) return;
    setSelectedLeft(item);
    speakChinese(item.hanzi);

    if (selectedRight) {
      checkMatch(item, selectedRight);
    }
  };

  const handleSelectRight = (item) => {
    if (matchedIds.includes(item.id)) return;
    setSelectedRight(item);

    if (selectedLeft) {
      checkMatch(selectedLeft, item);
    }
  };

  const checkMatch = (left, right) => {
    if (left.id === right.id) {
      // Correct Match!
      const updated = [...matchedIds, left.id];
      setMatchedIds(updated);
      setSelectedLeft(null);
      setSelectedRight(null);

      if (updated.length === vocabulary.length) {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      }
    } else {
      // Wrong Match - reset selection after brief delay
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 500);
    }
  };

  return (
    <div className="mode-card-wrapper">
      <div className="match-header-bar">
        <div className="progress-indicator">
          TIẾN ĐỘ: <strong>{matchedIds.length}/{vocabulary.length}</strong>
        </div>
        <button className="btn-reset-match" onClick={resetMatchGame}>
          <RotateCcw size={16} /> Chơi lại
        </button>
      </div>

      <div className="match-grid-container">
        {/* Left Column - Hanzi */}
        <div className="match-column">
          {leftItems.map((item, index) => {
            const isMatched = matchedIds.includes(item.id);
            const isSelected = selectedLeft?.id === item.id;

            return (
              <button
                key={item.id}
                className={`match-card-btn ${isMatched ? 'matched' : ''} ${isSelected ? 'selected-left' : ''}`}
                onClick={() => handleSelectLeft(item)}
                disabled={isMatched}
              >
                <span className="item-num">{index + 1}</span>
                <span className="item-hanzi-text">{item.hanzi}</span>
                {isMatched && <CheckCircle2 size={18} className="match-check-icon" />}
              </button>
            );
          })}
        </div>

        {/* Right Column - Meaning */}
        <div className="match-column">
          {rightItems.map((item) => {
            const isMatched = matchedIds.includes(item.id);
            const isSelected = selectedRight?.id === item.id;

            return (
              <button
                key={item.id}
                className={`match-card-btn ${isMatched ? 'matched' : ''} ${isSelected ? 'selected-right' : ''}`}
                onClick={() => handleSelectRight(item)}
                disabled={isMatched}
              >
                <span className="item-letter">{item.keyLetter}</span>
                <span className="item-meaning-text">{item.meaning}</span>
                {isMatched && <CheckCircle2 size={18} className="match-check-icon" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
