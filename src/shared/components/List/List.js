import inc from "../../helpers/inc"
import getTime from "../../helpers/getTime"

export default function List(){
    const items = [{id: 1, text: 'asdasd'}, {id: 2, text: 'vsfbvdsf'},{id: 3, text: 'vurva'}]

    return(<>
        <ul>
            {items.map(i=>{return (<li>
                <span>{inc(i.id)}</span>
                <span>{i.text}</span>
                <span>{getTime()}</span>
            </li>)})}
        </ul>
    </>)
}