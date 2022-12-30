import styles from './Card.module.css';
import { Trash } from 'phosphor-react';
import { TaskProps } from './Content';

interface Task {
  task: TaskProps;
  handleDeleteTask: () => void;
  handleToggleTask: () => void;
}

export function Card({ task, handleDeleteTask, handleToggleTask }: Task ) {

  return (
      <div className={styles.card}>
        <label className={styles.container}>
          <input 
            type="checkbox" 
            defaultChecked={task.isCompleted} 
            onClick={handleToggleTask} 
          />
          <span className={styles.checkmark}></span>
        </label>
        <p className={task.isCompleted ? styles.isCompleted : ''}>{task.content}</p>
        <button>
          <Trash 
            size={21}
            onClick={handleDeleteTask} 
          />
        </button>
      </div>
  );
}