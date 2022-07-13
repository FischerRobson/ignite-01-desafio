import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'
import styles from './app.module.css'
import { useEffect, useState } from 'react'
import { Clipboard, TagSimple } from 'phosphor-react'
import { Task } from './components/Task'

export interface ITask {
  description: string;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<ITask[]>([])
  const [newTask, setNewTask] = useState('')

  function addNewTask() {
    if (!newTask) return;
    setTasks([...tasks, { description: newTask, isCompleted: false }]);
    setNewTask('')

  }

  function removeTask(task: ITask) {
    const newTaskList = tasks.filter(e => e.description !== task.description);
    setTasks([...newTaskList])
  }

  function changeTaskStatus(task: ITask) {
    const newTaskList = tasks.map(obj => {
      if (obj.description === task.description) {
        obj.isCompleted = !obj.isCompleted
      }
      return obj;
    })

    setTasks([...newTaskList])
  }

  function getAmountTasksCompleted() {
    const completedTasks = tasks.filter(e => e.isCompleted === true)
    return `${completedTasks.length} de ${tasks.length}`
  }

  return (
    <>
      <Header />
      <div className={styles.container}>

        <div className={styles.form}>
          <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <Button onClick={addNewTask} />
        </div>

        <main>
          <header>
            <h3 className={styles.created}>Tarefas criadas <span>{tasks.length}</span></h3>
            <h3 className={styles.done}>Concluidas <span>{getAmountTasksCompleted()}</span></h3>
          </header>

          <div className={styles.content}>
            {tasks.length > 0 ? tasks.map(task => {
              return (
                <Task
                  key={task.description}
                  task={task}
                  removeTask={removeTask}
                  changeTaskStatus={changeTaskStatus}
                />
              )
            }) : (
              <div className={styles.emptyList}>
                <Clipboard size={80} />
                <p>Voce ainda nao tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            )}
          </div>
        </main>

      </div>
    </>
  )
}

export default App
