import Cookies from "js-cookie";

export type LoginFormInput = {
  email: string;
  password: string;
};

export type SignUpFormInput = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  subject: string;
  address: string;
  city: string;
  postCode: string;
};

interface IResponse {
  email: string;
  id: string;
  name: string;
  roles: string[];
  token: string;
  expirationDate: Date;
}

export const handleSignIn = async (data: FormInput) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData: IResponse = await res.json();
    Cookies.set("jwt", responseData.token, { expires: 1 });

    console.log("Success:", responseData);
  } catch (error) {
    console.log("Error: " + error);
  }
};

export const handleSignUp = async (data: SignUpFormInput) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await res.json();
    console.log("Success:", responseData);
  } catch (error) {
    console.log("Error: " + error);
  }
};
