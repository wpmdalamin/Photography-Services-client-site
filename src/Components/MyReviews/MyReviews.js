import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hook/useTitle';

const MyReviews = () => {
    useTitle('My Reviews')
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    console.log(reviews)
    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <tr>

                                <td><p>{review.name}</p></td>
                                <td><p>{review.title}</p></td>
                                <td><p>{review.reviewtext}</p></td>
                                <td><p>*****</p></td>
                                <td><p>=</p></td>
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