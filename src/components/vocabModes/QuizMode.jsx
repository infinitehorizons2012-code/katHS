import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakChinese } from '../../utils/speech';

export const QuizMode = ({ vocabulary = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentItem = vocabulary[currentIndex];

  useEffect(() => {
    if (isCompleted) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => +(prev + 0.1).toFixed(1));
    }, 100);
    return () => clearInterval(interval);
  }, [isCompleted]);

  useEffect(() => {
    if (!currentItem) return;
    generateOptions(currentItem);
  }, [currentIndex, vocabulary]);

  // Handle keyboard 1, 2, 3, 4 shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedOpt !== null || isCompleted) return;
      if (['1', '2', '3', '4'].includes(e.key)) {
        const optIndex = parseInt(e.key, 10) - 1;
        if (options[optIndex]) {
          handleSelectOption(options[optIndex]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [options, selectedOpt, isCompleted]);

  const generateOptions = (item) => {
    const correctOpt = { text: item.meaning, isCorrect: true };
    const wrongItems = vocabulary
      .filter((v) => v.id !== item.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((v) => ({ text: v.meaning, isCorrect: false }));

    const allOpts = [correctOpt, ...wrongItems].sort(() => Math.random() - 0.5);
    setOptions(allOpts);
    setSelectedOpt(null);
    setIsCorrect(null);
  };

  const handleSelectOption = (opt) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(opt);
    speakChinese(currentItem.hanzi);

    if (opt.isCorrect) {
      setIsCorrect(true);
      setScore((prev) => prev + 1);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      if (currentIndex + 1 < vocabulary.length) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setIsCompleted(true);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
    }, 800);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setTimerSeconds(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="mode-card-wrapper">
        <div className="quiz-result-box">
          <h3>Hoàn thành Bài Kiểm Tra! 🎉</h3>
          <p className="result-score">Điểm số: {score} / {vocabulary.length}</p>
          <p className="result-time">Thời gian: {timerSeconds}s</p>
          <button className="btn-retry-quiz" onClick={handleRestart}>
            <RotateCcw size={16} /> Làm lại Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mode-card-wrapper">
      <div className="quiz-card-center">
        <div className="quiz-prompt-hanzi">{currentItem?.hanzi}</div>

        <div className="quiz-options-2x2">
          {options.map((opt, idx) => {
            const isSelected = selectedOpt?.text === opt.text;
            let optClass = 'quiz-2x2-btn';

            if (selectedOpt !== null) {
              if (opt.isCorrect) optClass += ' correct';
              else if (isSelected && !opt.isCorrect) optClass += ' wrong';
            }

            return (
              <button
                key={idx}
                className={optClass}
                onClick={() => handleSelectOption(opt)}
                disabled={selectedOpt !== null}
              >
                <span className="opt-number-badge">{idx + 1}</span>
                <span className="opt-label-text">{opt.text}</span>
              </button>
            );
          })}
        </div>

        <div className="quiz-keyboard-hint">Phím 1, 2, 3, 4 để chọn nhanh</div>
      </div>

      <div className="quiz-footer-status">
        <span className="timer-badge">
          <Timer size={14} /> {timerSeconds}s
        </span>
        <span className="bullet-sep">•</span>
        <span className="counter-badge">Câu {currentIndex + 1} / {vocabulary.length}</span>
      </div>
    </div>
  );
};
