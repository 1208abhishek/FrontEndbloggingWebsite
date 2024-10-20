import { useState } from "react"
import { Link} from "react-router-dom"
import { Button } from "./button";


// single component could be used for signup and signin 
export const Auth = ( {type}: {type: "signup" | "signin"} )=>{ 

    const [username, setUsername] = useState("") ;
    const [email, setEmail] = useState("") ; 
    const [password, setPassword] = useState("") ;

    return <div> 
        <div> 
            Create an Account 
        </div>

        <div> 
            Already have an Account?
            <Link to={"/signin"}>Login</Link> 
        </div>
            <br /> 
        <div> 
            <LabelledInput label="username" placeholder="Enter your Username .." onChange={(e) =>{ 
                setUsername(e.target.value)
            }}> 
            </LabelledInput>


            <LabelledInput label="Email" placeholder="example@email.com" onChange={(e) =>{ 
                setEmail(e.target.value)
            }}> 
            </LabelledInput>


            {/* type="password" -->  // we want our password ((****) like this when user type  */}
            <LabelledInput type="password" label="password" placeholder="password ..." onChange={(e) =>{ 
                setPassword(e.target.value)
            }}> 
            </LabelledInput>

            <div> 
                <button onClick={() =>{ 
                    // post request to our backend server  
                }}>Sign Up</button>
            </div>
            
        </div>
    </div>
}

interface LabelledInputtypes { 
    label: string;
    placeholder: string ; 
    onChange: any; 
    // correct type of onChange: (e:ChangeEvent<HTMLInputElement>) =>void; 
    type?: string;  // we want our password ((****) like this when user type 
}
function LabelledInput({label, placeholder, onChange, type}: LabelledInputtypes) { 
    return <div> 
        {label} 
        <div> 
            <input type={type || "text"} placeholder={placeholder} onChange={onChange} />
        </div>
    </div>
}

