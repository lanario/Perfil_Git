import { Header } from './components/Header'
import { Habilities } from './components/Habilities'
import './global.css'
import { Booster } from './components/Booster'
import styles from './App.module.css'

export function App() {
    return (
        <div className='App'>
            <Header />
            <div className={styles.wrapper}>
                <Habilities />
                <Booster />
            </div>
        </div>
    )
}