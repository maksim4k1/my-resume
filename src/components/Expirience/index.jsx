import style from "./Expirience.module.scss"

const Expirience = (props) => {
    const { lastWorkPlace, expirience, skills } = props;
  
    return (
        <section className="section">
            <h2 className={`title ${style.title}`}>Job Expirience</h2>
            <p className="paragraph"><b>Last workplace:</b> {lastWorkPlace}</p>
            <p className="paragraph"><b>Expirinece in (years):</b> {expirience}</p>
            <p className="paragraph"><b>Skills ({skills.length}):</b> </p>
            <ul className={style.list}>
            {skills.map((item) => (
                <li className={style.item}>{item}</li>
            ))}
            </ul>
        </section>
    );
};
  
export default Expirience;  