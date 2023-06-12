import { useForm } from 'react-hook-form'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const img_hosting_token = import.meta.env.VITE_IMGBB_key;
const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse) {
                    const imgUrl = imgResponse.data.display_url;
                    const { name, instructors_name, price, seats } = data;
                    const newClass = { name, instructors_name, price: parseFloat(price), seats, image: imgUrl }
                    console.log(newClass);
                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            console.log('after posting new Class', data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'New Class added Successful',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    };


    return (
        <div>
            <Helmet>
                <title>Add Class - Shippo Sports Academy</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center mt-8 mb-4">Add a New Class</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name<span className='text-rose-500'>*</span></span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true })}
                        className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name<span className='text-rose-500'>*</span></span>
                    </label>
                    <input type="text" placeholder="Instructor Name"
                        {...register("instructors_name", { required: true })}
                        className="input input-bordered w-full " />
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Available Sites<span className='text-rose-500'>*</span></span>
                        </label>
                        <input type="text" placeholder="Available Sites"
                            {...register("seats", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price<span className='text-rose-500'>*</span></span>
                        </label>
                        <input type="number" placeholder="$ Price"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>

                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text font-semibold">Class Image<span className='text-rose-500'>*</span></span>
                    </label>
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <div className="text-center">
                    <input type="submit" className="text-xl font-medium text-white rounded-md hover:bg-rose-500 bg-rose-400 btn-md mt-6 w-1/2 cursor-pointer" value="Add Class" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;

