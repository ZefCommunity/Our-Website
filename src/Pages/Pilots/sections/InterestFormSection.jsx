import { useState } from 'react';
import { trackPilotInterestSubmitted } from '../../../lib/analytics';
import { SectionHeader } from '../../../components/Homepage/shared/SectionHeader';
import { SectionShell } from '../../../components/Homepage/shared/SectionShell';
import { SECTION_CONTENT_GAP } from '../../../components/Homepage/shared/sectionUi';
import {
  FIELD_LABEL,
  INPUT_BASE,
  INPUT_ERROR,
  SELECT_BASE,
} from '../components/formUi';
import { usePilotSource } from '../hooks/usePilotSource';
import { submitPilotInterest } from '../lib/submitPilotInterest';
import InterestFormSuccess from '../components/InterestFormSuccess';
import {
  AUDIENCE_ROLE_OPTIONS,
  INTEREST_FORM_COPY,
  PILOT_INTEREST_OPTIONS,
} from '../pilotsContent';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY_FORM = {
  fullName: '',
  email: '',
  phone: '',
  pilotInterest: '',
  audienceRole: '',
  location: '',
  goals: '',
  consent: false,
};

function validateInterestForm(values) {
  const errors = {};
  const fullName = values.fullName.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const location = values.location.trim();
  const goals = values.goals.trim();

  if (!fullName) {
    errors.fullName = 'Please enter your full name.';
  }
  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!phone) {
    errors.phone = 'Please enter your phone number.';
  }
  if (!values.pilotInterest) {
    errors.pilotInterest = 'Please select a pilot program.';
  }
  if (!values.audienceRole) {
    errors.audienceRole = 'Please select the option that best describes you.';
  }
  if (!location) {
    errors.location = 'Please enter your state or location.';
  }
  if (!goals) {
    errors.goals = 'Please share your goals or questions.';
  }
  if (!values.consent) {
    errors.consent = 'Please confirm you agree to be contacted.';
  }

  return errors;
}

function InterestFormSection() {
  const source = usePilotSource();
  const [values, setValues] = useState(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [formError, setFormError] = useState('');

  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (formError) {
      setFormError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateInterestForm(values);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus('idle');
      setFormError('');
      return;
    }

    setFieldErrors({});
    setFormError('');
    setStatus('submitting');

    try {
      // TODO: CRM integration, sync payload to HubSpot/Airtable after webhook success.
      // TODO: Email automation, trigger confirmation email workflow from Apps Script or ESP.
      const payload = await submitPilotInterest(values, source);
      trackPilotInterestSubmitted({
        pilot: payload.pilot,
        user_type: payload.userType,
        source: payload.source,
        state: payload.state,
      });
      setValues(EMPTY_FORM);
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setFormError(
        error instanceof Error
          ? error.message
          : 'We could not submit your interest. Please try again.',
      );
    }
  };

  return (
    <SectionShell
      id="interest-form"
      ariaLabelledby={isSuccess ? 'pilots-success-title' : 'pilots-form-title'}
      className="bg-white scroll-mt-24"
      belowFold
    >
      {isSuccess ? (
        <div className="mx-auto max-w-3xl rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/5 via-white to-slate-50 p-8 shadow-xl shadow-slate-200/50 sm:p-10 lg:p-12">
          <InterestFormSuccess />
        </div>
      ) : (
        <>
          <SectionHeader
            titleId="pilots-form-title"
            eyebrow="Get started"
            title={INTEREST_FORM_COPY.title}
            description={INTEREST_FORM_COPY.intro}
          />

          <div
            className={`mx-auto max-w-3xl rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8 lg:p-10 ${SECTION_CONTENT_GAP}`}
          >
            {status === 'error' && formError && (
              <div
                role="alert"
                className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-left text-red-800"
              >
                {formError}
              </div>
            )}

            <form
          className="space-y-6 text-left"
          onSubmit={handleSubmit}
          noValidate
          aria-busy={isSubmitting}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="pilot-full-name" className={FIELD_LABEL}>
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                id="pilot-full-name"
                name="fullName"
                type="text"
                required
                autoComplete="name"
                value={values.fullName}
                onChange={handleChange}
                disabled={isSubmitting}
                aria-invalid={Boolean(fieldErrors.fullName)}
                aria-describedby={
                  fieldErrors.fullName ? 'pilot-full-name-error' : undefined
                }
                className={`${INPUT_BASE} ${
                  fieldErrors.fullName ? INPUT_ERROR : ''
                }`}
                placeholder="Your full name"
              />
              {fieldErrors.fullName && (
                <p
                  id="pilot-full-name-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {fieldErrors.fullName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="pilot-email" className={FIELD_LABEL}>
                Email <span className="text-red-600">*</span>
              </label>
              <input
                id="pilot-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                value={values.email}
                onChange={handleChange}
                disabled={isSubmitting}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={
                  fieldErrors.email ? 'pilot-email-error' : undefined
                }
                className={`${INPUT_BASE} ${
                  fieldErrors.email ? INPUT_ERROR : ''
                }`}
                placeholder="you@example.com"
              />
              {fieldErrors.email && (
                <p
                  id="pilot-email-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {fieldErrors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="pilot-phone" className={FIELD_LABEL}>
              Phone number <span className="text-red-600">*</span>
            </label>
            <input
              id="pilot-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              value={values.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={Boolean(fieldErrors.phone)}
              aria-describedby={
                fieldErrors.phone ? 'pilot-phone-error' : undefined
              }
              className={`${INPUT_BASE} ${
                fieldErrors.phone ? INPUT_ERROR : ''
              }`}
              placeholder="+234 …"
            />
            {fieldErrors.phone && (
              <p
                id="pilot-phone-error"
                className="mt-1 text-sm text-red-600"
                role="alert"
              >
                {fieldErrors.phone}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="pilot-interest" className={FIELD_LABEL}>
                Which pilot interests you? <span className="text-red-600">*</span>
              </label>
              <select
                id="pilot-interest"
                name="pilotInterest"
                required
                value={values.pilotInterest}
                onChange={handleChange}
                disabled={isSubmitting}
                aria-invalid={Boolean(fieldErrors.pilotInterest)}
                aria-describedby={
                  fieldErrors.pilotInterest
                    ? 'pilot-interest-error'
                    : undefined
                }
                className={`${SELECT_BASE} ${
                  fieldErrors.pilotInterest ? INPUT_ERROR : ''
                }`}
              >
                {PILOT_INTEREST_OPTIONS.map((option) => (
                  <option key={option.value || 'placeholder'} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {fieldErrors.pilotInterest && (
                <p
                  id="pilot-interest-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {fieldErrors.pilotInterest}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="pilot-audience-role" className={FIELD_LABEL}>
                Which best describes you? <span className="text-red-600">*</span>
              </label>
              <select
                id="pilot-audience-role"
                name="audienceRole"
                required
                value={values.audienceRole}
                onChange={handleChange}
                disabled={isSubmitting}
                aria-invalid={Boolean(fieldErrors.audienceRole)}
                aria-describedby={
                  fieldErrors.audienceRole
                    ? 'pilot-audience-role-error'
                    : undefined
                }
                className={`${SELECT_BASE} ${
                  fieldErrors.audienceRole ? INPUT_ERROR : ''
                }`}
              >
                {AUDIENCE_ROLE_OPTIONS.map((option) => (
                  <option key={option.value || 'placeholder'} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {fieldErrors.audienceRole && (
                <p
                  id="pilot-audience-role-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {fieldErrors.audienceRole}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="pilot-location" className={FIELD_LABEL}>
              State / Location <span className="text-red-600">*</span>
            </label>
            <input
              id="pilot-location"
              name="location"
              type="text"
              required
              autoComplete="address-level1"
              value={values.location}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={Boolean(fieldErrors.location)}
              aria-describedby={
                fieldErrors.location ? 'pilot-location-error' : undefined
              }
              className={`${INPUT_BASE} ${
                fieldErrors.location ? INPUT_ERROR : ''
              }`}
              placeholder="e.g. Lagos"
            />
            {fieldErrors.location && (
              <p
                id="pilot-location-error"
                className="mt-1 text-sm text-red-600"
                role="alert"
              >
                {fieldErrors.location}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="pilot-goals" className={FIELD_LABEL}>
              Goals / Questions <span className="text-red-600">*</span>
            </label>
            <textarea
              id="pilot-goals"
              name="goals"
              required
              rows={5}
              value={values.goals}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={Boolean(fieldErrors.goals)}
              aria-describedby={
                fieldErrors.goals ? 'pilot-goals-error' : undefined
              }
              className={`${INPUT_BASE} resize-none ${
                fieldErrors.goals ? INPUT_ERROR : ''
              }`}
              placeholder="What do you hope to gain from a ZEF pilot program?"
            />
            {fieldErrors.goals && (
              <p
                id="pilot-goals-error"
                className="mt-1 text-sm text-red-600"
                role="alert"
              >
                {fieldErrors.goals}
              </p>
            )}
          </div>

          <div>
            <label className="flex items-start gap-3">
              <input
                id="pilot-consent"
                name="consent"
                type="checkbox"
                checked={values.consent}
                onChange={handleChange}
                disabled={isSubmitting}
                aria-invalid={Boolean(fieldErrors.consent)}
                aria-describedby={
                  fieldErrors.consent ? 'pilot-consent-error' : undefined
                }
                className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="text-sm leading-relaxed text-slate-600">
                {INTEREST_FORM_COPY.consentLabel}{' '}
                <span className="text-red-600">*</span>
              </span>
            </label>
            {fieldErrors.consent && (
              <p
                id="pilot-consent-error"
                className="mt-1 text-sm text-red-600"
                role="alert"
              >
                {fieldErrors.consent}
              </p>
            )}
          </div>

          {/* Hidden attribution, populated from ?source= query param */}
          <input type="hidden" name="source" value={source} readOnly />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-green-600 py-3.5 font-medium text-white shadow-md transition duration-300 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting
              ? INTEREST_FORM_COPY.submittingLabel
              : INTEREST_FORM_COPY.submitLabel}
          </button>
            </form>
          </div>
        </>
      )}
    </SectionShell>
  );
}

export default InterestFormSection;
