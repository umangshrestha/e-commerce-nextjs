import { LoginSchema, LoginFormState } from "@/lib/definitions/login";

export async function loginAction(state: LoginFormState, formData: FormData) {
  console.log("Login action called", state, formData);
  // Validate form fields
  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
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
