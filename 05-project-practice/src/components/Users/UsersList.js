import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={styles['custom-card']}>
      <ul className={styles.list}>
        {props.users.map((user) => {
          return (
            <li className={styles['list-items']} key={user.id}>
              {`${user.username} (${user.age} years old)`}
              <Button className="delete">Delete</Button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
