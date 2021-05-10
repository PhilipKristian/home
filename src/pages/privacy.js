import React from "react";
import Layout from "../components/xxxLayout";

import { GenereicParaRead, ReadSection } from "../styles/ReadStyles";

const privacy = () => {
  return (
    <Layout>
      <ReadSection white style={{ paddingTop: "50px" }}>
        <div>
          <h5>Terms of Use</h5>
        </div>
        <div>
          <GenereicParaRead lessSize grey>
            By using or accessing the website at https://www.philippkristian.com
            (‘Website’) you agree to be bound by the following terms and
            conditions, as they may be amended from time to time. The Website
            and all web pages thereunder, including the information, content,
            graphics and other materials displayed therein and any functionality
            or facility provided therein (collectively “Content”) are provided
            on an “as is” and “as available” basis for general information
            purposes and not as legal or other professional advice. No
            warranties of any kind are given in respect of the Website or the
            Content.No part of the Website or Content may be reproduced,
            distributed, mirrored or framed, save that Content may be
            downloaded, printed or used for personal and non-commercial
            purposes. Content may be modified, suspended or removed without
            prior notice. These terms and conditions shall be governed by and
            construed in accordance with Singapore law.
          </GenereicParaRead>
        </div>
        <div>
          <h5>Personal Data Protection Statement</h5>

          <GenereicParaRead lessSize grey>
            This is the personal data protection statement of
            philippkristian.com, which we may update from time to time. You may
            visit our Website and browse without having to provide any personal
            data.
            <br /> Collection, use and disclosure of your personal data: The
            personal data we collect from you will be used in the following way:
            <br />
            Provision of services to you: Where you have engaged us to provide
            services to you, your personal data may be collected, used and
            disclosed by us and our affiliates, service providers and agents to
            enable us and our affiliates, service providers and agents to
            properly provide services to or for you, and to enable us and our
            affiliates, services providers and agents to comply with applicable
            laws, regulations, industry codes and guidelines, et cetera.
            <br /> Contact us: If you have any enquiries, comments or
            suggestions about our collection or use of your personal data or
            this statement, we would be pleased to receive them if you contact
            our Data Protection Officer by email at legal@philippkristian.com{" "}
            <br /> If you would like to receive information about the personal
            data we have in relation to you, to update such personal data or to
            withdraw any consent you have provided to us previously, please
            contact our Data Protection Officer by email at
            legal@philippkristian.com.
          </GenereicParaRead>
        </div>
      </ReadSection>
    </Layout>
  );
};

export default privacy;
