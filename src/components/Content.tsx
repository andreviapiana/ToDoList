import styles from './Content.module.css';
import { PlusCircle } from 'phosphor-react';

import { Card } from './Card';
import { EmptyCard } from './EmptyCard';

import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface TaskProps {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function Content() {
  const [tasks, setTasks] = useState<TaskProps[]>(() => {
    const storageTasks = localStorage.getItem('@ToDoList:tasks');

    if (storageTasks) {
      return JSON.parse(storageTasks);
    }

    return [];
  });
  const [newTask, setNewTask] = useState('');
  const isNewTaskEmpty = newTask.length === 0;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if(!newTask.trim()) {
      return (
        alert('Por favor, informe um nome válido para a tarefa!')
      )
    } else {
      const newCreatedTask: TaskProps = {
        id: uuidv4(),
        content: newTask,
        isCompleted: false
      }
  
      setTasks([...tasks, newCreatedTask]);
      setNewTask('');
    }
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setNewTask(event.target.value);
  }

  console.log(tasks);

  function handleDeleteTask(id: string) {
    if (confirm('Tem certeza que deseja remover a tarefa?') === true) {
      const filteredTasks = tasks.filter(task => task.id !== id)
      setTasks(filteredTasks);
    } else {
      return;
    }
  };

  function handleToggleTask(id: string) {
    const updatedTask = tasks.map(task => task.id === id ? {
      ...task,
      isCompleted: !task.isCompleted
    } : task)

    setTasks(updatedTask);
  }

  const completedTasks = `${tasks.filter(task => task.isCompleted).length} de ${tasks.length}`;

  useEffect(() => {
    localStorage.setItem('@ToDoList:tasks', JSON.stringify(tasks));
  }, [tasks])
  
  return (
    <div className={styles.content}>

      <form className={styles.form} onSubmit={handleCreateNewTask}>
        <input 
          className={styles.input} 
          type="text" 
          placeholder='Adicione uma nova tarefa'
          value={newTask}
          onChange={handleNewTaskChange}
          required
        />

        <button 
          className={styles.button}
          type='submit'
          disabled={isNewTaskEmpty}
        >
          Criar <PlusCircle size={21} />
        </button>
      </form>

      <section>
        <div className={styles.counter}>
          <p>Tarefas criadas <span>{tasks.length}</span></p>
          <p>Concluídas <span>{tasks.length === 0 ? 0 : completedTasks}</span></p>
        </div>
      </section>

      {tasks.length === 0 ?
        <EmptyCard />
      : 
        <div>
          {tasks.map(task => {
            return (
              <Card 
                key={task.id} 
                task={task}
                handleDeleteTask={() => handleDeleteTask(task.id)}
                handleToggleTask={() => handleToggleTask(task.id)}
              />
            )
          })}
        </div>
      }
    </div>
  )
}