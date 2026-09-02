'use client';
import toast from 'react-hot-toast';
import css from './FilterForm.module.css';

import { Field, Form, Formik } from 'formik';
import { useFiltersStore } from '@/lib/store/filtersStore';
import { FiltersData } from '@/types/filters';

interface FilterFormValues {
  location: string | null;
  forms: 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated' | null;
  transmissions: 'automatic' | 'manual' | null;
  engines: 'diesel' | 'petrol' | 'hybrid' | 'electric' | null;
}

export default function FilterForm() {
  const filtersData = useFiltersStore(state => state.filters);
  const setFilters = useFiltersStore(state => state.setFilters);
  const clearFilters = useFiltersStore(state => state.clearFilters);

  const initialValues = {
    location: filtersData.location,
    forms: filtersData.form,
    engines: filtersData.engine,
    transmissions: filtersData.transmission,
  };

  function handleSubmit(values: FilterFormValues) {
    const formData: FiltersData = {
      location: values.location,
      form: values.forms,
      transmission: values.transmissions,
      engine: values.engines,
    };
    toast('Filters added');
    setFilters(formData);
    // console.log('formData:');
    // console.log(formData);
    // console.log('FiltersData:');
    // console.log(filtersData);
  }

  function handleClear(values: FilterFormValues) {
    const clearFiltersData: FiltersData = {
      location: values.location,
      form: null,
      transmission: null,
      engine: null,
    };
    setFilters(clearFiltersData);
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setValues }) => {
        return (
          <Form className={css.form}>
            <label className={css.locationLabel}>
              Location
              <Field
                className={css.locationInput}
                type="text"
                name="location"
                placeholder="City"
              />
              <svg className={css.iconMap} width={16} height={16}>
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
                onClick={() => {
                  setValues({
                    ...values,
                    forms: null,
                    transmissions: null,
                    engines: null,
                  });
                  handleClear(values);
                  toast('Filters cleared');
                }}
                type="button"
              >
                <svg className={css.iconClose} width={24} height={24}>
                  <use href="/sprite.svg#icon-close" aria-hidden="true"></use>
                </svg>
                Clear filters
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
