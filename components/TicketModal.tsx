import { useState } from "react";

export default function TicketModal() {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [formUrl, setFormUrl] = useState<string>("");

  // URLs of your Google Forms
  const forms: Record<string, string> = {
    event: "https://docs.google.com/forms/d/e/1FAIpQLSd_Pn4gD7gRf12iOWTs1-gniYh_aCHFNl7xfQMcodOQ3decwg/viewform?usp=dialog",
    couple: "YOUR_COUPLE_PASS_GOOGLE_FORM_URL",
    vip: "YOUR_VIP_PASS_GOOGLE_FORM_URL",
  };

  // Open modal with the selected form
  const handleOpenForm = (type: "event" | "couple" | "vip") => {
    setFormUrl(forms[type]);
    setOpenForm(true);
  };

  return (
    <div>
      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => handleOpenForm("event")}
          className="bg-red-700 text-white px-6 py-3 rounded-lg font-bold"
        >
          Get Event Pass
        </button>

        <button
          onClick={() => handleOpenForm("couple")}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold"
        >
          Get Couple Pass
        </button>

        <button
          onClick={() => handleOpenForm("vip")}
          className="bg-yellow-700 text-white px-6 py-3 rounded-lg font-bold"
        >
          Get VIP Pass
        </button>
      </div>

      {/* Modal */}
      {openForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-11/12 md:w-3/4 lg:w-2/3 h-[90vh] p-4 relative">
            {/* Close Button */}
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              ✖
            </button>

            {/* Embedded Google Form */}
            <iframe
              src={formUrl}
              width="100%"
              height="100%"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
              title="Ticket Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
}
