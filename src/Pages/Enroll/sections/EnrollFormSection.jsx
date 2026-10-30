import { useEffect, useRef, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCountries } from '@/lib/hooks/use-countries';
import {
  EDUCATION_LEVELS,
  EMPLOYMENT_STATUSES,
  LEARNING_PREFERENCES,
  OTHER_INTEREST_VALUE,
  enroll_schema,
} from '@/lib/schemas/enroll.s';
import { trackEnrollEoiSubmitted } from '@/lib/analytics';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { SectionHeader } from '../../../components/Homepage/shared/SectionHeader';
import { SectionShell } from '../../../components/Homepage/shared/SectionShell';
import { SECTION_CONTENT_GAP } from '../../../components/Homepage/shared/sectionUi';
import NotFound from '../../NotFound/NotFound';
import InternPhoneInput from '../../Volunteer/_components/intern-phone-input';
import CourseInterestsSelect from '../components/CourseInterestsSelect';
import EnrollFormSuccess from '../components/EnrollFormSuccess';
import EnrollLocationFields from '../components/EnrollLocationFields';
import EnrollSelect from '../components/EnrollSelect';
import { ENROLL_INPUT, ENROLL_TEXTAREA } from '../components/enrollFormUi';
import { ProgrammeDates } from '../../../components/programme/ProgrammeDates';
import { ENROLL_FORM_COPY } from '../enrollContent';
import { submitEnrollEoi } from '../lib/submitEnrollEoi';

function scrollEnrollSuccessIntoView() {
  const section = document.getElementById('enroll-form');
  if (!section) {
    return;
  }

  section.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const title = document.getElementById('enroll-success-title');
  if (title instanceof HTMLElement) {
    title.focus({ preventScroll: true });
  }
}

const DEFAULT_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  state: '',
  city: '',
  educationLevel: '',
  employmentStatus: '',
  occupation: '',
  courseInterests: [],
  otherInterest: '',
  learningPreference: '',
  interestReason: '',
  goalsAfterTraining: '',
  consent: false,
};

function EnrollFormSection() {
  const { data, error, memoData, isPending } = useCountries();
  const [status, setStatus] = useState('idle');
  const [formError, setFormError] = useState('');
  const submittedRef = useRef(false);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(enroll_schema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onTouched',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });

  const courseInterests = useWatch({ control, name: 'courseInterests' }) || [];
  const showOtherInterest = courseInterests.includes(OTHER_INTEREST_VALUE);
  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';

  useEffect(() => {
    if (!isSuccess) {
      return undefined;
    }

    const frameId = window.requestAnimationFrame(() => {
      scrollEnrollSuccessIntoView();
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [isSuccess]);

  const onSubmit = async (values) => {
    if (submittedRef.current || isSubmitting) {
      return;
    }

    submittedRef.current = true;
    setFormError('');
    setStatus('submitting');

    try {
      const payload = await submitEnrollEoi(values);
      trackEnrollEoiSubmitted({
        interest_count: values.courseInterests.length,
        learning_preference: payload.learningPreference,
        country: payload.country,
      });
      setStatus('success');
    } catch (submitError) {
      submittedRef.current = false;
      setStatus('error');
      setFormError(
        submitError instanceof Error
          ? submitError.message
          : 'We could not submit your expression of interest. Please try again.',
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
    <SectionShell
      id="enroll-form"
      ariaLabelledby={
        isSuccess ? 'enroll-success-title' : 'enroll-form-title'
      }
      className="bg-white scroll-mt-24"
      belowFold
    >
      {isSuccess ? (
        <div className="mx-auto max-w-3xl rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/5 via-white to-slate-50 p-8 shadow-xl shadow-slate-200/50 sm:p-10 lg:p-12">
          <EnrollFormSuccess />
        </div>
      ) : (
        <>
          <SectionHeader
            titleId="enroll-form-title"
            eyebrow="Expression of Interest"
            title={ENROLL_FORM_COPY.title}
            description={ENROLL_FORM_COPY.intro}
          />
          <ProgrammeDates className="mx-auto mt-8 max-w-3xl" />

          <div
            className={`mx-auto max-w-3xl rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8 lg:p-10 ${SECTION_CONTENT_GAP}`}
          >
            {isPending ? (
              <div
                className="flex min-h-64 flex-col items-center justify-center gap-3 text-slate-500"
                role="status"
                aria-live="polite"
              >
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent" />
                <p className="text-sm">Loading form…</p>
              </div>
            ) : null}

            {!isPending ? (
              <>
            {status === 'error' && formError && (
              <div
                role="alert"
                className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-left text-red-800"
              >
                {formError}
              </div>
            )}

            <form
              className="space-y-8 text-left"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-busy={isSubmitting}
            >
              <fieldset className="space-y-6">
                <legend className="text-lg font-semibold text-blue-950">
                  Personal Information
                </legend>

                <FieldGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field data-invalid={Boolean(errors.firstName) || undefined}>
                    <FieldLabel htmlFor="enroll-first-name">
                      First Name <span className="text-red-600">*</span>
                    </FieldLabel>
                    <input
                      id="enroll-first-name"
                      autoComplete="given-name"
                      placeholder="First name"
                      disabled={isSubmitting}
                      aria-invalid={Boolean(errors.firstName)}
                      className={ENROLL_INPUT}
                      {...register('firstName')}
                    />
                    {errors.firstName && (
                      <FieldError errors={[errors.firstName]} />
                    )}
                  </Field>

                  <Field data-invalid={Boolean(errors.lastName) || undefined}>
                    <FieldLabel htmlFor="enroll-last-name">
                      Last Name <span className="text-red-600">*</span>
                    </FieldLabel>
                    <input
                      id="enroll-last-name"
                      autoComplete="family-name"
                      placeholder="Last name"
                      disabled={isSubmitting}
                      aria-invalid={Boolean(errors.lastName)}
                      className={ENROLL_INPUT}
                      {...register('lastName')}
                    />
                    {errors.lastName && (
                      <FieldError errors={[errors.lastName]} />
                    )}
                  </Field>
                </FieldGroup>

                <Field data-invalid={Boolean(errors.email) || undefined}>
                  <FieldLabel htmlFor="enroll-email">
                    Email Address <span className="text-red-600">*</span>
                  </FieldLabel>
                  <input
                    id="enroll-email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@example.com"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.email)}
                    className={ENROLL_INPUT}
                    {...register('email')}
                  />
                  {errors.email && <FieldError errors={[errors.email]} />}
                </Field>

                <InternPhoneInput
                  control={control}
                  countries={memoData}
                  disabled={isSubmitting}
                />

                <EnrollLocationFields
                  control={control}
                  register={register}
                  setValue={setValue}
                  countries={data}
                  countriesByName={memoData}
                  errors={errors}
                  disabled={isSubmitting}
                />
              </fieldset>

              <fieldset className="space-y-6">
                <legend className="text-lg font-semibold text-blue-950">
                  Educational &amp; Professional Information
                </legend>

                <Controller
                  name="educationLevel"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={Boolean(fieldState.error) || undefined}>
                      <FieldLabel htmlFor="enroll-education">
                        Highest Level of Education{' '}
                        <span className="text-red-600">*</span>
                      </FieldLabel>
                      <EnrollSelect
                        id="enroll-education"
                        value={field.value}
                        options={EDUCATION_LEVELS}
                        placeholder="Select education level"
                        disabled={isSubmitting}
                        invalid={Boolean(fieldState.error)}
                        onChange={field.onChange}
                      />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="employmentStatus"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={Boolean(fieldState.error) || undefined}>
                      <FieldLabel htmlFor="enroll-employment">
                        Current Employment Status{' '}
                        <span className="text-red-600">*</span>
                      </FieldLabel>
                      <EnrollSelect
                        id="enroll-employment"
                        value={field.value}
                        options={EMPLOYMENT_STATUSES}
                        placeholder="Select employment status"
                        disabled={isSubmitting}
                        invalid={Boolean(fieldState.error)}
                        onChange={field.onChange}
                      />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Field>
                  <FieldLabel htmlFor="enroll-occupation">
                    Current Occupation{' '}
                    <span className="font-normal text-slate-500">
                      (Optional)
                    </span>
                  </FieldLabel>
                  <input
                    id="enroll-occupation"
                    autoComplete="organization-title"
                    placeholder="e.g. Student, Designer, Entrepreneur"
                    disabled={isSubmitting}
                    className={ENROLL_INPUT}
                    {...register('occupation')}
                  />
                </Field>
              </fieldset>

              <fieldset className="space-y-6">
                <legend className="text-lg font-semibold text-blue-950">
                  Course Interests
                </legend>

                <Controller
                  name="courseInterests"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={Boolean(fieldState.error) || undefined}>
                      <FieldLabel>
                        Skills you want to learn{' '}
                        <span className="text-red-600">*</span>
                      </FieldLabel>
                      <p className="mb-2 text-sm text-slate-500">
                        Filter the list, then check one or more interests.
                      </p>
                      <CourseInterestsSelect
                        value={field.value}
                        onChange={field.onChange}
                        disabled={isSubmitting}
                        invalid={Boolean(fieldState.error)}
                      />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                {showOtherInterest && (
                  <Field
                    data-invalid={Boolean(errors.otherInterest) || undefined}
                  >
                    <FieldLabel htmlFor="enroll-other-interest">
                      Other (Please Specify){' '}
                      <span className="text-red-600">*</span>
                    </FieldLabel>
                    <input
                      id="enroll-other-interest"
                      placeholder="Tell us what you'd like to learn"
                      disabled={isSubmitting}
                      aria-invalid={Boolean(errors.otherInterest)}
                      className={ENROLL_INPUT}
                      {...register('otherInterest')}
                    />
                    {errors.otherInterest && (
                      <FieldError errors={[errors.otherInterest]} />
                    )}
                  </Field>
                )}
              </fieldset>

              <fieldset className="space-y-4">
                <legend className="text-lg font-semibold text-blue-950">
                  Learning Preference <span className="text-red-600">*</span>
                </legend>

                <Controller
                  name="learningPreference"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={Boolean(fieldState.error) || undefined}>
                      <div
                        role="radiogroup"
                        aria-label="Learning preference"
                        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                      >
                        {LEARNING_PREFERENCES.map((option) => {
                          const optionId = `enroll-learn-${option
                            .toLowerCase()
                            .replace(/\s+/g, '-')}`;
                          const selected = field.value === option;
                          return (
                            <label
                              key={option}
                              htmlFor={optionId}
                              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-[border-color,background-color,transform] duration-150 ease-out active:scale-[0.99] ${
                                selected
                                  ? 'border-green-500 bg-green-50 shadow-sm'
                                  : 'border-gray-300 hover:border-green-400 hover:bg-slate-50'
                              }`}
                            >
                              <input
                                id={optionId}
                                type="radio"
                                name="learningPreference"
                                value={option}
                                checked={selected}
                                disabled={isSubmitting}
                                onChange={() => field.onChange(option)}
                                className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
                              />
                              <span className="text-sm font-medium text-slate-700">
                                {option}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </fieldset>

              <fieldset className="space-y-6">
                <legend className="text-lg font-semibold text-blue-950">
                  Additional Questions
                </legend>

                <Field
                  data-invalid={Boolean(errors.interestReason) || undefined}
                >
                  <FieldLabel htmlFor="enroll-interest-reason">
                    Why are you interested in learning these skills?{' '}
                    <span className="text-red-600">*</span>
                  </FieldLabel>
                  <textarea
                    id="enroll-interest-reason"
                    rows={5}
                    placeholder="Share what motivates you to learn these skills…"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.interestReason)}
                    className={ENROLL_TEXTAREA}
                    {...register('interestReason')}
                  />
                  {errors.interestReason && (
                    <FieldError errors={[errors.interestReason]} />
                  )}
                </Field>

                <Field
                  data-invalid={
                    Boolean(errors.goalsAfterTraining) || undefined
                  }
                >
                  <FieldLabel htmlFor="enroll-goals">
                    What do you hope to achieve after completing the training?{' '}
                    <span className="text-red-600">*</span>
                  </FieldLabel>
                  <textarea
                    id="enroll-goals"
                    rows={5}
                    placeholder="Describe the outcomes you hope to achieve…"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.goalsAfterTraining)}
                    className={ENROLL_TEXTAREA}
                    {...register('goalsAfterTraining')}
                  />
                  {errors.goalsAfterTraining && (
                    <FieldError errors={[errors.goalsAfterTraining]} />
                  )}
                </Field>
              </fieldset>

              <Controller
                name="consent"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={Boolean(fieldState.error) || undefined}>
                    <label className="flex items-start gap-3">
                      <Checkbox
                        id="enroll-consent"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled={isSubmitting}
                        aria-invalid={Boolean(fieldState.error)}
                        className="mt-1"
                      />
                      <span className="text-sm leading-relaxed text-slate-600">
                        {ENROLL_FORM_COPY.consentLabel}{' '}
                        <span className="text-red-600">*</span>
                      </span>
                    </label>
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <button
                type="submit"
                disabled={isSubmitting || submittedRef.current}
                className="w-full rounded-lg bg-green-600 py-3.5 font-medium text-white shadow-md transition-[background-color,transform,opacity] duration-200 ease-out hover:bg-green-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting
                  ? ENROLL_FORM_COPY.submittingLabel
                  : ENROLL_FORM_COPY.submitLabel}
              </button>
            </form>
              </>
            ) : null}
          </div>
        </>
      )}
    </SectionShell>
  );
}

export default EnrollFormSection;
