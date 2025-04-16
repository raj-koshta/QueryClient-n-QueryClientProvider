import { fetchPostsRQ } from '../api/API';
import { useQuery } from '@tanstack/react-query';

const FetchRQ = () => {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['post'], // work like useState
    queryFn: fetchPostsRQ, // work like useEffect
    gcTime: 5000, // Pass in Milli-Second
    // staleTime: 5000, // Pass in Milli-Second
    refetchInterval: 1000,
    // refetchIntervalInBackground: true,
  }
  )

  if (isLoading) {
    return (<div className="loader"></div>)
  }
  
  if (isError) {
    return <div><h1>Error: {error.message || "Something goes wrong"}</h1></div>
  }

  return (
    <div>
      <ul className='section-accordion'>
        {
          data?.map((cusElem) => {
            const { id, title, body } = cusElem;
            return (
              <li key={id}>
                <p>{title}</p>
                <p>{body}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default FetchRQ