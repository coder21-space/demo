import "bootstrap/dist/css/bootstrap.css";
import { useParams } from "react-router-dom";
function Invoice() {
  const { category, id } = useParams();
  return (
    <>
      <h1 className="text-center">User name -{category}</h1>
      <h1 className="text-center"> no of user-{id}</h1>
    </>
  );
}

export default Invoice;
