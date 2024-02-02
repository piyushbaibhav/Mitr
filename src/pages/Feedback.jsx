import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../components/Hamburger'

export default function Feedback() {
    return (
    <> <div className='flex'>
    <Hamburger/>
    <div className="bg-blue-100 shadow-2xl rounded-2xl m-10 p-5">
  <section className="mb-32">
    <div className="flex flex-wrap">
      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-7/12 md:px-3 lg:px-6">
        <h2 className="mb-8 text-3xl font-bold">Frequently asked questions</h2>
        <p className="mb-2 font-bold">Anim pariatur cliche reprehenderit?</p>
        <p className="mb-8 text-neutral-500 dark:text-neutral-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
          autem numquam dolore molestias aperiam culpa alias veritatis
          architecto eos, molestiae vitae ex eligendi libero eveniet
          dolorem, doloremque rem aliquid perferendis.
        </p>
        <p className="mb-2 font-bold">Non cupidatat skateboard dolor brunch?</p>
        <p className="mb-8 text-neutral-500 dark:text-neutral-300">
          Distinctio corporis, iure facere ducimus quos consectetur ipsa ut
          magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed fugit
          iusto minus et suscipit? Minima sunt at nulla tenetur, numquam
          unde quod modi magnam ab deserunt ipsam sint aliquid dolores
          libero repellendus cupiditate mollitia quidem dolorem odit
        </p>
        <p className="mb-2 font-bold">
          Praesentium voluptatibus temporibus consequatur non aspernatur?
        </p>
        <p className="mb-8 text-neutral-500 dark:text-neutral-300">
          Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
          deserunt ipsam sint aliquid dolores libero repellendus cupiditate
          mollitia quidem dolorem.
        </p>

        <p className="mb-2 font-bold">
          Voluptatum magnam sed fugit iusto minus et suscipit?
        </p>
        <p className="text-neutral-500 dark:text-neutral-300">
          Laudantium perferendis, est alias iure ut veniam suscipit dolorem
          fugit. Et ipsam corporis earum ea ut quae cum non iusto blanditiis
          ipsum dolor eius reiciendis, velit adipisci quas.
        </p>
      </div>
      <div className=" my-auto md:w-5/12 bg-transparent md:px-3 lg:px-6">
        <p className="mb-8 font-bold">
          Didn't find your answer in the FAQ? Contact Us Directly
        </p>
        <form>
          <div className="relative bg-white rounded-lg mb-6" data-te-input-wrapper-init>
            <input type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput90" placeholder="Name" />
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              for="exampleInput90">Name
            </label>
          </div>
          <div className="relative bg-white rounded-lg mb-6" data-te-input-wrapper-init>
            <input type="email"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput91" placeholder="Email address" />
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              for="exampleInput91">Email address
            </label>
          </div>
          <div className="relative  bg-white rounded-lg mb-6" data-te-input-wrapper-init>
            <textarea
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea1" rows="10" placeholder="Your message"></textarea>
            <label for="exampleFormControlTextarea1"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Feedback</label>
          </div>
          <button type="button" data-te-ripple-init data-te-ripple-color="light"
            className="mb-6  bg-white rounded-lg inline-block w-full  bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Send
          </button>
        </form>
      </div>
    </div>
  </section>
</div> </div>
    </>   
    )
}