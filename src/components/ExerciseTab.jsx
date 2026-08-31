import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakChinese } from '../utils/speech';

export const ExerciseTab = ({ exercises = [], onCompleteLesson }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [fillInputs, setFillInputs] = useState({});

  if (!exercises || exercises.length === 0) {
    return (
      <div className="exercise-card-container">
        <div className="empty-exercise">Bài học này chưa có bài tập rèn luyện.</div>
      </div>
    );
  }

  const handleSelectOption = (questionId, optionId) => {
    if (submitted) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleFillInput = (questionId, value) => {
    if (submitted) return;
    setFillInputs(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    let score = 0;
    exercises.forEach(q => {
      if (q.type === 'multiple-choice' || q.type === 'pinyin-match') {
        const correctOpt = q.options.find(o => o.isCorrect);
        if (correctOpt && userAnswers[q.id] === correctOpt.id) {
          score++;
        }
      } else if (q.type === 'fill-in-blank') {
        if ((fillInputs[q.id] || '').trim() === q.correctAnswer) {
          score++;
        }
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const score = calculateScore();
    if (score === exercises.length) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      if (onCompleteLesson) {
        onCompleteLesson();
      }
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setFillInputs({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const percentage = Math.round((score / exercises.length) * 100);

  return (
    <div className="exercise-card-container">
      <div className="exercise-header-bar">
        <div className="exercise-title">
          <HelpCircle size={20} className="blue-icon" />
          <h2>Bài tập luyện tập (Trắc nghiệm HSK 1)</h2>
        </div>
        {submitted && (
          <div className="score-badge">
            <Award size={18} /> Kết quả: {score}/{exercises.length} ({percentage}%)
          </div>
        )}
      </div>

      <div className="exercise-list">
        {exercises.map((q, index) => {
          let isCorrect = false;
          if (q.type === 'multiple-choice' || q.type === 'pinyin-match') {
            const correctOpt = q.options.find(o => o.isCorrect);
            isCorrect = correctOpt && userAnswers[q.id] === correctOpt.id;
          } else if (q.type === 'fill-in-blank') {
            isCorrect = (fillInputs[q.id] || '').trim() === q.correctAnswer;
          }

          return (
            <div 
              key={q.id} 
              className={`quiz-item-card ${submitted ? (isCorrect ? 'correct-border' : 'wrong-border') : ''}`}
            >
              <div className="quiz-question-header">
                <span className="quiz-num">Câu {index + 1}</span>
                <span className="quiz-question-text">{q.question}</span>
              </div>

              {/* Multiple Choice Options */}
              {(q.type === 'multiple-choice' || q.type === 'pinyin-match') && (
                <div className="quiz-options-grid">
                  {q.options.map((opt) => {
                    const isSelected = userAnswers[q.id] === opt.id;
                    let optionClass = 'quiz-option-btn';
                    
                    if (isSelected) optionClass += ' selected';
                    if (submitted) {
                      if (opt.isCorrect) optionClass += ' correct';
                      else if (isSelected && !opt.isCorrect) optionClass += ' wrong';
                    }

                    return (
                      <button
                        key={opt.id}
                        className={optionClass}
                        onClick={() => handleSelectOption(q.id, opt.id)}
                        disabled={submitted}
                      >
                        <span className="opt-key">{opt.id}</span>
                        <span className="opt-text">{opt.text}</span>
                        {submitted && opt.isCorrect && <CheckCircle size={16} className="status-icon success" />}
                        {submitted && isSelected && !opt.isCorrect && <XCircle size={16} className="status-icon danger" />}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Fill in Blank Option */}
              {q.type === 'fill-in-blank' && (
                <div className="fill-blank-box">
                  <input 
                    type="text"
                    className={`fill-input ${submitted ? (isCorrect ? 'correct' : 'wrong') : ''}`}
                    placeholder="Nhập câu trả lời..."
                    value={fillInputs[q.id] || ''}
                    onChange={(e) => handleFillInput(q.id, e.target.value)}
                    disabled={submitted}
                  />
                  {submitted && (
                    <div className="correct-answer-hint">
                      Đáp án đúng: <strong>{q.correctAnswer}</strong>
                    </div>
                  )}
                </div>
              )}

              {/* Explanation after submission */}
              {submitted && q.explanation && (
                <div className="quiz-explanation">
                  <strong>Giải thích:</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="exercise-footer">
        {!submitted ? (
          <button 
            className="btn-submit-quiz"
            onClick={handleSubmit}
            disabled={Object.keys(userAnswers).length === 0 && Object.keys(fillInputs).length === 0}
          >
            Nộp bài & Kiểm tra kết quả
          </button>
        ) : (
          <button className="btn-retry-quiz" onClick={handleReset}>
            <RotateCcw size={16} /> Làm lại bài tập
          </button>
        )}
      </div>
    </div>
  );
};
