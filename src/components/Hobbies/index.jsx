import style from "./Hobbies.module.scss";

const Hobbies = (props) => {
    const hobbies = props.hobbies;
  
    return (
        <section>
            <p className="paragraph"><b>Hobbies ({hobbies.length}):</b></p>
            <ul className={style.list}>
            {hobbies.map((item) => (
                <li className={style.item}>{item}</li>
            ))}
            </ul>
        </section>
    );
};
  
export default Hobbies;  