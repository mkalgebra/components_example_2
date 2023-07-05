import "./Dummy.css"
import List from "../List/List"
import getTime from "../../helpers/getTime"

export default function Dummy(){
    return (
    <>
         <List/>
         <span>{getTime()}</span>
    </>
    )
}