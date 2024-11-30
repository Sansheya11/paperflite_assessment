
import styles from './App.module.css'
import { Collections } from './components/collections'
import { LeftNav } from './components/leftnav'

function App() {

  return (
    <div className={styles.container}>
      <LeftNav />
      <Collections />
    </div>
  )
}

export default App
