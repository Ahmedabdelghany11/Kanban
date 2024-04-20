import { useEffect } from "react";
import useBroadsList from "../features/useBroadsList";
import Spinner from "../ui/Spinner";
import { Outlet, useNavigate, useParams } from "react-router-dom";

function Home() {
  const {isLoading, broads} = useBroadsList();
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id && broads) navigate(`/${broads[0].id}`)
  }, [broads, id, navigate])

  if (isLoading) return <Spinner />

  return (
    <div className={`home h-full flex-1 relative p-5 pb-36 gap-5 overflow-auto`}>
      <Outlet />
    </div>
  )
}

export default Home