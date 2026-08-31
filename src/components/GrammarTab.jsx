import React from 'react';
import { BookOpenCheck, Volume2, CheckCircle2, Lightbulb } from 'lucide-react';
import { speakChinese } from '../utils/speech';

export const GrammarTab = ({ grammar = [] }) => {
  return (
    <div className="grammar-tab-container">
      <div className="grammar-toolbar">
        <BookOpenCheck size={20} className="blue-icon" />
        <h2>Điểm ngữ pháp trong bài</h2>
      </div>

      <div className="grammar-list">
        {grammar.map((item) => (
          <div key={item.id} className="grammar-card">
            <div className="grammar-card-header">
              <h3 className="grammar-title">{item.title}</h3>
              <span className="grammar-summary-tag">{item.summary}</span>
            </div>

            <div className="grammar-body">
              <p className="grammar-explanation">{item.explanation}</p>

              {item.rules && (
                <div className="grammar-rules-box">
                  <div className="rules-title">
                    <Lightbulb size={16} className="bulb-icon" /> Quy tắc cần ghi nhớ:
                  </div>
                  <ul>
                    {item.rules.map((rule, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} className="check-bullet" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.examples && item.examples.length > 0 && (
                <div className="grammar-examples-section">
                  <div className="examples-label">Ví dụ minh họa:</div>
                  <div className="examples-grid">
                    {item.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="example-item-card">
                        <div className="ex-text-group">
                          <div className="ex-hanzi">{ex.hanzi}</div>
                          <div className="ex-pinyin">{ex.pinyin}</div>
                          <div className="ex-vietnamese">{ex.vietnamese}</div>
                        </div>
                        <button 
                          className="btn-ex-audio"
                          onClick={() => speakChinese(ex.hanzi)}
                          title="Phát âm ví dụ"
                        >
                          <Volume2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
