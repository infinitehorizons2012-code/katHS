import React, { useState } from 'react';
import { readingData } from '../data/readingData';
import { BookOpen, Info, CheckCircle2 } from 'lucide-react';

export function ReadingTab() {
  const [activeScenario, setActiveScenario] = useState(1);

  // Helper function to get initials for avatar
  const getInitials = (name) => {
    if (!name) return 'U';
    const words = name.split(' ');
    if (words.length >= 2) {
      return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  // Helper function to assign a color based on the speaker's name
  const getAvatarColor = (name) => {
    const colors = ['#f59e0b', '#3b82f6', '#10b981', '#8b5cf6', '#ec4899', '#f43f5e'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className="tab-pane active fade-in reading-container">
      <div className="tab-header">
        <h2>Tình huống Ứng dụng Thực chiến tại Doanh nghiệp FDI / Xuất nhập khẩu / Nhân sự</h2>
        <p className="tab-subtitle">Đọc hiểu và ứng dụng hội thoại trong môi trường công sở thực tế</p>
      </div>

      <div className="level-tabs">
        {readingData.map(scenario => (
          <button
            key={scenario.id}
            className={`level-tab-btn ${activeScenario === scenario.id ? 'active' : ''}`}
            onClick={() => setActiveScenario(scenario.id)}
          >
            Tình huống {scenario.id}
          </button>
        ))}
      </div>

      <div className="scenario-content">
        {readingData.filter(s => s.id === activeScenario).map(scenario => (
          <div key={scenario.id} className="scenario-card fade-in">
            <h3 className="scenario-title">
              <BookOpen size={24} className="title-icon" />
              {scenario.title}
            </h3>
            
            <div className="scenario-context-box">
              <Info size={20} className="context-icon" />
              <div>
                <strong>Kịch bản:</strong> {scenario.context}
              </div>
            </div>

            <div className="scenario-dialogue-section">
              <h4 className="dialogue-header">
                <CheckCircle2 size={18} className="header-icon" />
                Chuỗi hội thoại chuẩn (100% Closed Lexicon):
              </h4>
              <div className="chat-window">
                {scenario.dialogues.map((line, index) => {
                  const isRight = index % 2 !== 0; // Alternate left and right for realism
                  
                  return (
                    <div key={index} className={`chat-message-row ${isRight ? 'right' : 'left'}`}>
                      {!isRight && (
                        <div 
                          className="chat-avatar" 
                          style={{ backgroundColor: getAvatarColor(line.speaker) }}
                        >
                          {getInitials(line.speaker)}
                        </div>
                      )}
                      
                      <div className="chat-message-content">
                        <div className="chat-speaker-name">{line.speaker}</div>
                        <div className={`chat-bubble ${isRight ? 'bubble-right' : 'bubble-left'}`}>
                          {line.text}
                        </div>
                      </div>

                      {isRight && (
                        <div 
                          className="chat-avatar" 
                          style={{ backgroundColor: getAvatarColor(line.speaker) }}
                        >
                          {getInitials(line.speaker)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {scenario.note && (
              <div className="scenario-note-box">
                <Info size={18} className="note-icon" />
                <span>{scenario.note}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
