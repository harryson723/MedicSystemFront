import Cell from "../../../components/Cell";
import getStatus from "../../../utils/getStatus";

export default function SuscriptionList({ items }) {

    return (
        <>
            {items.length > 0 ?
                <>
                    {items.map((item, index) => 
                    <tr key={"Row-content-" + index}>
                        <Cell text={item.id} />
                        <Cell text={getStatus(item.status)} />
                        <Cell text={item.provider.username} />
                        <Cell text={item.client.username} />
                    </tr>)}
                </>
                :
                <tr>
                    <td>Cargando datos</td>
                </tr>}
        </>
    )
}