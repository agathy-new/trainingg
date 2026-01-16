// src/components/ContactSection.tsx
"use client";

import { useForm, Controller } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { contactSectionData } from "@/data/contactSection";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
type FormValues = {
  [key: string]: string;
};

const icons = {
  email: Mail,
  phone: Phone,
  location: MapPin,
};
 
export default function ContactSection() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("FORM DATA ", data);
  };
 const [selectedQuote, setSelectedQuote] = useState("");
  return (
    <section className="bg-[#e0f7fa]/30 py-20 ">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
         
       {/* LEFT */}
<div data-aos="fade-right" className="pl-8"> 
  <p className="text-uppercase text-sm text-accent font-medium mb-3">
    {contactSectionData.sectionLabel}
  </p>

  <h2 className="text-4xl font-semibold uppercase text-primary mb-10">
    {contactSectionData.heading}
  </h2>

  <div className="space-y-6">
    {contactSectionData.info.map((item, i) => {
      return (
        <div key={i} className="flex gap-4 items-center">

          {/* ICON */}
          <div className="w-[45px] h-[45px] rounded-full bg-accent flex items-center justify-center overflow-hidden shrink-0 flex-none">
            <img
              src={item.icon}
              alt={item.label + ' icon'}
              className="w-6 h-6 object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="max-w-[220px]"> 
            <p className="text-primary text-[15px]">{item.value}</p>
          </div>

        </div>
      );
    })}
  </div>
</div>


          {/* RIGHT – FORM */}
        <form
  onSubmit={handleSubmit(onSubmit)}

  className="bg-white rounded-xl p-10 shadow-2xl space-y-6"
data-aos="fade-left" 
>
  {contactSectionData.formFields.map((field) => {
    if (field.type === "phone") {
      return (
        <div key={field.name}>
          <Controller
            name={field.name}
            control={control}
            rules={{
              required: field.required
                ? `${field.label} is required`
                : false,
            }}
            render={({ field: phoneField }) => (
              <div className="rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-secondary">
                <PhoneInput
                  defaultCountry="sa"
                  value={phoneField.value}
                  onChange={phoneField.onChange}
                  className="w-full"
                  inputClassName="w-full py-3 px-4 rounded-xl"
                  placeholder={field.placeholder}
                />
              </div>
            )}
          />

          {errors[field.name] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[field.name]?.message as string}
            </p>
          )}
        </div>
      );
    }

   if (field.type === "select") {
  
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div key={field.name} className="relative w-full group">
      {/* الزر الأساسي */}
    <button
        type="button"
        onClick={() => setSelectedValue(selectedValue)}
        className="w-full flex justify-between items-center border border-gray-200 rounded-2xl px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-secondary"
      >
          <span>
          {field.options?.find(opt => opt.value === selectedValue)?.label || field.label}
        </span>
        <img
          src="/Contact/arrow-down.png"
          alt="Dropdown Arrow"
          // className="w-4 h-4 ml-2"
        />
      </button>

      {/* Dropdown المنسدل */}
      <div
        className="
          absolute left-0 top-full mt-2
          w-full
          bg-white
          rounded-2xl
          shadow-lg
          border border-gray-100
          opacity-0
          translate-y-2
          group-hover:opacity-100
          group-hover:translate-y-0
          transition-all
        duration-300 delay-150
          z-50
        "
      >
        <ul className="py-2">
          {field.options?.map(opt => (
            <li key={opt.value}>
              <button
                type="button"
                onClick={() => setSelectedValue(opt.value)}
                className="w-full text-left px-4 py-2 hover:bg-secondary hover:text-white transition-colors duration-200"
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {errors[field.name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[field.name]?.message as string}
        </p>
      )}
    </div>
  );
}

    if (field.type === "textarea") {
      return (
        <div key={field.name}>
          <textarea
            {...register(field.name, {
              required: field.required
                ? `${field.label} is required`
                : false,
            })}
            placeholder={field.placeholder}
            rows={field.rows || 4}
            className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary
              ${
                errors[field.name] ? "border-red-500" : "border-gray-200"
              }`}
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[field.name]?.message as string}
            </p>
          )}
        </div>
      );
    }

    // الافتراضي: input type text/email
    return (
      <div key={field.name}>
        <input
          type={field.type}
          {...register(field.name, {
            required: field.required
              ? `${field.label} is required`
              : false,
          })}
          placeholder={field.placeholder}
          className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary
            ${
              errors[field.name] ? "border-red-500" : "border-gray-200"
            }`}
        />
        {errors[field.name] && (
          <p className="text-red-500 text-sm mt-1">
            {errors[field.name]?.message as string}
          </p>
        )}
      </div>
    );
  })}

  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-primary text-white py-4 rounded-xl font-medium  transition disabled:opacity-50"
  >
    {isSubmitting ? "Sending..." : contactSectionData.submitText}
  </button>
</form>

        </div>
      </div>
    </section>
  );
}
