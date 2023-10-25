import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'

const EnvPickedKeys = [
  "NEXT_PUBLIC_SERVICE_ID",
  "NEXT_PUBLIC_CONTACT_FORM_TEMPLATE_ID",
  "NEXT_PUBLIC_PUBLIC_KEY"
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  EnvPickedKeys.forEach(key => processEnv[key] = env[key]);

  return{
    plugins: [react()],
    define: {
      'process.env':  processEnv
    }
  }
})
