import * as z from "zod";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

export const volunteer_schema = z.object({
  fullName: z.string().min(6, "Please provide us your full name"),
  email: z.email({ error: "Please provide us a valid Email" }),
  country: z.string().min(1, "Select your country"),
  city: z.string().min(1, "Select your city"),
  phone: z.e164({ error: "Please provide us a valid phone number" }),
  linkedin: z.url().optional(),
  interest: z.string().min(1, "Select a department you are interested in"),
  motivation: z
    .string()
    .min(50, "At least 50 chars")
    .max(1000, "You have reached the maximum length"),
  resum: z
    .file({
      error: "Resume file is required",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      error: "File size must not exceed 10MB",
    })
    .refine(
      (file) => {
        const extensionIsValid = ALLOWED_EXTENSIONS.some((extension) =>
          file.name.toLowerCase().endsWith(extension),
        );

        return ALLOWED_FILE_TYPES.includes(file.type) || extensionIsValid;
      },
      {
        error: "Only PDF, DOC and DOCX files are allowed",
      },
    ),
  agreement: z.boolean().refine((value) => value === true, {
    message: "You must agree",
  }),
});
