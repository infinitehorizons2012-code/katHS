import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';

export const LessonHeader = ({ 
  lesson, 
  activeTab, 
  onTabChange, 
  isCompleted, 
  onToggleCompleted,
  onBack 
}) => {
  const tabs = [
    { id: 'overview', label: 'Tổng thể' },
    { id: 'vocabulary', label: 'Từ vựng' },
    { id: 'sentence', label: 'Câu' },
    { id: 'dialogue', label: 'Bài khóa' },
    { id: 'grammar', label: 'Ngữ pháp' },
    { id: 'transferTest', label: 'Transfer Test' },
    { id: 'reading', label: 'Reading' },
    { id: 'exercise', label: 'Bài tập' }
  ];

  return (
    <div className="lesson-header-card">
      <div className="lesson-header-top">
        <div className="lesson-title-area">
          <button className="btn-back-circle" onClick={onBack} title="Quay lại danh sách">
            <ArrowLeft size={18} />
          </button>
          <div className="title-text-group">
            <div className="main-hanzi-title">{lesson.titleHanzi}</div>
            <div className="main-vi-subtitle">({lesson.titleVietnamese})</div>
          </div>
        </div>

        {/* Completion Pill Button matching screenshot */}
        <button 
          className={`btn-complete-pill ${isCompleted ? 'completed' : 'pending'}`}
          onClick={onToggleCompleted}
        >
          {isCompleted && <Check size={14} className="check-icon" />}
          <span>{isCompleted ? 'Hoàn thành' : 'Đánh dấu xong'}</span>
        </button>
      </div>

      {/* Main Tabs Navigation Bar matching screenshot */}
      <div className="tabs-bar">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
