// src/components/ContactSection.tsx
"use client";
import { useForm, Controller } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { contactSectionData } from "@/data/contactSection";
import { Mail, Phone, MapPin } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
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
const [captchaToken, setCaptchaToken] = useState<string | null>(null);
const onSubmit = async (data: FormValues) => {
  setSubmitted(true);

  if (!captchaToken) return; 
  console.log("Sending...", data);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Done");
};

const [submitted, setSubmitted] = useState(false);

 const [selectedQuote, setSelectedQuote] = useState("");
  return (
    <section className="bg-[#F1F6FF] py-28 ">
      <div className="container mx-auto ">
        <div className="flex flex-col sm:flex-row xs:gap-8 sm:gap-8 md:gap-16 md:px-[12px] xs:px-4 sm:px-4 lg:gap-22  ">
   {/* LEFT */}
<div data-aos="fade-right" className="sm:pl-4   sm:w-[276px] md:w-[376px] lg:w-[451px] xl:w-[526px]"> 
  <p className="uppercase text-[16px] text-accent  mb-2">
    {contactSectionData.sectionLabel}
  </p>

  <h2 className="text-[32px] font-semibold uppercase text-primary mb-4 sm:w-[193px]">
    {contactSectionData.heading}
  </h2>

  <div className="space-y-8">
    {contactSectionData.info.map((item, i) => {
      return (
        <div key={i} className="flex gap-5 items-center">

          {/* ICON */}
          <div className="w-[45px] h-[45px] rounded-full bg-accent flex items-center justify-center overflow-hidden shrink-0 flex-none">
            <img
              src={item.icon}
              alt={item.label + ' icon'}
              className="w-[30px] h-[30px] object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="max-w-[224px]"> 
            <p className="text-primary text-[14px] ">{item.value}</p>
          </div>

        </div>
      );
    })}
  </div>
</div>
  {/* RIGHT – FORM */}
<form
  onSubmit={handleSubmit(onSubmit)}
  className="bg-white rounded-[20px] p-8 shadow-[0_0_20px_rgba(0,0,0,0.1)]
             space-y-6  w-full xs:w-[444px] sm:w-[396px] md:w-[444px] lg:w-[536px] xl:w-[619px]
            xs:justify-center "
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
              <div className="flex gap-3 w-full">
{/* مربع العلم */}
<div className="flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-3 h-[52px]">
  <PhoneInput
    defaultCountry="sa"
    value={phoneField.value}
    onChange={phoneField.onChange}
    className="PhoneInput"
    inputClassName="PhoneInputInput"
  />
</div>
  {/* مربع الرقم */}
                <div className="flex-1 rounded-full border border-gray-200 bg-white px-4 py-3 
                                focus-within:ring-2 focus-within:ring-secondary h-[52px]">
                  <input
                    type="tel"
                    value={phoneField.value}
                    onChange={(e) => phoneField.onChange(e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent outline-none border-none
                               text-primary text-[13px]
                               placeholder:text-primary placeholder:text-[13px]"
                  />
                </div>

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
          <button
            type="button"
            onClick={() => setSelectedValue(selectedValue)}
            className="w-full flex justify-between items-center border border-gray-200 rounded-full px-4 py-3 
                       text-left focus:outline-none focus:ring-2 focus:ring-secondary
                       text-primary text-[13px]"
          >
            <span>
              {field.options?.find(opt => opt.value === selectedValue)?.label || field.label}
            </span>
            <img src="/Contact/arrow-down.png" alt="Dropdown Arrow" />
          </button>

          <div
            className="absolute left-0 top-full mt-2 w-full bg-white rounded-2xl shadow-lg border border-gray-100
                       opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                       transition-all duration-300 delay-150 z-50"
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
            className={`w-full rounded-2xl border px-4 py-3 
                        text-primary text-[13px]
                        placeholder:text-primary placeholder:text-[13px]
                        focus:outline-none focus:ring-2 focus:ring-secondary
                        ${errors[field.name] ? "border-red-500" : "border-gray-200"}`}
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[field.name]?.message as string}
            </p>
          )}
        </div>
      );
    }
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
          className={`w-full rounded-full border px-4 py-3 
                      text-primary text-[13px]
                      placeholder:text-primary placeholder:text-[13px]
                      focus:outline-none focus:ring-2 focus:ring-secondary
                      ${errors[field.name] ? "border-red-500" : "border-gray-200"}`}
        />
        {errors[field.name] && (
          <p className="text-red-500 text-sm mt-1">
            {errors[field.name]?.message as string}
          </p>
        )}
      </div>
    );
  })}
<ReCAPTCHA
sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
 onChange={(token) => setCaptchaToken(token)}
  className="mr-4"
/>

{submitted && !captchaToken && (
  <p className="text-red-500 text-sm -mt-2">Please verify you are not a robot</p>
)}


  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-primary text-white py-4 rounded-full font-medium transition disabled:opacity-50 
               flex items-center justify-center gap-2"
  >
    {isSubmitting ? (
      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
    ) : (
      contactSectionData.submitText
    )}
  </button>
</form></div>
      </div>
    </section>
  );
}
