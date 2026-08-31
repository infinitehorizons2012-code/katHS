import React from 'react';

export const Breadcrumb = ({ lesson }) => {
  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <span className="breadcrumb-item text-muted">Trang chủ</span>
      <span className="breadcrumb-separator">›</span>
      <span className="breadcrumb-item text-muted">Khóa học</span>
      <span className="breadcrumb-separator">›</span>
      <span className="breadcrumb-item text-muted">{lesson?.level || 'HSK 1'}</span>
      <span className="breadcrumb-separator">›</span>
      <span className="breadcrumb-item active">Bài {lesson?.lessonNumber || 1}: {lesson?.titleVietnamese || 'Xin chào'}</span>
    </nav>
  );
};
