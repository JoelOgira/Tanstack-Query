import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, updateUser } from "../../api/usersApi";
import { useEffect, useState } from "react";

function EditUsers() {
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {data:user, isLoading, isError, error } = useQuery({
        queryKey:['user', id],
        queryFn: () => getUser(id),
        enabled: Boolean(id)
    })
    const [editName, setEditName] = useState('');
    const [editDetails, setEditDetails] = useState('');

    useEffect(() => {
        if (user) {
            setEditName(user.name);
            setEditDetails(user.details);
        }
    }, [user, setEditName, setEditDetails]);

    const updateUserMutation = useMutation(updateUser, {
        onSuccess: () => {
            queryClient.invalidateQueries(['user', id])
        }
    })

    const handleEdit = (e) => {
        e.preventDefault();
        updateUserMutation.mutate({ id, name: editName, details:editDetails });
        setEditDetails('');
        setEditName('');
        navigate('/users')
    }

    return (
        <div className="px-10 mt-5 md:container md:mx-auto md:px-0">
            {isLoading && <p>Loading...</p>}
            {!isLoading && isError && <p>Something went wrong!!! {error.message}</p>}
            {!isLoading && !isError && 
                <div className="px-10 my-4 p-4 border border-slate-400 rounded mx-auto md:container">
                    <form onSubmit={handleEdit} className="flex flex-col">
                        <label htmlFor="name">Username</label>
                        <input 
                            type="text" 
                            value={editName}
                            onChange={e => setEditName(e.target.value)}
                            className="border border-slate-400 rounded focus:outline-transparent p-2 mb-4 "
                            placeholder="Username"
                        />
                        <label htmlFor="details">Details</label>
                        <textarea name="details" cols="30" rows="10" className="border border-slate-400 focus:outline-transparent p-2 rounded"
                        placeholder="Details"
                        defaultValue={editDetails}
                        onChange={e => setEditDetails(e.target.value)}
                        ></textarea>
                        <button  className="border px-2 py-1 rounded-lg mx-auto mt-4">Save</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default EditUsers;


// Populating the form fields with received data

// const [fields, setFields] = useState({ ...user });

// const handleChange = (e) => {
//     const {name, value} = e.target;
//     setFields({ ...fields, [name]: value })
// }