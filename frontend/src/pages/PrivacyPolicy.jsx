import React from "react";
import Center from "../Components/Center";
import Footer2 from "../Components/footer2";
import background_image from '../assets/privacy_policy/image.svg'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <div className="head">
        <h1 className="heading">Privacy Policy</h1>
        <p className="para">
          The privacy policy of NoonMytrip Travel Pvt. Ltd. describes how we
          collect, process, and use personal information of our customers. We
          recognize the importance of maintaining confidentiality when
          processing the information of our customers. This privacy policy is
          applicable to any person who visits our website for information, buys
          a product from our website, or intends to buy a product from our
          website. By accessing our website, the user agrees to the terms
          mentioned in this privacy policy.
        </p>
        <button className="btn">Read Below</button>
      </div>
      <div class="privacy-policy">
        <h1 className="start">Types of Information We Collect & Its Legal Implications</h1>
        <p>
          We collect the following information as a part of our legal
          obligations as well as our obligations to associated third parties as
          per our agreement.
        </p>

        <p className="bold">Personal Information</p>
        <p>
          Personal information of the users is collected for the following
          purposes:
        </p>

        <p className="bold">Registration & Subscription on the Website</p>
        <p>
          We collect information when you register or subscribe to our website.
          This includes, but is not limited to, your personal details, such as
          name, age, gender, marital status, profile photo, address, postal
          code, email, phone number, etc. It may include other information such
          as credit card, debit card details, payment history, billing details,
          etc.
        </p>

        <p className="bold">Others</p>
        <p>
          Some other information that we may collect but may not be limited to
          are as follows:
        </p>
        <ul>
          <li>
            Username and password, email address, and any other information
            related to security.
          </li>
          <li>
            Transaction history related to your buying behavior and other
            e-commerce activities.
          </li>
          <li>
            Personal data that is available in the public domain or from third
            parties, such as social media websites.
          </li>
          <li>
            Information related to other travelers who made a booking through
            your account. When they book through your account, they also agree
            to these privacy policies.
          </li>
          <li>
            If you use our visa services, then we would have information related
            to your passport details, bank statements, visa application forms,
            photos, and any other document that you submit as a part of your
            visa process.
          </li>
          <li>
            If you choose to book hotels with us, we will have all the
            information about your hotel bookings, identification documents used
            for the hotel, and the transaction history.
          </li>
        </ul>
        <p>
          All this information is collected for legal purposes only. We may
          further share this information with end parties or third parties to
          facilitate the booking process.
        </p>

        <p className="bold">Use of Your Personal Information</p>
        <p>
          We use your personal information every single time you make a booking
          through our website or use one of our products and services. If you
          wish to change any bookings, we will again have to use your personal
          information. Some other reasons why we might use your personal data
          are:
        </p>
        <ul>
          <li>
            To get in touch with you on special occasions in your life, like
            birthdays and anniversaries.
          </li>
          <li>To update you on the status of your transactions.</li>
          <li>To request feedback or reviews.</li>
          <li>To send verification emails or messages.</li>
          <li>To send booking confirmations.</li>
        </ul>

        <p className="bold">Retention of Your Personal Information</p>
        <p>
          NoonMytrip Travels Pvt. Ltd. reserves the right to retain your
          personal information or data for as long as the company needs it to
          provide you with the best products and service. We might also need to
          keep your personal data for accounting, legal, or tax requirements.
          Once it is not needed, we make sure to delete all user data promptly.
          If you want any or all of your personal information deleted
          immediately, you can contact us to request a complete deletion.
        </p>

        <p className="bold">Sharing of Personal Information</p>
        <p>
          NoonMytrip can share your information and personal data with end
          service providers who are responsible for all your bookings. This
          includes hotel bookings, flight bookings, transport, and much more.
          That said, we did not authorize any of these end service providers to
          use your personal data for anything other than efficiently making your
          bookings. We also do not sell any user’s personal information for
          private gain or ulterior motives. We might also need to share your
          information with third-party vendors to make your travel experience
          better with us.
        </p>

        <p className="bold">Protection of Your Personal Information</p>
        <p>
          The first thing we do at NoonMytrip Travels Pvt. Ltd. to protect the
          personal information of our users is make sure that you can make all
          payments on our website in a secure manner. Our payment gateway is
          safe to use, and we take great pride in ensuring an efficient and
          secure billing experience for all our users. We also have strict
          measures to protect and control the use of our customer’s personal
          information so that it is never misused by any external or internal
          entity.
        </p>

        <p className="bold">Cookies</p>
        <p>
          Like any other travel company, we use cookies to enhance the online
          experience of our customers. Through the use of session data and
          cookies, we are able to personalize your experience so that you get
          exactly what you want from our website. By accepting our cookies, your
          experience on our website will be efficient and hassle-free. In
          addition to that, you will be able to log in and access our products
          and services without any glitches. It is pertinent to note here that
          our website is completely trustworthy, and all data we collect is
          completely anonymous and handled cautiously.
        </p>

        <p className="bold">Changes to Privacy Policy</p>
        <p>
          NoonMytrip reserves the right to make changes to this privacy policy
          as it deems fit for customer requirements or legal reasons. We might
          also revise our privacy for internal reasons or business growth from
          time to time. That said, all our users will be duly notified of any
          changes so that you can keep on top of them at all times. At
          NoonMytrip Travels Pvt. Ltd., we take user security very seriously.
          This is precisely why we conduct all operations with complete
          transparency. If, at any point, you have any queries or concerns about
          our privacy policy, please feel free to get in touch with us, and we
          would be happy to assuage them as soon as possible.
        </p>
      </div>

      <Center />
      <Footer2 />
    </div>
  );
}

export default PrivacyPolicy;
