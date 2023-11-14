import Item from './Item'

let List = ({categories}) => {
    return <div>
        <ul>
            {categories.map((ele, idx) => <Item item={ele} key={idx}/>)}
        </ul>
    </div>
} 

export default List;