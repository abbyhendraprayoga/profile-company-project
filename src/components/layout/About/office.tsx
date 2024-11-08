const OfficeAbout = () => {
  return (
    <div className="lg:p-20 lg:grid lg:grid-cols-2 lg:h-94 p-10">
      <div className="lg:ml-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.846086105248!2d115.2379689741713!3d-8.706162488725097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241bfead42cb1%3A0x24c6e2d6d2d87689!2sDimata%20IT%20and%20Software!5e0!3m2!1sid!2sid!4v1730860249512!5m2!1sid!2sid"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="lg:pl-40 lg:items-center mt-10">
        <hr className="w-9 bg-indigo-900 font-weight h-0.5" />
        <h1 className="text-indigo-900">OUR OFFICE</h1>
        <p className="text-gray-800 font-bold text-4xl mt-5">
          Where Innovation
        </p>
        <p className="text-gray-800 font-bold text-4xl mt-5">Happens</p>
        <p className="mt-5 text-sm">
          A space built to drive progress and foster creativity. Our modern,
          tech-forward office reflects our commitment to cutting-edge solutions
          and provides the ideal environment for innovation and collaboration.
        </p>
      </div>
    </div>
  );
};

export default OfficeAbout;
