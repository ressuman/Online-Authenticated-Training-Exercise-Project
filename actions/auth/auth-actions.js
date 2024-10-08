"use server";

import { redirect } from "next/navigation";

import { hashUserPassword, verifyPassword } from "@/lib/hash/hash";
import { createUser, getUserByEmail } from "@/lib/user/user";
import { createAuthSession, destroySession } from "@/lib/auth/auth";

export async function signUp(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  //store it in the database(create a new user)
  const hashedPassword = hashUserPassword(password);
  try {
    const id = createUser(email, hashedPassword);

    await createAuthSession(id);
    redirect("/training");
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email: "It seems like an account for the chosen email exists",
        },
      };
    }
    throw error;
  }
}

export async function logIn(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    return {
      errors: {
        email: "Could not authenticate user,please check your credentials.",
      },
    };
  }

  const isValidPassword = verifyPassword(existingUser.password, password);

  if (!isValidPassword) {
    return {
      errors: {
        password: "Could not authenticate user,please check your credentials.",
      },
    };
  }

  await createAuthSession(existingUser.id);
  redirect("/training");
}

export async function auth(mode, prevState, formData) {
  if (mode === "login") {
    return logIn(prevState, formData);
  }

  return signUp(prevState, formData);
}

export async function logOut() {
  await destroySession();
  redirect("/");
}
