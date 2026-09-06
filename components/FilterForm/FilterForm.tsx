'use client';

import toast from 'react-hot-toast';
import css from './FilterForm.module.css';

import { Field, Form, Formik } from 'formik';
import { useFiltersStore } from '@/lib/store/filtersStore';
import { FiltersData } from '@/types/filters';
import { getFilters } from '@/lib/api/api';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface FilterFormValues {
  location: string | null;
  form: 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated' | null;
  transmission: 'automatic' | 'manual' | null;
  engine: 'diesel' | 'petrol' | 'hybrid' | 'electric' | null;
}

export default function FilterForm() {
  const filtersData = useFiltersStore(state => state.filters);
  const setFilters = useFiltersStore(state => state.setFilters);
  const {
    data: filters,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['filters'],
    queryFn: getFilters,
    refetchOnMount: false,
  });

  const initialValues = {
    ...filtersData,
  };

  function handleSubmit(values: FilterFormValues) {
    const formData: FiltersData = {
      ...values,
    };
    setFilters(formData);
    toast('Filters added');
  }

  function handleClear(values: FilterFormValues) {
    const clearFiltersData: FiltersData = {
      location: values.location,
      form: null,
      transmission: null,
      engine: null,
    };
    setFilters(clearFiltersData);
    toast('Filters cleared');
  }

  return (
    <>
      {isError && <ErrorMessage />}
      {isLoading && (
        <div className={css.loaderWrapper}>
          <Loader />
        </div>
      )}
      {filters && (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
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
                    {filters.forms.map(form => (
                      <label key={form} className={css.label}>
                        <Field
                          className={css.radio}
                          type="radio"
                          name="form"
                          value={form}
                        />
                        {(form[0].toUpperCase() + form.slice(1)).replace(
                          '_',
                          ' '
                        )}
                      </label>
                    ))}
                  </fieldset>

                  <fieldset className={css.fieldset}>
                    <legend className={css.legend}>Engine</legend>
                    {filters.engines.map(engine => (
                      <label key={engine} className={css.label}>
                        <Field
                          className={css.radio}
                          type="radio"
                          name="engine"
                          value={engine}
                        />
                        {(engine[0].toUpperCase() + engine.slice(1)).replace(
                          '_',
                          ' '
                        )}
                      </label>
                    ))}
                  </fieldset>

                  <fieldset className={css.fieldset}>
                    <legend className={css.legend}>Transmission</legend>
                    {filters.transmissions.map(transmission => (
                      <label key={transmission} className={css.label}>
                        <Field
                          className={css.radio}
                          type="radio"
                          name="transmission"
                          value={transmission}
                        />
                        {(
                          transmission[0].toUpperCase() + transmission.slice(1)
                        ).replace('_', ' ')}
                      </label>
                    ))}
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
                        form: null,
                        transmission: null,
                        engine: null,
                      });
                      handleClear(values);
                    }}
                    type="button"
                  >
                    <svg className={css.iconClose} width={24} height={24}>
                      <use
                        href="/sprite.svg#icon-close"
                        aria-hidden="true"
                      ></use>
                    </svg>
                    Clear filters
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
    </>
  );
}
