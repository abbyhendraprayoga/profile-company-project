const OfficeAbout = () => {
  return (
    <div className="lg:p-20 lg:flex lg:flex-row lg:h-100vh p-10 h-100vh lg:gap-32 lg:w-full items-center justify-center">
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.846086105248!2d115.2379689741713!3d-8.706162488725097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241bfead42cb1%3A0x24c6e2d6d2d87689!2sDimata%20IT%20and%20Software!5e0!3m2!1sid!2sid!4v1730860249512!5m2!1sid!2sid"
          width="800" // Sesuaikan nilai lebar lebih besar dari tinggi
          height="450" // Tinggi tetap
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-64 lg:w-96 lg:h-80" // Ubah perbandingan lebar dan tinggi
        ></iframe>
      </div>

      <div className="lg:mt-0 lg:items-center mt-10 lg:w-2/5">
        <hr className="w-9 bg-indigo-900 font-weight h-0.5" />
        <h1 className="text-indigo-900">OUR OFFICE</h1>
        <p className="text-gray-800 font-bold text-4xl mt-5">
          Where Innovation Happens
        </p>
        <p className="mt-5 text-m">
          A space built to drive progress and foster creativity. Our modern,
          tech-forward office reflects our commitment to cutting-edge solutions
          and provides the ideal environment for innovation and collaboration.
        </p>
      </div>
    </div>
  );
};

export default OfficeAbout;
