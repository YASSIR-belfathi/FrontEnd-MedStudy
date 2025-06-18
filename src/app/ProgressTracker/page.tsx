'use client';

import React, { JSX, useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FaList } from "react-icons/fa6";
import { TbProgressCheck } from "react-icons/tb";
import { MdFileDownloadDone } from "react-icons/md";
import { FaPause } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";


// Type definitions
interface Task {
  id: string;
  subject: string;
  title: string;
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  priorityColor: string;
}

interface Column {
  id: string;
  title: string;
  icon: JSX.Element;
  color: string;
  tasks: Task[];
}

interface Stat {
  value: number | string;
  label: string;
  color: string;
}

interface NewTaskForm {
  subject: string;
  title: string;
  category: string;
  priority: 'High' | 'Medium' | 'Low';
}

// Modal Component
interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (task: NewTaskForm) => void;
  columnTitle: string;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSubmit, columnTitle }) => {
  const [formData, setFormData] = useState<NewTaskForm>({
    subject: 'OCM',
    title: '',
    category: '',
    priority: 'Medium'
  });

  const subjects = ['OCM', 'Exam', 'Online', 'Assignment'];
  const priorities: Array<'High' | 'Medium' | 'Low'> = ['High', 'Medium', 'Low'];

  const handleSubmit = () => {
    if (formData.title.trim() && formData.category.trim()) {
      onSubmit(formData);
      setFormData({ subject: 'OCM', title: '', category: '', priority: 'Medium' });
      onClose();
    }
  };

  const handleChange = (field: keyof NewTaskForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Add Task to {columnTitle}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <select
              value={formData.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Task Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Enter task title..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              placeholder="e.g., Cardiology, Anatomy, etc."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority
            </label>
            <select
              value={formData.priority}
              onChange={(e) => handleChange('priority', e.target.value as 'High' | 'Medium' | 'Low')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {priorities.map(priority => (
                <option key={priority} value={priority}>{priority}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sortable Task Item Component
interface SortableTaskProps {
  task: Task;
  isDragging?: boolean;
}

const SortableTask: React.FC<SortableTaskProps> = ({ task, isDragging = false }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({
    id: task.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-gray-50 rounded-lg p-3 border-l-4 border-gray-200 flex-shrink-0 opacity-50"
      >
        {/* Placeholder while dragging */}
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`bg-gray-50 rounded-lg p-3 border-l-4 border-gray-200 flex-shrink-0 cursor-move transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-95 ${
        isSortableDragging ? 'opacity-50 z-50' : ''
      }`}
    >
      <div className="text-xs text-gray-500 font-medium mb-1">
        {task.subject}
      </div>
      <div className="text-sm font-medium text-gray-800 mb-2">
        {task.title}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {task.category}
        </span>
        <span className={`text-xs font-medium ${task.priorityColor}`}>
          ● {task.priority}
        </span>
      </div>
    </div>
  );
};

// Task Item for Drag Overlay
const TaskOverlay: React.FC<{ task: Task }> = ({ task }) => (
  <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-400 flex-shrink-0 shadow-2xl rotate-3 scale-105 border">
    <div className="text-xs text-gray-500 font-medium mb-1">
      {task.subject}
    </div>
    <div className="text-sm font-medium text-gray-800 mb-2">
      {task.title}
    </div>
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-500">
        {task.category}
      </span>
      <span className={`text-xs font-medium ${task.priorityColor}`}>
        ● {task.priority}
      </span>
    </div>
  </div>
);

const ProgressTracker: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: 'todo',
      title: 'To Do',
      icon: <FaList />,
      color: 'text-orange-500',
      tasks: [
        {
          id: 'task-1',
          subject: 'OCM',
          title: 'Complete Cardiology Module 3',
          category: 'Cardiology',
          priority: 'High',
          priorityColor: 'text-red-500'
        },
        {
          id: 'task-2',
          subject: 'OCM',
          title: 'Respiratory System OCM Set 1',
          category: 'Respiratory',
          priority: 'Medium',
          priorityColor: 'text-orange-500'
        },
        {
          id: 'task-3',
          subject: 'Exam',
          title: 'Midterm Preparation - Neurology',
          category: 'Neurology',
          priority: 'High',
          priorityColor: 'text-red-500'
        }
      ]
    },
    {
      id: 'inprogress',
      title: 'In Progress',
      icon: <TbProgressCheck />,
      color: 'text-blue-500',
      tasks: [
        {
          id: 'task-4',
          subject: 'OCM',
          title: 'Anatomy & Physiology Chapter 5',
          category: 'Anatomy',
          priority: 'Medium',
          priorityColor: 'text-orange-500'
        },
        {
          id: 'task-5',
          subject: 'OCM',
          title: 'Pathology Practice Questions',
          category: 'Pathology',
          priority: 'Low',
          priorityColor: 'text-green-500'
        }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      icon: <MdFileDownloadDone />,
      color: 'text-green-500',
      tasks: [
        {
          id: 'task-6',
          subject: 'OCM',
          title: 'Immunology Quiz Set 2',
          category: 'Pharmacology',
          priority: 'Medium',
          priorityColor: 'text-orange-500'
        },
        {
          id: 'task-7',
          subject: 'Online',
          title: 'Immunology Lecture Series',
          category: 'Immunology',
          priority: 'Low',
          priorityColor: 'text-green-500'
        },
        {
          id: 'task-8',
          subject: 'Exam',
          title: 'Biochemistry Mock Test',
          category: 'Biochemistry',
          priority: 'High',
          priorityColor: 'text-red-500'
        }
      ]
    },
    {
      id: 'paused',
      title: 'Paused',
      icon: <FaPause />,
      color: 'text-gray-500',
      tasks: [
        {
          id: 'task-9',
          subject: 'OCM',
          title: 'Pharmacology Quiz Set 2',
          category: 'Pharmacology',
          priority: 'Medium',
          priorityColor: 'text-orange-500'
        },
        {
          id: 'task-10',
          subject: 'Online',
          title: 'Immunology Lecture Series',
          category: 'Immunology',
          priority: 'Low',
          priorityColor: 'text-green-500'
        },
        {
          id: 'task-11',
          subject: 'Exam',
          title: 'Biochemistry Mock Test',
          category: 'Biochemistry',
          priority: 'High',
          priorityColor: 'text-red-500'
        }
      ]
    },
    {
      id: 'canceled',
      title: 'Canceled',
      icon: <MdCancel />,
      color: 'text-red-500',
      tasks: [
        {
          id: 'task-12',
          subject: 'OCM',
          title: 'Pharmacology Quiz Set 2',
          category: 'Pharmacology',
          priority: 'Medium',
          priorityColor: 'text-orange-500'
        },
        {
          id: 'task-13',
          subject: 'Online',
          title: 'Immunology Lecture Series',
          category: 'Immunology',
          priority: 'Low',
          priorityColor: 'text-green-500'
        },
        {
          id: 'task-14',
          subject: 'Exam',
          title: 'Biochemistry Mock Test',
          category: 'Biochemistry',
          priority: 'High',
          priorityColor: 'text-red-500'
        }
      ]
    }
  ]);

  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColumnId, setSelectedColumnId] = useState<string>('');

  // Configure sensors for better touch support
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // 8px movement required to start dragging
      },
    })
  );

  // Calculate stats based on current state
  const stats: Stat[] = [
    { 
      value: columns.reduce((total, col) => total + col.tasks.length, 0), 
      label: 'Total Tasks', 
      color: 'text-blue-600' 
    },
    { 
      value: columns.find(col => col.id === 'inprogress')?.tasks.length || 0, 
      label: 'Active', 
      color: 'text-blue-600' 
    },
    { 
      value: columns.find(col => col.id === 'done')?.tasks.length || 0, 
      label: 'Completed', 
      color: 'text-blue-600' 
    },
    { 
      value: Math.round(((columns.find(col => col.id === 'done')?.tasks.length || 0) / 
        Math.max(columns.reduce((total, col) => total + col.tasks.length, 0), 1)) * 100) + '%', 
      label: 'Completion Rate', 
      color: 'text-blue-600' 
    }
  ];

  // Find task and its column
  const findTaskAndColumn = (taskId: string) => {
    for (const column of columns) {
      const task = column.tasks.find(t => t.id === taskId);
      if (task) {
        return { task, column };
      }
    }
    return null;
  };

  const handleAddTask = (columnId: string) => {
    setSelectedColumnId(columnId);
    setIsModalOpen(true);
  };

  const handleTaskSubmit = (taskData: NewTaskForm) => {
    const priorityColorMap = {
      'High': 'text-red-500',
      'Medium': 'text-orange-500',
      'Low': 'text-green-500'
    };

    const newTask: Task = {
      id: `task-${Date.now()}`,
      subject: taskData.subject,
      title: taskData.title,
      category: taskData.category,
      priority: taskData.priority,
      priorityColor: priorityColorMap[taskData.priority]
    };

    setColumns(prevColumns => 
      prevColumns.map(column => 
        column.id === selectedColumnId 
          ? { ...column, tasks: [...column.tasks, newTask] }
          : column
      )
    );
  };

  const handleDragStart = (event: DragStartEvent) => {
    const result = findTaskAndColumn(event.active.id as string);
    if (result) {
      setActiveTask(result.task);
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    // Find the active task and column
    const activeResult = findTaskAndColumn(activeId);
    if (!activeResult) return;

    const { task: activeTask, column: activeColumn } = activeResult;

    // Check if we're hovering over a column or task
    let overColumn = columns.find(col => col.id === overId);
    if (!overColumn) {
      // We might be hovering over a task, find its column
      const overResult = findTaskAndColumn(overId);
      if (overResult) {
        overColumn = overResult.column;
      }
    }

    if (!overColumn || activeColumn.id === overColumn.id) return;

    // Move task to different column
    setColumns(prevColumns => {
      return prevColumns.map(column => {
        if (column.id === activeColumn.id) {
          // Remove from source column
          return {
            ...column,
            tasks: column.tasks.filter(task => task.id !== activeId)
          };
        } else if (column.id === overColumn.id) {
          // Add to target column
          return {
            ...column,
            tasks: [...column.tasks, activeTask]
          };
        }
        return column;
      });
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    // Find the active task's current column
    const activeResult = findTaskAndColumn(activeId);
    if (!activeResult) return;

    const { column: activeColumn } = activeResult;

    // Check if we're reordering within the same column
    const overResult = findTaskAndColumn(overId);
    if (overResult && overResult.column.id === activeColumn.id) {
      const oldIndex = activeColumn.tasks.findIndex(task => task.id === activeId);
      const newIndex = activeColumn.tasks.findIndex(task => task.id === overId);

      if (oldIndex !== newIndex) {
        setColumns(prevColumns => {
          return prevColumns.map(column => {
            if (column.id === activeColumn.id) {
              return {
                ...column,
                tasks: arrayMove(column.tasks, oldIndex, newIndex)
              };
            }
            return column;
          });
        });
      }
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="p-2 bg-gray-50 min-h-screen">
        <div className="grid grid-cols-4 gap-6 mb-6 bg-white px-4 py-4 rounded-xl shadow-sm transition-colors duration-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-4">
          {columns.map((column) => (
            <div 
              key={column.id} 
              id={column.id}
              className="bg-white rounded-lg shadow-sm h-[600px] flex flex-col text-gray-600"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between p-4 pb-2 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{column.icon}</span>
                  <span className="font-medium text-gray-800">{column.title}</span>
                </div>
                <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">
                  {column.tasks.length}
                </span>
              </div>

              {/* Tasks Container */}
              <div className="flex-1 overflow-y-auto px-2 pb-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 mb-4">
                <SortableContext 
                  items={column.tasks.map(task => task.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="space-y-3">
                    {column.tasks.map((task) => (
                      <SortableTask
                        key={task.id}
                        task={task}
                        isDragging={activeTask?.id === task.id}
                      />
                    ))}
                    
                    {/* Add Task Button */}
                    <button 
                      onClick={() => handleAddTask(column.id)}
                      className="w-full text-center text-md text-gray-600 hover:text-gray-600 py-2 px-2 rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-all duration-200 flex-shrink-0 cursor-pointer bg-gray-100 hover:bg-gray-200"
                    >
                      + Add Task
                    </button>
                  </div>
                </SortableContext>
              </div>
            </div>
          ))}
        </div>

        {/* Drag Overlay */}
        <DragOverlay>
          {activeTask ? <TaskOverlay task={activeTask} /> : null}
        </DragOverlay>

        {/* Task Modal */}
        <TaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleTaskSubmit}
          columnTitle={columns.find(col => col.id === selectedColumnId)?.title || ''}
        />
      </div>
    </DndContext>
  );
};

export default ProgressTracker;