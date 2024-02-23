import Colunm from "../../components/Columns";
import FormCreateUser from "../../components/FormCreateUser";
import List from "../../components/List";

const data = {
  labels: ["hola", "holas", ],
  items: [
    {
        'hola': 'gola',
        'hola1': 'gola',
        'hola2': 'gola'
    }
  ],
};

export default function CreateClient() {
  return (
    <>
      <FormCreateUser></FormCreateUser>
      <List data={data}>
        <Colunm>Hola</Colunm>
      </List>
    </>
  );
}
