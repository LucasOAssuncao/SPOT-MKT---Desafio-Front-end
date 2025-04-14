interface LoginResponse {
  success: boolean;
  message?: string;
}

export async function login(username: string, password: string): Promise<LoginResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === "spotmkt" && password === "123") {
        resolve({ success: true });
      } else {
        resolve({ success: false, message: "Usuário ou senha incorretos" });
      }
    }, 500);
  });
}
