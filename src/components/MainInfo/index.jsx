import style from "./MainInfo.module.scss"

function MainInfo({ fullName, age, desiredPosition }) {
    return (
        <main>
            <h2 className={style.title}>Main Info</h2>
            <p className="paragraph"><b>Full name:</b> {fullName}</p>
            <p className="paragraph"><b>Age:</b> {age}</p>
            <p className="paragraph"><b>Desired position:</b> {desiredPosition}</p>
        </main>
    );
}

export default MainInfo;