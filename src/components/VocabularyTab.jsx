import React, { useState } from 'react';
import { List, Volume2, PenTool, Search } from 'lucide-react';
import { speakChinese } from '../utils/speech';
import { StrokeOrderModal } from './StrokeOrderModal';

export const VocabularyTab = ({ vocabulary = [] }) => {
  const [activeWordForStroke, setActiveWordForStroke] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  // Badge color helper matching user screenshot
  const getTypeBadgeClass = (type) => {
    switch (type) {
      case 'Đại từ':
        return 'badge-blue';
      case 'Tính từ':
        return 'badge-purple';
      case 'Động từ':
        return 'badge-red';
      case 'Phó từ':
        return 'badge-orange';
      default:
        return 'badge-gray';
    }
  };

  const filteredVocabulary = vocabulary.filter(item => {
    const matchesSearch = item.hanzi.toLowerCase().includes(filterText.toLowerCase()) ||
                          item.pinyin.toLowerCase().includes(filterText.toLowerCase()) ||
                          item.meaning.toLowerCase().includes(filterText.toLowerCase());
    const matchesType = selectedType === 'all' || item.type === selectedType;
    return matchesSearch && matchesType;
  });

  const wordTypes = ['all', ...new Set(vocabulary.map(v => v.type))];

  return (
    <div className="vocab-card-container">
      {/* Header bar inside the card */}
      <div className="vocab-card-header">
        <div className="vocab-card-title">
          <div className="title-icon-box">
            <List size={20} className="blue-icon" />
          </div>
          <h2>Danh sách từ vựng</h2>
          <span className="count-pill">{filteredVocabulary.length} từ</span>
        </div>

        <div className="vocab-tools">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input 
              type="text" 
              placeholder="Tìm từ vựng, pinyin, nghĩa..."
              value={filterText}
              onChange={e => setFilterText(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Vocabulary List Container */}
      <div className="vocab-list">
        {filteredVocabulary.length === 0 ? (
          <div className="empty-vocab">Không tìm thấy từ vựng phù hợp</div>
        ) : (
          filteredVocabulary.map((item, index) => (
            <div key={item.id || index} className="vocab-item-row">
              {/* Item Index Circle */}
              <div className="vocab-index-circle">{index + 1}</div>

              {/* Hanzi & Pinyin Group */}
              <div className="vocab-main-col" onClick={() => setActiveWordForStroke(item)} title="Bấm để xem nét vẽ chữ Hán">
                <div className="hanzi-text">{item.hanzi}</div>
                <div className="pinyin-text">{item.pinyin}</div>
              </div>

              {/* Word Type Badge */}
              <div className="vocab-type-col">
                <span className={`type-badge ${getTypeBadgeClass(item.type)}`}>
                  {item.type}
                </span>
              </div>

              {/* Vietnamese Meaning */}
              <div className="vocab-meaning-col">
                <span className="meaning-text">{item.meaning}</span>
              </div>

              {/* Action Buttons: Audio Pronunciation & Stroke Order */}
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
          ))
        )}
      </div>

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
