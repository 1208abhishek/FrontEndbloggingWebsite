import { Quote } from "../components/Quote"
import { Auth } from "../components/auth"

export const Signup = () => {


    return <div className="grid grid-cols-2">
        <div>
            <Auth></Auth>
        </div>
        <div className="invisible lg:visible">
            <Quote></Quote>
        </div>
    </div>

}