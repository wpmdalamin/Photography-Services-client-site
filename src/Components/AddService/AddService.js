import React from 'react';
import useTitle from '../../Hook/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const handelAddService = (event) => {
        event.preventDefault()
        const title = event.target.serviceName.value;
        const price = event.target.price.value;
        const img = event.target.img.value;
        const providerName = event.target.providerName.value;
        const description = event.target.description.value;
        const addService = { title, price, img, description, providerName }
        console.log(addService);
        fetch('https://my-services-server.vercel.app/add-service', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addService),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

        event.target.reset()
    }
    return (
        <div>
            <h2 className='text-3xl py-3 text-center'>Add Service</h2>
            <div className=''>
                <form className='grid grid-cols-1 w-2/3 m-auto' onSubmit={handelAddService}>

                    <input type="text" name='serviceName' required placeholder="Service Name" className="input input-bordered input-primary my-3" />
                    <input type="text" name="price" required placeholder="Service Price" className="input input-bordered input-primary" />
                    <input type="text" name="img" required placeholder="Service Images Link" className="input input-bordered input-primary my-3" />
                    <input type="text" name="providerName" required placeholder="Service Provider Name" className="input input-bordered input-primary my-3" />
                    <textarea name='description' required className="textarea textarea-primary my-3" placeholder="Write Service Description..."></textarea>
                    <input className='btn btn-primary my-3' type="submit" value="Add Service" />

                </form>
            </div>
        </div>
    );
};

export default AddService;