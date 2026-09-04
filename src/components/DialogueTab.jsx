import React, { useState, useEffect } from 'react';
import { BookOpen, Volume2, ChevronUp, ChevronDown, List, Play, Languages, TypeOutline } from 'lucide-react';
import { speakChinese } from '../utils/speech';

export const DialogueTab = ({ dialogues = [] }) => {
  const [activeDialogueId, setActiveDialogueId] = useState(dialogues[0]?.id || null);
  const [isExpanded, setIsExpanded] = useState(true);
  
  // View Modes
  const [showPinyin, setShowPinyin] = useState(true);
  const [showHanzi, setShowHanzi] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  
  // Exercise Modes: 'read', 'type', 'listen', 'translate'
  const [activeMode, setActiveMode] = useState('read');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null); // 'correct', 'incorrect'

  const activeDialogue = dialogues.find(d => d.id === activeDialogueId) || dialogues[0];

  useEffect(() => {
    // Reset exercise state when dialogue changes
    setActiveMode('read');
    setCurrentLineIndex(0);
    setUserInput('');
    setFeedback(null);
  }, [activeDialogueId]);

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

  const handleModeChange = (mode) => {
    if (activeMode === mode) {
      setActiveMode('read'); // Toggle off
    } else {
      setActiveMode(mode);
      setCurrentLineIndex(0);
      setUserInput('');
      setFeedback(null);
    }
  };

  const currentLine = activeDialogue.lines[currentLineIndex];

  const handleCheck = () => {
    if (!userInput.trim()) return;
    
    let isCorrect = false;
    const cleanInput = userInput.trim().replace(/[.,!?。，！？]/g, '').toLowerCase();
    
    if (activeMode === 'type' || activeMode === 'listen') {
      const cleanTarget = currentLine.hanzi.replace(/[.,!?。，！？]/g, '');
      isCorrect = cleanInput === cleanTarget;
    } else if (activeMode === 'translate') {
      const cleanTarget = currentLine.hanzi.replace(/[.,!?。，！？]/g, '');
      isCorrect = cleanInput === cleanTarget; // Simple exact match for demo
    }
    
    setFeedback(isCorrect ? 'correct' : 'incorrect');
  };

  const handleNext = () => {
    if (currentLineIndex < activeDialogue.lines.length - 1) {
      setCurrentLineIndex(currentLineIndex + 1);
      setUserInput('');
      setFeedback(null);
    } else {
      setActiveMode('read'); // Finished all lines
    }
  };

  const handleRetry = () => {
    setUserInput('');
    setFeedback(null);
  };

  const handleExit = () => {
    setActiveMode('read');
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
                  className={`toolbar-btn ${showPinyin && activeMode === 'read' ? 'active' : ''}`}
                  onClick={() => { setShowPinyin(!showPinyin); setActiveMode('read'); }}
                >
                  <span className="font-bold text-blue-600">A</span> Pinyin
                </button>
                <button 
                  className={`toolbar-btn ${showHanzi && activeMode === 'read' ? 'active' : ''}`}
                  onClick={() => { setShowHanzi(!showHanzi); setActiveMode('read'); }}
                >
                  Chữ Hán
                </button>
                <button 
                  className={`toolbar-btn ${activeMode === 'type' ? 'active' : ''}`}
                  onClick={() => handleModeChange('type')}
                >
                  <TypeOutline size={16} /> Gõ
                </button>
                <button 
                  className={`toolbar-btn ${activeMode === 'listen' ? 'active' : ''}`}
                  onClick={() => handleModeChange('listen')}
                >
                  <Volume2 size={16} /> Nghe
                </button>
                <button 
                  className={`toolbar-btn ${activeMode === 'translate' ? 'active' : ''}`}
                  onClick={() => handleModeChange('translate')}
                >
                  <Languages size={16} /> Dịch
                </button>
              </div>

              {/* READ MODE */}
              {activeMode === 'read' && (
                <>
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
                </>
              )}

              {/* EXERCISE MODES */}
              {activeMode !== 'read' && currentLine && (
                <div className="exercise-container">
                  <div className="exercise-prompt-box">
                    {activeMode === 'type' && (
                      <>
                        <h4 className="exercise-title text-blue-600">GÕ LẠI CÂU CHỮ HÁN:</h4>
                        <div className="exercise-target">
                          <strong>{currentLine.speaker}: </strong> {currentLine.hanzi}
                        </div>
                      </>
                    )}

                    {activeMode === 'listen' && (
                      <>
                        <h4 className="exercise-title text-purple-600" style={{ textAlign: 'center' }}>NGHE VÀ GÕ LẠI CHỮ HÁN</h4>
                        <div className="listen-btn-wrapper">
                          <button className="big-listen-btn" onClick={() => handlePlayLine(currentLine.hanzi)}>
                            <Volume2 size={32} />
                          </button>
                          <span className="listen-hint">A đang nói...</span>
                        </div>
                      </>
                    )}

                    {activeMode === 'translate' && (
                      <>
                        <h4 className="exercise-title text-orange-600">DỊCH NGHĨA SANG TIẾNG TRUNG:</h4>
                        <div className="exercise-target">
                          <strong>{currentLine.speaker}: </strong> <em>{currentLine.vietnamese}</em>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="exercise-input-area">
                    <input 
                      type="text" 
                      className={`exercise-input ${feedback === 'correct' ? 'border-green-500 bg-green-50' : feedback === 'incorrect' ? 'border-red-500 bg-red-50' : ''}`}
                      placeholder={activeMode === 'type' ? 'Gõ lại câu chữ Hán đầy đủ...' : activeMode === 'listen' ? 'Nghe được gì, gõ nấy...' : 'Dịch sang tiếng Trung...'}
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter') handleCheck(); }}
                      autoFocus
                    />
                    
                    {feedback === 'correct' && <p className="text-green-600 mt-2 font-medium">✨ Chính xác!</p>}
                    {feedback === 'incorrect' && <p className="text-red-600 mt-2 font-medium">❌ Chưa đúng, thử lại nhé!</p>}

                    <div className="exercise-actions mt-4">
                      <div className="action-group-left">
                        <button className="btn-check" onClick={handleCheck}>Kiểm tra</button>
                        <button className="btn-secondary" onClick={handleNext}>Câu tiếp</button>
                        <button className="btn-secondary" onClick={handleRetry}>Làm lại</button>
                      </div>
                      <button className="btn-exit" onClick={handleExit}>Thoát</button>
                    </div>

                    <div className="exercise-progress mt-6">
                      <span className="text-sm text-gray-500">Câu {currentLineIndex + 1}/{activeDialogue.lines.length}</span>
                    </div>
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
