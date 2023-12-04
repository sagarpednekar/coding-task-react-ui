interface IPanel {
    message: string,
    type: 'success' | 'error'
}
import styles from "./panel.module.css"
export const Panel = ({ message, type }: IPanel) => {
    return <p className={styles[type]}>{message} </p>
}