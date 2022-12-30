import styles from './EmptyCard.module.css';
import Clipboard from '../assets/Clipboard.svg';

export function EmptyCard() {
  return (
      <div className={styles.emptyCard}>
        <img src={Clipboard} alt="Logotipo do ToDo List" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
  );
}