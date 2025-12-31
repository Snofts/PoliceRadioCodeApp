import React from "react";

const PrivacyPolicy = () => {
  return (
    <section id="privacy-policy" className="privacy">
      <h2 className="heading2">Privacy Policy</h2>
      <div className="flex justify-center">
        {/* <div>

        </div> */}
        <div className="w-[60%] max-sm:w-[80%] flex flex-col gap-4 border-b-[0.5px] border-gray-700 pb-10">
          <p className="text-justify">
            This Privacy Policy outlines how Police Radio Code LLC (“we,” “us,”
            “our”) collects, uses, and protects the personal information of
            users of the Police Radio Code app (the “App”). We value your
            privacy and are committed to safeguarding your information as you
            use the App.
          </p>
          <p>
            The Police Radio Code app requests certain permissions in order to
            function properly and provide the services you expect. These
            permissions may include access to photos/media/files, location, and
            other relevant permissions. Specifically:
          </p>
          <ul className="pl-6 list-disc">
            <li>
              Photos/Media/Files permission: Required to download and save PDF
              files of police radio codes specific to a region from our
              database, allowing you to access the relevant information offline.
            </li>
            <li>
              Location permission: Necessary to provide an optimized experience
              by allowing the app to open police radio codes specific to your
              location or nearby areas, helping you access the most relevant and
              localized public safety information.
            </li>
            <li>
              Rest assured, any data obtained through these permissions is used
              solely to improve your experience with the app and will never be
              shared or distributed without your express consent, except where
              required by law. We are fully committed to protecting your privacy
              and complying with all applicable data protection regulations.
            </li>
          </ul>

          <a href="/privacy-policy" className="text-[#40C4FF] hover:text-[#0f5474] underline w-21">
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
