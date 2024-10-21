// ServicesView.jsx
import JumbotronServices from "@/components/layout/Services/jumbotron"; // Pastikan jalurnya benar

const ServicesView = () => {
  return (
    <>
      <JumbotronServices />
      {/* Tambahkan konten lain di sini jika diperlukan */}
      <div className="p-4 mt-12">
        {" "}
        {/* Menambahkan margin atas */}
        <h2 className="text-2xl font-bold">Our Services</h2>
        <p className="mt-2">
          Here you can add descriptions of the services you offer.
        </p>
      </div>
    </>
  );
};

export default ServicesView;
