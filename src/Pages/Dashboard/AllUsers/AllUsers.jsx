import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUser, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {

    ////load all users on the dashoboard page using tan stack query
    const axiosSecure = useAxiosSecure()
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;

        }
    })

    const handleDeleteUser = user => {
        console.log(user)

    }
    return (
        <div>
            <div><h3 className="text-4xl ">All Users</h3>
                <h3>Total user:{users.length}</h3>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td> <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-lg bg-orange-500"><FaUsers className="text-white text-2xl"></FaUsers></button></td>
                                        <td> <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-lg"><FaTrash className="text-red-600"></FaTrash></button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;