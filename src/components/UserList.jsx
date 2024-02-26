import Cell from "./Cell";

export default function UserList({ items, option }) {

    return (
        <>
            {items.length > 0 ?
                <>
                    {items.map((item, index) => 
                    <tr key={"Row-content-" + index}>
                        <Cell text={<i className={option}></i>}/>
                        <Cell text={item.email} />
                        <Cell text={item.documentType} />
                        <Cell text={item.documentNumber} />
                        <Cell text={item.username} />
                        <Cell text={item.firstname} />
                        <Cell text={item.lastname} />
                    </tr>)}
                </>
                :
                <tr>
                    <td className="col-span-6">No existen registros</td>
                </tr>}
        </>
    )
}