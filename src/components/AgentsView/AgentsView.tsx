import Agent from './Agent/Agent'
import styles from './AgentsView.module.scss'

export default function AgentsView() {

    return(
        <div className={styles.agents}>
            <Agent/>
            <Agent/>
            <Agent/>
            <Agent/>

        </div>
    )
}