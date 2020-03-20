import React,{useState} from 'react'
import { Menu } from 'element-react'
import "./index.scss"

function Classify({ title, data, onhandleClassify }) {
    const [defaultIndex,setDefaultIndex] = useState(0)

    // const title = ""
    // const dataDemo = [
    //     {name:'',num:'',id:''}
    // ]
    function handleGetData(id) {
        if(id === defaultIndex){
            return;
        }
        setDefaultIndex(id)
        onhandleClassify(id)
    }

    return (
        <div>
            <h5>{title}</h5>
            <Menu defaultActive={defaultIndex}  onSelect={handleGetData.bind(this)}>
                    <Menu.Item  index={0} >全部</Menu.Item>
                {data.map(item => {
                    return <Menu.Item
                            index={parseInt(item.id)}
                            key={parseInt(item.id)}>
                            <span className="fl" >{item.name}</span>
                            <span className="fr">{item.num}</span>
                        </Menu.Item>
                })}
            </Menu>
        </div>

    )
}
export default Classify