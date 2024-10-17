export default function Friend({friend}){
  const {name, email, address, company, id, phone, username, website} = friend;
    return(
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <a href={website}>Go Website</a>
            <p>Username: {username}</p>
        </div>
    )
}