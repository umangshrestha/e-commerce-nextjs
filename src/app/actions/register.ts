import { RegisterSchema, RegisterFormState } from "@/lib/definitions/register";

export async function registerAction(
  state: RegisterFormState,
  formData: FormData,
) {
  console.log("Login action called", state, formData);
  // Validate form fields
  const validatedFields = RegisterSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    console.log("Login failed", validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  console.log("Login successful", validatedFields.data);

  // Call the provider or db to create a user...
}
