import { useQuery } from "@tanstack/react-query";

const useManageClass =()=>{

    const {data: manageClass = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async()=>{
            const res = await fetch('https://shippo-sports-server-iqbalhossainmohon.vercel.app/classes');
            return res.json();
        }
    })
    return [manageClass, loading, refetch]
}

export default useManageClass;