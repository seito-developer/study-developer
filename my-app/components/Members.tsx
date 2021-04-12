import React from 'react';
import Member from './Member';
import styles from './Members.module.scss'

const Members:React.FC = ({ members }) => {
  return (
    <ul className={styles.members}>
      {members.map( argsItem => 
        <li>
          <Member {...argsItem} />
        </li> 
      )}
    </ul>
  );
};

export default Members;