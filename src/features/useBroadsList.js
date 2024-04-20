import { useQuery } from "react-query"
import { fetchBroads } from "../services/apiBroads"

function useBroadsList() {
    const { isLoading, data: broads, error } = useQuery('invoicesList', fetchBroads);
  
    return {isLoading, broads, error}
}

export default useBroadsList