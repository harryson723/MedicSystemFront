import Cell from "../../../components/Cell";
import getStatus from "../../../utils/getStatus";

export default function ServiceList({ items }) {

    return (
        <>
            {items.length > 0 ?
                <>
                    {items.map((item, index) =>
                        item.status == "AVAILABLE" &&
                        <tr key={"Row-content-" + index}>
                            <Cell text={item.id} />
                            <Cell text={item.provider.username} />
                            <Cell text={item.name} />
                            <Cell text={getStatus(item.status)} />
                            <Cell text={item.typeService}/>
                            <Cell text={item.price + " $"} />
                        </tr>)}
                </>
                :
                <tr>
                    <td>Cargando datos</td>
                </tr>}
        </>
    )
}