const validateForm = (fields, state) => {
  const errors = []

  fields.forEach(({ required, name, label, error, pattern }) => {
    if (required && state[name].length === 0) { errors.push(`${label} field requires data`) }
    if (!pattern.test(state[name]) && state[name]) errors.push(error)
  })

  return errors
}

export default validateForm
