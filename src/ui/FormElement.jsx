function FormElement({label, children, error}) {
    return (
        <div
            className={`form_element w-full flex flex-col gap-2 flex-wrap relative text-[var(--color-grey-800)] transition-[var(--main-transition)]`}
        >
            <label
                htmlFor={children.props.id}
                className={`form_element_label flex-grow font-bold text-base`}
            >
                {label}
            </label>
            {children}
            {error &&
        <span
          className={`form_error w-full text-sm text-red-500 tracking-wide font-bold`}
        >
          {error}
        </span>
      }
        </div>
    )
}

export default FormElement