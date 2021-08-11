import style from "./DesiredCompensation.module.scss";

const DesiredCompensation = (props) => {
    const compensation = props.compensation;
    const compensationInHour = props.compensationInHour;

    function convertCompensation(compensation){
        if(compensation > 7000){
            return(
                <p>{compensation} <span className={style.money}>руб</span> / {Math.round((compensation / 85) * 10) / 10} <span className={style.money}>$</span></p>
            )
        } else{
            return(
                <p>{compensation * 85} <span className={style.money}>руб</span> / {compensation} <span className={style.money}>$</span></p>
            )
        }
    }

    function convertCompensationInHour(compensation){
        if(compensation > 7000 / 20 / 8){
            return(
                <p>{compensation} <span className={style.money}>руб</span> / {Math.round((compensation / 85) * 10) / 10} <span className={style.money}>$</span></p>
            )
        } else{
            return(
                <p>{compensation * 85} <span className={style.money}>руб</span> / {compensation} <span className={style.money}>$</span></p>
            )
        }
    }

    return (
        <section className={`section ${style.section}`}>
            <h2 className={`title ${style.title}`}>Desired Compensation</h2>
            <h4 className={style.subtitle}>В месяц:</h4>
            <p>{convertCompensation(compensation)}</p>
            <h4 className={style.subtitle}>В час:</h4>
            <p>{convertCompensationInHour(compensationInHour)}</p>
        </section>
    );
};
  
export default DesiredCompensation;