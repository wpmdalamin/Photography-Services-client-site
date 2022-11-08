import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ServicesDetails = () => {
    const { title, img, description, price } = useLoaderData();
    const handelReviews = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const reviewtext = event.target.reviewtext.value;
        const review = { name, email, reviewtext }
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

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt={title} />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <h3>Price: {price}$</h3>
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
                    <form onSubmit={handelReviews} className='grid grid-cols-1 w-2/5 m-auto'>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered input-primary my-3 " />
                        <input type="email" name="email" placeholder="Email" className="input input-bordered input-primary" />
                        <textarea name='reviewtext' className="textarea textarea-primary my-3" placeholder="Write Reviews..."></textarea>
                        <input className='btn my-3' type="submit" value="Add Reviews" />

                    </form>
                </div>
            </div>

        </div>
    );
};

export default ServicesDetails;