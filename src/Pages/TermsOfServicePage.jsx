import React, { useState } from "react";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <p className="text-justify mb-4">
          These Terms of Service ("Terms") govern your access to and use of the
          Police Radio Code app (the "App") and the services it provides. These
          Terms are a legal agreement between you, the user, and Police Radio
          Code LLC ("we," "us," or "our"). By accessing or using the App, you
          agree to be bound by these Terms, as well as any future modifications.
          If you disagree with these Terms, you must discontinue use of the App
          and uninstall it.
        </p>
      </>
    ),
  },
  {
    title: "1. Your Consent",
    content: (
      <>
        <p className="text-justify mb-4">
          By downloading the Police Radio Code app or using any of our services,
          you confirm your agreement to these Terms. Should you not agree with
          these Terms, you should immediately stop using the App and uninstall
          it.
        </p>
        <p className="text-justify">
          We may update these Terms over time. When significant changes occur,
          we will notify you accordingly. If you do not agree with any of the
          updated Terms, you should stop using the App and uninstall it. Your
          continued use of the App after changes are made will signify your
          acceptance of the revised Terms.
        </p>
      </>
    ),
  },
  {
    title: "2. Privacy Policy",
    content: (
      <p className="text-justify">
        Our Privacy Policy, available at{" "}
        <Link
          className="text-[#40C4FF] hover:text-[#0f5474]"
          to="/privacy-policy"
        >
          policeradiocode.com/privacy-policy
        </Link>
        , is an integral part of these Terms of Service. By accepting these
        Terms, you acknowledge and agree to abide by the Privacy Policy and our
        Advertising Choices. You also consent to the collection and use of your
        information as outlined in the Privacy Policy.
      </p>
    ),
  },
  {
    title: "3. Dispute Resolution and Arbitration",
    content: (
      <>
        <p className="text-justify mb-4">
          These Terms of Service include important provisions about how any
          disagreements between you and Police Radio Code will be resolved. In
          most cases, any claims or issues you may have with us will need to be
          addressed through binding arbitration, a process designed to resolve
          disputes outside of the court system. This agreement to arbitrate
          applies with limited exceptions, and you can opt out of arbitration by
          following the instructions outlined below.
        </p>
        <p className="text-justify">
          If you choose not to opt out, any claims you have against us will be
          handled individually, and you won't be able to join a class action or
          representative proceeding. This ensures that any issues are addressed
          on a personal level, respecting your individual experience with the
          Police Radio Code app.
        </p>
      </>
    ),
  },
  {
    title: "4. User Representations",
    content: (
      <>
        <p className="text-justify mb-4">
          By accessing and using the Police Radio Code app and services, you
          affirm that:
        </p>
        <ul className="list-disc pl-8 mb-4 text-justify space-y-2">
          <li>
            Your use of the app complies with all applicable laws and
            regulations, ensuring that you’re using the service responsibly.
          </li>
          <li>
            You are at least 18 years of age, or if you are between the ages of
            13 and 17, you have obtained consent from a parent or legal guardian
            who agrees to these Terms of Service on your behalf.
          </li>
          <li>
            You possess the legal capacity to enter into this agreement and
            abide by the terms set forth herein.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Prohibited Activities",
    content: (
      <>
        <p className="text-justify mb-4">
          By using the Police Radio Code app, you agree not to engage in any of
          the following activities:
        </p>
        <ul className="list-disc pl-8 mb-4 text-justify space-y-2">
          <li>
            <strong>
              Imposing undue strain on the app or its infrastructure:
            </strong>{" "}
            This includes any attempts to overload, hack, or disrupt the service
            or its connected networks in any manner.
          </li>
          <li>
            <strong>Tampering with the app’s integrity:</strong> You agree not
            to reverse engineer, decompile, disassemble, or alter the app in any
            way. Creating derivative works or sublicensing any portion of the
            app’s content or technology is strictly prohibited.
          </li>
          <li>
            <strong>Bypassing security measures:</strong> You shall not attempt
            to disable, circumvent, or interfere with the security features of
            the app or any tools that prevent unauthorized copying, usage, or
            sharing of materials within the app. This includes avoiding or
            removing limitations placed on the app’s features or content.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Our Intellectual Property Rights",
    content: (
      <>
        <p className="text-justify mb-4">
          The content and materials available through the Police Radio Code
          app—including all text, computer code, trademarks, service marks, and
          logos—are owned by or licensed to us. These materials are protected by
          copyright and other intellectual property laws in the United States
          and internationally.
        </p>
        <p className="text-justify mb-4">
          The app and its materials are intended solely for your personal,
          non-commercial use. Commercial use or exploitation of any part of the
          app or materials is strictly prohibited without our prior consent.
        </p>
        <p className="text-justify">
          We retain full ownership of all rights related to the app and its
          materials. If you choose to download or print any materials for
          personal use, please ensure that all copyright, trademark, and
          proprietary notices remain intact.
        </p>
      </>
    ),
  },
  {
    title: "7. Our Management of the Service; User Conduct",
    content: (
      <>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">
          A. Our Rights in Managing the Service
        </h3>
        <p className="text-justify mb-4">
          We maintain the right, although we are not obligated, to:
        </p>
        <ul className="list-disc pl-8 mb-4 text-justify space-y-2">
          <li>
            (a) Monitor the Police Radio Code app to ensure compliance with
            these Terms of Service and our policies;
          </li>
          <li>
            (b) Report any violations of these Terms of Service to appropriate
            law enforcement agencies and take necessary legal action;
          </li>
          <li>
            (c) Manage and operate the app in a way that protects our rights, as
            well as the rights of third parties, and ensures the smooth and
            proper functioning of the service.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">
          B. Our Right to Terminate Access
        </h3>
        <p className="text-justify">
          Without limiting any other provisions in these Terms of Service, we
          retain the right, at our sole discretion and without prior notice or
          liability, to deny access to the Police Radio Code app or any of its
          services to anyone for any reason, including but not limited to
          violations of the representations, warranties, or covenants in these
          Terms, or any applicable laws or regulations.
        </p>
      </>
    ),
  },
  {
    title: "8. Third-Party App Stores",
    content: (
      <p className="text-justify">
        By accessing and using the Police Radio Code app, you acknowledge that
        its availability is dependent on third-party platforms, such as the
        Apple App Store or Google Play Store (referred to as "Third-Party App
        Stores"). You agree that these Terms of Service are between you and
        Police Radio Code, not with the respective Third-Party App Store.
        <br />
        <br />
        Each Third-Party App Store may have its own terms and conditions, which
        you must accept before downloading the app. Your use of the app is
        conditioned upon your adherence to the relevant Third-Party App Store's
        terms, and you agree to comply with these terms. In the event that any
        of the Third-Party App Store terms are in conflict with or less
        restrictive than the terms set forth in this agreement, the more
        restrictive terms in these Terms of Service will take precedence.
      </p>
    ),
  },
  {
    title: "9. Premium Services and In-App Purchases",
    content: (
      <>
        <p className="text-justify mb-4">
          The Police Radio Code app is available for free with the option to
          upgrade to a Premium version that provides additional features and an
          ad-free experience. By choosing to use the Premium service, you will
          gain access to exclusive features, products, and services (“In-App
          Products”). These premium features will be available for a fee, and
          the payment for any such services will be processed through the
          respective Third-Party App Store.
        </p>
        <p className="text-justify mb-4">
          If you opt for the Premium service or decide to purchase In-App
          Products via a Third-Party App Store, the fees for those services will
          be charged to your account by the App Store, in accordance with their
          terms and conditions. Some Third-Party App Stores may also charge
          sales tax depending on your location.
        </p>
        <p className="text-justify mb-4">
          For users who subscribe to a recurring Premium service, the
          subscription will automatically renew until you cancel. To stop the
          renewal or modify your subscription, simply log into your account and
          follow the cancellation instructions. Deleting the Police Radio Code
          app or your account does not automatically cancel your subscription.
          You must cancel the subscription through your account settings to
          avoid further charges. All payments made to your account are
          non-refundable, even if you choose to cancel the service before the
          end of your billing cycle.
        </p>
        <p className="text-justify">
          In the future, Police Radio Code may expand its services to include a
          subscription plan or other paid features, and we will always provide
          clear information about any changes or new services.
        </p>
      </>
    ),
  },
  {
    title: "10. Dispute Resolution and Arbitration",
    content: (
      <>
        <p className="text-justify mb-4">
          If you have a dispute or issue with Police Radio Code, we encourage
          you to reach out to us directly at{" "}
          <span>
            <a
              href="mailto:support@policeradiocode.com"
              className="text-[#40C4FF] hover:text-[#0f5474] underline w-21"
            >
              support@policeradiocode.com
            </a>
          </span>{" "}
          for resolution. We’re here to help you, and most concerns can be
          resolved quickly and easily through communication.
        </p>
        <p className="text-justify mb-4">
          If the issue isn’t resolved after 30 days, either party may choose to
          proceed with arbitration, which is a confidential process where an
          impartial third-party makes a final decision about the dispute. This
          means that, instead of going to court, your issue will be resolved in
          an efficient manner through arbitration.
        </p>
        <p className="text-justify mb-4">
          In the event that arbitration is necessary, it will be conducted
          individually (not as a class action). You agree that the arbitration
          will take place individually and not as part of a group. For small,
          minor disputes, you are still welcome to seek resolution through small
          claims court if applicable.
        </p>
        <p className="text-justify mb-4">
          If you’d like to opt-out of the arbitration process, you can let us
          know in writing within 30 days of downloading the app. If you don’t
          opt-out in that time, the arbitration agreement will apply to any
          disputes that arise.
        </p>
        <p className="text-justify">
          If you have a legal dispute that can’t be handled through arbitration,
          it must be brought in the courts in Will County, Illinois, unless it’s
          a small claims issue, in which case you can file in your local
          jurisdiction.
        </p>
      </>
    ),
  },
  {
    title: "11. Disclaimer of Warranties & Limited Liability",
    content: (
      <>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">
          A. Disclaimer of Warranties
        </h3>
        <p className="text-justify mb-4">
          Police Radio Code is dedicated to providing you with access to
          critical real-time information, including police, fire, and emergency
          codes. However, just as with any service, we must be transparent: the
          app is provided "as is" and "as available". While we strive to deliver
          the most accurate and up-to-date information, we cannot guarantee that
          everything will always work flawlessly.
        </p>
        <p className="text-justify mb-4">
          When you use Police Radio Code, you agree that you are using the app
          at your own risk. This means that we don't promise that:
        </p>
        <ul className="list-disc pl-8 mb-4 text-justify space-y-2">
          <li>The service will be error-free or uninterrupted</li>
          <li>
            The information you receive, including police codes and emergency
            alerts, will always be perfect or up-to-the-minute
          </li>
          <li>
            The app will be completely safe from issues like bugs, viruses, or
            malware
          </li>
        </ul>
        <p className="text-justify mb-4">
          Police Radio Code takes your privacy and security seriously, but we do
          not assume responsibility for any problems that may arise while using
          the app, including crashes, inaccurate data, or technical glitches.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">
          B. Limited Liability
        </h3>
        <p className="text-justify mb-4">
          Our goal is to empower users with useful tools and information.
          However, to ensure we can continue delivering this service, we limit
          our liability for any loss or damage you may experience due to using
          the app.
        </p>
        <p className="text-justify mb-4">
          In the unlikely event that something goes wrong, our maximum liability
          to you will be capped at $10. This limitation applies to any issues
          arising from the app, such as:
        </p>
        <ul className="list-disc pl-8 mb-4 text-justify space-y-2">
          <li>
            Errors in data (e.g., incorrect or outdated police code information)
          </li>
          <li>Technical issues like service interruptions or crashes</li>
          <li>
            Loss of data, personal injury, or any other indirect damage
            resulting from your use of the service
          </li>
        </ul>
        <p className="text-justify">
          This means that while we are committed to improving the Police Radio
          Code experience, we are not responsible for extensive damages beyond
          this modest amount.
        </p>
      </>
    ),
  },
  {
    title: "12. Notice for New Jersey Users",
    content: (
      <p className="text-justify">
        While these Terms of Service govern your use of the Police Radio Code
        app, we want to ensure they are fair and fully compliant with local
        laws. In the event that any part of these Terms is found to be
        unenforceable, void, or not applicable under New Jersey law, that
        specific provision will not apply to you. However, all other provisions
        in these Terms will continue to remain valid and enforceable.
        <br />
        <br />
        For residents of New Jersey, please note that the limitations on
        liability do not apply where the law requires payment of attorneys'
        fees, court costs, or other damages as mandated by statute. These Terms
        are not intended to limit or reduce any rights you may have under the
        Truth-in-Consumer Contract, Warranty and Notice Act.
      </p>
    ),
  },
  {
    title: "13. Notice to California Users",
    content: (
      <>
        <p className="text-justify mb-4">
          As a resident of California, you are granted specific consumer rights
          under California Civil Code Section 1789.3. If you have any questions
          or concerns about your experience with the Police Radio Code app, we
          encourage you to reach out to us directly.
        </p>
        <p className="text-justify mb-4">
          For assistance, please send an email to{" "}
          <span>
            <a
              href="mailto:support@policeradiocode.com"
              className="text-[#40C4FF] hover:text-[#0f5474] underline w-21"
            >
              support@policeradiocode.com
            </a>
          </span>
          , and we will do our best to address your inquiries or resolve any
          issues.
        </p>
        <p className="text-justify">
          Additionally, California residents have the right to contact the
          Complaint Assistance Unit of the Division of Consumer Services at the
          California Department of Consumer Affairs. You can reach them by:
          <ul className="list-disc pl-8 mt-4 text-justify space-y-2">
            <li>
              Mail: 1625 North Market Blvd., Suite N 112, Sacramento, CA 95834
            </li>
            <li>Phone: (800) 952-5210</li>
          </ul>
          We are committed to providing a transparent and respectful service to
          all of our users and welcome your feedback.
        </p>
      </>
    ),
  },
  {
    title: "14. Copyright Infringement Policy",
    content: (
      <>
        <p className="text-justify mb-4">
          At Police Radio Code, we are committed to respecting intellectual
          property rights and fostering a safe and responsible environment for
          our users. We follow the guidelines set by the Digital Millennium
          Copyright Act (DMCA) for handling claims of copyright infringement.
        </p>
        <p className="text-justify mb-4">
          If you believe that any content on the Police Radio Code app or
          website violates your copyright or the rights of the copyright holder
          you represent, please let us know. We take all concerns seriously and
          aim to resolve matters promptly.
        </p>
        <p className="text-justify mb-4">
          If you are the copyright owner or an authorized agent acting on their
          behalf, you can submit a copyright infringement notice by sending an
          email to
          <a
            href="mailto:support@policeradiocode.com"
            className="text-[#40C4FF] hover:text-[#0f5474] underline w-21"
          >
            support@policeradiocode.com
          </a>
          with the subject line "DMCA Notice." Your notice must include the
          following details:
        </p>
        <ul className="list-disc pl-8 mb-4 text-justify space-y-2">
          <li>
            <strong>Signature:</strong> A physical or electronic signature of
            the person authorized to act on behalf of the copyright owner or the
            exclusive rights holder.
          </li>
          <li>
            <strong>Copyrighted Material:</strong> A description of the
            copyrighted work you believe has been infringed upon.
          </li>
          <li>
            <strong>Infringing Material:</strong> A description of the material
            that is allegedly infringing on your rights, along with its location
            in the app or website.
          </li>
          <li>
            <strong>Contact Information:</strong> Information that allows us to
            reach you, such as your email address, phone number, or mailing
            address.
          </li>
          <li>
            <strong>Good Faith Statement:</strong> A statement that you have a
            good faith belief that the use of the material in question is not
            authorized by the copyright owner, its agent, or the law.
          </li>
          <li>
            <strong>Accuracy Statement:</strong> A statement, under penalty of
            perjury, confirming that the information in your notice is accurate
            and that you are authorized to act on behalf of the copyright owner.
          </li>
        </ul>
        <p className="text-justify">
          We respect the rights of individuals who produce original material and
          will review all valid claims in compliance with the law. If the
          necessary information is not provided, we may be unable to process
          your notice effectively.
          <br />
          <br />
          For repeat infringers, we reserve the right to suspend or terminate
          access to the Service as part of our commitment to protecting
          intellectual property and ensuring the proper use of the Police Radio
          Code platform.
        </p>
      </>
    ),
  },
  {
    title: "15. Independent Relationships",
    content: (
      <p className="text-justify">
        By using the Police Radio Code app, you agree that no relationship
        beyond that of app provider and user is established between you and
        Police Radio Code LLC. Specifically, your use of this application does
        not create any form of partnership, employment relationship, joint
        venture, agency affiliation, or franchise agreement with Police Radio
        Code LLC. Our mission is solely to provide accurate, accessible, and
        reliable police codes to users worldwide, and your interaction with our
        services remains completely independent.
      </p>
    ),
  },
  {
    title: "16. Preservation of Rights",
    content: (
      <p className="text-justify">
        If Police Radio Code LLC does not immediately enforce any right or
        condition outlined in these Terms of Service, it does not mean we
        relinquish or waive that right or condition. We retain all rights and
        may exercise or enforce them at any future time. Our commitment remains
        steadfast in ensuring fair and consistent application of these terms,
        aligned with our mission to deliver accurate and dependable police code
        resources globally.
      </p>
    ),
  },
  {
    title: "17. Integrity of Terms",
    content: (
      <p className="text-justify">
        Police Radio Code LLC aims for these Terms of Service to be fully
        compliant and enforceable within the boundaries of applicable laws. If
        any part or clause within these Terms is found by law to be invalid,
        illegal, or unenforceable, that specific part or clause will be removed
        without affecting the legitimacy and enforceability of all other
        provisions. Our core mission—providing trusted, comprehensive, and
        user-friendly police codes—remains unwavering and intact.
      </p>
    ),
  },
  {
    title: "18. Assignment of Rights",
    content: (
      <p className="text-justify">
        To continue growing our mission of delivering accurate, reliable, and
        globally accessible police radio code information, Police Radio Code LLC
        reserves the right to transfer or assign our rights and obligations
        outlined in these Terms of Service. Such assignments help ensure that
        our app remains efficient, innovative, and responsive to the communities
        we proudly serve. By using Police Radio Code, you acknowledge and agree
        that we may make these assignments without requiring your additional
        consent or approval.
      </p>
    ),
  },
  {
    title: "19. Employee Communication & Authority",
    content: (
      <p className="text-justify">
        At Police Radio Code LLC, clarity and integrity are fundamental to our
        mission of delivering precise and dependable police radio code
        information. To maintain consistency and fairness, no employee or
        representative of Police Radio Code LLC is authorized to modify or alter
        these Terms of Service through individual statements, communications, or
        agreements. Users must not rely upon or act based on any unofficial
        promises or assurances from our staff or anyone claiming to represent
        us. All valid modifications to these Terms will be officially posted and
        communicated through authorized channels only.
      </p>
    ),
  },
  {
    title: "20. Governing Law",
    content: (
      <p className="text-justify">
        These Terms of Service are thoughtfully created and will be interpreted,
        governed by, and enforced in accordance with the laws of the State of
        Illinois, reflecting Police Radio Code LLC’s commitment to clear,
        reliable, and trusted communication standards. By using the Police Radio
        Code application, you agree to follow the jurisdictional guidance of
        Illinois law, without reference to any principles or rules regarding
        conflicts or choices of law. Additionally, the United Nations Convention
        on Contracts for the International Sale of Goods shall not apply to
        these Terms.
      </p>
    ),
  },
  {
    title: "21. Contact Information",
    content: (
      <p className="text-justify">
        Clear communication is the heartbeat of Police Radio Code LLC. If you
        have any questions, feedback, or concerns regarding these Terms of
        Service or your experience with the Police Radio Code app, we warmly
        encourage you to connect with us directly at <span><a
          href="mailto:support@policeradiocode.com"
          className="text-[#40C4FF] hover:text-[#0f5474] underline w-21"
        >
          support@policeradiocode.com
        </a></span>
        . We strive to respond swiftly, transparently, and helpfully, supporting
        your journey as part of our global community dedicated to clarity and
        reliability in police communication.
      </p>
    ),
  },
];

const TermsOfServicePage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto mt-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Terms of Service
        </h1>
        <p className="text-center text-gray-400 mb-16">
          Last Updated: March 14th, 2025
        </p>

        <div className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#45a049]">
            {sections[currentPage].title}
          </h2>
          <div className="text-base md:text-lg leading-relaxed text-justify space-y-4">
            {sections[currentPage].content}
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-between items-center gap-6">
          <button
            onClick={handlePrev}
            className="w-full sm:w-auto px-8 py-4 bg-[#45a049] hover:bg-[#5cc060] text-black font-bold rounded-lg transition-all duration-300 shadow-lg"
          >
            ← Previous
          </button>

          <span className="text-gray-400 text-lg">
            Page {currentPage + 1} of {sections.length}
          </span>

          <button
            onClick={handleNext}
            className="w-full sm:w-auto px-8 py-4 bg-[#45a049] hover:bg-[#5cc060] text-black font-bold rounded-lg transition-all duration-300 shadow-lg"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServicePage;
