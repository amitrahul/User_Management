import styles from "./Card.module.css"


const Card = ({userData}) => {
    const {id, name,email, username,company} =userData;
   
    return(
        <div className={styles.cardWrapper}>
            <div className={styles.userName}>{username}</div>
                <div className={styles.userDetail}>
                    <h3>Id</h3>
                    <h3 className={styles.cardId}>{id}</h3>
                </div>
                <div className={styles.userDetail}>
                    <h3>Name</h3>
                    <h3>{name}</h3>
                </div>
                <div className={styles.userDetail}>
                    <h3>Email</h3>
                    <h3>{email}</h3>
                </div>
                <div className={styles.userDetail}>
                    <h3>Company</h3>
                    <h3>{company.name}</h3>
                </div>
        </div>
    )
}

export default Card;