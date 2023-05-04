import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

function login(){
    const [user, setUser] = useState({});
    function callBackHandle(res){
        //console.log("Token: "+res.credential);
        var userLogin = jwtDecode(res.credential);
        console.log(userLogin);
        setUser(userLogin);
        document.getElementById("signInDiv").hidden = true;
    }

    function signOut(){
        setUser({});
        document.getElementById("signInDiv").hidden = false;
        
    }

    useEffect(()=>{
        const loadOneTapAPI = () => {
            const script = document.createElement("script");
            script.src = "https://accounts.google.com/gsi/client";
            script.async = true;
            script.defer = true;
            script.onload = () => {
                google.accounts.id.initialize({
                    client_id: "312063271404-8ia7sa43uqneercsaua29v8stg7rptve.apps.googleusercontent.com",
                    callback: callBackHandle
                });
                google.accounts.id.renderButton(document.getElementById("signInDiv"), {theme: "outline", size: "large"});
            };
            document.body.appendChild(script);
        };

        loadOneTapAPI();
    }, []);


    return (
        <div className="app">
            <div id="signInDiv"></div>
            {Object.keys(user).length!=0&&
                <button onClick = {signOut}>Sign Out</button>
            }
            { user && 
                <div>
                    <img scr = {user.picture}></img>
                    <h4>{user.name}</h4>
                </div> }
        </div>
    )
}

export default login;
