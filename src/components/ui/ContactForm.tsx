"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { industryOptions, programInterestOptions } from "@/lib/constants";
import Button from "./Button";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  industry: string;
  programInterest: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    industry: "",
    programInterest: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    // TODO: Connect to actual email service or API
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        industry: "",
        programInterest: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-16 w-16 text-accent-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">
          Thank You!
        </h3>
        <p className="text-slate-300 mb-6">
          Your request has been received. Our team will get back to you within 48 hours.
        </p>
        <Button variant="primary" onClick={() => setStatus("idle")}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  const inputStyles =
    "w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputStyles}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+234 XXX XXX XXXX"
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-slate-300 mb-1">
            Organization *
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            value={formData.organization}
            onChange={handleChange}
            placeholder="Your company or organization"
            className={inputStyles}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-slate-300 mb-1">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={cn(inputStyles, !formData.industry && "text-slate-400")}
          >
            <option value="">Select your industry</option>
            {industryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="programInterest" className="block text-sm font-medium text-slate-300 mb-1">
            Program of Interest
          </label>
          <select
            id="programInterest"
            name="programInterest"
            value={formData.programInterest}
            onChange={handleChange}
            className={cn(inputStyles, !formData.programInterest && "text-slate-400")}
          >
            <option value="">Select a program</option>
            {programInterestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your training needs..."
          className={cn(inputStyles, "resize-none")}
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
      >
        {status === "submitting" ? (
          "Submitting..."
        ) : (
          <>
            Send Request <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
