// Hooks
import { useCountries } from "@/lib/hooks/use-countries";
import { useForm, Controller } from "react-hook-form";

import HeroImage from "../../assets/contact.png";

// Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { volunteer_schema } from "@/lib/schemas/volunteer.s";

// Shadcn
import InternPhoneInput from "./_components/intern-phone-input";

import { Input } from "@/components/ui/input";
import {
  Field,
  FieldError,
  FieldLabel,
  FieldGroup,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

// Custom Components
import Loader from "@/components/Loader/Loader";
import NotFound from "../NotFound/NotFound";
import SelectCountry from "./_components/select-country";
import VolunteerInterestSelect from "./_components/volunteer-interest-select";
import SelectCity from "./_components/select-city";
import UploadBox from "./_components/upload-box";
import CharCounter from "./_components/char-counter";

/** Volunteer landing route — contact experience with volunteer-focused page context */

function Volunteer() {
  // Countries Custom Hook
  const { data, error, memoData, isPending } = useCountries();

  // useForm
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(volunteer_schema),
    defaultValues: {
      fullName: "",
      email: "",
      country: "",
      city: "",
      motivation: "",
      interest: "",
      agreement: false,
    },
  });

  // Functions
  function onSubmit(data) {
    console.log(data);
  }

  // Statments
  if (isPending) {
    return <Loader />;
  }

  if (error) {
    return (
      <NotFound
        code={error?.status || "404"}
        title={"Could not load the page"}
        description="Something went worng!, please try again later"
      />
    );
  }

  return (
    <main className="relative min-h-screen">
      <img
        src={HeroImage}
        alt="Contact Zurfte Empowercare Foundation — youth empowerment and nonprofit programs in Nigeria"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 px-4 py-10 text-center sm:px-6">
        <h1 className="mt-4 text-3xl font-bold text-blue-900 sm:text-4xl md:text-5xl">
          Volunteer With Zurfte Empowercare Foundation
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-700 sm:text-lg">
          Join a community of passionate individuals using their skills, time,
          and experience to create meaningful social impact across our
          communities.
        </p>
        <div className="mx-auto mt-10 flex min-h-[50vh] max-w-6xl flex-col items-center bg-gray-50/95 py-10">
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
            <section
              className="col-span-3 rounded-lg bg-white p-6 shadow-lg sm:p-8"
              aria-labelledby="contact-form-heading"
            >
              <h2
                id="contact-form-heading"
                className="mb-6 text-2xl font-bold text-gray-800 sm:text-3xl"
              >
                Volunteer Application
              </h2>

              <form
                className="space-y-6 text-left"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Full Name & Email */}
                <FieldGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Full Name <span className="text-red-600 p-0 -m-1">*</span>
                    </FieldLabel>
                    <Input
                      {...register("fullName")}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <FieldError errors={[errors.fullName]} />
                    )}
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Email <span className="text-red-600 p-0 -m-1">*</span>
                    </FieldLabel>
                    <Input
                      {...register("email")}
                      placeholder="Enter your Email"
                    />
                    {errors.email && <FieldError errors={[errors.email]} />}
                  </Field>
                </FieldGroup>

                {/* Location */}
                <FieldGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Controller
                    name="country"
                    control={control}
                    render={({ field, fieldState }) => {
                      return (
                        <Field>
                          <SelectCountry
                            countries={data}
                            onChange={field.onChange}
                            value={field.value}
                          />
                          {fieldState.error && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      );
                    }}
                  />
                  <Controller
                    name="city"
                    control={control}
                    render={({ field, fieldState }) => {
                      return (
                        <Field>
                          <SelectCity
                            onChange={field.onChange}
                            value={field.value}
                            control={control}
                            countries={memoData}
                          />
                          {fieldState.error && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      );
                    }}
                  />
                </FieldGroup>

                {/* Phone Input */}
                <InternPhoneInput control={control} countries={memoData} />

                {/* LinkedIn */}
                <FieldGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field>
                    <FieldLabel>LinkedIn (Optional)</FieldLabel>
                    <Input
                      {...register("linkedin")}
                      placeholder="LinkedIn URL"
                    />
                  </Field>
                  <Controller
                    name="interest"
                    control={control}
                    render={({ field, fieldState }) => {
                      return (
                        <Field>
                          <FieldLabel>Volunteer Interest</FieldLabel>
                          <VolunteerInterestSelect
                            value={field.value}
                            onChange={field.onChange}
                          />
                          {fieldState.error && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      );
                    }}
                  />
                </FieldGroup>

                {/* Motivation */}
                <Field>
                  <FieldLabel>
                    Why would you like to volunteer with Zurfte Empowercare
                    Foundation?
                    <span className="text-red-600">*</span>
                  </FieldLabel>
                  <Textarea
                    placeholder="Motivation relevant experience"
                    rows={6}
                    className="!h-44"
                    {...register("motivation")}
                  />
                  <div className="flex justify-between">
                    {errors.motivation && (
                      <FieldError
                        className="w-full"
                        errors={[errors.motivation]}
                      />
                    )}
                    <CharCounter control={control} />
                  </div>
                </Field>

                {/* File Upload */}
                <Field>
                  <UploadBox control={control} />
                  {errors.resum && <FieldError errors={[errors.resum]} />}
                </Field>

                {/* Agreement */}
                <Field>
                  <div className="flex flex-row items-center gap-2">
                    <Controller
                      name="agreement"
                      control={control}
                      render={({ field }) => {
                        return (
                          <Checkbox
                            id="agreement"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        );
                      }}
                    />

                    <FieldLabel className="w-full" htmlFor="agreement">
                      I confirm that the information provided is accurate and I
                      consent to Zurfte Empowercare Foundation contacting me
                      regarding my volunteer application.
                    </FieldLabel>
                  </div>
                  {errors.agreement && (
                    <FieldError errors={[errors.agreement]} />
                  )}
                </Field>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-green-600 py-3 font-medium text-white shadow-md transition duration-300 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  Submit
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Volunteer;
