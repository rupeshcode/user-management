import { useUserStore } from "@/stores/user-store";
import axios, { AxiosError } from "axios";
import { getFingerprint } from "./fingerprint";
import { toast } from "react-toastify";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetcher = async (url: string, method: string, data?: any) => {
  const token = useUserStore.getState().token;
  // const token = "abcdefghijklmnopqrstuvw";
  let headerData = {};
  if (token) {
    headerData = {
      Authorization: `Bearer ${token}`,
      fp: getFingerprint(),
    };
  }

  try {
    const result = await axios(`${BASE_URL}${url}`, {
      method,
      headers: headerData,
      data,
    });
    const response = await result.data;

    if (!response) {
      throw new Error(JSON.stringify(response));
    }
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("error", error);
      if (error.code === "ERR_NETWORK") {
        toast.error("Network Error!!!");
      }
      if (error.response?.status == 401) {
        // alert("Network Authentication Error");
        window.localStorage.clear();
        window.sessionStorage.clear();
        window.open("/login", "_self");
      } else {
        if (error.response?.data.error) {
          throw new Error(error.response?.data.error);
        } else {
          throw new Error(error.response?.data);
        }
      }
    }
  }
};

export default fetcher;
