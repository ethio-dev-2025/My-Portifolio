export function validateContact({ name, email, message }) {
  const errors = {};

  if (!name || name.trim().length < 2) {
    errors.name = "Please enter your name (2+ characters).";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message || message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}