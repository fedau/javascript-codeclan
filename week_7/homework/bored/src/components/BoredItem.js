const BoredItem = ({idea, onClick}) => {
 return( 


    <div className="bored">
    <h3>Are ya bored? Well here is an idea for ya</h3>

    
    <h4 className="activity"> {idea.activity}</h4>
    <h4> {idea.type}</h4>

    <button onClick={onClick} > Still Bored give me something else</button>

    </div>

 )

}

export default BoredItem