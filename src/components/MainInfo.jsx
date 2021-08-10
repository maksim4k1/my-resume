import style from "./MainInfo.module.css"

function MainInfo({ fullName, age, desiredPosition }) {
    return (
        <main>
            <h2 className={style.title}>Main Info</h2>
            <p>Full name: {fullName}</p>
            <p>Age: {age}</p>
            <p>Desired position: {desiredPosition}</p>
        </main>
    );
}

export default MainInfo;