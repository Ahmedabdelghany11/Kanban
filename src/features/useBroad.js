import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchBroadByID } from "../services/apiBroads";


function useBroad() {
    const {id} = useParams();

    const {isLoading, data: broad, error} = useQuery({
        queryKey: ['broad', id],
        queryFn: () => fetchBroadByID(id),
    })
  
    return {isLoading, broad, error}
}

export default useBroad