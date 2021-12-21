function Plant({details}) {

    return (
        <div className='Plant Container'>
            <h3><p>Nickname: {details.nickname} </p></h3>
            {/* <img>{src=details.image}</img>  */}
            <p>Species: {details.species} </p>
            <p>Water me every {details.waterFrequency} </p>
            

        </div>
    )
}

export default Plant