import { User } from "@/models/auth.model";
import { API_TOKEN, API_URL } from "../utilities/urls";

export async function fetchDataFromApi(endpoint: string): Promise<any> {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + API_TOKEN,
      },
      next: { revalidate: 5 },
    };

    const res = await fetch(`${API_URL}${endpoint}`, options);

    return res.json();
  } catch (error) {
    console.log("Error of fetchDataFromApi", error);
  }
}

export async function postDataFromApi(endpoint: string, payload: any) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_TOKEN,
      },
      body: JSON.stringify(payload),
    });
    console.log("res ", res);
    return res.json();
  } catch (error) {
    return error;
  }
}

export async function getUserFromApi(jwt: string): Promise<User | undefined> {
  try {
    if (jwt) {
      const options = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + jwt,
        },
      };

      const res = await fetch(`${API_URL}/api/users/me?populate=*`, options);

      return res.json();
    } else {
      return;
    }
  } catch (error) {
    console.log("Error of getUserFromApi", error);
  }
}

export async function providerFetch(provider?: string, access_token?: string) {
  try {
    const options = {
      method: "GET",
    };

    const res = await fetch(
      `${API_URL}/api/auth/${provider}/callback?access_token=${access_token}`,
      options
    );

    return await res.json();
  } catch (error) {
    console.log("Error of providerAuth", error);
  }
}
