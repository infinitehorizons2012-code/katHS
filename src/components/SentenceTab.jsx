import React, { useState } from 'react';
import { Gamepad2, Volume2, BookOpen } from 'lucide-react';
import { speakChinese } from '../utils/speech';
import { FlashcardMode } from './vocabModes/FlashcardMode';
import { MatchMode } from './vocabModes/MatchMode';
import { QuizMode } from './vocabModes/QuizMode';
import { TypingMode } from './vocabModes/TypingMode';
import { sentenceData } from '../data/sentenceData';

export const SentenceTab = ({ activeCLO = 'all' }) => {
  // Mode Selection: 'list' | 'flashcard' | 'match' | 'quiz' | 'typing'
  const [activeViewMode, setActiveViewMode] = useState('list'); 

  // Filter sentence data based on CLO
  const filteredSentenceData = sentenceData.filter(group => activeCLO === 'all' || group.clo === activeCLO);

  // Flatten sentences for the games
  const allSentences = filteredSentenceData.flatMap(group => group.sentences);

  // Badge color helper
  const getTypeBadgeClass = (typeColor) => {
    switch (typeColor) {
      case 'blue': return 'badge-blue';
      case 'purple': return 'badge-purple';
      case 'red': return 'badge-red';
      case 'green': return 'badge-green';
      case 'orange': return 'badge-orange';
      default: return 'badge-gray';
    }
  };

  return (
    <div className="vocab-tab-wrapper">
      {/* View Switcher Bar */}
      <div className="vocab-mode-bar-card">
        <div className="mode-bar-title">
          <Gamepad2 size={22} className="purple-icon" />
          <span>Chế độ học tập</span>
        </div>

        <div className="mode-pills-group">
          <button 
            className={`btn-mode-pill ${activeViewMode === 'list' ? 'active-list' : ''}`}
            onClick={() => setActiveViewMode('list')}
          >
            📋 Danh sách
          </button>
          <button 
            className={`btn-mode-pill ${activeViewMode === 'flashcard' ? 'active-flashcard' : ''}`}
            onClick={() => setActiveViewMode('flashcard')}
          >
            Flashcard
          </button>
          <button 
            className={`btn-mode-pill ${activeViewMode === 'match' ? 'active-match' : ''}`}
            onClick={() => setActiveViewMode('match')}
          >
            Match
          </button>
          <button 
            className={`btn-mode-pill ${activeViewMode === 'quiz' ? 'active-quiz' : ''}`}
            onClick={() => setActiveViewMode('quiz')}
          >
            Quiz
          </button>
          <button 
            className={`btn-mode-pill ${activeViewMode === 'typing' ? 'active-typing' : ''}`}
            onClick={() => setActiveViewMode('typing')}
          >
            Typing
          </button>
        </div>
      </div>

      {/* Render Active View */}
      {activeViewMode === 'flashcard' && (
        <FlashcardMode vocabulary={allSentences} />
      )}

      {activeViewMode === 'match' && (
        <MatchMode vocabulary={allSentences} />
      )}

      {activeViewMode === 'quiz' && (
        <QuizMode vocabulary={allSentences} />
      )}

      {activeViewMode === 'typing' && (
        <TypingMode vocabulary={allSentences} />
      )}

      {activeViewMode === 'list' && (
        <div className="vocab-list-container fade-in">
          <div className="vocab-list-header">
            <div className="list-title">
              <BookOpen size={20} className="blue-icon" />
              <h3>Danh sách Câu & Cấu trúc (Lesson 1)</h3>
            </div>
          </div>

          <div className="sentence-formulas-list">
            {filteredSentenceData.map((group, groupIndex) => (
              <div key={groupIndex} className="sentence-group-card">
                <div className="sentence-group-header">
                  <h4 className="formula-title">{group.formula}</h4>
                  <div className="formula-structure">{group.structure}</div>
                </div>
                
                <div className="sentence-items">
                  {group.sentences.map((item, index) => (
                    <div key={item.id} className="sentence-item-row">
                      <div className="s-index">{index + 1}</div>
                      
                      <div className="s-content">
                        <div className="s-hanzi-col">
                          <div className="s-hanzi">{item.hanzi}</div>
                          <div className="s-pinyin">{item.pinyin}</div>
                        </div>

                        <div className="s-hanviet">
                          [{item.hanViet}]
                        </div>
                        
                        <div className="s-type">
                          <span className={`type-badge ${getTypeBadgeClass(item.typeColor)}`}>
                            {item.type}
                          </span>
                        </div>

                        <div className="s-meaning">
                          {item.meaning}
                        </div>
                      </div>

                      <div className="s-actions">
                        <button 
                          className="btn-icon-speaker"
                          onClick={() => speakChinese(item.hanzi)}
                          title="Nghe phát âm"
                        >
                          <Volume2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
