import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'
import styles from './app.module.css'
import { useState } from 'react'
import { Clipboard } from 'phosphor-react'

function App() {

  const [tasks, setTasks] = useState<string[]>([])
  const [newTask, setNewTask] = useState('')

  function addNewTask() {
    if (!newTask) return;
    setTasks([...tasks, newTask]);
    setNewTask('')
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
            <h3 className={styles.created}>Tarefas criadas <span>0</span></h3>
            <h3 className={styles.done}>Concluidas <span>0</span></h3>
          </header>

          <div className={styles.content}>
            {tasks.length > 0 ? tasks.map(task => {
              return (
                <p key={task}>{task}</p>
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
