import React, { useState } from "react";

const sections = [
  {
    title: "Introduction & Permissions",
    content: (
      <>
        <p className="text-justify mb-4">
          This Privacy Policy outlines how Police Radio Code LLC (“we,” “us,” “our”) collects, uses, and protects the personal information of users of the Police Radio Code app (the “App”). We value your privacy and are committed to safeguarding your information as you use the App.
        </p>
        <p className="text-justify mb-4">
          The Police Radio Code app requests certain permissions in order to function properly and provide the services you expect. These permissions may include access to photos/media/files, location, and other relevant permissions. Specifically:
        </p>
        <ul className="list-disc pl-8 mb-4 text-justify space-y-2">
          <li>
            <strong>Photos/Media/Files permission:</strong> Required to download and save PDF files of police radio codes specific to a region from our database, allowing you to access the relevant information offline.
          </li>
          <li>
            <strong>Location permission:</strong> Necessary to provide an optimized experience by allowing the app to open police radio codes specific to your location or nearby areas, helping you access the most relevant and localized public safety information.
          </li>
        </ul>
        <p className="text-justify">
          Rest assured, any data obtained through these permissions is used solely to improve your experience with the app and will never be shared or distributed without your express consent, except where required by law. We are fully committed to protecting your privacy and complying with all applicable data protection regulations.
        </p>
        <p className="text-justify">Please read the following sections for more detailed information on how we handle your personal data.</p>
      </>
    ),
  },
  {
    title: "1. Acceptance of the Privacy Policy",
    content: (
      <p className="text-justify">
        We kindly ask that you read this Privacy Policy carefully before using the Police Radio Code app. By accessing or using our services, you agree to the collection, storage, use, and sharing of your information as outlined in this policy. If you do not agree with the terms stated here, we encourage you to refrain from using the Police Radio Code app and its associated services.
      </p>
    ),
  },
  {
    title: "2. Updates to This Privacy Policy",
    content: (
      <>
        <p className="text-justify mb-4">
          As we continue to improve the Police Radio Code app and refine how we protect your information, we may update this Privacy Policy. Any changes will be posted within the app. We want to ensure you're aware of any adjustments, so please take a moment to review these updates. By continuing to use the app after changes are made, you agree to the new terms. To see when this Privacy Policy was last updated, refer to the "Updated:" date at the top of this page.
        </p>
        <p className="text-justify">
          Additionally, we may occasionally provide “just-in-time” notices, which give you more details on specific data collection and usage practices for different features of the app. These updates could offer additional insights or choices regarding how your information is managed within the Police Radio Code app.
        </p>
      </>
    ),
  },
  {
    title: "3. Information We Collect",
    content: (
      <>
        <p className="text-justify mb-4">
          At Police Radio Code, your privacy is our priority. To ensure that we provide you with the most effective and personalized experience, we may collect certain types of information as you interact with our app. Below are the types of information we collect and how it’s used to enhance your experience:
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">A. Cookies & Similar Tracking Technologies</h3>
        <p className="text-justify mb-4">
          To improve your experience and offer services tailored to your interests, we use cookies and similar technologies to track your interaction with the Police Radio Code app. This includes gathering insights into how you use different features, how long you spend on specific pages, and whether any issues occur during your use. This information helps us understand what works best for you and allows us to provide you with more relevant content. If you would like more details on this, we encourage you to read through this Privacy Policy and explore how we collect and use this data.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">B. Geolocation Information</h3>
        <p className="text-justify mb-4">
          To offer you a more localized and relevant experience, we may collect your geolocation data while using the Police Radio Code app. This helps us show you police codes, safety alerts, and related information based on your real-time location or the area you’re browsing. For instance, if you’re using the app to learn about codes in a specific region, your location data helps us present you with the most accurate information. Additionally, some information, such as your IP address, can be used to estimate your device's location for relevant content. If you prefer not to share your location, you can disable this feature through your device’s settings.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">C. Device Information</h3>
        <p className="text-justify mb-4">
          We collect information about the device you use to access the Police Radio Code app in order to optimize the app’s performance and functionality. This may include details about the type of device (e.g., mobile phone, tablet, etc.), the network connection type (Wi-Fi, Bluetooth, LTE, etc.), the operating system and version (iOS, Android), and your mobile carrier. Additionally, your device’s advertising ID (such as IDFA or AdID) helps us tailor advertisements and services to your preferences. This information allows us to ensure that the app runs smoothly on your device.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">D. Permissions We May Require</h3>
        <p className="text-justify">
          We may request certain permissions to enhance your user experience. Here are a few examples of permissions we may request:
        </p>
        <ul className="list-disc pl-8 mb-4 text-justify space-y-2">
          <li>
            <strong>Photos/Media/Files Permission:</strong> This permission is required to allow you to download and save specific content, such as PDF files of police codes and related resources, which are unique to the regions you’re exploring in the app.
          </li>
          <li>
            <strong>Location Permission:</strong> By granting this permission, you allow the app to optimize your experience by offering localized police codes and relevant content based on your current or surrounding location.
          </li>
        </ul>
        <p className="text-justify">
          Please rest assured that any data collected via these permissions is used solely to improve your experience with Police Radio Code and will never be shared without your express consent unless required by law. We are fully committed to safeguarding your privacy and complying with all relevant data protection laws.
        </p>
      </>
    ),
  },
  {
    title: "4. How We Use the Information We Collect",
    content: (
      <>
        <p className="text-justify mb-4">
          At Police Radio Code, we value your privacy and transparency. The information we collect is primarily used to enhance your experience with our app and provide you with the most accurate, relevant police radio codes and public safety alerts based on your needs. We aim to improve our services and app features by understanding how you interact with them, ensuring we continue delivering the best possible service.
        </p>
        <p className="text-justify mb-4">
          Your personal information will only be used in the ways outlined in this Privacy Policy or as communicated to you beforehand, ensuring that you always know how your data is being processed.
        </p>
        <p className="text-justify mb-4">
          If at any time you feel that we are using your information for purposes beyond what you initially agreed to, or if it deviates from your original consent, you have the right to restrict its use. However, please note that limiting our ability to process your information could affect the functionality of certain features within the Police Radio Code app.
        </p>
        <p className="text-justify mb-4">
          We are committed to keeping your data secure and ensuring that it is used responsibly, with your best interests in mind.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">A. Advertising and User Data</h3>
        <p className="text-justify mb-4">
          At Police Radio Code, we are committed to enhancing your experience with relevant information and keeping your privacy at the forefront. While we do not primarily use personal data for advertising purposes, some services within the app may display advertisements based on your interests and behaviors, which could be informed by the data we gather.
        </p>
        <p className="text-justify mb-4">
          These advertisements are displayed to enhance your experience and help us keep the app free to use. Your personal data is not automatically used for this purpose, so please rest assured. Our advertising services may use cookies or other tracking technologies to display personalized content and ads, based on your preferences or actions, including behaviors observed outside of our app.
        </p>
        <p className="text-justify mb-4">
          For a deeper understanding of how your data may be used for advertising purposes and the related conditions, we recommend reviewing the privacy policies of any third-party services involved. If you wish to opt out of personalized advertising, you can manage your preferences or visit the opt-out page provided by the Network Advertising Initiative.
        </p>
        <p className="text-justify mb-4">
          Our goal is to balance the delivery of relevant content while respecting your choices and privacy.
        </p>
        <p className="text-justify mb-4">
          <strong>Service Provider:</strong><br />
          AdMob - Google LLC<br />
          AdMob, a service offered by Google LLC, allows us to display relevant advertisements within the Police Radio Code app. This helps us support the app's development while ensuring users have access to useful content.<br />
          <strong>Data We Collect:</strong><br />
          · Cookies<br />
          · Usage Data<br />
          We ensure that any data collected through AdMob is used solely for improving the user experience and providing relevant content. We prioritize your privacy and take steps to protect your information. For more details, you can refer to AdMob’s privacy policy.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">B. Analytics</h3>
        <p className="text-justify mb-4">
          The tools mentioned in this section help us understand how users interact with the Police Radio Code app. These insights allow us to continually improve the app, ensuring it meets your needs and delivers the best experience possible.
        </p>
        <p className="text-justify mb-4">
          <strong>Internal Analytics (This Application)</strong><br />
          We utilize an in-app analytics system that does not rely on third-party services. This system helps us track how the app is being used, monitor user behavior, and improve overall functionality.
        </p>
        <p className="text-justify mb-4">
          <strong>Data We Collect:</strong><br />
          · Cookies<br />
          · Usage Data
        </p>
        <p className="text-justify mb-4">
          <strong>Google Analytics for Firebase (Google LLC)</strong><br />
          To further enhance your experience, we use Firebase Analytics, a service provided by Google LLC. Firebase Analytics helps us analyze how you interact with the Police Radio Code app. It may share information with other Firebase services such as Crash Reporting, Authentication, and Notifications. For more details, you can refer to Firebase's privacy policy.
        </p>
        <p className="text-justify mb-4">
          Firebase Analytics may use mobile device identifiers and similar technologies (such as cookies) to gather data. Users have the option to opt out of certain Firebase features by adjusting their device settings, including device advertising settings, or following the instructions in the Firebase-related sections of this privacy policy.
        </p>
        <p className="text-justify mb-4">
          <strong>Data We Collect through Firebase Analytics:</strong><br />
          · App launches<br />
          · App updates<br />
          · Device information<br />
          · First-time app use<br />
          · Location (geography/region)<br />
          · Number of sessions and users<br />
          · Operating systems<br />
          · Session duration<br />
          · Usage data
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">C. Infrastructure Monitoring</h3>
        <p className="text-justify mb-4">
          To ensure the Police Radio Code app runs smoothly, we use services that monitor the app’s performance and user interactions. This allows us to continuously improve, optimize, and address any issues that arise, ensuring the best experience possible for you.
        </p>
        <p className="text-justify mb-4">
          These monitoring tools help us track how the app behaves and identify areas where we can improve its operation, maintenance, and troubleshooting. The specific data we collect depends on the features and setup of the monitoring service.
        </p>
        <p className="text-justify mb-4">
          <strong>Service Provider:</strong><br />
          Crashlytics (Google LLC) - Crashlytics, provided by Google LLC, helps us monitor and enhance the app’s reliability by tracking performance issues and errors.
        </p>
        <p className="text-justify mb-4">
          <strong>Data We Collect:</strong><br />
          · Geographic location<br />
          · Unique device identifiers for advertising (e.g., Google Advertiser ID or IDFA)<br />
          · Various other data types as specified in the privacy policy of the service
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">D. Hosting and Backend Infrastructure</h3>
        <p className="text-justify mb-4">
          To ensure the seamless operation and delivery of Police Radio Code, we utilize reliable hosting and backend infrastructure. This infrastructure is crucial for storing data, managing files, and enabling the core functionalities of our app. These services support the app’s smooth distribution and provide a stable foundation for running the app’s specific features.
        </p>
        <p className="text-justify mb-4">
          Some of these backend services are powered by geographically distributed servers, which means the exact physical location where personal data is stored may vary. This is done to maintain high availability and performance across different regions.
        </p>
        <p className="text-justify mb-4">
          <strong>Service Provider:</strong><br />
          Microsoft Azure - Provided by Microsoft Corporation, Azure is a comprehensive hosting and backend service. It allows us to manage and develop the Police Radio Code app with robust infrastructure, ensuring reliable access and seamless operation.
        </p>
        <p className="text-justify">
          <strong>Data We Collect:</strong><br />
          Various types of data as outlined in the privacy policy of the service provider (Microsoft Azure). For more specific details on the data collected, please refer to the Microsoft Azure Privacy Policy.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">E. Location-Based Services</h3>
        <p className="text-justify mb-4">
          The Police Radio Code app may collect and utilize your location data to provide services that are relevant to your geographical area. These location-based features enhance your experience by offering real-time access to local police, fire, and emergency codes, as well as public safety alerts for your specific region.
        </p>
        <p className="text-justify mb-4">
          Your location is only tracked if you explicitly grant permission for it. Most devices and browsers provide options to control location tracking, and you can disable this feature at any time in your device settings. If you’ve given us permission, your location will be detected either when you actively provide it or when the app automatically identifies it, depending on the feature you're using.
        </p>
        <p className="text-justify">
          <strong>Personal Data Collected:</strong><br />
          · Geographic location (when granted permission).<br />
          In certain circumstances, we may use location data in compliance with legal requirements, such as in the event of misuse of the app or related services that require legal action.
        </p>
      </>
    ),
  },
  {
    title: "5. Security of Your Data",
    content: (
      <p className="text-justify">
        We take the security of your data seriously and implement standard industry practices to protect it from unauthorized access, misuse, and any potential changes. While we apply strong security measures, it's important to understand that no data transmission over the internet can be fully guaranteed as 100% secure. The transmission of data through our service is done at your own risk, despite our efforts to protect your information.
        <br /><br />
        We are committed to ensuring the safety and confidentiality of the data you share with Police Radio Code and work continuously to improve our security measures.
      </p>
    ),
  },
  {
    title: "6. Data Transfers",
    content: (
      <p className="text-justify">
        By using our service and providing your information, you acknowledge that your data may be transferred, processed, and stored on servers or databases located outside your country of residence, which may include the United States. The privacy laws in these countries may not be as strict as those in your jurisdiction. If you prefer not to have your data transferred or processed outside your country, we advise you not to use the app or service.
        <br /><br />
        For users residing in the European Economic Area (EEA), the United Kingdom (UK), or Switzerland, please refer to Section 16 below for additional information.
      </p>
    ),
  },
  {
    title: "7. Third-Party Links",
    content: (
      <p className="text-justify">
        Our app may contain links to external websites or social media platforms. Please note that we do not control how these third parties collect, use, or secure your personal information. We recommend reviewing the privacy policies and settings of these third-party sites and services to understand how your information is managed and protected.
      </p>
    ),
  },
  {
    title: "8. Do Not Track",
    content: (
      <p className="text-justify">
        You may have the option to enable a "Do Not Track" feature in your browser settings. However, please note that we do not currently respond to such signals.
      </p>
    ),
  },
  {
    title: "9. Data Retention",
    content: (
      <p className="text-justify">
        We only retain your personal data for as long as necessary to fulfill the purpose for which it was collected. Here’s how we handle retention:
        <ul className="list-disc pl-8 mt-4 mb-4 text-justify space-y-2">
          <li><strong>Contractual Purposes:</strong> If your data is collected to fulfill a contract between you and Police Radio Code, it will be kept until the contract is fully executed and all obligations are met.</li>
          <li><strong>Legitimate Interests:</strong> Personal data collected based on our legitimate interests will be retained for as long as necessary to serve those interests. For further details, you can review the relevant sections of this policy or reach out to us directly.</li>
          <li><strong>User Consent:</strong> If you have provided consent for data processing, we may retain your information until you withdraw that consent. You can always choose to stop the processing by notifying us.</li>
          <li><strong>Legal Obligations:</strong> In certain cases, we may be required to keep your personal data for a longer duration, especially if it is mandated by law or an authority’s directive.</li>
        </ul>
        Once the necessary retention period has expired, your personal data will be securely deleted. After this period, rights such as access, erasure, rectification, or data portability will no longer be applicable.
      </p>
    ),
  },
  {
    title: "10. Special Information for California Residents",
    content: (
      <p className="text-justify">
        In accordance with California law, residents of California have the right to request and receive an annual notice, free of charge, from us detailing the categories of personal information (if any) we have shared with third parties, including affiliates, for their direct marketing purposes in the past year. If you are a California resident and would like to request this notice, please reach out to us using the contact details in the "How to Contact Us" section. Be sure to include a request for the "California Privacy Rights Notice" and allow at least 30 days for us to process your request.
        <br /><br />
        Please note, we are not required to delete or alter content or information in the following situations:
        <ul className="list-disc pl-8 mt-4 text-justify space-y-2">
          <li>If other local, state, or federal laws require us or a third party to keep the content or information.</li>
          <li>If the content or information was shared, posted, or republished by another user.</li>
          <li>If the content or information is anonymized so that it is no longer possible to identify the minor involved.</li>
          <li>If the minor did not follow the instructions outlined in this Privacy Policy on how to request the removal of content or information.</li>
          <li>If the minor received compensation or other consideration for providing the content.</li>
        </ul>
        This section does not limit the authority of law enforcement to access such content or information when mandated by law.
      </p>
    ),
  },
  {
    title: "11. Special Notice for Users in the EEA, Switzerland, and UK",
    content: (
      <>
        <p className="text-justify mb-4">
          This section applies exclusively to individuals accessing or using our services from within the European Economic Area (EEA), Switzerland, or the United Kingdom (collectively referred to as the “Designated Countries”) at the time their data is collected. To ensure proper processing, we may ask you to specify your country of residence when using certain features, or we may identify your location based on your IP address.
        </p>
        <p className="text-justify mb-4">
          Please note, if you mask or hide your location details, preventing us from accurately identifying your country of origin, the terms outlined in this section may not apply. In the event of any discrepancies between the terms in this section and other sections of our Privacy Policy, the terms in this section will govern for users in the Designated Countries.
        </p>
        <p className="text-justify mb-4">
          This approach ensures clarity and specificity tailored to the needs of users in these regions.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">A. Our Relationship with You</h3>
        <p className="text-justify mb-4">
          Police Radio Code LLC is the data controller for any personal information collected from users who access or interact with our services. As the "data controller," we are responsible for determining how and why your personal information is collected and processed within the app.
        </p>
        <p className="text-justify mb-4">
          Any third-party service providers or partners who handle your personal data on our behalf are considered "data processors." These processors manage your data in line with our instructions and in accordance with the guidelines we set forth to ensure your privacy is respected and protected.
        </p>
        <p className="text-justify mb-4">
          This approach keeps your data safe while ensuring transparency about who is responsible for the information we collect.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">B. Legal Grounds for Processing Your Personal Information</h3>
        <p className="text-justify mb-4">
          In line with our commitment to transparency, we outline the legal grounds for collecting and processing your personal data. Below, we explain the specific purposes of data processing, along with the corresponding legal basis for each:
        </p>
        <ul className="list-disc pl-8 mb-4 text-justify space-y-2">
          <li><strong>User Consent:</strong> When you provide consent for a specific purpose, we may process your information based on that consent.</li>
          <li><strong>Contractual Necessity:</strong> If processing is required to fulfill our agreement with you or to take steps before entering into a contract, we may process your data accordingly.</li>
          <li><strong>Legal Obligation:</strong> In certain circumstances, we may process your information to comply with legal requirements or obligations we must adhere to.</li>
          <li><strong>Public Interest or Official Authority:</strong> If required, we may process your data as part of a task carried out in the public interest or in the exercise of our official duties.</li>
          <li><strong>Legitimate Interests:</strong> We may process your data based on our legitimate interests or those of a third party, as long as these interests do not override your rights.</li>
        </ul>
        <p className="text-justify mb-4">
          If you have any questions about how your data is processed or want to understand the specific legal basis that applies to your situation, feel free to reach out. We are more than willing to clarify, especially if you're wondering whether providing personal data is a legal or contractual requirement, or necessary for entering into an agreement.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-[#45a049]">C. Your Rights and How to Exercise Them</h3>
        <p className="text-justify mb-4">
          At Police Radio Code, we value your privacy and aim to provide transparency around how we manage and protect your personal information. As a user, you have certain rights related to your data. Below is an outline of these rights, and how you can exercise them:
        </p>
        <ul className="list-disc pl-8 mb-4 text-justify space-y-4">
          <li><strong>Right to Withdraw Consent</strong><br />If you've provided us with consent to process your personal data, you are free to withdraw that consent at any time. Please note, the withdrawal of consent will not affect the legality of any processing activities that took place prior to your withdrawal.</li>
          <li><strong>Right of Access</strong><br />You have the right to request a copy of your personal data stored with us. We will provide this to you promptly, at no cost, unless permitted by law to charge a fee. Your access may be limited in some cases if it affects the rights of other individuals.</li>
          <li><strong>Right to Correct Information</strong><br />You have the ability to correct or update any of the personal information we have on file. In some cases, you can make updates directly through the app. For assistance, you may contact us, and we will gladly support you.</li>
          <li><strong>Right to Erasure (Right to be Forgotten)</strong><br />You have the right to request the removal of your personal information when it is no longer necessary for the purposes it was collected, when you have withdrawn your consent, or when you object to our processing and there are no overriding legitimate grounds.</li>
          <li><strong>Right to Restrict Processing</strong><br />Under certain conditions, you can request that we limit our processing of your personal data. During this time, we will only process your data for legal claims, protecting the rights of others, or for important public interest reasons. You will be notified if or when the restriction is lifted.</li>
          <li><strong>Right to Object</strong><br />You can object to our processing of your personal data at any time. If we process your information based on consent, contract, or legitimate interest, and you object, we will cease processing your data unless required for legal claims or other exceptions.</li>
          <li><strong>Right to Data Portability</strong><br />If your data is processed based on your consent or contract, or through automated means, you can request to receive it in a structured, machine-readable format. You may also request that we transfer your data directly to another service provider where feasible. This right is limited to data that you’ve directly provided.</li>
          <li><strong>Notification of Third Parties</strong><br />If we act on your rights requests (such as for rectification or erasure), we will notify any third parties who hold your personal information, unless this is impractical or would require disproportionate effort. You may also request that we identify these third parties.</li>
          <li><strong>Automated Decisions and Profiling</strong><br />You have the right not to be subject to decisions based solely on automated processing, including profiling, that significantly affect you, unless specific legal exceptions apply.</li>
          <li><strong>Limitations to Your Rights</strong><br />There are certain instances where we may limit your rights under the law, including but not limited to:<br />
            · Denying access when required or permitted by law<br />
            · Protecting the privacy rights of others<br />
            · Protecting our legal rights and property<br />
            · Handling requests that are considered frivolous or burdensome</li>
          <li><strong>Transfer of Your Personal Information</strong><br />In the course of delivering our services, we may need to transfer your personal data to third parties, including those located outside of your country. We ensure that such transfers are done in accordance with applicable data protection laws, utilizing safeguards such as Standard Contractual Clauses. We work with trusted partners, including U.S. companies that are certified under the EU-U.S. and Swiss-U.S. Privacy Shield Framework.</li>
          <li><strong>Right to Lodge Complaints</strong><br />If you believe that we have violated your privacy rights, you can contact us at support@policeradiocode.com, and we will work with you to address your concerns. You also have the right to lodge a complaint with the appropriate supervisory authority in your jurisdiction.</li>
        </ul>
      </>
    ),
  },
  {
    title: "12. Getting in Touch",
    content: (
      <p className="text-justify">
        We are here to assist you! If you have any questions, concerns, or need further clarification regarding this Privacy Policy, please don't hesitate to reach out to us. You can contact us at <a href="mailto:support@policeradiocode.com" className="text-[#45a049] hover:underline">support@policeradiocode.com</a>, and we’ll be happy to provide the support you need.
      </p>
    ),
  },
];

const PrivacyPolicyPage = () => {
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
          Privacy Policy
        </h1>
        <p className="text-center text-gray-400 mb-16">Updated: March 7th, 2025</p>

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
  )
}

export default PrivacyPolicyPage;