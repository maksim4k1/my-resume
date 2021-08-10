const DesiredCompensation = (props) => {
    const compensation = props.compensation;
    const compensationInHour = props.compensationInHour;

    function convertCompensation(compensation){
        if(compensation > 7000){
            return(
                <p>{compensation} руб / {Math.round((compensation / 85) * 10) / 10} $</p>
            )
        } else{
            return(
                <p>{compensation * 85} руб / {compensation} $</p>
            )
        }
    }

    function convertCompensationInHour(compensation){
        if(compensation > 7000 / 20 / 8){
            return(
                <p>{compensation} руб / {Math.round((compensation / 85) * 10) / 10} $</p>
            )
        } else{
            return(
                <p>{compensation * 85} руб / {compensation} $</p>
            )
        }
    }

    return (
        <section>
            <h2>Desired Compensation</h2>
            <h4>В месяц:</h4>
            <p>{convertCompensation(compensation)}</p>
            <h4>В час:</h4>
            <p>{convertCompensationInHour(compensationInHour)}</p>
        </section>
    );
};
  
export default DesiredCompensation;  