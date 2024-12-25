import React from "react";
import Center from "../Components/Center";
import Footer2 from "../Components/footer2";
import "./TermsConditions.css";

function TermsConditions() {
  return (
    <div className="terms-conditions-container">
      <div className="head">
        <h1 className="heading">Terms and Conditions</h1>
        <p className="para">
          Please refer to our terms and conditions before using or accessing any
          information, services, or products.
        </p>
        <button className="btn">Read Below</button>
      </div>
      <div class="terms-conditions">
        <p class="bold">Applicability</p>
        <p>
          These terms and conditions apply to anyone who makes use of the
          services or products of NoonMytrip Travels Pvt. Ltd. When you access
          NoonMytrip Travels Pvt. Ltd. on your laptop, mobile phone, or tablet,
          you agree to these terms and conditions. Any user who makes inquiries
          about our products or services or purchases them through any of our
          channels, including the website, travel agents, salespersons, offices,
          or other means, would be under these terms.
        </p>

        <p class="bold">Eligibility</p>
        <p>
          The eligibility requirements state that the user must have completed
          18 years before they have the legal authority to become a user of
          NoonMytrip Travels Pvt. Ltd. A minor, or anyone below the age of 18
          years, cannot become a user on our website. If you don’t follow the
          age requirements and try to make transactions on our website, we have
          the right to cancel the transaction and terminate your membership.
        </p>

        <p class="bold">Content</p>
        <p>
          All types of content that are offered through our website and various
          sales channels, such as text, software, images, audio, icons, or any
          other content, are property of NoonMytrip Travels Pvt. Ltd. Therefore,
          users cannot copy or use this content for any other purposes. We don’t
          provide the authority or license to use any of our logos or
          watermarks.
        </p>

        <p class="bold">Website</p>
        <p>
          Users can use the website for making bookings or for other
          informational purposes. Users are not allowed to share, exchange,
          modify, transmit, or sell anything through the website. This would
          include but would not be limited to icons, images, texts, video, and
          audio. Some of the features of the website are only available to the
          users who register themselves on the website. The registration process
          on the website includes answering some questions that would mean
          giving out their personal information. Some of the fields in the
          registration process may be mandatory while others may be optional.
          So, you can decide if you want to share the optional information or
          not. The information given by users must be accurate and true.
          NoonMytrip Travels Pvt. Ltd. reserves the right to cancel or terminate
          user accounts or access to the website without any prior notice for
          regular maintenance or any other reason.
        </p>

        <p class="bold">The Responsibility of Users</p>
        <p>
          While we have a set of responsibilities as service providers, so do
          our users. We request our users to go through the description of all
          our products and services carefully before availing themselves of
          them. Please also read all the terms and conditions associated with
          bookings before making any payments, as it will help us avoid
          conflicts or disputes at a later stage. It is also noteworthy that if
          you are making a booking on behalf of someone else, it is your
          responsibility as a user to inform that person of our terms and rules.
          You must also abide by all our guidelines for each transaction so that
          you can continue to enjoy hassle-free services from us at all times.
        </p>

        <p class="bold">Right to Refuse</p>
        <p>
          At NoonMytrip Travels Pvt. Ltd., we reserve the right to refuse or
          verify any information shared with us by the users. If, for any
          reason, we find you in breach of the user agreement, we also reserve
          the right to suspend your account or terminate your registration. In
          addition to that, as a user on our website, you shall not use any
          language that offends, glorifies violence, is defamatory, or is
          sexually explicit at any time.
        </p>
      </div>

      <Center />
      <Footer2 />
    </div>
  );
}

export default TermsConditions;
