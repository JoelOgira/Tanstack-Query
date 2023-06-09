import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUser, deleteUser } from '../../api/usersApi';

const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { data: user, isLoading, isError, error } = useQuery({
        queryKey: [ 'user', id ],
        queryFn: () => getUser(id),
        enabled: Boolean(id)
    });

    const deleteUserMutation = useMutation(deleteUser, {
        onSuccess: () => {
            queryClient.invalidateQueries([ 'user', id ]);
        }
    })

    return (
        <div className="px-10 my-4 p-4 border border-slate-400 rounded mx-auto md:container">
            {isLoading && <p>Loading...</p>}
            {!isLoading && isError && <p>Something went wrong!!! {error.message}</p>}
            {!isLoading && !isError &&
                <>
                    <div className="flex flex-col space-y-10 py-2">
                        <div>
                            <p className="pb-1 font-semibold text-sm underline">Username</p>
                            <p className="p-2">{user?.name}</p>
                        </div>
                        <div>
                            <p className="pb-1 font-semibold text-sm underline">Details</p>
                            <textarea name="details" rows="10" className="border border-slate-400 focus:outline-transparent p-2 rounded w-full"
                                placeholder="Details"
                                defaultValue={user?.details}
                                readOnly
                            ></textarea>
                        </div>
                    </div>
                    <button onClick={() => navigate(`/users/edit/${user?.id}`)}
                        className="border border-black px-4 py-2 hover:bg-black hover:text-white rounded-lg ">
                        Edit
                    </button>
                    <button onClick={() => { deleteUserMutation.mutate({ id: user?.id }); navigate('/users') }}
                        className="border bg-black text-white px-4 py-2 hover:bg-white hover:text-black hover:border-black rounded-lg mx-5">
                        Delete
                    </button>
                </>
            }
        </div>
    )
}

export default UserDetails;