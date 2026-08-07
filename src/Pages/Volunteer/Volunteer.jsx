import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCountries } from '@/lib/hooks/use-countries';
import { volunteer_schema } from '@/lib/schemas/volunteer.s';
import { trackVolunteerConversion } from '@/lib/analytics';
import {
  FORM_INPUT,
  FORM_TEXTAREA,
} from '@/components/forms/formFieldStyles';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Checkbox } from '@/components/ui/checkbox';
import HeroImage from '../../assets/contact.png';
import NotFound from '../NotFound/NotFound';
import InternPhoneInput from './_components/intern-phone-input';
import SelectCountry from './_components/select-country';
import SelectCity from './_components/select-city';
import VolunteerInterestSelect from './_components/volunteer-interest-select';
import UploadBox from './_components/upload-box';
import CharCounter from './_components/char-counter';
import { submitVolunteerApplication } from './lib/submitVolunteerApplication';

const DEFAULT_VALUES = {
  fullName: '',
  email: '',
  country: '',
  city: '',
  phone: '',
  linkedin: '',
  interest: '',
  motivation: '',
  agreement: false,
};

function Volunteer() {
  const { data, error, memoData, isPending } = useCountries();
  const [status, setStatus] = useState('idle');
  const [formError, setFormError] = useState('');
  const submittedRef = useRef(false);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(volunteer_schema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onTouched',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });

  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const onSubmit = async (values) => {
    if (submittedRef.current || isSubmitting) {
      return;
    }

    submittedRef.current = true;
    setFormError('');
    setStatus('submitting');

    try {
      const payload = await submitVolunteerApplication(values);
      trackVolunteerConversion({
        interest: payload.interest,
        country: payload.country,
      });
      reset(DEFAULT_VALUES);
      setStatus('success');
      document
        .getElementById('volunteer-form')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (submitError) {
      submittedRef.current = false;
      setStatus('error');
      setFormError(
        submitError instanceof Error
          ? submitError.message
          : 'We could not submit your application. Please try again.',
      );
    }
  };

  if (error) {
    return (
      <NotFound
        code={error?.status || '404'}
        title="Could not load the page"
        description="Something went wrong. Please try again later."
      />
    );
  }

  return (
    <main className="relative min-h-screen">
      <img
        src={HeroImage}
        alt="Volunteer with Zurfte Empowercare Foundation — youth empowerment and nonprofit programs"
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
              id="volunteer-form"
              className="col-span-3 scroll-mt-24 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
              aria-labelledby="volunteer-form-heading"
            >
              {isSuccess ? (
                <div
                  role="status"
                  className="mx-auto max-w-2xl py-8 text-center"
                >
                  <h2
                    id="volunteer-form-heading"
                    className="text-2xl font-bold text-blue-950 sm:text-3xl"
                  >
                    Thank You!
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                    Your volunteer application details were received. Our team
                    will review your submission and follow up by email.
                  </p>
                  <button
                    type="button"
                    className="mt-8 rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
                    onClick={() => {
                      submittedRef.current = false;
                      setFormError('');
                      setStatus('idle');
                    }}
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <>
                  <h2
                    id="volunteer-form-heading"
                    className="mb-2 text-2xl font-bold text-gray-800 sm:text-3xl"
                  >
                    Volunteer Application
                  </h2>
                  <p className="mb-6 text-left text-sm text-slate-500 sm:text-base">
                    Tell us about yourself and how you&apos;d like to
                    contribute.
                  </p>

                  {isPending ? (
                    <div
                      className="flex min-h-64 flex-col items-center justify-center gap-3 text-slate-500"
                      role="status"
                      aria-live="polite"
                    >
                      <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent" />
                      <p className="text-sm">Loading form…</p>
                    </div>
                  ) : (
                    <>
                      {status === 'error' && formError ? (
                        <div
                          role="alert"
                          className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-left text-red-800"
                        >
                          {formError}
                        </div>
                      ) : null}

                      <form
                        className="space-y-6 text-left"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        aria-busy={isSubmitting}
                      >
                        <FieldGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <Field
                            data-invalid={Boolean(errors.fullName) || undefined}
                          >
                            <FieldLabel htmlFor="volunteer-full-name">
                              Full Name <span className="text-red-600">*</span>
                            </FieldLabel>
                            <input
                              id="volunteer-full-name"
                              autoComplete="name"
                              placeholder="Enter your full name"
                              disabled={isSubmitting}
                              aria-invalid={Boolean(errors.fullName)}
                              className={FORM_INPUT}
                              {...register('fullName')}
                            />
                            {errors.fullName ? (
                              <FieldError errors={[errors.fullName]} />
                            ) : null}
                          </Field>

                          <Field
                            data-invalid={Boolean(errors.email) || undefined}
                          >
                            <FieldLabel htmlFor="volunteer-email">
                              Email <span className="text-red-600">*</span>
                            </FieldLabel>
                            <input
                              id="volunteer-email"
                              type="email"
                              autoComplete="email"
                              inputMode="email"
                              placeholder="you@example.com"
                              disabled={isSubmitting}
                              aria-invalid={Boolean(errors.email)}
                              className={FORM_INPUT}
                              {...register('email')}
                            />
                            {errors.email ? (
                              <FieldError errors={[errors.email]} />
                            ) : null}
                          </Field>
                        </FieldGroup>

                        <FieldGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <Controller
                            name="country"
                            control={control}
                            render={({ field, fieldState }) => (
                              <Field
                                data-invalid={
                                  Boolean(fieldState.error) || undefined
                                }
                              >
                                <SelectCountry
                                  countries={data}
                                  value={field.value}
                                  disabled={isSubmitting}
                                  invalid={Boolean(fieldState.error)}
                                  onChange={(next) => {
                                    field.onChange(next);
                                    setValue('city', '', {
                                      shouldValidate: false,
                                      shouldDirty: true,
                                    });
                                  }}
                                />
                                {fieldState.error ? (
                                  <FieldError errors={[fieldState.error]} />
                                ) : null}
                              </Field>
                            )}
                          />

                          <Controller
                            name="city"
                            control={control}
                            render={({ field, fieldState }) => (
                              <Field
                                data-invalid={
                                  Boolean(fieldState.error) || undefined
                                }
                              >
                                <SelectCity
                                  value={field.value}
                                  onChange={field.onChange}
                                  control={control}
                                  countries={memoData}
                                  disabled={isSubmitting}
                                  invalid={Boolean(fieldState.error)}
                                />
                                {fieldState.error ? (
                                  <FieldError errors={[fieldState.error]} />
                                ) : null}
                              </Field>
                            )}
                          />
                        </FieldGroup>

                        <InternPhoneInput
                          control={control}
                          countries={memoData}
                          disabled={isSubmitting}
                        />

                        <FieldGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <Field
                            data-invalid={Boolean(errors.linkedin) || undefined}
                          >
                            <FieldLabel htmlFor="volunteer-linkedin">
                              LinkedIn <span className="text-red-600">*</span>
                            </FieldLabel>
                            <input
                              id="volunteer-linkedin"
                              type="url"
                              autoComplete="url"
                              placeholder="https://linkedin.com/in/your-profile"
                              disabled={isSubmitting}
                              aria-invalid={Boolean(errors.linkedin)}
                              className={FORM_INPUT}
                              {...register('linkedin')}
                            />
                            {errors.linkedin ? (
                              <FieldError errors={[errors.linkedin]} />
                            ) : null}
                          </Field>

                          <Controller
                            name="interest"
                            control={control}
                            render={({ field, fieldState }) => (
                              <Field
                                data-invalid={
                                  Boolean(fieldState.error) || undefined
                                }
                              >
                                <FieldLabel htmlFor="volunteer-interest">
                                  Volunteer Interest{' '}
                                  <span className="text-red-600">*</span>
                                </FieldLabel>
                                <VolunteerInterestSelect
                                  value={field.value}
                                  onChange={field.onChange}
                                  disabled={isSubmitting}
                                  invalid={Boolean(fieldState.error)}
                                />
                                {fieldState.error ? (
                                  <FieldError errors={[fieldState.error]} />
                                ) : null}
                              </Field>
                            )}
                          />
                        </FieldGroup>

                        <Field
                          data-invalid={
                            Boolean(errors.motivation) || undefined
                          }
                        >
                          <FieldLabel htmlFor="volunteer-motivation">
                            Why would you like to volunteer with Zurfte
                            Empowercare Foundation?{' '}
                            <span className="text-red-600">*</span>
                          </FieldLabel>
                          <textarea
                            id="volunteer-motivation"
                            rows={6}
                            placeholder="Share your motivation and relevant experience (at least 50 characters)"
                            disabled={isSubmitting}
                            aria-invalid={Boolean(errors.motivation)}
                            className={`${FORM_TEXTAREA} !min-h-44`}
                            {...register('motivation')}
                          />
                          <div className="mt-1 flex items-start justify-between gap-3">
                            {errors.motivation ? (
                              <FieldError
                                className="w-full"
                                errors={[errors.motivation]}
                              />
                            ) : (
                              <span />
                            )}
                            <CharCounter control={control} />
                          </div>
                        </Field>

                        <Field
                          data-invalid={Boolean(errors.resum) || undefined}
                        >
                          <FieldLabel>
                            Resume <span className="text-red-600">*</span>
                          </FieldLabel>
                          <UploadBox
                            control={control}
                            disabled={isSubmitting}
                          />
                          {errors.resum ? (
                            <FieldError errors={[errors.resum]} />
                          ) : null}
                        </Field>

                        <Field
                          data-invalid={
                            Boolean(errors.agreement) || undefined
                          }
                        >
                          <div className="flex items-start gap-3">
                            <Controller
                              name="agreement"
                              control={control}
                              render={({ field }) => (
                                <Checkbox
                                  id="volunteer-agreement"
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  disabled={isSubmitting}
                                  className="mt-1"
                                />
                              )}
                            />
                            <FieldLabel
                              className="w-full text-sm leading-relaxed text-slate-600"
                              htmlFor="volunteer-agreement"
                            >
                              I confirm that the information provided is
                              accurate and I consent to Zurfte Empowercare
                              Foundation contacting me regarding my volunteer
                              application.{' '}
                              <span className="text-red-600">*</span>
                            </FieldLabel>
                          </div>
                          {errors.agreement ? (
                            <FieldError errors={[errors.agreement]} />
                          ) : null}
                        </Field>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full rounded-lg bg-green-600 py-3.5 font-medium text-white shadow-md transition-[background-color,transform,opacity] duration-200 ease-out hover:bg-green-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {isSubmitting
                            ? 'Submitting…'
                            : 'Submit Application'}
                        </button>
                      </form>
                    </>
                  )}
                </>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Volunteer;
