const Expirience = (props) => {
    const { lastWorkPlace, expirience, skills } = props;
  
    return (
        <section>
            <h2>Job Expirience</h2>
            <p>Last workplace: {lastWorkPlace}</p>
            <p>Expirinece in (years): {expirience}</p>
            <p>Skills ({skills.length}): </p>
            <ul>
            {skills.map((item) => (
                <li>{item}</li>
            ))}
            </ul>
        </section>
    );
};
  
export default Expirience;  