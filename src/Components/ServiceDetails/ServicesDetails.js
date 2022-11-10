import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hook/useTitle';


const ServicesDetails = () => {
    const [reviews, setServices] = useState([])
    const { user } = useContext(AuthContext)
    const { title, img, description, price } = useLoaderData();
    useTitle(title);

    const handelReviews = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const reating = event.target.reating.value;
        const reviewtext = event.target.reviewtext.value;
        const review = { name, email, reviewtext, reating, title }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        event.target.reset()

    }
    useEffect(() => {
        fetch(`http://localhost:5000/service-reviews?title=${title}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [title])


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="w-5/6 rounded-lg shadow-2xl" alt={title} />
                    <div className='sm:w-full '>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <h3 className='text-2xl py-2'>Price: <span className='text-orange-600'>{price}$</span></h3>
                        <p className="py-6">{description}</p>
                    </div>
                </div>
            </div>
            {/* reviews */}

            <div className='text-center py-3'>
                <div className='text-center py-3'>
                    <div className="rating text-center">
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        {/* checked */}
                    </div>
                </div>
                <div>
                    <h3 className='text-center text-3xl py-3'>Add Your Review</h3>
                    <form onSubmit={handelReviews} className='grid grid-cols-1 md:w-2/5 sm:p-2 m-auto'>
                        <input type="text" name='name' required placeholder="Name" className="input input-bordered input-primary my-3 " />
                        <input type="email" name="email" defaultValue={user?.email} required placeholder="Email" className="input input-bordered input-primary" />
                        <input type="text" name="reating" required placeholder="Reating" className="input input-bordered input-primary my-3" />
                        <textarea name='reviewtext' required className="textarea textarea-primary my-3" placeholder="Write Reviews..."></textarea>
                        <input className='btn btn-primary my-3' type="submit" value="Add Reviews" />

                    </form>
                </div>
                {/* Show reviews section */}
                <div className=''>
                    <h3 className='text-center text-3xl'>All Reviews of the service</h3>
                    {
                        reviews.map(rv => <div
                            key={rv._id}
                            className="border border-slate-600 rounded md:w-2/5 p-3 m-3 text-left"
                        >
                            <div>
                                <p>Reviews Name: {rv.name}</p>
                                <p>Review Date: 10/11/2022</p>
                                <p>{rv.email}</p>
                            </div>
                            <p>{rv.reating} Star</p>
                            <p>{rv.reviewtext}</p>

                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ServicesDetails;