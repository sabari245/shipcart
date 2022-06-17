import {useRef} from 'react'
import { app } from '../logics/firebase'
import { getStorage, ref, uploadBytes } from "firebase/storage";



// 'file' comes from the Blob or File API

export default function Vendor() {

    const formRef  = useRef(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const storage = getStorage(app);
        const storageRef = ref(storage, 'store');  
        // get the form data from e
        const formData = new FormData(formRef.current);
        // get the form data from e
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        uploadBytes(storageRef, data.image).then((snapshot) => {
            console.log(snapshot);
            console.log('Uploaded a blob or file!');
          });
        console.log(data);
        console.log("Submitted");
    }

  return (
    <div>
    <div className="flex items-center justify-center p-12">
    
      <div className="mx-auto w-full max-w-[550px]">
        <form action="https://formbold.com/s/FORM_ID" ref={formRef}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="price"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
                Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="price in rupees"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="image"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Cover Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              placeholder="upload a cover image"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
                Description
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                type="submit"
                onClick={handleSubmit}
              >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}
