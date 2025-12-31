import React from 'react'

const TermsOfService = () => {
  return (
    <section id="terms-of-service" className='terms'>
      <h2 className="heading2">Terms Of Service</h2>
      <div className="flex justify-center">
        {/* <div>

        </div> */}
        <div className="w-[60%] max-sm:w-[80%] flex flex-col gap-4 border-b-[0.5px] border-gray-700 pb-10">
          <div>
            <p>
              These Terms of Service ("Terms") govern your access to and use of the Police Radio Code app (the "App") and the services it provides. These Terms are a legal agreement between you, the user, and Police Radio Code LLC ("we," "us," or "our"). By accessing or using the App, you agree to be bound by these Terms, as well as any future modifications. If you disagree with these Terms, you must discontinue use of the App and uninstall it.
            </p>
          </div>
          <div>
            <h4 className='font-bold my-3'>
              1. Your Consent
            </h4>
            <p>
              These Terms of Service ("Terms") govern your access to and use of the Police Radio Code app (the "App") and the services it provides. These Terms are a legal agreement between you, the user, and Police Radio Code LLC ("we," "us," or "our"). By accessing or using the App, you agree to be bound by these Terms, as well as any future modifications. If you disagree with these Terms, you must discontinue use of the App and uninstall it.
            </p>
          </div>
           <div>
            <h4 className='font-bold my-3'>
              2. Privacy Policy
            </h4>
            <p>
              Our Privacy Policy, available at <a className='text-[#40C4FF] hover:text-[#0f5474]' href="policeradiocode.com/privacy-policy">policeradiocode.com/privacy-policy</a>, is an integral part of these Terms of Service. By accepting these Terms, you acknowledge and agree to abide by the Privacy Policy and our Advertising Choices. You also consent to the collection and use of your information as outlined in the Privacy Policy.
            </p>
          </div>
           <div>
            <h4 className='font-bold my-3'>
              3. Dispute Resolution and Arbitration
            </h4>
            <p>
              These Terms of Service include important provisions about how any disagreements between you and Police Radio Code will be resolved. In most cases, any claims or issues you may have with us will need to be addressed through binding arbitration, a process designed to resolve disputes outside of the court system. This agreement to arbitrate applies with limited exceptions, and you can opt out of arbitration by following the instructions outlined below.
            </p>
          </div>

          <a href="/terms-of-service" className="text-[#40C4FF] hover:text-[#0f5474] underline w-21">
            Read more
          </a>
        </div>
      </div>
    </section>
  )
}

export default TermsOfService