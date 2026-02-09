"use client";

import { useState } from "react";
import Button from "./Button";
import { Send } from "lucide-react";

interface JobApplicationFormProps {
  jobTitle: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  linkedIn: string;
  yearsExperience: string;
  coverLetter: string;
}

export default function JobApplicationForm({ jobTitle }: JobApplicationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    yearsExperience: "",
    coverLetter: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Job Application: ${jobTitle} — ${formData.fullName}`
    );
    const body = encodeURIComponent(
      `Position: ${jobTitle}

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
LinkedIn: ${formData.linkedIn || "Not provided"}
Years of Experience: ${formData.yearsExperience || "Not specified"}

Cover Letter / Message:
${formData.coverLetter}`
    );

    window.location.href = `mailto:amorakinyo1@gmail.com,aymorakinyo1@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputStyles =
    "w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 transition-colors text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-slate-300 mb-1"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Your full name"
          className={inputStyles}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-300 mb-1"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputStyles}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-slate-300 mb-1"
        >
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
        <label
          htmlFor="linkedIn"
          className="block text-sm font-medium text-slate-300 mb-1"
        >
          LinkedIn Profile
        </label>
        <input
          type="url"
          id="linkedIn"
          name="linkedIn"
          value={formData.linkedIn}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/yourprofile"
          className={inputStyles}
        />
      </div>

      <div>
        <label
          htmlFor="yearsExperience"
          className="block text-sm font-medium text-slate-300 mb-1"
        >
          Years of Experience *
        </label>
        <select
          id="yearsExperience"
          name="yearsExperience"
          required
          value={formData.yearsExperience}
          onChange={handleChange}
          className={`${inputStyles} ${!formData.yearsExperience ? "text-slate-400" : ""}`}
        >
          <option value="">Select range</option>
          <option value="1-3 years">1-3 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5-8 years">5-8 years</option>
          <option value="8-12 years">8-12 years</option>
          <option value="12+ years">12+ years</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="coverLetter"
          className="block text-sm font-medium text-slate-300 mb-1"
        >
          Cover Letter / Message *
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          required
          rows={5}
          value={formData.coverLetter}
          onChange={handleChange}
          placeholder="Tell us about your relevant experience and why you'd be a great fit for this role..."
          className={`${inputStyles} resize-none`}
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Submit Application <Send className="h-4 w-4" />
      </Button>

      <p className="text-xs text-slate-500 text-center">
        This will open your email client with a pre-filled message.
        Please attach your CV/resume before sending.
      </p>
    </form>
  );
}
