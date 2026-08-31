import React, { useState } from 'react';
import { BookOpen, Search, CheckCircle, ChevronDown, Award, Globe } from 'lucide-react';
import { hskLessons } from '../data/hskData';

export const Header = ({ currentLessonId, onSelectLesson, completedLessons }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentLesson = hskLessons.find(l => l.id === currentLessonId) || hskLessons[0];
  const progressPercentage = Math.round((completedLessons.length / hskLessons.length) * 100);

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-brand">
          <div className="brand-logo">
            <BookOpen className="logo-icon" size={24} />
          </div>
          <div className="brand-title-box">
            <h1 className="brand-title">KatHS - Tiếng Trung HSK</h1>
            <span className="brand-badge">Giáo trình HSK Chuẩn</span>
          </div>
        </div>

        {/* Lesson Switcher Dropdown */}
        <div className="lesson-switcher">
          <button 
            className="switcher-button" 
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="switcher-label">Bài học:</span>
            <span className="switcher-current">Bài {currentLesson.lessonNumber}: {currentLesson.titleHanzi} ({currentLesson.titleVietnamese})</span>
            <ChevronDown size={16} className={`switcher-arrow ${dropdownOpen ? 'open' : ''}`} />
          </button>

          {dropdownOpen && (
            <div className="switcher-menu" onClick={() => setDropdownOpen(false)}>
              <div className="menu-header">Danh sách bài học HSK 1</div>
              {hskLessons.map(lesson => (
                <div 
                  key={lesson.id}
                  className={`menu-item ${lesson.id === currentLessonId ? 'active' : ''}`}
                  onClick={() => onSelectLesson(lesson.id)}
                >
                  <div className="item-num">Bài {lesson.lessonNumber}</div>
                  <div className="item-title">
                    <span className="hanzi">{lesson.titleHanzi}</span>
                    <span className="vi">{lesson.titleVietnamese}</span>
                  </div>
                  {completedLessons.includes(lesson.id) && (
                    <CheckCircle size={16} className="item-check" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="header-progress">
          <div className="progress-text">
            <Award size={16} /> Tiến độ: <strong>{progressPercentage}%</strong>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
      </div>
    </header>
  );
};
