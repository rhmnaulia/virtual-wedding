import React from "react";

function RSVP() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0  bg-gray-50" />
      </div>
      <div className="relative mx-auto lg:grid lg:grid-cols-12 py-16">
        <div className="col-span-12 lg:col-span-6 text-center">
          <h1 className="text-3xl font-typography mb-8 font-semibold">
            Hotel Borobudur
          </h1>

          <p>Green Hills Residence</p>
          <p>Jl. Bukit Palem Raya No. 1&3</p>
          <p className="mb-[35px]">Karang Ploso, Malang - Jawa Timur</p>
          <div>
            <iframe
              className="block m-auto"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.764503939821!2d106.8351827!3d-6.1720943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7302b729335a095b!2sHotel%20Borobudur%20Jakarta!5e0!3m2!1sen!2sid!4v1637076292640!5m2!1sen!2sid"
              width="500"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6"> </div>
      </div>
    </div>
  );
}

export default RSVP;
