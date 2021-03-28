import React from 'react'
import Timer from 'react-compound-timer'
import styles from './StudyTimer.module.scss'

const StudyTimer = () => {
  return(
    <Timer
    initialTime={0}
    startImmediately={false}
>
    {({ start, resume, pause, stop, reset, timerState }) => (
        <React.Fragment>
            <div className={styles.timer__data}>
                <dl className={styles.timer__dataItem}>
                    <dt>
                        <Timer.Hours />
                    </dt>
                    <dd>hours</dd>
                </dl>
                <dl className={styles.timer__dataItem}>
                    <dt>
                        <Timer.Minutes />
                    </dt>
                    <dd>minutes</dd>
                </dl>
                <dl className={styles.timer__dataItem}>
                    <dt>
                        <Timer.Seconds />
                    </dt>
                    <dd>seconds</dd>
                </dl>
            </div>
            <div>{timerState}</div>
            <br />
            <div className={styles.timer__buttons}>
                <button onClick={start}>スタート</button>
                <button onClick={pause}>ポーズ</button>
                <button onClick={resume}>リスタート</button>
                <button onClick={stop}>ストップ</button>
                <button onClick={reset}>リセット</button>
            </div>
        </React.Fragment>
    )}
</Timer>
  )
};

export default StudyTimer;