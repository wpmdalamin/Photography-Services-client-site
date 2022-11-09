import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hook/useTitle';

const MyReviews = () => {
    useTitle('My Reviews');

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handelReviewDelete = (review) => {
        const agree = window.confirm(`Are you sure want delete ${review.reviewtext}`)
        if (agree) {
            fetch(`http://localhost:5000/reviews/${review._id}`, {
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
                                <td><p>***** {review.reating}</p></td>
                                <td><Link to={`/edit/${review._id}`} className='btn'>Edit</Link></td>
                                <td><p onClick={() => handelReviewDelete(review)} className='btn'>x</p></td>
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