import React, { useState } from 'react';
import { MessageSquare, Volume2, Eye, EyeOff, Play } from 'lucide-react';
import { speakChinese } from '../utils/speech';

export const DialogueTab = ({ dialogues = [] }) => {
  const [showPinyin, setShowPinyin] = useState(true);
  const [showMeaning, setShowMeaning] = useState(true);

  const handlePlayFullDialogue = (lines) => {
    let delay = 0;
    lines.forEach(line => {
      setTimeout(() => {
        speakChinese(line.hanzi);
      }, delay);
      delay += 2500; // 2.5 seconds spacing
    });
  };

  return (
    <div className="dialogue-tab-container">
      {/* Control Bar */}
      <div className="dialogue-toolbar">
        <div className="toolbar-title">
          <MessageSquare size={20} className="blue-icon" />
          <h2>Nội dung Bài khóa (Hội thoại)</h2>
        </div>
        <div className="toolbar-controls">
          <button 
            className={`btn-toggle ${showPinyin ? 'active' : ''}`}
            onClick={() => setShowPinyin(!showPinyin)}
          >
            {showPinyin ? <Eye size={16} /> : <EyeOff size={16} />}
            <span>Pinyin</span>
          </button>
          <button 
            className={`btn-toggle ${showMeaning ? 'active' : ''}`}
            onClick={() => setShowMeaning(!showMeaning)}
          >
            {showMeaning ? <Eye size={16} /> : <EyeOff size={16} />}
            <span>Dịch nghĩa</span>
          </button>
        </div>
      </div>

      {/* Dialogue Cards */}
      <div className="dialogue-list">
        {dialogues.map((dialogue) => (
          <div key={dialogue.id} className="dialogue-card">
            <div className="dialogue-card-header">
              <div>
                <h3 className="dialogue-title">{dialogue.title}</h3>
                <p className="dialogue-context">Bối cảnh: {dialogue.context}</p>
              </div>
              <button 
                className="btn-play-all"
                onClick={() => handlePlayFullDialogue(dialogue.lines)}
              >
                <Play size={16} /> Nghe toàn bài
              </button>
            </div>

            <div className="dialogue-lines">
              {dialogue.lines.map((line, idx) => (
                <div key={idx} className="dialogue-line">
                  <div className="speaker-avatar">
                    {line.speaker.charAt(0)}
                  </div>
                  <div className="line-content">
                    <div className="speaker-name">{line.speaker}</div>
                    <div className="line-hanzi">{line.hanzi}</div>
                    {showPinyin && <div className="line-pinyin">{line.pinyin}</div>}
                    {showMeaning && <div className="line-vietnamese">{line.vietnamese}</div>}
                  </div>
                  <button 
                    className="btn-line-speaker"
                    onClick={() => speakChinese(line.hanzi)}
                    title="Nghe câu này"
                  >
                    <Volume2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
