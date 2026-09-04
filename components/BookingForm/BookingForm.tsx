'use client';
import css from './BookingForm.module.css';
export default function BookingForm() {
  return (
    <div className={css.bookingFormContainer}>
      <div className={css.titleContainer}>
        <h3 className={css.bookingFormHeading}>Book your campervan now</h3>
        <p className={css.supportingText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <div className={css.formWrapper}></div>
    </div>
  );
}
