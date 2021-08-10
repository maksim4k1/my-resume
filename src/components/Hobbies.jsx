const Hobbies = (props) => {
    const hobbies = props.hobbies;
  
    return (
        <section>
            <p>Hobbies ({hobbies.length}): </p>
            <ul>
            {hobbies.map((item) => (
                <li>{item}</li>
            ))}
            </ul>
        </section>
    );
};
  
export default Hobbies;  