'use server'
import { api } from "@/lib/axios";

export async function getCsrf() {
  await api.get('/sanctum/csrf-cookie');
}

export async function loginRequest(params) {
   try{
    await getCsrf();
    const data = await api.post('/api/login', params);
    return data;

   }catch(error){
      return {error:error.message, code:3}
   }
}
