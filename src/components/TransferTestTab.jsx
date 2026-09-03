import React, { useState } from 'react';
import { transferTestData } from '../data/transferTestData';
import { CheckCircle, XCircle, Info, FileText } from 'lucide-react';

export function TransferTestTab() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const handleSelect = (questionId, optionLabel) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionLabel }));
    setShowExplanation(prev => ({ ...prev, [questionId]: true }));
  };

  const handleToggleExplanation = (questionId) => {
    setShowExplanation(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  return (
    <div className="tab-pane active fade-in transfer-test-container">
      <div className="tab-header">
        <h2>Transfer Test</h2>
        <p className="tab-subtitle">Đánh giá năng lực vận dụng toàn diện từ Nhận biết đến Thực chiến</p>
      </div>

      <div className="transfer-test-levels">
        {transferTestData.map((levelData) => (
          <div key={levelData.level} className="level-section">
            <div className="level-header">
              <div className="level-title-row">
                <span className="level-badge">LEVEL {levelData.level}</span>
                <h3>{levelData.title}</h3>
              </div>
              <p className="level-goal"><Info size={16} /> <strong>Mục tiêu:</strong> {levelData.goal}</p>
            </div>

            <div className="level-questions">
              {levelData.questions.map((q) => (
                <div key={q.id} className="question-card">
                  <h4 className="question-title">{q.title}</h4>
                  
                  {/* For Essay / RCA questions */}
                  {levelData.isEssay ? (
                    <div className="essay-question">
                      <div className="question-content" style={{ whiteSpace: 'pre-line' }}>{q.content}</div>
                      <button 
                        className={`btn-toggle-answer ${showExplanation[q.id] ? 'active' : ''}`}
                        onClick={() => handleToggleExplanation(q.id)}
                      >
                        <FileText size={16} /> 
                        {showExplanation[q.id] ? 'Ẩn Giải Đáp' : 'Xem Giải Đáp'}
                      </button>
                      
                      {showExplanation[q.id] && (
                        <div className="essay-answer-box slide-down">
                          <h5 className="answer-title">{q.answerTitle}</h5>
                          <div className="answer-content" style={{ whiteSpace: 'pre-line' }}>
                            {/* Render bold text simply by simple parse if needed, but whiteSpace: pre-line is fine. We can do simple bold replacement */}
                            {q.answerContent.split('**').map((text, i) => (
                              i % 2 === 1 ? <strong key={i}>{text}</strong> : text
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* For Multiple Choice questions */
                    <div className="mcq-question">
                      <div className="question-content" style={{ whiteSpace: 'pre-line' }}>{q.content}</div>
                      
                      <div className="options-grid">
                        {q.options.map((opt) => {
                          const isSelected = selectedAnswers[q.id] === opt.label;
                          const showResult = showExplanation[q.id];
                          let optClass = "option-btn";
                          
                          if (showResult) {
                            if (opt.isCorrect) optClass += " correct";
                            else if (isSelected && !opt.isCorrect) optClass += " incorrect";
                            else optClass += " disabled";
                          } else if (isSelected) {
                            optClass += " selected";
                          }

                          return (
                            <button 
                              key={opt.label}
                              className={optClass}
                              onClick={() => !showResult && handleSelect(q.id, opt.label)}
                              disabled={showResult}
                            >
                              <span className="opt-label">{opt.label}</span>
                              <span className="opt-text">{opt.text}</span>
                              {showResult && opt.isCorrect && <CheckCircle className="opt-icon correct-icon" size={20} />}
                              {showResult && isSelected && !opt.isCorrect && <XCircle className="opt-icon incorrect-icon" size={20} />}
                            </button>
                          );
                        })}
                      </div>

                      {showExplanation[q.id] && (
                        <div className="explanation-box slide-down">
                          <strong><Info size={16}/> Giải thích:</strong>
                          <p>{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
