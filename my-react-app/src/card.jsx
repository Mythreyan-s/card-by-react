import pic from './assets/mypic.jpg'

function Card(){
    return(
      <div className="card">
         <img className="profileimg" src={pic} alt="profile"></img>
         <h2 className="cardtitle">Mythreyan</h2>
         <p className="cardtext">I am a fullstack developer and a passionate coder</p>
      </div>
    );
}

export default Card;