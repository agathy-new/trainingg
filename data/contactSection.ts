import { ContactSectionData } from "@/types/contact";

export const contactSectionData: ContactSectionData = {
  sectionLabel: "Contact Us",
  heading: "Get In Touch",
  submitText: "Submit",

  info: [
    {
      label: "Email",
      value: "admin@strata-global.com",
      icon: "/Contact/tabler-icon-message.svg",
    },
    {
      label: "Phone",
      value: "+971 4 354 9857",
      icon: "/Contact/tabler-icon-phone.svg",
    },
    {
      label: "Address",
      value:
        "U-Bora Office Tower, Office 403, Marasi Drive, Business Bay, Dubai",
      icon: "/Contact/tabler-icon-map-pin.svg",
    },
  ],

  formFields: [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      required: true,
      placeholder: "First Name",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      required: true,
      placeholder: "Last Name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Email",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "phone",
      required: true,
      placeholder: "Phone Number",
    },
    {
      name: "company",
      label: "Company",
      type: "text",
      placeholder: "Company",
    },
    {
      name: "communityQuote",
      label: "Quote on community management services",
      type: "select",
      required: true,
      options: [
        { value: "option1", label: "خيار1" },
        { value: "option2", label: "خيار2" },
      ],
    },
    {
      name: "communityMessage",
      label: "Leave your message",
      type: "textarea",
      required: false,
      placeholder: "leave your message",
      rows: 6,
    },
  ],
};
