export default function User({user}){
    const {email} = user;
    return (
        <>  
            <h3>Email: <span style={ email.includes(".biz")? {color: "tomato"} : {color: "green"}}>{email}</span></h3>
        </>
    )
}