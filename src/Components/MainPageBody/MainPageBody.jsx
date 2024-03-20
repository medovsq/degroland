import React from "react";
import styles from './styles.module.css'

export function MainPageBody() {
    return (
        <footer className={styles.footer}>
            <div className={styles.row}>
                <div className={styles.ds}>
                    <h6>Discord</h6>
                    <iframe src="https://discord.com/widget?id=929440411758518302&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
                <div className={styles.tg}>
                    <h6>Telegram</h6>
                    <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-post="rx460/416" data-width="100%" data-userpic="true" data-dark="1"></script>
                </div>
            </div>
        </footer>

    )
}