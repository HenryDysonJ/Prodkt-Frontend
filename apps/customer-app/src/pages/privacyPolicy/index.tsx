import { Box, Typography } from '@mui/material';

import { privacyPolicyStyle } from './style';
import { BackCircleIcon, PageHeader } from '@core/ui/atoms';
import { useEffect } from 'react';
import { track } from '@amplitude/analytics-browser';
export default function PrivacyPolicy() {


  // Amplitude tracking
  useEffect(() => {
    track('Privacy policy page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box sx={privacyPolicyStyle.rootSx}>
      <Box py={3}>
        <PageHeader showIcon icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />} header headerText="Privacy Policy" />
      </Box>
      <Box sx={privacyPolicyStyle.boxContainerSX}>
        <Box sx={privacyPolicyStyle.containerOneSx}>
          <Typography variant='subtitle1' sx={privacyPolicyStyle.titleSx}>Introduction</Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            Prodkt is a unified multi-brand portal for any to every product of value and aims to be a supremely
            cognitive and comprehensive integrated platform. A collaborative platform that seamlessly enhances the
            customer experience of the end users.
          </Typography>
        </Box>
        <Box sx={privacyPolicyStyle.containerTwoSx}>
          <Typography variant='subtitle1' sx={privacyPolicyStyle.titleSx}>What personal data does Prodkt collect and why?</Typography>
          <Typography variant='subtitle2' sx={privacyPolicyStyle.subTitleSx}>Sign-up, billing, and Account information</Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            1. Contact information such as name, e-mail address, mailing address, IP address, geographic location, or
            phone number of the account admin.
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            2. When you subscribe and sign-up to any of our Service(s), we may collect your name and e-mail address when
            Account admin/Agent(s) provide feedback from within the Service(s)
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            3. Unique identifiers, such as username, account number or password.
          </Typography>
          <Typography variant='subtitle2' sx={privacyPolicyStyle.subTitleSx}>
            Subject to this Notice and the Terms, we will use such data, including without limitation, to
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>1. Provide you the Service(s)</Typography>
          <Typography sx={privacyPolicyStyle.textSx}>2. Send you communication from the Service(s)</Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            3. Assess needs of your business to determine or suggest suitable Service(s)
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>4. Send you requested information about the Service(s)</Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            5. Respond to customer service requests, questions and concerns
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            6. Respond to customer service requests, questions and concerns
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>7. Administer your Account</Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            8. Send you promotional and marketing communications over various channels such as whatsapp, SMS, email Etc
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            9. Facilitate your transactions with other users when you use our Service(s)
          </Typography>
        </Box>
        <Box sx={privacyPolicyStyle.containerThreeSx}>
          <Typography variant='subtitle1' sx={privacyPolicyStyle.titleSx}>Public forums, Forms and Newsletters.</Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            When you visit our publicly accessible community forums and blogs or submit any forms on our Website, you
            should be aware that any information you provide in these areas may be read, collected, and used by others
            who access them. Further, we may collect your
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            1. Contact information such as name, e-mail address, mailing address, or phone number
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            2. Information about your business, such as company name, ‘company size, business type
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            3. A short bio about you to identify you as the author of the post. When you actively subscribe to our
            newsletters, we collect your e-mail address to share our newsletters with you.
          </Typography>
          <Typography variant='subtitle2' sx={privacyPolicyStyle.subTitleSx}>
            Subject to this Notice, we will use such data, including without limitation, to
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            1. Assess needs of your business to determine or suggest suitable Service(s)
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>2. Send you requested information about the Service(s)</Typography>
          <Typography sx={privacyPolicyStyle.textSx}>3. Send you promotional and marketing communications</Typography>
          <Typography sx={privacyPolicyStyle.textSx}>4. Respond to your questions and concerns.</Typography>
        </Box>
        <Box sx={privacyPolicyStyle.containerFourSx}>
          <Typography variant='subtitle1' sx={privacyPolicyStyle.titleSx}>Cookies and similar technologies</Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            We and our third party advertising partners use cookies and similar technologies in analyzing trends,
            administering the app, tracking users’ movements around the app, and gathering demographic information about
            our user base as a whole. We may receive reports based on the use of these technologies by these companies
            on an individual and aggregated basis. Most web browsers support cookies and users can control the use of
            cookies at the individual browser level. Please note that if you choose to disable cookies, it may limit
            your use of certain features or functions on our Websites and services.
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            As is true of most apps, we gather certain information automatically and store it in log files. This
            information may include internet protocol (IP) addresses, browser type, internet service provider (ISP),
            referring/exit pages, the files viewed on our App (e.g., HTML pages, graphics, etc.), operating system,
            date/time stamp, and/or clickstream data. We link this automatically collected data to other data we collect
            about you. We do this mainly to improve the services we offer you, to improve marketing, analytics, and/ or
            App performance and functionality
          </Typography>
        </Box>
        <Box sx={privacyPolicyStyle.containerFixSx}>
          <Typography variant='subtitle1' sx={privacyPolicyStyle.titleSx}>Analytics</Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            Apart from the aforementioned information collected by us, we automatically receive and record certain
            Personal Data of yours when You visit/use our App. This includes device model, IP address, the type of
            browser being used, usage pattern through cookies and browser settings, query logs and product usage logs
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            We also collect clicks, scrolls, conversion and drop-off on our App and Service(s) to render user journeys
            in real-time
          </Typography>
          <Typography variant='subtitle2' sx={privacyPolicyStyle.subTitleSx}>
            Subject to this Notice, we will use such data, including without limitation, to
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            1. Send you requested information about the service(s).
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            2. Respond to user service requests, questions and concerns.
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>3. For analytical purposes.</Typography>
          <Typography variant='subtitle2' sx={privacyPolicyStyle.subTitleSx}>
            You authorize Prodkt and its service providers to perform analytics on such collected data to:
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            We also collect clicks, scrolls, conversion and drop-off on our App and Service(s) to render user journeys
            in real-time
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>1. Improve, enhance, support and operate the Websites</Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            2. Compile statistical reports and record insights into usage patterns. You acknowledge that Prodkt uses
            Collected Data, as the case may be, for the aforementioned purposes.
          </Typography>
        </Box>
        <Box sx={privacyPolicyStyle.containerSevenSx}>
          <Typography variant='subtitle1' sx={privacyPolicyStyle.titleSx}>Testimonials</Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            We may post your testimonials/comments/reviews on our App which may contain your Personal Data. Prior to
            posting the testimonial, we will obtain your consent to post your name along with the testimonial. If you
            want your testimonial removed, please contact us at{' '}
            <Box component="span" sx={privacyPolicyStyle.website}>
              Prodkt@crayond.com
            </Box>
          </Typography>
        </Box>
        <Box sx={privacyPolicyStyle.containerEightSx}>
          <Typography variant='subtitle1' sx={privacyPolicyStyle.titleSx}>Your Consent</Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            By using our site, you consent to our online privacy policy.
          </Typography>
        </Box>
        <Box sx={privacyPolicyStyle.containerNineSx}>
          <Typography variant='subtitle1' sx={privacyPolicyStyle.titleSx}>Contacting Us</Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            If there are any questions regarding this privacy policy, the practices of this platform or your dealings
            with this platform, you may contact us using the information below:
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>
            2/498, Ayshika, Sunrise Avenue 2nd Cross Street, Neelankarai, Chennai, India
          </Typography>
          <Typography sx={privacyPolicyStyle.textSx}>Phone: +(91) 74483 90100</Typography>
          <Typography sx={privacyPolicyStyle.emailSx}>
            Email: <span>Prodkt@crayond.com</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
