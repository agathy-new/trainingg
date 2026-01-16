// src/types/contact.ts

export type ContactInfoItem = {
  label: string;
  value: string;
  icon: string; 
};

export type ContactFormField = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;

  
  options?: { value: string; label: string }[];

  
  rows?: number;
};

export type ContactSectionData = {
  sectionLabel: string;
  heading: string;
  info: ContactInfoItem[];
  formFields: ContactFormField[];
  submitText: string;
};
