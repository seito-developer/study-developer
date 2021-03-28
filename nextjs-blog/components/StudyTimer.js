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
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </React.Fragment>
    )}
</Timer>
  )
};

export default StudyTimer;