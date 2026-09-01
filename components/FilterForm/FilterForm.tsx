'use client';
import css from './FilterForm.module.css';

import { Field, Form, Formik, FormikHelpers, useFormikContext } from 'formik';

interface FilterFormValues {
  location: string;
  forms: string;
  engines: string;
  transmissions: string;
}

const initialValues = {
  location: '',
  forms: '',
  engines: '',
  transmissions: '',
};
export default function FilterForm() {
  // const formikContext = useFormikContext<FilterFormValues>();

  function handleSubmit(
    values: FilterFormValues,
    actions: FormikHelpers<FilterFormValues>
  ) {
    const formData = {
      location: values.location,
      form: values.forms,
      transmission: values.transmissions,
      engine: values.engines,
    };
    console.log(formData);
  }
  function handleClear(actions: FormikHelpers<FilterFormValues>) {
    actions.resetForm();
  }
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.locationLabel}>
          Location
          <Field
            className={css.locationInput}
            type="text"
            name="location"
            placeholder="City"
          />
          <svg className={css.iconMap} width={20} height={20}>
            <use href="/sprite.svg#icon-map" aria-hidden="true"></use>
          </svg>
        </label>
        <div className={css.filtersWrapper}>
          <h2 className={css.filtersHeading}>Filters</h2>
          <fieldset className={css.fieldset}>
            <legend className={css.legend}>Camper form</legend>
            <label className={css.label}>
              <Field
                className={css.radio}
                type="radio"
                name="forms"
                value="alcove"
              />
              Alcove
            </label>
            <label className={css.label}>
              <Field
                className={css.radio}
                type="radio"
                name="forms"
                value="panel_van"
              />
              Panel Van
            </label>
            <label className={css.label}>
              <Field
                className={css.radio}
                type="radio"
                name="forms"
                value="integrated"
              />
              Integrated
            </label>
            <label className={css.label}>
              <Field
                className={css.radio}
                type="radio"
                name="forms"
                value="semi_integrated"
              />
              Semi Integrated
            </label>
          </fieldset>

          <fieldset className={css.fieldset}>
            <legend className={css.legend}>Engine</legend>
            <label className={css.label}>
              <Field
                className={css.radio}
                type="radio"
                name="engines"
                value="diesel"
              />
              Diesel
            </label>
            <label className={css.label}>
              <Field
                className={css.radio}
                type="radio"
                name="engines"
                value="petrol"
              />
              Petrol
            </label>
            <label className={css.label}>
              <Field
                className={css.radio}
                type="radio"
                name="engines"
                value="hybrid"
              />
              Hybrid
            </label>
            <label className={css.label}>
              <Field
                className={css.radio}
                type="radio"
                name="engines"
                value="electric"
              />
              Electric
            </label>
          </fieldset>
          <fieldset className={css.fieldset}>
            <legend className={css.legend}>Transmission</legend>
            <label className={css.label}>
              <Field
                className={css.radio}
                type="radio"
                name="transmissions"
                value="automatic"
              />
              Automatic
            </label>
            <label className={css.label}>
              <Field
                className={css.radio}
                type="radio"
                name="transmissions"
                value="manual"
              />
              Manual
            </label>
          </fieldset>
        </div>
        <div className={css.buttonsWrapper}>
          <button className={css.submitButton} type="submit">
            Search
          </button>
          <button
            className={css.clearButton}
            onClick={() => handleClear}
            type="button"
          >
            <svg className={css.iconClose} width={24} height={24}>
              <use href="/sprite.svg#icon-close" aria-hidden="true"></use>
            </svg>
            Clear filters
          </button>
        </div>
      </Form>
    </Formik>
  );
}
