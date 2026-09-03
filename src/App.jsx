import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Breadcrumb } from './components/Breadcrumb';
import { LessonHeader } from './components/LessonHeader';
import { VocabularyTab } from './components/VocabularyTab';
import { DialogueTab } from './components/DialogueTab';
import { GrammarTab } from './components/GrammarTab';
import { TransferTestTab } from './components/TransferTestTab';
import { ExerciseTab } from './components/ExerciseTab';
import { hskLessons } from './data/hskData';

export function App() {
  const [currentLessonId, setCurrentLessonId] = useState('hsk1-lesson1');
  const [activeTab, setActiveTab] = useState('vocabulary'); // 'vocabulary', 'dialogue', 'grammar', 'exercise'
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const saved = localStorage.getItem('katHS_completed_lessons');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('katHS_completed_lessons', JSON.stringify(completedLessons));
    } catch (e) {
      console.error(e);
    }
  }, [completedLessons]);

  const currentLesson = hskLessons.find(l => l.id === currentLessonId) || hskLessons[0];
  const isLessonCompleted = completedLessons.includes(currentLessonId);

  const handleToggleCompleted = () => {
    if (isLessonCompleted) {
      setCompletedLessons(completedLessons.filter(id => id !== currentLessonId));
    } else {
      setCompletedLessons([...completedLessons, currentLessonId]);
    }
  };

  return (
    <div className="app-container">
      {/* Top Bar Header */}
      <Header 
        currentLessonId={currentLessonId}
        onSelectLesson={(id) => {
          setCurrentLessonId(id);
          setActiveTab('vocabulary');
        }}
        completedLessons={completedLessons}
      />

      {/* Main Page Area */}
      <main className="main-content">
        {/* Breadcrumb matching user screenshot */}
        <Breadcrumb lesson={currentLesson} />

        {/* Lesson Card Header matching user screenshot */}
        <LessonHeader 
          lesson={currentLesson}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isCompleted={isLessonCompleted}
          onToggleCompleted={handleToggleCompleted}
          onBack={() => {
            const prevIndex = hskLessons.findIndex(l => l.id === currentLessonId) - 1;
            if (prevIndex >= 0) {
              setCurrentLessonId(hskLessons[prevIndex].id);
            }
          }}
        />

        {/* Tab Content Renderer */}
        {activeTab === 'vocabulary' && (
          <VocabularyTab vocabulary={currentLesson.vocabulary} />
        )}

        {activeTab === 'dialogue' && (
          <DialogueTab dialogues={currentLesson.dialogues} />
        )}

        {activeTab === 'grammar' && (
          <GrammarTab grammar={currentLesson.grammar} />
        )}

        {activeTab === 'transferTest' && (
          <TransferTestTab />
        )}

        {activeTab === 'exercise' && (
          <ExerciseTab 
            exercises={currentLesson.exercises} 
            onCompleteLesson={() => {
              if (!isLessonCompleted) {
                setCompletedLessons([...completedLessons, currentLessonId]);
              }
            }}
          />
        )}
      </main>

    </div>
  );
}

export default App;
