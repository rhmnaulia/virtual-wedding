import { useEffect, useState } from "react";
import { getGuestData, sendMessage } from "../helpers/supabase";

export default function Guestbook() {
  const [guestData, setGuestData] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage({ name, message });
    setName("");
    setMessage("");
  };

  useEffect(() => {
    getGuestData().then((data) => {
      setGuestData(data);
    });
  }, [guestData]);

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-primary py-10 px-6 sm:px-6 lg:col-span-5 lg:px-14 lg:py-16 xl:pr-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <h1 className="text-5xl font-typography font-semibold text-secondary pb-10">
              Guestbook
            </h1>
            <form
              onSubmit={handleSubmit}
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <input
                  required
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  required
                  onChange={(event) => setMessage(event.target.value)}
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  placeholder="Write your wishes"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-secondary hover:bg-transparent hover:border-secondary hover:backdrop-blur-md hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="wishes-box py-10 lg:col-span-7 lg:py-16  xl:pl-12">
          <div className="overflow-y-scroll px-6 max-h-96 lg:px-0">
            {guestData &&
              guestData.map((guest, index) => {
                return (
                  <div className="flex items-center pb-4" key={index}>
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://ui-avatars.com/api/?name=${guest.name}`}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-accent">
                        {guest.name}
                      </div>
                      <div className="mt-0 text-sm leading-5 text-palewhite">
                        {guest.message}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
