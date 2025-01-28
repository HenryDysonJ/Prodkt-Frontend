export interface nestedArrayContent {
    type?: string;
    title: string | null;
    content: nestedStringContent[] | string;
  }
  
export interface nestedStringContent {
    title: string | null;
    content: string;
  }
  
 export interface contentInterface {
    type?: string;
    title: string | null;
    content: string | nestedArrayContent[];
  }
  
export  interface dataInterface {
    title: string;
    content: contentInterface[];
  }

export const GdprData: dataInterface[] = [
    {
        title: "Introduction",
        content: [
            {
                type: 'default',
                title: null,
                content: "Prodkt is firmly committed to protecting and respecting the privacy of its customers and their end-users. We are mindful and compliant with applicable laws and regulations of data collection and processing in accordance with global data privacy, data security and EU General Data Protection Regulation (GDPR) guidelines."
            },
        ]
    },
    {
        title: "Terms of Use",
        content: [
            {
                type: 'multiplePara',
                title: null,
                content: [
                    {
                        title: null,
                        content: 'This agreement sets forth the terms and conditions that apply to your access and use of the internet web site Prodkt and its services, owned and operated by Crayond Digital Pvt. Ltd., registered in Chennai, India.'
                    },
                    {
                        title: null,
                        content: 'By using Prodkt, you agree to be bound by the terms and conditions mentioned herewith as Prodkt’s “Privacy Policy”. They may be amended from time to time in the future (see “Modifications” below).'
                    }
                ]
            }
        ]
    },
    {
        title: "Accepting the Terms",
        content: [
            {
                type: 'multiplePara',
                title: null,
                content: [
                    {
                        title: null,
                        content: 'By using the information, tools, software, features and functionality including content, updates and new releases on Prodkt (together the “Service(s)”), you agree to be bound by this agreement, whether you are a “Visitor” (which means that you simply browse the Prodkt website) or you are a “Customer”(which means you use services provided by Prodkt ).'
                    },
                    {
                        title: null,
                        content: 'The term “You” or “User” refers to a Visitor or a Customer depending on the context. The terms “We”, “Our”, “Us” or “Data Controller” refer to Prodkt . If you wish to become a customer, communicate with other members and make use of the service, you must read this agreement and indicate your acceptance during the “Signup” or “Registration” process. If you accept this agreement, you represent that you have the capacity to be bound by it or if you are acting on behalf of a company or entity that you have the authority to bind. Before you continue, you should print or save a local copy of this agreement for your records.'
                    }
                ]
            }
        ]
    },
    {
        title: "Definitions",
        content: [
            {
                type: 'multiplePara',
                title: null,
                content: [
                    {
                        type: 'default',
                        title: "Personal Data",
                        content: "Data relating to a living individual who is or can be identified either from the data or from the data in conjunction with other information that is in, or is likely to come into the possession of the data controller."
                    },
                    {
                        type: 'default',
                        title: "Collected Data",
                        content: "Personal Data which is collected automatically when you visit"
                    },
                    {
                        type: 'default',
                        title: "Service Data",
                        content: "The data that we collect on behalf of our User, which is necessary for providing the promised service in the contract."
                    },
                    {
                        type: 'default',
                        title: "Cookies",
                        content: "They are small sets of data sent from Prodkt and stored on the User’s computer by the User’s web browser while the User is browsing the website."
                    },
                    {
                        type: 'default',
                        title: "Service(s)",
                        content: "Any services provided to Prodkt customers/clients."
                    },
                    {
                        type: 'default',
                        title: "End-User",
                        content: "Any person or entity other than you or your users with whom you interact using the Service(s)."
                    }
                ]
            }
        ]
    },
    {
        title: "What Service(s) do we Provide",
        content: [
            {
                type: 'default',
                title: null,
                content: "Prodkt provides a well-rounded product development services to startup/SMB owners, allowing them to realize their product vision."
            }
        ]
    },
    {
        title: "What Personal Data does Prodkt Collect and Why?",
        content: [
            {
                type: 'default',
                title: null,
                content: "When you visit our website or participate in any of our programs, Prodkt may collect information (also known as Collected Data), which may include personal data, as set forth below:"
            }
        ]
    },
    {
        title: "Sign-up, Billing and Account Information?",
        content: [
            {
                type: 'points',
                title: 'When you subscribe or sign-up to any of our Service(s), we may collect your',
                content: [
                    {

                        title: null,
                        content: [
                            {
                                title: null,
                                content: 'Contact information such as name, business email address, phone number, and company name.'
                            },
                            {
                                title: null,
                                content: 'Unique identifiers such as username, account number, and password.'
                            },
                            {
                                title: null,
                                content: 'Unique identifiers such as username, account number, and password.'
                            }
                        ]
                    },
                    {
                        title: 'Subject to this Privacy and Security Policy, such data will be used to',
                        content: [
                            {
                                title: null,
                                content: 'Provide users with the Service(s) they have signed up for.'
                            },
                            {
                                title: null,
                                content: 'Send users communications regarding the Service(s).'
                            },
                            {
                                title: null,
                                content: 'Assess users’ business needs to determine or suggest suitable Service(s).'
                            },
                            {
                                title: null,
                                content: 'Send users requested information about the Service(s).'
                            },
                            {
                                title: null,
                                content: 'Respond to customer service requests, questions and concerns.'
                            },
                            {
                                title: null,
                                content: 'Administer user accounts.'
                            },
                            {
                                title: null,
                                content: 'Send users promotional and marketing communications.'
                            },
                            {
                                title: null,
                                content: 'Facilitate transactions with other users when you use our Service(s).'
                            }
                        ]
                    }
                ]
            },
            {
                type: 'default',
                title: 'Google Analytics',
                content: "We use Google Analytics’ information such as your device type, geographic location, the type of browser being used, usage pattern through cookies and browser settings, your clicks, scrolls, conversion and real-time data visits that are collected automatically when you visit our site. We use this data to analyze the performance of individual pages on our site, compile statistical reports, improve, support and enhance the performance of our site, improve marketing and improve the services we offer you."
            },
            {
                type: 'default',
                title: 'Cookies and Similar Technologies',
                content: "We use cookies and similar tracking technologies to track the activity on our Service(s) and we hold certain information such as the date and time of visits, and in the case of our affiliate program the name of the User visiting our website using the affiliate’s link.You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. We use this data to improve our Service(s) and to manage our affiliate program."
            },
            {
                type: 'default',
                title: 'Newsletter, Blog and Webinar Subscription',
                content: "When you visit our website and submit forms for a Newsletter, Blog or Webinar subscription, we may collect your information such as your name and your email address. We will use such data to send you requested information about the service as well as promotional and marketing communications providing information about our services."
            },
            {
                type: 'default',
                title: 'Chat Inquiries',
                content: "When you visit our website regarding queries about our Service(s), we may collect information such as your name, email address and your phone number. Note that we will use such data to send you requested information about the service as well as promotional and marketing communications providing information about our services."
            }
        ]
    },
    {
        title: "Lawful Basis of Processing",
        content: [
            {
                type: 'points_without_no',
                title: 'We may process your personal data when one of the following applies:',
                content: [
                    {
                        title: null,
                        content: [
                            {
                                title: null,
                                content: 'You have given us your consent to process it. When we are obligated to process the data as per the contract you have with us.'
                            },
                            {
                                title: null,
                                content: 'When your contract with us requires us to process your data so that you can comply with specific counter-obligations under the contract.'
                            },
                            {
                                title: null,
                                content: 'When processing is necessary for the purposes of the legitimate interests pursued by you.'
                            },
                            {
                                title: null,
                                content: 'If you have any queries regarding the processing, you can contact us at nfo.Prodkt@crayond.com.'
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        title: "Marketing Communication",
        content: [
            {
                type: 'default',
                title: null,
                content: "If you have signed up for any of our services, we may use your email id to send promotional emails, newsletters or product-related communications. If you no longer wish to receive these communications, you can opt-out by following the instructions contained in the emails."
            },
        ]
    },
    {
        title: "Social Media Apps",
        content: [
            {
                type: 'default',
                title: null,
                content: "Prodkt may provide experiences on social media platforms such as Facebook®, Twitter® and LinkedIn® that enable online sharing and collaboration among users who have registered to use them. Any content you post, such as pictures, information, opinions, or any Personal Information that you make available to other participants on these social platforms, is subject to the Terms of Use and Privacy Policies of those platforms. Please refer to those social media platforms to better understand your rights and obligations with regard to such content."
            },
        ]
    },
    {
        title: "Sharing of Personal Data",
        content: [
            {
                type: 'default',
                title: null,
                content: "We will not sell, lease or distribute your personal information to companies or organizations for commercial purposes. We will use your personal information to send you requested information about the Service(s), as well as promotional and marketing communications providing information about our services. If you wish to opt-out from these communications you can follow the instructions contained in the emails or contact us at info.prodkt@crayond.com."
            },
        ]
    },
    {
        title: "Data Protection Rights",
        content: [
            {
                type: 'points_without_no',
                title: 'Under The Data Protection Act 2018, you have a number of rights. They are as follows:',
                content: [
                    {
                        title: null,
                        content: [
                            {
                                title: null,
                                content: 'Right to be Informed'
                            },
                            {
                                title: null,
                                content: 'Right of Access'
                            },
                            {
                                title: null,
                                content: 'Right to Rectification'
                            },
                            {
                                title: null,
                                content: 'Right to Erasure'
                            },
                            {
                                title: null,
                                content: 'Right to Restrict Processing'
                            },
                            {
                                title: null,
                                content: 'Right to Data Portability'
                            },
                            {
                                title: null,
                                content: 'Right to Object'
                            },
                            {
                                title: null,
                                content: 'Rights relating to automated decision making including profiling'
                            },
                            {
                                title: null,
                                content: 'For any queries regarding correction, updating, modification or deletion of your Personal Data, which forms a part of Collected Data, please contact us at info.Prodkt@crayond.com.'
                            }
                        ]
                    },
                ]
            }

        ]
    },
    {
        title: "Retention of Your Information",
        content: [
            {
                type: 'multiplePara',
                title: null,
                content: [
                    {
                        title: null,
                        content: 'Prodkt will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes and enforce our legal agreements and policies.'
                    },
                    {
                        title: null,
                        content: 'Prodkt will also retain Service Data for internal analysis purposes. Service Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service(s).'
                    }
                ]
            }
        ]
    },
]

export const PrivacyPolicyData: dataInterface[] =  [
    {
        title: "Introduction",
        content: [
            {
                type: 'default',
                title: null,
                content: "Prodkt is a unified multi-brand portal for any to every product of value and aims to be a supremely cognitive and comprehensive integrated platform. A collaborative platform that seamlessly enhances the customer experience of the end users."
            }
        ]
    },
    {
        title: "What personal data does Prodkt collect and why?",
        content: [
            {
                type: 'points',
                title: 'Sign-up, billing, and Account information.',
                content: [
                    {

                        title: null,
                        content: [
                            {
                                title: null,
                                content: 'contact information such as name, e-mail address, mailing address, IP address, geographic location, or phone number of the Account admin'
                            },
                        ]
                    },
                    {
                        title: 'When you subscribe and sign-up to any of our Service(s), we may collect your',
                        content: [
                            {
                                title: null,
                                content: 'name and e-mail address when Account admin/Agent(s) provide feedback from within the Service(s).'
                            },
                            {
                                title: null,
                                content: 'unique identifiers, such as username, account number or password.'
                            }
                        ]
                    },
                    {
                        title: 'Subject to this Notice and the Terms, we will use such data, including without limitation, to',
                        content: [
                            {
                                title: null,
                                content: 'Provide you the Service(s)'
                            },
                            {
                                title: null,
                                content: 'Send you communication from the Service(s)'
                            },
                            {
                                title: null,
                                content: 'Assess needs of your business to determine or suggest suitable Service(s).'
                            },
                            {
                                title: null,
                                content: 'Send users requested information about the Service(s).'
                            },
                            {
                                title: null,
                                content: 'Respond to customer service requests, questions and concerns.'
                            },
                            {
                                title: null,
                                content: 'Administer your accounts.'
                            },
                            {
                                title: null,
                                content: 'Send you promotional and marketing communications over various channels such as whatsapp, SMS, email Etc'
                            },
                            {
                                title: null,
                                content: 'facilitate your transactions with other users when you use our Service(s).'
                            }
                        ]
                    }
                ]
            },
            {
                type: 'points',
                title: 'Public forums, Forms and Newsletters.',
                content: [
                    {
                        title: 'When you visit our publicly accessible community forums and blogs or submit any forms on our Website, you should be aware that any information you provide in these areas may be read, collected, and used by others who access them. Further, we may collect your',
                        content: [
                            {
                                title: null,
                                content: 'Contact information such as name, e-mail address, mailing address, or phone number'
                            },
                            {
                                title: null,
                                content: 'Information about your business, such as company name, company size, business type'
                            },
                            {
                                title: null,
                                content: 'A short bio about you to identify you as the author of the post. When you actively subscribe to our newsletters, we collect your e-mail address to share our newsletters with you.'
                            }
                        ]
                    },
                    {
                        title: 'Subject to this Notice, we will use such data, including without limitation, to',
                        content: [
                            {
                                title: null,
                                content: 'Assess needs of your business to determine or suggest suitable Service(s)'
                            },
                            {
                                title: null,
                                content: 'Send you requested information about the Service(s)'
                            },
                            {
                                title: null,
                                content: 'Send you promotional and marketing communications'
                            },
                            {
                                title: null,
                                content: 'Respond to your questions and concerns'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "Cookies and similar technologies",
        content: [
            {
                type: 'multiplePara',
                title: null,
                content: [
                    {
                        title: null,
                        content: 'We and our third party advertising partners use cookies and similar technologies in analyzing trends, administering the app, tracking users’ movements around the app, and gathering demographic information about our user base as a whole. We may receive reports based on the use of these technologies by these companies on an individual and aggregated basis. Most web browsers support cookies and users can control the use of cookies at the individual browser level. Please note that if you choose to disable cookies, it may limit your use of certain features or functions on our Websites and services.'
                    },
                    {
                        title: null,
                        content: 'As is true of most apps, we gather certain information automatically and store it in log files. This information may include internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, the files viewed on our App (e.g., HTML pages, graphics, etc.), operating system, date/time stamp, and/or clickstream data. We link this automatically collected data to other data we collect about you. We do this mainly to improve the services we offer you, to improve marketing, analytics, and/or App performance and functionality'
                    }
                ]
            }
        ]
    },
    {
        title: "Analytics",
        content: [
            {
                type: 'multiplePara',
                title: null,
                content: [
                    {
                        title: null,
                        content: 'Apart from the aforementioned information collected by us, we automatically receive and record certain Personal Data of yours when You visit/use our App. This includes device model, IP address, the type of browser being used, usage pattern through cookies and browser settings, query logs and product usage logs.'
                    },
                    {
                        title: null,
                        content: 'We also collect clicks, scrolls, conversion and drop-off on our App and Service(s) to render user journeys in real-time.'
                    }
                ]
            },
            {
                type: 'points_without_no',
                title: null,
                content: [
                    {

                        title: 'Send you requested information about the service(s).',
                        content: [
                            {
                                title: null,
                                content: 'Send you requested information about the service(s).'
                            },
                            {
                                title: null,
                                content: 'Respond to user service requests, questions and concerns.'
                            },
                            {
                                title: null,
                                content: 'For analytical purposes.'
                            },
                        ]
                    },
                    {
                        title: 'You authorize Prodkt and its service providers to perform analytics on such collected data to:',
                        content: [
                            {
                                title: null,
                                content: 'Improve, enhance, support and operate the Websites'
                            },
                            {
                                title: null,
                                content: 'Compile statistical reports and record insights into usage patterns. You acknowledge that Prodkt uses Collected Data, as the case may be, for the aforementioned purposes.'
                            }
                        ]
                    },
                ]
            },
        ]
    },
    {
        title: "Testimonials",
        content: [
            {
                type: 'default',
                title: null,
                content: "We may post your testimonials/comments/reviews on our App which may contain your Personal Data. Prior to posting the testimonial, we will obtain your consent to post your name along with the testimonial. If you want your testimonial removed, please contact us at Prodkt@crayond.com"
            }
        ]
    },
    {
        title: "Your Consent",
        content: [
            {
                type: 'default',
                title: null,
                content: "By using our site, you consent to our online privacy policy."
            }
        ]
    },
    {
        title: "Contact Us",
        content: [
            {
                type: 'points_without_no',
                title: 'If there are any questions regarding this privacy policy, the practices of this platform or your dealings with this platform, you may contact us using the information below:',
                content: [
                    {
                        title: null,
                        content: [
                            {
                                title: null,
                                content: '2/498, Ayshika, Sunrise Avenue 2nd Cross Street, Neelankarai, Chennai, India'
                            },
                            {
                                title: null,
                                content: 'Phone: +(91) 74483 90100'
                            },
                            {
                                title: null,
                                content: 'Email: Prodkt@crayond.com'
                            }
                        ]
                    }
                ]
            },
        ]
    },

]

