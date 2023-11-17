import React from 'react';
import styles from './Motherboard.module.scss';

function Motherboard() {
  return <div className={styles.motherboardPage}>
    <div className={styles.motherboardWrapper}>
      <div className={styles.motherboard}>
        <div className={styles.mainText}>
          <span className={styles.topLabel}>Processor</span>
          <span className={styles.bottomLabel}>Made In India</span>
          <table>
            <tbody>
            <tr>
              <td>Generation</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>B.Tech</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>Computer Engineering</td>
            </tr>
            <tr>
              <td>Origin</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>Indus University</td>
            </tr>
            <tr>
              <td>MFG</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>April 2021</td>
            </tr>
            <tr>
              <td>Serial No.</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>IU1741050019</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>;
}

export default Motherboard;