import React, { useState, useEffect } from 'react';
import { CheckCircle2, RotateCcw, ChevronRight, ChevronLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakChinese } from '../../utils/speech';

export const MatchMode = ({ vocabulary = [] }) => {
  const ITEMS_PER_PAGE = 5;

  const [currentPage, setCurrentPage] = useState(0);
  const [matchedIds, setMatchedIds] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);

  const totalPages = Math.ceil(vocabulary.length / ITEMS_PER_PAGE) || 1;

  useEffect(() => {
    resetGame();
  }, [vocabulary]);

  useEffect(() => {
    loadPageData(currentPage);
  }, [currentPage, vocabulary]);

  const resetGame = () => {
    setMatchedIds([]);
    setCurrentPage(0);
    loadPageData(0);
  };

  const loadPageData = (pageIndex) => {
    setSelectedLeft(null);
    setSelectedRight(null);

    const startIndex = pageIndex * ITEMS_PER_PAGE;
    const pageItems = vocabulary.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Shuffle left items
    const left = [...pageItems].sort(() => Math.random() - 0.5);
    // Shuffle right items separately
    const right = [...pageItems].sort(() => Math.random() - 0.5);

    const letterKeys = ['Q', 'W', 'E', 'R', 'T'];

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
      const updatedMatched = [...matchedIds, left.id];
      setMatchedIds(updatedMatched);
      setSelectedLeft(null);
      setSelectedRight(null);

      // Check if current page is cleared (all 5 items matched)
      const startIndex = currentPage * ITEMS_PER_PAGE;
      const currentPageItems = vocabulary.slice(startIndex, startIndex + ITEMS_PER_PAGE);
      const isPageCleared = currentPageItems.every(item => updatedMatched.includes(item.id));

      if (isPageCleared) {
        if (currentPage + 1 < totalPages) {
          setTimeout(() => {
            setCurrentPage(prev => prev + 1);
          }, 600);
        } else {
          // All pages finished!
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }
      }
    } else {
      // Wrong Match - reset selection
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

        <div className="match-header-right">
          <div className="page-pill-badge">
            TRANG {currentPage + 1} / {totalPages}
          </div>
          <button className="btn-reset-match" onClick={resetGame}>
            <RotateCcw size={16} /> Chơi lại
          </button>
        </div>
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="match-pagination-bar">
          <button 
            className="btn-page-arrow" 
            onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
            disabled={currentPage === 0}
          >
            <ChevronLeft size={18} /> Trang trước
          </button>
          
          <span className="page-num-text">Trang {currentPage + 1} / {totalPages}</span>

          <button 
            className="btn-page-arrow" 
            onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
          >
            Trang sau <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};
