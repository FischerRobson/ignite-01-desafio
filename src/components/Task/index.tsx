import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { ITask } from '../../App'
import styles from './styles.module.css'

interface TaskProps {
  task: ITask;
  removeTask: (task: ITask) => void;
  changeTaskStatus: (task: ITask) => void;
}

export function Task({ task, changeTaskStatus, removeTask }: TaskProps) {
  return (
    <div className={styles.taskContainer}>
      <div>
        {!task.isCompleted
          ? <Circle onClick={() => changeTaskStatus(task)} className={styles.circle} size={20} weight='bold' />
          : <CheckCircle onClick={() => changeTaskStatus(task)} className={styles.circleCompleted} size={20} weight='bold' />}
      </div>
      <section className={styles.alignLeft}>
        <h3 className={task.isCompleted ? styles.taskCompleted : ''}>{task.description}</h3>
      </section >
      <Trash onClick={() => removeTask(task)} className={styles.trash} size={20} />
    </div>
  )
}