import Row from "./Row";

const listValues = (objs) => {
  for (obj in objs) {
  }
};

export default function List({ children, data }) {

  return (
    <>
      {data && (
        <div>
          <table>
            <thead>
              <tr>
                {children}
              </tr>
            </thead>
            <tbody>
              {data.items.map((item) => (
                <Row item={item}></Row>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
