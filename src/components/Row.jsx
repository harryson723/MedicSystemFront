export default function Row({ item }) {
  return (
    <tr>
      {Object.values(item).map((i) => (
        <td>{i}</td>
      ))}
    </tr>
  );
}
