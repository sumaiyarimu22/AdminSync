import Image from "next/image";
import styles from "./transaction.module.css";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transctions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noavatar.png'
                  alt=''
                  width={40}
                  height={40}
                  className={styles.userImage}
                  priority
                />
                Ayra anam
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>18.6.2023</td>
            <td>$4.322</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noavatar.png'
                  alt=''
                  width={40}
                  height={40}
                  className={styles.userImage}
                  priority
                />
                Ayra anam
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>18.6.2023</td>
            <td>$4.322</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noavatar.png'
                  alt=''
                  width={40}
                  height={40}
                  className={styles.userImage}
                  priority
                />
                Ayra anam
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>18.6.2023</td>
            <td>$4.322</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
