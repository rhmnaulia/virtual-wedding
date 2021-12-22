import { useEffect, useState } from "react";
import { addRSVP } from "../helpers/supabase";
import Select from "../components/Select";

const options = [
  { id: 1, value: "Hadir" },
  { id: 2, value: "Tidak Hadir" },
];

function RSVP() {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [totalGuest, setTotalGuest] = useState(0);
  const [confirmation, setConfirmation] = useState(options[0]);

  const resetForm = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setName("");
    setTelephone("");
    setConfirmation(options[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRSVP(name, telephone, confirmation.value, totalGuest);
    resetForm();
  };
  return (
    <div className="relative py-16">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 bg-gray-50" />
      </div>
      <div className="relative lg:grid lg:grid-cols-6 lg:mx-48">
        <div className="col-span-12 lg:col-span-3 lg:rounded-l-2xl text-center py-16 bg-primary text-palewhite">
          <h1 className="text-3xl font-typography mb-8 font-semibold">
            Hotel Atlet Century Park
          </h1>
          <p>Jl. Pintu Satu Senayan No.1</p>
          <p className="mb-[35px]"> Kebayoran Baru, Senayan, Jakarta</p>
          <div className="relative p-auto">
            <iframe
              className="relative m-auto lg:w-[30rem] sm:w-[30rem] xs:w-[80px] md:w-[30rem] rounded-md shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3060471101844!2d106.80061801476924!3d-6.223316495495054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14e81a584db%3A0x83b3bc47fba8c3b!2sHotel%20Atlet%20Century%20Park%2C%20Jl.%20Pintu%20Satu%20Senayan%20No.1%2C%20RT.1%2FRW.3%2C%20Gelora%2C%20Kecamatan%20Tanah%20Abang%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010270!5e0!3m2!1sen!2sid!4v1640179786237!5m2!1sen!2sid"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="col-span-12 py-16 lg:col-span-3 lg:rounded-r-2xl lg:border px-auto">
          <div className="mx-auto">
            <h1 className="text-3xl mx-auto lg:w-96 w-full text-center relative font-typography mb-8 font-semibold">
              RSVP
            </h1>
            <form
              onSubmit={handleSubmit}
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6 px-10 lg:px-0"
              id="formRSVP"
            >
              <div className="lg:mx-auto md:mx-auto">
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
                  className="block shadow-sm lg:w-96 w-full md:w-[500px] py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div className="lg:mx-auto md:mx-auto">
                <label htmlFor="telephone" className="sr-only">
                  Telephone Number
                </label>
                <input
                  required
                  onChange={(event) => setTelephone(event.target.value)}
                  type="number"
                  name="telephone"
                  id="telephone"
                  autoComplete="telephone"
                  className="block shadow-sm lg:w-96 w-full md:w-[500px] py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  placeholder="Telephone number"
                />
              </div>
              <div className="lg:mx-auto md:mx-auto">
                <label htmlFor="total-guest" className="sr-only">
                  Total guest
                </label>
                <input
                  required
                  onChange={(event) => setTotalGuest(event.target.value)}
                  type="number"
                  name="total-guest"
                  id="total-guest"
                  autoComplete="total-guest"
                  className="block shadow-sm lg:w-96 w-full md:w-[500px] py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  placeholder="Total Guest"
                />
              </div>
              <div className="mx-auto lg:w-96 w-full md:w-[500px]">
                <Select
                  selected={confirmation}
                  setSelected={setConfirmation}
                  options={options}
                />
              </div>

              <div className="mx-auto lg:w-96 w-full md:w-[500px]">
                <button
                  type="submit"
                  className="inline-flex lg:w-96 w-full md:w-[500px] justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-secondary hover:bg-transparent hover:border-secondary hover:backdrop-blur-md hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSVP;
