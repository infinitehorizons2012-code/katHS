import React, { useState } from 'react';
import { readingData } from '../data/readingData';
import { BookOpen, Users, Info } from 'lucide-react';

export function ReadingTab() {
  const [activeScenario, setActiveScenario] = useState(1);

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
              <h4 className="dialogue-header">Chuỗi hội thoại chuẩn (100% Closed Lexicon):</h4>
              <div className="dialogue-list">
                {scenario.dialogues.map((line, index) => (
                  <div key={index} className={`dialogue-bubble-wrapper ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="speaker-avatar">
                      <Users size={16} />
                      <span className="speaker-name">{line.speaker}</span>
                    </div>
                    <div className="dialogue-bubble">
                      {line.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {scenario.note && (
              <div className="scenario-note-box">
                <Info size={18} />
                <span>{scenario.note}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
