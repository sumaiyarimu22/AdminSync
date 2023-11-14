import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt='noavatar' priority fill />
        </div>
        Ayra Anam
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type='text' name='username' placeholder='Ayra anam' />
          <label>Email</label>
          <input type='email' name='email' placeholder='ayraanam@gmail.com' />
          <label>Password</label>
          <input type='password' name='password' placeholder='password' />
          <label>Phone</label>
          <input type='phone' name='phone' placeholder='+88017543..' />
          <label>Address</label>
          <textarea
            name='address'
            id='address'
            rows='10'
            placeholder='New York'
          ></textarea>
          <label>Is Admin</label>
          <select name='isAdmin' id='isAdmin'>
            <option value={true}>yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active</label>
          <select name='isActive' id='isActive'>
            <option value={true}>yes</option>
            <option value={false}>No</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
