import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';

const ReviewUpdate = () => {
    useTitle('Review Update')
    const rdata = useLoaderData()
    console.log(rdata)
    const title = rdata.title;

    const handelReviewUpdate = (event) => {

        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const reating = event.target.reating.value;
        const reviewtext = event.target.reviewtext.value;
        const review = { name, email, reviewtext, reating, title }
        console.log(review)

        fetch(`https://my-services-server.vercel.app/reviews/${rdata._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review),
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <h3 className='text-center text-4xl py-5'>Edit Review</h3>

            <form onSubmit={handelReviewUpdate} className='grid grid-cols-1 w-2/5 m-auto'>
                <input type="text" name='name' defaultValue={rdata.name} required placeholder="Name" className="input input-bordered input-primary my-3 " />
                <input type="email" name="email" defaultValue={rdata.email} required placeholder="Email" className="input input-bordered input-primary" />
                <input type="text" name="reating" defaultValue={rdata.reating} required placeholder="Reating" className="input input-bordered input-primary my-3" />
                <textarea name='reviewtext'  defaultValue={rdata.reviewtext} required className="textarea textarea-primary my-3" placeholder="Write Reviews..."></textarea>
                <input className='btn my-3' type="submit" value="Update Review" />

            </form>

        </div>
    );
};

export default ReviewUpdate;