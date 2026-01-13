// src/types/contact.ts

export type ContactInfoItem = {
  label: string;
  value: string;
  icon: string;  // نغيير النوع من { "email" | "phone" | "location" } إلى string للمسار
};

export type ContactFormField = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
};

export type ContactSectionData = {
  sectionLabel: string;
  heading: string;
  info: ContactInfoItem[];
  formFields: ContactFormField[];
  submitText: string;
};
