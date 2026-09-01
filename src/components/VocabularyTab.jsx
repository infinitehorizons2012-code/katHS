import React, { useState } from 'react';
import { List, Volume2, PenTool, Search, Gamepad2 } from 'lucide-react';
import { speakChinese } from '../utils/speech';
import { StrokeOrderModal } from './StrokeOrderModal';
import { FlashcardMode } from './vocabModes/FlashcardMode';
import { MatchMode } from './vocabModes/MatchMode';
import { QuizMode } from './vocabModes/QuizMode';
import { TypingMode } from './vocabModes/TypingMode';

export const VocabularyTab = ({ vocabulary = [] }) => {
  const [activeWordForStroke, setActiveWordForStroke] = useState(null);
  const [filterText, setFilterText] = useState('');

  // Mode Selection: 'list' | 'flashcard' | 'match' | 'quiz' | 'typing'
  const [activeViewMode, setActiveViewMode] = useState('list'); 

  // Badge color helper
  const getTypeBadgeClass = (type) => {
    switch (type) {
      case 'Đại từ':
        return 'badge-blue';
      case 'Tính từ':
        return 'badge-purple';
      case 'Động từ':
        return 'badge-red';
      case 'Danh từ':
        return 'badge-green';
      case 'Trợ từ':
        return 'badge-orange';
      default:
        return 'badge-gray';
    }
  };

  const filteredVocabulary = vocabulary.filter(item => {
    return item.hanzi.toLowerCase().includes(filterText.toLowerCase()) ||
           item.pinyin.toLowerCase().includes(filterText.toLowerCase()) ||
           (item.hanViet && item.hanViet.toLowerCase().includes(filterText.toLowerCase())) ||
           item.meaning.toLowerCase().includes(filterText.toLowerCase());
  });

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
      {activeViewMode === 'flashcard' && <FlashcardMode vocabulary={vocabulary} />}
      {activeViewMode === 'match' && <MatchMode vocabulary={vocabulary} />}
      {activeViewMode === 'quiz' && <QuizMode vocabulary={vocabulary} />}
      {activeViewMode === 'typing' && <TypingMode vocabulary={vocabulary} />}

      {/* List View */}
      {activeViewMode === 'list' && (
        <div className="vocab-card-container">
          <div className="vocab-card-header">
            <div className="vocab-card-title">
              <div className="title-icon-box">
                <List size={20} className="blue-icon" />
              </div>
              <h2>Danh sách từ vựng Lesson 1 ({filteredVocabulary.length} từ)</h2>
            </div>

            <div className="vocab-tools">
              <div className="search-box">
                <Search size={16} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Tìm Hán tự, Pinyin, Hán Việt..."
                  value={filterText}
                  onChange={e => setFilterText(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="vocab-list">
            {filteredVocabulary.map((item, index) => (
              <div key={item.id || index} className="vocab-item-row">
                <div className="vocab-index-circle">{index + 1}</div>

                <div className="vocab-main-col" onClick={() => setActiveWordForStroke(item)} title="Xem nét vẽ">
                  <div className="hanzi-text">{item.hanzi}</div>
                  <div className="pinyin-text">{item.pinyin}</div>
                </div>

                {item.hanViet && (
                  <div className="vocab-hanviet-col">
                    <span className="hanviet-text">[{item.hanViet}]</span>
                  </div>
                )}

                <div className="vocab-type-col">
                  <span className={`type-badge ${getTypeBadgeClass(item.type)}`}>
                    {item.type}
                  </span>
                </div>

                <div className="vocab-meaning-col">
                  <span className="meaning-text">{item.meaning}</span>
                </div>

                <div className="vocab-actions-col">
                  <button 
                    className="btn-icon-speaker"
                    onClick={(e) => {
                      e.stopPropagation();
                      speakChinese(item.hanzi);
                    }}
                    title="Nghe phát âm"
                  >
                    <Volume2 size={20} />
                  </button>
                  <button 
                    className="btn-icon-stroke"
                    onClick={() => setActiveWordForStroke(item)}
                    title="Xem thứ tự nét vẽ"
                  >
                    <PenTool size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stroke Animation Modal */}
      {activeWordForStroke && (
        <StrokeOrderModal 
          word={activeWordForStroke} 
          onClose={() => setActiveWordForStroke(null)} 
        />
      )}
    </div>
  );
};
