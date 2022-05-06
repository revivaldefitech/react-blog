import "./footer.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faDiscord,
  faReddit,
  faTelegramPlane,
  faMedium,
  faTiktok,
  faCloudflare
} from "@fortawesome/free-brands-svg-icons";


class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: "doggy",
      info: false,
      modal: false,
      body: undefined,
      title: ''
    };
  }

 

  render() {
    const termsOfUse = <p>
      <b>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS SITE.</b><br/> Who we are and how to contact us RevivalDefi is a site operated by RevivalDefi, a limited company registered in New York (US). To contact us, please email info@revivaldefi.com. By using our site, you confirm that you have read and acknowledged the Risk Disclaimer and that you accept these terms of use and that you agree to comply with them. If you do not agree to these terms, you must not use our site. We recommend that you print a copy of these terms for future reference. There are other terms that may apply to you These terms of use refer to the following additional terms, which also apply to your use of our site: Our Privacy and Cookies Policy,Click here. If you purchase products through our site, the Online Store Terms and Conditions will apply to the sales. If you use download a copy of the RevivalDefi, the [EULA] will apply to you and govern your use of the RevivalDefi. FURTHERMORE, PLEASE NOTE YOUR ENTRY INTO THE EULA (AND USE OF OUR SERVICES) IS CONDITIONAL ON YOUR ENTRY INTO WYRE PAYMENTS, INC. USER AGREEMENT AND PRIVACY POLICY TO THE WIDEST EXTENT PERMITTED BY LAW, REVIVALDEFI SHALL NOT BE A PARTY TO NOR RESPONSIBLE FOR ANY MATTER ARISING OUT OF OR IN CONNECTION WITH YOUR ENTERING INTO AN AGREEMENT WITH WYRE PAYMENTS, INC., INCLUDING ANY TRANSACTION MADE PURSUANT TO THE AGREEMENT BETWEEN YOU AND WYRE. We may make changes to these terms We amend these terms from time to time. Every time you wish to use our site, please check these terms to ensure you understand the terms that apply at that time. We may make changes to our site We may update and change our site from time to time to reflect changes to our products, our users' needs and our business priorities. We may suspend or withdraw our site Our site is made available free of charge. We do not guarantee that our site, or any content on it, will always be available or be uninterrupted. We may suspend or withdraw or restrict the availability of all or any part of our site for business and operational reasons. We will try to give you reasonable notice of any suspension or withdrawal. You are also responsible for ensuring that all persons who access our site through your internet connection are aware of these terms of use and other applicable terms and conditions, and that they comply with them. It is your responsibility to determine whether your access and use of our site is in line with all legal and regulatory obligations that are applicable to you. Our site is directed to people residing in United States and we do not represent that content available on or through our site is appropriate for use or available in your particular location. We may transfer this agreement to someone else We may transfer our rights and obligations under these terms to another organisation. We will always tell you in writing if this happens and we will ensure that the transfer will not affect your rights under the contract. How you may use material on our site We are the owner or the licensee of all intellectual property rights in our site, and in the material published on it. Those works are protected by copyright laws and treaties around the world. All such rights are reserved. You may print off one copy, and may download extracts, of any page(s) from our site for your personal use and you may draw the attention of others within your organisation to content posted on our site. You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text. Our status (and that of any identified contributors) as the authors of content on our site must always be acknowledged. You must not use any part of the content on our site for commercial purposes without obtaining a licence to do so from us or our licensors. If you print off, copy or download any part of our site in breach of these terms of use, your right to use our site will cease immediately and you must, at our option, return or destroy any copies of the materials you have made. Do not rely on information on this site The content on our site is provided for general information only. It is not intended to amount to advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on our site. Although we make reasonable efforts to update the information on our site, we make no representations, warranties or guarantees, whether express or implied, that the content on our site is accurate, complete or up to date. We are not responsible for websites we link to Where our site contains links to other sites, services and resources provided by third parties, these links are provided for your information only. Such links should not be interpreted as approval by us of those linked websites or information you may obtain from them. We have no control over the contents of those sites, quality of services, or resources. Our responsibility for loss or damage suffered by you Whether you are a consumer or a business user: We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors and for fraud or fraudulent misrepresentation. Different limitations and exclusions of liability will apply to liability arising as a result of the supply of any products to you, which will be set out in the specific terms governing your use of any such product. We exclude all implied conditions, warranties, representations or other terms that may apply to our site or any content on it. We will not be liable to you for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with: use of, or inability to use, our site; or use of or reliance on any content displayed on our site. In particular, we will not be liable for: loss of profits, sales, business, or revenue; business interruption; loss of anticipated savings; loss of business opportunity, goodwill or reputation; or any indirect or consequential loss or damage. Please note that we only provide our site for domestic and private use. You agree not to use our site for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity. If defective digital content that we have supplied, damages a device or digital content belonging to you and this is caused by our failure to use reasonable care and skill, we will either repair the damage or pay you compensation. However, we will not be liable for damage that you could have avoided by following our advice to apply an update offered to you free of charge or for damage that was caused by you failing to correctly follow installation instructions or to have in place the minimum system requirements advised by us. How we may use your personal information We will only use your personal information as set out in our [LINK TO PRIVACY POLICY]. We are not responsible for viruses and you must not introduce them We do not guarantee that our site will be secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programmes and platform to access our site. You should use your own virus protection software. You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other material that is malicious or technologically harmful. You must not attempt to gain unauthorised access to our site, the server on which our site is stored or any server, computer or database connected to our site. You must not attack our site via a denial-of-service attack or a distributed denial-of service attack. By breaching this provision, you would commit a criminal offence under the relevant US law. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our site will cease immediately. Rules about linking to our site You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it. You must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists. You must not establish a link to our site in any website that is not owned by you. Our site must not be framed on any other site, nor may you create a link to any part of our site other than the home page. Which country's laws apply to any disputes? If you are a consumer, please note that these terms of use, their subject matter and their formation, are governed by law of New York, (US). You and we both agree that the courts of New York (US) will have exclusive jurisdiction. If you are a business, these terms of use, their subject matter and their formation (and any non-contractual disputes or claims) are governed by the law of New York. We both agree to the exclusive jurisdiction of the courts of New York (US). Our trade marks You are not permitted to use our trade marks without our approval.
    </p>
    const privacyPolicy = <p>
      We RevivalDefi (RevivalDefi.com), are committed to protecting any data that we collect concerning you. By using our services you agree to the use of the data that we collect in accordance with this Privacy Policy. We are committed to protecting your privacy. We collect the minimum amount of information about you that is commensurate with providing you with a satisfactory service. This Policy indicates the type of processes that may result in data being collected about you. The purpose of this Privacy Policy to enable you to understand which personal identifying information ("PI", "Personal Information") of yours is collected, how and when we might use your information, who has access to this information, and how you can correct any inaccuracies in the information. To better protect your privacy, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our website. Information Collected We may collect any or all of the information that via both automated means such as communications profiles and cookies. Personal Information you give us depends on the type of service, support, or sale inquiry, and may include your name, address, telephone number, fax number and email address, dates of service provided, types of service provided, payment history, manner of payment, amount of payments, date of payments, domain name or other payment information. All sensitive information is collected on a secure server and data is transferred . When transferring personal information a security icon will appear in your browser. Information Use This information is used for billing and to provide service and support to our customers. We may also study this information to determine our customers needs and provide support for our customers. All reasonable precautions are taken to prevent unauthorised access to this information. This safeguard may require you to provide additional forms of identity should you wish to obtain information about your account details. RevivalDefi may email its monthly newsletter to the primary contact e-mail on file, but customers are able to opt out of this newsletter at any time. We use IP addresses to analyze trends, administer our site and servers, track access, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information. It is possible that personal information about a customer may be included in the log files due to the normal functions of IP addresses and SaaS applications. Cookies Your Internet browser has the in-built facility for storing small text files - "cookies" - that hold information which allows a website to recognize your account. We use cookies to save your preferences and login information, and provide personalized functionality. You can reject cookies by changing your browser settings, but be aware that this will disable some of the functionality on the RevivalDefi website. More information about cookies can be found at https://en.wikipedia.org/wiki/HTTP_cookie
    </p>
    const cookiesPolicy = <p>
      weed 4/20 lets go
    </p>

    return (
      <div className="footer">
       
        <div className="upper-section">
          <div className="links-container">
            <b>Quick Link</b>
            <a href='https://revivaldefi.com'>
              <p>Home</p>
            </a>
            <a href='https://rvl.finance' target='_blank'>
              <p>How to Buy</p>
            </a>
            <a href='https://www.certik.com/projects/revival' target='_blank'>
              <p>Audit</p>
            </a>
            <a href='https://bscscan.com/token/0x7eaee60040135f20f508a393ca400ded339d654e' target='_blank'>
              <p>Contract</p>
            </a>
            <a href='https://charts.bogged.finance/0x7EaeE60040135F20f508A393ca400dEd339d654e' target='_blank'>
              <p>Chart</p>
            </a>
            <a href='https://revivaldefi.com/contact' target='_blank'>
              <p>Contact Us</p>
            </a>
          </div>
          <div className="links-container">
            <b>Resources</b>
            <a href="https://www.revivaldefi.com/assets/docs/Litepaper.pdf" target='_blank'>
              <p>Download Litepaper</p>
            </a>

            {/* <a onClick={() => this.setState({info: true})}>
              <p>Cookies Policy</p>
            </a> */}
          </div>
          <div className="dapp-section">
            <p>Mobile App will be available on both App Stores soon</p>
            </div>
            <div>
              <br></br>
          <div className="mobile-links">
              <img src='/img/googleplay.png'></img>
              <img src='/img/appstore.png'></img>
            </div>
          </div>
        </div>
        <div className="down-section">
          <div className="first-half">

            <p></p>
           
          </div>
          <div className="second-half">
          
            <div className="audited-part">
            <b>Audited By</b>
              <span className="audited-text">
               

              </span>
              <p></p>
              <br></br>
              <div>
              <a href='https://www.certik.com/projects/revival' target='_blank'><img className="small-logo" src="/img/Certik.png"></img></a>
              <a href='https://dessertswap.finance/audits/Revival%20BSC%20Audit%2011371955.pdf' target='_blank'><img className="small-logo" src="/img/dessertfinance.png"></img></a>
            </div>
            <p></p>
            </div>
            <p></p>
            
            <div className="icon-part">
              <a href="https://www.facebook.com/RevivalDeFiOfficial" target='_blank'>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="mySocialIcon"
                  color="#ffffff"
                />
              </a>
              <a href="https://www.instagram.com/revivaldefi" target='_blank'>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="mySocialIcon"
                  color="#ffffff"
                />
              </a>
              <a href="https://www.t.me/revivaldefi" target='_blank'>
                <FontAwesomeIcon
                  icon={faTelegramPlane}
                  className="mySocialIcon"
                  color="#ffffff"
                />
              </a>
              <a href="https://www.twitter.com/revivaldefi" target='_blank'>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="mySocialIcon"
                  color="#ffffff"
                />
              </a>
              <a href="https://www.discord.gg/revivaldefi" target='_blank'>
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="mySocialIcon"
                  color="#ffffff"
                />
              </a>
              <a href="https://www.reddit.com/r/RevivalDefi/" target='_blank'>
                <FontAwesomeIcon
                  icon={faReddit}
                  className="mySocialIcon"
                  color="#ffffff"
                />
              </a>
              <a href="https://revivaldefi.medium.com/" target='_blank'>
                <FontAwesomeIcon
                  icon={faMedium}
                  className="mySocialIcon"
                  color="#ffffff"
                />
              </a>
              <a href="https://www.tiktok.com/@revivaldefi" target='_blank'>
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="mySocialIcon"
                  color="#ffffff"
                />
              </a>
              <br></br>
              <FontAwesomeIcon
                  icon={faCloudflare}
                  color="#FF7400"/> <b>Secured by Cloudflare</b>
              <p></p>
              Copyright © 2022 Revival Defi. All rights  reserved.
            </div>
            
          </div>
        </div>
        <p></p>
        
        
      </div>
      
    );
  }
}

export default FooterComponent;
