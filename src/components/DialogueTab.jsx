import React, { useState } from 'react';
import { BookOpen, Volume2, ChevronUp, ChevronDown, List, Play, Type, Languages, TypeOutline } from 'lucide-react';
import { speakChinese } from '../utils/speech';

export const DialogueTab = ({ dialogues = [] }) => {
  const [activeDialogueId, setActiveDialogueId] = useState(dialogues[0]?.id || null);
  const [isExpanded, setIsExpanded] = useState(true);
  
  // Toggles
  const [showPinyin, setShowPinyin] = useState(true);
  const [showHanzi, setShowHanzi] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);

  const activeDialogue = dialogues.find(d => d.id === activeDialogueId) || dialogues[0];

  if (!activeDialogue) {
    return <div className="p-8 text-center text-gray-500">Chưa có dữ liệu bài khóa.</div>;
  }

  const handlePlayLine = (text) => {
    speakChinese(text);
  };

  const handlePlayAll = () => {
    let delay = 0;
    activeDialogue.lines.forEach(line => {
      setTimeout(() => {
        speakChinese(line.hanzi);
      }, delay);
      delay += 3000;
    });
  };

  return (
    <div className="dialogue-layout">
      {/* Main Content Area */}
      <div className="dialogue-main-content fade-in">
        <div className="dialogue-card">
          {/* Card Header */}
          <div 
            className="dialogue-card-header" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="dialogue-title-group">
              <div className="dialogue-icon-wrapper">
                <BookOpen size={20} className="text-white" />
              </div>
              <h2 className="dialogue-card-title">{activeDialogue.title}</h2>
            </div>
            <button className="collapse-btn">
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          {/* Card Body */}
          {isExpanded && (
            <div className="dialogue-card-body">
              {/* Subtitle / Context */}
              <div className="dialogue-context-box">
                <p className="dialogue-subtitle">{activeDialogue.subtitle}</p>
                {activeDialogue.context && (
                  <p className="dialogue-context">{activeDialogue.context}</p>
                )}
                {activeDialogue.tips && (
                  <p className="dialogue-tips mt-2">{activeDialogue.tips}</p>
                )}
                
                {/* Audio Player Placeholder */}
                <div className="audio-player-mock mt-4">
                  <button className="btn-play-mock" onClick={handlePlayAll} title="Nghe toàn bộ">
                    <Play size={18} />
                  </button>
                  <div className="audio-progress-bar">
                    <div className="audio-progress-fill"></div>
                  </div>
                  <Volume2 size={18} className="text-gray-500 ml-4" />
                </div>
              </div>

              {/* Toolbar */}
              <div className="dialogue-toolbar-actions">
                <button 
                  className={`toolbar-btn ${showPinyin ? 'active' : ''}`}
                  onClick={() => setShowPinyin(!showPinyin)}
                >
                  <span className="font-bold text-blue-600">A</span> Pinyin
                </button>
                <button 
                  className={`toolbar-btn ${showHanzi ? 'active' : ''}`}
                  onClick={() => setShowHanzi(!showHanzi)}
                >
                  Chữ Hán
                </button>
                <button className="toolbar-btn">
                  <TypeOutline size={16} /> Gõ
                </button>
                <button className="toolbar-btn" onClick={handlePlayAll}>
                  <Volume2 size={16} /> Nghe
                </button>
                <button 
                  className={`toolbar-btn ${showTranslation ? 'active' : ''}`}
                  onClick={() => setShowTranslation(!showTranslation)}
                >
                  <Languages size={16} /> Dịch
                </button>
              </div>

              {/* Dialogue Lines */}
              <div className="dialogue-lines-container">
                {activeDialogue.lines.map((line, index) => (
                  <div key={index} className="dialogue-line-wrapper">
                    <div className="speaker-name">{line.speaker}:</div>
                    <div className="dialogue-text-block">
                      <div className="text-content-area">
                        {showPinyin && <div className="pinyin-text">{line.pinyin}</div>}
                        {showHanzi && <div className="hanzi-text">{line.hanzi}</div>}
                      </div>
                      <button 
                        className="btn-play-line" 
                        onClick={() => handlePlayLine(line.hanzi)}
                        title="Nghe câu này"
                      >
                        <Volume2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Translation Section */}
              {showTranslation && (
                <div className="dialogue-translation-section">
                  <h3 className="translation-title">DỊCH NGHĨA</h3>
                  <div className="translation-lines">
                    {activeDialogue.lines.map((line, index) => (
                      <div key={index} className="translation-line">
                        <span className="speaker-name">{line.speaker}:</span>
                        <span className="vietnamese-text">{line.vietnamese}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar TOC */}
      <div className="dialogue-sidebar">
        <div className="toc-card">
          <div className="toc-header">
            <List size={18} className="blue-icon" />
            <h3>Mục lục</h3>
          </div>
          <div className="toc-list">
            {dialogues.map((d, idx) => (
              <button
                key={d.id}
                className={`toc-item ${activeDialogueId === d.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveDialogueId(d.id);
                  setIsExpanded(true);
                }}
              >
                <span className="toc-index">{idx + 1}</span>
                <span className="toc-title">{d.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
