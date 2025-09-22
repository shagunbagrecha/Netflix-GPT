export const validateData = ( email, password) => {
//   const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordvalid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password
  ); // Minimum eight characters, at least one letter and one number

//   if (!isNameValid) return "Name must contain only letters and spaces.";     

  if (!isEmailValid) return "Invalid email format.";

  if (!isPasswordvalid)
    return "Password must be at least 8 characters long and include at least one letter and one number.";

  return null;
};
// Returns null if both are valid, else returns appropriate error message
