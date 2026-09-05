'use client';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';
import clsx from 'clsx';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { postBooking } from '@/lib/api/api';
import { useParams } from 'next/navigation';

interface BookingFormValues {
  name: string;
  email: string;
}

const initialValues: BookingFormValues = {
  name: '',
  email: '',
};

const BookingFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(30, 'Name is too long')
    .required('Please enter your name.'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Please enter your email.'),
});

export default function BookingForm() {
  const { camperId } = useParams<{ camperId: string }>();

  const { mutate } = useMutation({
    mutationFn: postBooking,

    onSuccess: data => {
      toast.success(data.message);
    },
    onError: data => {
      console.log(data.message);
      toast.error(`Booking van error:${data.message}`);
    },
  });
  function handleSubmit(
    values: BookingFormValues,
    actions: FormikHelpers<BookingFormValues>
  ) {
    mutate(
      { camperId: camperId, user: values },
      {
        onSuccess: () => {
          actions.resetForm();
        },
      }
    );
  }

  return (
    <div className={css.bookingFormContainer}>
      <div className={css.titleContainer}>
        <h3 className={css.bookingFormHeading}>Book your campervan now</h3>
        <p className={css.supportingText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <div className={css.formWrapper}>
        <Formik
          initialValues={initialValues}
          validationSchema={BookingFormSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => {
            return (
              <Form className={css.form}>
                <div className={css.fieldsWrapper}>
                  <label className={css.label}>
                    <span
                      className={clsx(
                        css.errorTopMessage,
                        touched.name && errors.name && css.visible
                      )}
                    >
                      Name*
                    </span>
                    <svg
                      className={clsx(
                        css.iconError,
                        touched.name && errors.name && css.visible
                      )}
                      width={24}
                      height={24}
                    >
                      <use href="/sprite.svg#icon-error" />
                    </svg>
                    <Field
                      className={clsx(
                        css.formField,
                        touched.name && errors.name && css.errorField
                      )}
                      type="text"
                      name="name"
                      placeholder="Name*"
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className={css.errorMessage}
                    />
                  </label>
                  <label className={css.label}>
                    <span
                      className={clsx(
                        css.errorTopMessage,
                        touched.email && errors.email && css.visible
                      )}
                    >
                      Email*
                    </span>
                    <svg
                      className={clsx(
                        css.iconError,
                        touched.email && errors.email && css.visible
                      )}
                      width={24}
                      height={24}
                    >
                      <use href="/sprite.svg#icon-error" />
                    </svg>
                    <Field
                      className={clsx(
                        css.formField,
                        touched.email && errors.email && css.errorField
                      )}
                      type="email"
                      name="email"
                      placeholder="Email*"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className={css.errorMessage}
                    />
                  </label>
                </div>

                <button className={css.submitButton} type="submit">
                  Send
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
