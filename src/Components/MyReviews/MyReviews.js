import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hook/useTitle';

const MyReviews = () => {
    useTitle('My Reviews');

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://my-services-server.vercel.app/my-reviews?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoading(false)
            })
    }, [user?.email])

    const handelReviewDelete = (review) => {
        const agree = window.confirm(`Are you sure want delete ${review.reviewtext}`)
        if (agree) {
            fetch(`https://my-services-server.vercel.app/reviews/${review._id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("Successfuly Deleted.");
                    const remainreviews = reviews.filter(rev => rev._id !== review._id)
                    setReviews(remainreviews);
                }
            })
        }
    }

    if (loading) {
        return <div className='text-center grid content-center h-96'>
            <div role="status">
                <svg className="inline mr-2 w-12 h-12 text-gray-200 animate-spin dark:text-white fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }

    return (
        <div>
            <h2 className='text-center text-3xl py-4'>All My Reviews</h2>
            <div className="overflow-x-auto w-4/5 m-auto py-5">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Service Name</th>
                            <th>Reviews Text</th>
                            <th>Reating</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <tr key={review._id}>
                                <td><p>{review.name}</p></td>
                                <td><p>{review.title}</p></td>
                                <td><p>{review.reviewtext}</p></td>
                                <td><p><span>*****</span> {review.reating}</p></td>
                                <td><Link to={`/edit/${review._id}`} className='btn btn-accent btn-sm'>Edit</Link></td>
                                <td><p onClick={() => handelReviewDelete(review)} className='btn btn-secondary btn-sm'>x</p></td>
                            </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyReviews;